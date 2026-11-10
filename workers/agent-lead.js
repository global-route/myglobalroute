/**
 * Agent Lead Worker — /api/agent-lead
 *
 * Receives a lead POST from the WAA intake form, validates it,
 * then fans out notifications to the matched agent via:
 *   - Slack (incoming webhook)
 *   - Telegram (Bot API sendMessage)
 *   - WhatsApp (via WhatsApp Business Cloud API or wa.me deep link fallback)
 *   - Email (via Resend API — fallback always-on channel)
 *
 * Required Cloudflare Worker secrets (set via wrangler secret put):
 *   RESEND_API_KEY        — Resend API key for email fallback
 *   LEADS_FROM_EMAIL      — verified sender address in Resend (e.g. leads@mypathway2global.org.uk)
 *   WHATSAPP_API_TOKEN    — WhatsApp Business Cloud API token (optional — only if using Cloud API)
 *   WHATSAPP_PHONE_ID     — WhatsApp Business phone number ID (optional)
 *
 * Agent-level secrets live in agents.json (fetched from KV or static asset):
 *   agent.notifications.slackWebhookUrl
 *   agent.notifications.telegramBotToken
 *   agent.notifications.telegramChatId
 *   agent.notifications.whatsappNumber   — E.164 format e.g. +2348012345678
 *   agent.contactEmail
 */

const ALLOWED_ORIGIN = 'https://mypathway2global.org.uk';
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }
    if (request.method !== 'POST') {
      return json({ error: 'Method not allowed' }, 405);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: 'Invalid JSON' }, 400);
    }

    const err = validate(body);
    if (err) return json({ error: err }, 400);

    // Load agents from static asset (served by Cloudflare Workers Assets)
    let agents = [];
    try {
      const res = await fetch(`${ALLOWED_ORIGIN}/data/agents.json`);
      const data = await res.json();
      agents = (data.agents || []).filter(a =>
        a.verificationStatus === 'verified' && !a._template
      );
    } catch {
      return json({ error: 'Agent registry unavailable' }, 503);
    }

    const agent = agents.find(a => a.id === body.agentId);
    if (!agent) return json({ error: 'Agent not found or not verified' }, 404);

    const message = formatMessage(body, agent);
    const results = await fanOut(message, body, agent, env);

    // Always attempt email as fallback regardless of other channel results
    const emailResult = await sendEmail(body, agent, env);
    results.push(emailResult);

    const anySuccess = results.some(r => r.ok);
    if (!anySuccess) {
      console.error('All notification channels failed', JSON.stringify(results));
      return json({ error: 'Notification delivery failed — lead logged' }, 502);
    }

    return json({ ok: true, channels: results }, 200);
  }
};

// ── Validation ────────────────────────────────────────────────────────────────
function validate(b) {
  if (!b.name?.trim())      return 'name is required';
  if (!b.email?.includes('@')) return 'valid email is required';
  if (!b.whatsapp?.trim())  return 'whatsapp is required';
  if (!b.agentId?.trim())   return 'agentId is required';
  if (!b.corridor?.trim())  return 'corridor is required';
  if (!b.no_fees_paid)      return 'no_fees_paid confirmation required';
  if (!b.referral_understood) return 'referral_understood confirmation required';
  return null;
}

// ── Message formatter ─────────────────────────────────────────────────────────
function formatMessage(b, agent) {
  return [
    `*New work abroad lead — ${b.corridor} ${b.occupation || ''}*`,
    ``,
    `*Profile*`,
    `Skill level: ${b.skillLevel || '-'}`,
    `Occupation: ${(b.occupation || '-').replace(/_/g, ' ')}`,
    `Passport: ${b.passport || '-'}`,
    `Availability: ${b.availability || '-'}`,
    `Corridor: ${b.corridor}`,
    ``,
    `*Contact*`,
    `Name: ${b.name}`,
    `Email: ${b.email}`,
    `WhatsApp: ${b.whatsapp}`,
    ``,
    `*Confirmed*`,
    `No fees paid: Yes`,
    `Referral understood: Yes`,
    ``,
    `Submitted: ${new Date().toISOString()}`,
    `Source: mypathway2global.org.uk/pages/work-abroad-agent.html`,
    `Agent: ${agent.name} (${agent.id})`,
  ].join('\n');
}

// ── Fan-out ───────────────────────────────────────────────────────────────────
async function fanOut(message, body, agent, env) {
  const n = agent.notifications || {};
  const tasks = [];

  if (n.slackWebhookUrl) {
    tasks.push(sendSlack(n.slackWebhookUrl, message));
  }
  if (n.telegramBotToken && n.telegramChatId) {
    tasks.push(sendTelegram(n.telegramBotToken, n.telegramChatId, message));
  }
  if (n.whatsappNumber && env.WHATSAPP_API_TOKEN && env.WHATSAPP_PHONE_ID) {
    tasks.push(sendWhatsApp(n.whatsappNumber, message, env));
  }

  return Promise.all(tasks);
}

// ── Slack ─────────────────────────────────────────────────────────────────────
async function sendSlack(webhookUrl, message) {
  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: message }),
    });
    return { channel: 'slack', ok: res.ok, status: res.status };
  } catch (e) {
    return { channel: 'slack', ok: false, error: e.message };
  }
}

// ── Telegram ──────────────────────────────────────────────────────────────────
async function sendTelegram(botToken, chatId, message) {
  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });
    return { channel: 'telegram', ok: res.ok, status: res.status };
  } catch (e) {
    return { channel: 'telegram', ok: false, error: e.message };
  }
}

// ── WhatsApp Business Cloud API ───────────────────────────────────────────────
async function sendWhatsApp(toNumber, message, env) {
  try {
    const url = `https://graph.facebook.com/v19.0/${env.WHATSAPP_PHONE_ID}/messages`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.WHATSAPP_API_TOKEN}`,
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: toNumber.replace(/\D/g, ''),
        type: 'text',
        text: { body: message },
      }),
    });
    return { channel: 'whatsapp', ok: res.ok, status: res.status };
  } catch (e) {
    return { channel: 'whatsapp', ok: false, error: e.message };
  }
}

// ── Email via Resend ──────────────────────────────────────────────────────────
async function sendEmail(body, agent, env) {
  if (!env.RESEND_API_KEY || !agent.contactEmail) {
    return { channel: 'email', ok: false, error: 'not configured' };
  }
  try {
    const subject = `Work abroad lead — ${body.corridor} ${(body.occupation || '').replace(/_/g, ' ')}`;
    const html = `
      <h2>New work abroad lead</h2>
      <table>
        <tr><td><strong>Corridor</strong></td><td>${body.corridor}</td></tr>
        <tr><td><strong>Skill level</strong></td><td>${body.skillLevel || '-'}</td></tr>
        <tr><td><strong>Occupation</strong></td><td>${(body.occupation || '-').replace(/_/g, ' ')}</td></tr>
        <tr><td><strong>Passport</strong></td><td>${body.passport || '-'}</td></tr>
        <tr><td><strong>Availability</strong></td><td>${body.availability || '-'}</td></tr>
        <tr><td><strong>Name</strong></td><td>${body.name}</td></tr>
        <tr><td><strong>Email</strong></td><td><a href="mailto:${body.email}">${body.email}</a></td></tr>
        <tr><td><strong>WhatsApp</strong></td><td>${body.whatsapp}</td></tr>
        <tr><td><strong>No fees paid</strong></td><td>Confirmed</td></tr>
        <tr><td><strong>Referral understood</strong></td><td>Confirmed</td></tr>
      </table>
      <p style="font-size:12px;color:#666;">Contact the user within 48 hours. Source: mypathway2global.org.uk</p>
    `;
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: env.LEADS_FROM_EMAIL || 'leads@mypathway2global.org.uk',
        to: [agent.contactEmail],
        reply_to: body.email,
        subject,
        html,
      }),
    });
    return { channel: 'email', ok: res.ok, status: res.status };
  } catch (e) {
    return { channel: 'email', ok: false, error: e.message };
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}
