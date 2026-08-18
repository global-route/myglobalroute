# Google AdMob Integration Guide

---

## 🎯 Overview

Google AdMob monetizes Global Route through contextually relevant travel, financial services, and education ads. Projected Year 1 revenue: **$2,000-$5,500/month**.

---

## 💰 Revenue Model

### **Revenue Streams**

| Stream | Monthly Est. | Notes |
|--------|-------------|-------|
| AdMob CPM | $250-$2,400 | Contextual travel/finance ads |
| Direct Sponsorships | $500-$2,000 | Wise, Stripe, Universities |
| Affiliate Commissions | $500-$1,500 | Referral-based services |
| **Total** | **$1,250-$5,900** | Conservative Year 1 estimates |

---

## 📋 Setup Instructions

### **Step 1: Register for Google AdMob**

1. Go to [admob.google.com](https://admob.google.com)
2. Sign in with Google Account
3. Click **"Get Started"**
4. Choose platform: **Web**
5. Create new app: **"Global Route"**

### **Step 2: Create Ad Units**

Create the following ad unit types:

#### **Ad Unit 1: Homepage Banner (300x250)**
- **Name:** Homepage Featured Rectangle
- **Format:** Display Ads (Responsive)
- **Size:** 300x250 (Medium Rectangle)
- **Placement:** Homepage above fold

#### **Ad Unit 2: Article Sidebar (300x600)**
- **Name:** Article Sidebar Large Rectangle
- **Format:** Display Ads (Responsive)
- **Size:** 300x600
- **Placement:** Blog article right column

#### **Ad Unit 3: Native Article Ads**
- **Name:** Article Native Ads
- **Format:** Native (Matched Content)
- **Placement:** Between country profiles

#### **Ad Unit 4: Mobile Footer**
- **Name:** Mobile Footer Banner
- **Format:** Display Ads
- **Size:** 320x50
- **Placement:** Fixed footer on mobile

#### **Ad Unit 5: Sticky Top Banner**
- **Name:** Sticky Header Banner
- **Format:** Display Ads
- **Size:** 728x90 (Leaderboard)
- **Placement:** Fixed header on desktop

### **Step 3: Get Your Ad Code**

After creating ad units, AdMob will provide JavaScript snippets. Store these securely:

```javascript
// Example AdMob code structure
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"></script>
```

**DO NOT commit your Ad Publisher ID to public repositories.**

---

## 🔧 Integration Implementation

### **File Structure**

```
/src
  ├── js/
  │   └── admob-loader.js         # AdMob initialization
  ├── components/
  │   └── ad-slots.html           # Ad placement templates
  └── data/
      └── admob-config.json       # Ad unit configuration
```

### **Step 1: Create AdMob Configuration File**

**File:** `/src/data/admob-config.json`

```json
{
  "publisherId": "ca-pub-XXXXXXXXXXXXXXXX",
  "adUnits": [
    {
      "id": "homepage-featured",
      "code": "INSERT_AD_CODE_HERE",
      "size": "300x250",
      "placement": ".featured-section"
    },
    {
      "id": "article-sidebar",
      "code": "INSERT_AD_CODE_HERE",
      "size": "300x600",
      "placement": ".article-sidebar"
    },
    {
      "id": "article-native",
      "code": "INSERT_AD_CODE_HERE",
      "size": "native",
      "placement": ".country-cards-container"
    },
    {
      "id": "mobile-footer",
      "code": "INSERT_AD_CODE_HERE",
      "size": "320x50",
      "placement": "footer"
    },
    {
      "id": "sticky-header",
      "code": "INSERT_AD_CODE_HERE",
      "size": "728x90",
      "placement": "header"
    }
  ]
}
```

### **Step 2: Create AdMob Loader Module**

**File:** `/src/js/admob-loader.js`

```javascript
const AdMobLoader = (() => {
  // Configuration
  const config = {
    publisherId: 'ca-pub-XXXXXXXXXXXXXXXX',
    adUnits: [],
    delayLoad: 3000 // Delay loading ads by 3 seconds
  };

  // Initialize AdMob
  const init = async () => {
    try {
      // Load configuration
      const response = await fetch('/src/data/admob-config.json');
      config.adUnits = (await response.json()).adUnits;

      // Load Google AdMob script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${config.publisherId}`;
      script.onload = () => {
        loadAdUnits();
      };
      document.head.appendChild(script);
    } catch (error) {
      console.warn('AdMob loader error:', error);
    }
  };

  // Load individual ad units
  const loadAdUnits = () => {
    config.adUnits.forEach((unit) => {
      setTimeout(() => {
        loadAdUnit(unit);
      }, config.delayLoad);
    });
  };

  // Load single ad unit
  const loadAdUnit = (unit) => {
    const slot = document.querySelector(unit.placement);
    if (!slot) return;

    // Create ad container
    const adContainer = document.createElement('div');
    adContainer.className = 'adsbygoogle';
    adContainer.setAttribute('data-ad-client', config.publisherId);
    
    // Set ad format and size
    if (unit.size === 'native') {
      adContainer.setAttribute('data-ad-format', 'native');
      adContainer.setAttribute('data-ad-layout', 'in-article');
      adContainer.setAttribute('data-ad-layout-key', '-gn-1+4x-6k-27');
    } else {
      const [width, height] = unit.size.split('x');
      adContainer.setAttribute('data-ad-format', 'rectangle');
      adContainer.style.display = 'inline-block';
      adContainer.style.width = width + 'px';
      adContainer.style.height = height + 'px';
    }

    slot.appendChild(adContainer);

    // Push ad to AdSense
    if (window.adsbygoogle) {
      window.adsbygoogle.push({});
    }
  };

  // Delay initialization until page fully loads
  const delayedInit = () => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  };

  return { init, delayedInit };
})();

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', AdMobLoader.delayedInit);
} else {
  AdMobLoader.delayedInit();
}
```

### **Step 3: Add Ad Slots to HTML Templates**

**Homepage:** `/src/pages/home.html`

```html
<section class="featured-section">
  <!-- Homepage featured ad (300x250) -->
  <div class="ad-unit" id="homepage-featured"></div>
</section>
```

**Blog Article:** `/src/pages/blog-article.html`

```html
<div class="article-container">
  <main class="article-content">
    <!-- Article content -->
  </main>
  
  <aside class="article-sidebar">
    <!-- Sidebar ad (300x600) -->
    <div class="ad-unit" id="article-sidebar"></div>
  </aside>
</div>

<!-- Native ads between country cards -->
<div class="country-cards-container">
  <!-- Card 1 -->
  <div class="country-card">...</div>
  
  <!-- Ad slot -->
  <div class="ad-unit" id="article-native"></div>
  
  <!-- Card 2 -->
  <div class="country-card">...</div>
</div>

<!-- Footer ad -->
<footer>
  <div class="ad-unit" id="mobile-footer"></div>
</footer>
```

### **Step 4: CSS Styling for Ads**

**File:** `/src/css/admob-styles.css`

```css
/* Ad unit styling */
.ad-unit {
  margin: 1.5rem 0;
  text-align: center;
}

/* Responsive ad sizing */
@media (max-width: 768px) {
  .ad-unit {
    margin: 1rem 0;
  }

  /* Hide large ads on mobile */
  #article-sidebar {
    display: none;
  }

  /* Show mobile-optimized ads */
  #mobile-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    z-index: 100;
  }
}

@media (min-width: 769px) {
  /* Hide mobile footer on desktop */
  #mobile-footer {
    display: none;
  }

  /* Show desktop ads */
  #article-sidebar {
    position: sticky;
    top: 20px;
  }

  #sticky-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: white;
    z-index: 50;
  }
}

/* Ad container defaults */
.adsbygoogle {
  display: block;
  margin: auto;
}
```

---

## 📊 Ad Placement Strategy

### **Homepage Placements**

| Location | Ad Type | Size | CTR Expected |
|----------|---------|------|--------------|
| Hero section CTA | Rectangle | 300x250 | 2-3% |
| Featured article | Leaderboard | 728x90 | 1-2% |
| Newsletter signup | Rectangle | 300x250 | 1-2% |

### **Blog Article Placements**

| Location | Ad Type | Size | CTR Expected |
|----------|---------|------|--------------|
| Above fold | Native | Matched | 3-5% |
| Sidebar | Rectangle | 300x600 | 2-4% |
| Between sections | Native | In-article | 3-4% |
| Footer | Banner | 320x50 | 1-2% |

### **Optimal Frequency**
- Homepage: 1-2 ads max
- Blog article (2,500+ words): 2-3 ads max
- Never more than 1 ad per 800 words

---

## 🔒 AdMob Compliance & Safety

### **Blocked Ad Categories**

Configure AdMob to block these categories:
- ❌ Predatory lending (payday loans, high-interest loans)
- ❌ Fake visa services (scams)
- ❌ MLM schemes
- ❌ High-risk gambling
- ❌ Misleading weight loss products
- ❌ Cryptocurrencies/unregulated financial services

**Setup:** AdMob Dashboard → Settings → Block Categories

### **Content Policy Compliance**

✅ DO:
- Include substantive content (2,000+ words per article)
- Display ads on pages with high engagement
- Maintain 70% content : 30% ads ratio
- Use contextual ads matching user intent

❌ DON'T:
- Place ads on thin/low-value content (<500 words)
- Auto-play video ads
- Misleading ad placements
- Click-bait surrounding ads
- More than 2-3 ads per page

### **Quality Metrics to Monitor**

- **Impressions:** Track weekly changes
- **CTR:** Target 1-3% (high for finance/travel)
- **CPC:** Monitor $3-$15 range (finance keywords)
- **RPM:** Target $5-$12 (contextual relevance)

---

## 📈 Optimization Strategy

### **A/B Testing Ad Placements**

**Test 1: Native vs. Display Ads**
- Week 1: Display ads (rectangles)
- Week 2: Native ads (matched content)
- **Metric:** CTR comparison

**Test 2: Ad Frequency**
- Group A: 1 ad per article
- Group B: 2-3 ads per article
- **Metric:** Total revenue, user bounce rate

**Test 3: Placement Location**
- Position 1: Above fold
- Position 2: Mid-article
- Position 3: Below article
- **Metric:** CTR by position

### **Keywords to Optimize For**

Target high-CPM keywords in ad placements:

```
High-Value Keywords (CPC $8-15):
- "Germany visa from Nigeria"
- "Canada work permit requirements"
- "US LLC setup from Africa"
- "Stripe account Nigeria"

Medium-Value Keywords (CPC $5-8):
- "Italy scholarship"
- "Portugal visa cost"
- "Australian student visa"
```

---

## 🛠️ Monitoring & Reporting

### **Weekly Checklist**

- [ ] Check AdMob dashboard for revenue
- [ ] Monitor impressions (trending up/down?)
- [ ] Review CTR (acceptable range?)
- [ ] Check for ad violations/suspensions
- [ ] Analyze bounce rate by page

### **Monthly Analytics**

**Track in spreadsheet:**

| Metric | Week 1 | Week 2 | Week 3 | Week 4 | Avg |
|--------|--------|--------|--------|--------|-----|
| Impressions | 45K | 48K | 51K | 52K | 49K |
| Clicks | 650 | 720 | 850 | 910 | 783 |
| CTR | 1.4% | 1.5% | 1.7% | 1.8% | 1.6% |
| Revenue | $220 | $245 | $280 | $310 | $264 |
| RPM | $4.9 | $5.1 | $5.5 | $6.0 | $5.4 |

### **Red Flags to Monitor**

- 🚩 Revenue drops >20% week-over-week
- 🚩 CTR falls below 0.5%
- 🚩 Ad impressions dropping
- 🚩 Bounce rate increases significantly
- 🚩 AdMob account warnings/violations

---

## 💡 Context-Aware Ad Strategy

### **Article Targeting Example**

**Article:** "How to Fund Germany Blocked Account from Nigeria"

**Optimal Ads:**
- ✅ Wise Business (international transfers)
- ✅ Mercury Bank (US banking)
- ✅ Stripe Connect (payments)
- ✅ Educational loans
- ✅ Currency exchange services

**Avoid:**
- ❌ Predatory loans
- ❌ Fake visa services
- ❌ Unregulated financial services

### **Sponsored Content Opportunities**

Partners aligned with user intent:
- **Wise:** International money transfers ($500-$1,500/month)
- **Stripe:** Payment processing for African businesses ($800-$2,000/month)
- **Coursera:** Online education courses ($300-$800/month)
- **Universities:** Direct admission programs ($500-$1,000/month)

---

## 🚀 Performance Goals

### **Year 1 Targets**

| Metric | Q1 | Q2 | Q3 | Q4 |
|--------|----|----|----|----|
| Monthly Revenue | $800 | $1,500 | $2,200 | $3,000 |
| Impressions/mo | 120K | 200K | 280K | 350K |
| CTR | 1.2% | 1.5% | 1.7% | 1.9% |
| RPM | $6.7 | $7.5 | $7.9 | $8.6 |

### **Success Milestones**

- ✅ Month 1: AdMob account approved, ads live
- ✅ Month 2: First $500 revenue
- ✅ Month 3: RPM stable at $5+ 
- ✅ Month 6: $1,000+/month revenue
- ✅ Month 12: $2,500+/month revenue

---

## 🔐 Sensitive Data Protection

### **What NOT to Track**

❌ User identities (GDPR violation)
❌ Payment information
❌ Visa/immigration statuses
❌ Passport numbers
❌ Financial account details

### **Privacy Policy Requirement**

Add to privacy policy:
```
We use Google AdMob to serve ads. Google may collect 
anonymous data about your browsing behavior for 
personalization purposes. See Google's Privacy Policy: 
https://policies.google.com/privacy
```

---

## 📞 Support & Troubleshooting

### **Common Issues**

**Issue:** Ads not loading
**Solution:** 
- Check Ad Publisher ID in admob-config.json
- Verify ad unit codes are correct
- Check browser console for errors

**Issue:** Low CTR
**Solution:**
- Ensure ads match article content
- Try different ad placements
- Consider native ads vs. display ads

**Issue:** Account suspended**
**Solution:**
- Review AdMob policy violations
- Check for invalid traffic
- Audit ad placements for compliance

### **Contact Support**
- AdMob Help: support.google.com/admob
- Global Route Issues: See CONTRIBUTING.md

---

## 📚 Reference Links

- [Google AdMob Getting Started](https://admob.google.com/home)
- [AdMob Policy Center](https://support.google.com/admob/answer/6128543)
- [Google Publisher Policies](https://support.google.com/adsense/answer/48182)
- [AdMob Setup Guide](https://support.google.com/admob/answer/7356431)
