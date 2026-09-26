# Google Analytics 4 Setup Guide

## Overview

Google Analytics 4 (GA4) is configured for Global Route to track user behavior, engagement, and conversions. This guide explains how to complete the setup.

## Quick Setup (5 minutes)

### Step 1: Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Admin" → "Create Property"
4. Set up GA4 property:
   - Property name: "Global Route"
   - Reporting timezone: UTC
   - Currency: USD
   - Industry category: Education/Travel

### Step 2: Create Web Data Stream

1. In your new GA4 property, go to "Data Streams"
2. Click "Add stream" → "Web"
3. Enter:
   - Website URL: `https://myglobalroute.com`
   - Stream name: "Global Route Blog"
4. Copy the **Measurement ID** (looks like `G-XXXXXXXXXX`)

### Step 3: Update Measurement ID

1. Open `/src/js/analytics.js`
2. Find line 5:
   ```javascript
   const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX';
   ```
3. Replace `G-XXXXXXXXXX` with your actual Measurement ID
4. Save and commit

### Step 4: Deploy

```bash
npm run build
git add -A
git commit -m "Setup Google Analytics 4"
git push origin main
```

## What's Being Tracked

### Page Views (Automatic)
- All page views are tracked automatically
- Includes: referrer, device type, location, language

### Custom Events

#### 1. Blog Post Views
- **Event name:** `blog_post_view`
- **Data:** Post title, category, slug
- **Trigger:** When blog page loads

#### 2. Search
- **Event name:** `search`
- **Data:** Search query, result count
- **Trigger:** When user performs search

#### 3. Category Filter
- **Event name:** `category_filter`
- **Data:** Category name
- **Trigger:** When user selects category filter

#### 4. Newsletter Signup
- **Event name:** `newsletter_signup`
- **Data:** Email hash (anonymized)
- **Trigger:** When user subscribes to newsletter

#### 5. Scroll Depth
- **Event name:** `scroll_depth`
- **Data:** Scroll percentage (25%, 50%, 75%, 100%)
- **Trigger:** When user scrolls to each depth

#### 6. External Link Click
- **Event name:** `external_link_click`
- **Data:** Link URL, link text
- **Trigger:** When user clicks external link

#### 7. CTA Click
- **Event name:** `cta_click`
- **Data:** CTA name, CTA URL
- **Trigger:** When user clicks call-to-action

#### 8. Time on Page
- **Event name:** `engagement`
- **Data:** Time spent (seconds)
- **Trigger:** Every 30 seconds user is on page

## Dashboard Setup (Recommended)

### Key Metrics to Monitor

1. **Blog Performance**
   - Top performing posts (by views)
   - Time on page by post
   - Bounce rate by category

2. **User Engagement**
   - Search queries (what users search for)
   - Category filter usage
   - Scroll depth distribution

3. **Conversions**
   - Newsletter signups
   - External link clicks
   - CTA conversions

### Create Custom Dashboard

1. In GA4, go to "Dashboards"
2. Create new dashboard
3. Add cards for:
   - Users (last 30 days)
   - Sessions
   - Avg. session duration
   - Blog post views (by page)
   - Newsletter signups (custom event)
   - Search queries

### Create Goals/Conversions

1. Go to "Conversions"
2. Create conversion events:
   - `newsletter_signup` (Newsletter subscription)
   - `cta_click` (Key action)
   - `external_link_click` (Outbound interest)

## Testing GA4

### Method 1: Check Console Logs
1. Open browser DevTools (F12)
2. Go to Console tab
3. Perform actions (search, filter, scroll)
4. Look for `📊 Tracked:` messages

### Method 2: Check Real-time Data
1. In GA4, go to "Real-time"
2. Open your website in another tab
3. Perform actions
4. Watch events appear in Real-time dashboard

### Method 3: Use Google Analytics Debugger
1. Install Chrome extension: [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/)
2. Open your website
3. Open DevTools Console
4. Perform actions and see detailed event data

## Troubleshooting

### Events not appearing

**Problem:** No events showing in GA4

**Solutions:**
1. Verify Measurement ID is correct (should start with `G-`)
2. Check console for errors (F12 → Console)
3. Wait 24-48 hours for data to fully populate
4. Verify analytics.js is loaded: Check Network tab, search for `analytics.js`

### Custom events not tracking

**Problem:** Page views work but custom events don't

**Solutions:**
1. Check console logs for `📊 Tracked:` messages
2. Verify you're using correct event names (case-sensitive)
3. Make sure analytics.js is included before blog-loader.js
4. Clear browser cache and reload

## Privacy & Compliance

### GDPR Compliance
- Set `anonymize_ip: true` in config (already enabled)
- Email hashes are used instead of raw emails
- No personal data stored in GA4

### Cookie Policy
- Inform users that GA4 uses cookies
- Add to Privacy Policy: "We use Google Analytics to understand user behavior"

## Advance Usage

### Custom Dimensions (Optional)

To track additional data:

```javascript
gtag('event', 'event_name', {
  'custom_dimension_1': 'value',
  'custom_metric_1': 100
});
```

First, register custom dimensions in GA4:
1. Go to "Custom definitions" → "Custom dimensions"
2. Create dimension (e.g., "User type")
3. Use in gtag events

### User ID Tracking (Optional)

Track authenticated users:

```javascript
gtag('config', GA4_MEASUREMENT_ID, {
  'user_id': userId // Set after user logs in
});
```

## Scripts & Files

### Core Files
- `/src/js/analytics.js` - GA4 initialization and tracking functions
- `/src/pages/blog.html` - Includes analytics.js script tag
- `/src/js/blog-loader.js` - Calls tracking functions on events

### Functions Available

```javascript
// Initialize GA4
initializeGA4();

// Track specific events
trackBlogPostView(title, category, slug);
trackSearch(query, resultCount);
trackNewsletterSignup(email);
trackCategoryFilter(categoryName);
trackCTAClick(ctaName, ctaURL);
trackScrollDepth(depthPercentage);
```

## Reports to Check Weekly

1. **User Activity**
   - How many unique users visited
   - Where did they come from (traffic source)
   - What devices are they using

2. **Content Performance**
   - Which blog posts got most views
   - Which categories are most popular
   - Avg time spent per post

3. **Engagement**
   - Search queries being used
   - Most clicked external links
   - Newsletter signup rate

4. **Conversions**
   - Newsletter signups
   - CTA clicks
   - Users reaching scroll depth 75%+

## Next Steps

1. ✅ Create GA4 property
2. ✅ Add Measurement ID to analytics.js
3. ✅ Deploy code
4. ⏳ Wait 24-48 hours for data
5. ⏳ Create custom dashboard
6. ⏳ Set up email alerts for key metrics
7. ⏳ Review weekly performance reports

## Resources

- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/10089681)
- [GA4 Event Builder](https://support.google.com/analytics/answer/9267744)
- [GA4 Custom Events Guide](https://support.google.com/analytics/answer/9267735)
- [GA4 Real-time Report](https://support.google.com/analytics/answer/9271563)

---

**Last Updated:** August 18, 2026  
**Status:** Ready for production deployment
