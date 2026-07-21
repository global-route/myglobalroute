# Contributing to Global Route

Thank you for helping build the most transparent migration resource for Africans. This guide covers how to contribute content, code, and ideas.

---

## 💡 Ways to Contribute

### **1. Content Contributions**
- Write country audits or playbook guides
- Share success stories (anonymized testimonials)
- Report outdated information
- Fact-check existing articles
- Translate content to other languages

### **2. Code Contributions**
- Fix bugs or performance issues
- Add new features (calculators, tools)
- Improve mobile responsiveness
- Enhance search functionality
- Write tests

### **3. Community Support**
- Answer questions in comments
- Share on social media
- Refer friends/colleagues
- Provide feedback on articles
- Suggest new topics/countries

### **4. Research & Data**
- Submit current visa approval rates
- Share application timelines
- Document hidden costs
- Provide recent policy changes
- Interview successful migrants

---

## ✍️ Content Contribution Guidelines

### **Before Writing**

1. **Check existing content** - Avoid duplicates
2. **Verify facts** - Use government sources only
3. **Check keyword opportunity** - Research SEO demand
4. **Pick a topic** - See CONTENT_STRATEGY.md for priority areas

### **Content Requirements**

**Word Count:** 2,000-3,500 words for authority

**Structure:**
```markdown
# [Keyword-Rich Headline]

## Quick Summary
- 3 key takeaways

## Official Story
- Government claims
- Published statistics

## African Reality
- True approval rate
- Hidden barriers

## Cost Breakdown
| Item | Cost | Notes |
|------|------|-------|

## Sweet Spots
- Realistic pathway 1
- Realistic pathway 2

## Pros & Cons
- Advantages
- Disadvantages

## Step-by-Step Guide
1. Step 1
2. Step 2

## Common Questions
Q1: ...
A1: ...

## Resources
- Links to sources
- Embassy contacts
```

### **Style Guide**

- ✅ Use "you" to address readers directly
- ✅ Be specific (not "expensive" but "$25,000")
- ✅ Use action verbs (not "can be applied" but "apply")
- ✅ Break up long sections with headers
- ✅ Use bullet points for lists
- ✅ Cite all claims with sources
- ✅ Include publication dates on statistics
- ✅ Add "Updated: [Date]" to outdated content

### **Fact-Checking Protocol**

Before submitting:

1. **Verify with official sources:**
   - Government immigration websites
   - Embassy official statements
   - Recent policy documents

2. **Check against community feedback:**
   - Reddit r/IWantOut discussions
   - Twitter diaspora communities
   - Recent applicant testimonials

3. **Note publication dates:**
   - Include when data was published
   - Add "Updated: [Date]" if recently changed
   - Flag policies that changed recently

4. **Cite all sources:**
   - Inline links for direct quotes
   - Reference section for general info

### **Submission Process**

1. **Create a branch:**
   ```bash
   git checkout -b content/topic-name
   ```

2. **Write article in `/content/blog/` or `/content/pages/`:**
   ```markdown
   ---
   title: "Article Title"
   date: 2026-01-15
   author: "Your Name"
   keywords: "visa, Germany, Nigeria"
   ---
   
   # Article Content
   ```

3. **Add to content index** (`/content/_index.md`)

4. **Create pull request** with description:
   ```
   Title: Add Germany visa article
   
   ## Summary
   New article covering true visa approval rates for Africans
   
   ## Fact sources
   - German Federal Foreign Office: [link]
   - Recent applicant surveys: [link]
   
   ## Keywords targeted
   - "Germany visa from Nigeria"
   - "German blocked account"
   ```

5. **Respond to feedback** - Editor will review for accuracy

6. **Merge & publish** - Article goes live on next deployment

---

## 💻 Code Contribution Guidelines

### **Setup Development Environment**

```bash
# Clone repository
git clone https://github.com/yourusername/global-route.git
cd global-route

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Lint code
npm run lint
```

### **Code Standards**

**JavaScript:**
- Use ES6+ syntax (const/let, arrow functions)
- No var declarations
- Modular functions (max 50 lines)
- Clear variable names (no single letters except loops)
- Comments for non-obvious logic

**CSS:**
- Mobile-first approach
- Use CSS variables for colors/spacing
- No inline styles
- Meaningful class names
- Avoid !important

**HTML:**
- Semantic tags (header, nav, main, section, article)
- Proper heading hierarchy (one H1 per page)
- Alt text on all images
- Descriptive link text

### **Testing Requirements**

Before submitting code:

```bash
# Run all tests
npm run test

# Check code quality
npm run lint

# Verify no console errors
npm run build

# Test on mobile (Chrome DevTools)
```

**Test Coverage:**
- New features need unit tests
- Calculator functions need test cases
- Search should test edge cases (empty results, special chars)

### **Git Workflow**

1. **Create feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes and commit:**
   ```bash
   git add .
   git commit -m "Add feature: Clear description"
   ```

3. **Push branch:**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create pull request** on GitHub:
   - Title: Clear, concise description
   - Description: What, why, how
   - Link related issues
   - Include screenshot if UI change

5. **Address review comments:**
   - Don't create new commits for fixes
   - Use `git commit --amend` to update existing commit
   - Force push: `git push origin -f`

### **Commit Message Convention**

```
Type: Brief description (under 50 chars)

Longer explanation if needed (72 chars per line)

- Bullet point 1
- Bullet point 2

Fixes #123
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

---

## 📝 Testimonial & Success Story Guidelines

### **Sharing Your Story**

Help others by sharing your migration experience (anonymized).

**Required Information:**
- Origin country
- Target country/visa type
- Timeline (months from application to approval)
- Budget (approximate total cost)
- Key challenges faced
- Advice for others

**Optional Information:**
- Name (anonymous is fine)
- Photos
- Employment/profession
- Family status

### **Submission Template**

```markdown
# Success Story: Nigeria → Germany Master's

**Applicant:** Anonymous (Software Engineer)
**Timeline:** 8 months
**Total Cost:** €12,500
**Visa Type:** Student visa

## Background
I'm a software engineer from Lagos with 3 years of experience...

## The Process
Month 1: University application
Month 2: Admission letter received
...

## Challenges
The blocked account requirement was intimidating...

## Key Advice
1. Start early
2. Get documents legalized immediately
3. ...

## Resources Used
- Global Route article on blocked accounts
- University admission guide
- Embassy website
```

**Submit:** Pull request to `/content/success-stories/` folder

---

## 🐛 Bug Reports

Found a problem? Report it on GitHub Issues.

**Bug Report Template:**

```markdown
## Description
Brief description of the bug

## Steps to Reproduce
1. Go to...
2. Click...
3. See error...

## Expected Behavior
What should have happened

## Actual Behavior
What actually happened

## Screenshots
[If applicable]

## Environment
- OS: macOS/Windows/Linux
- Browser: Chrome/Firefox/Safari
- Device: Desktop/Mobile
```

---

## 💬 Discussion & Feedback

### **Where to Discuss**

- **Issues:** Bugs and feature requests
- **Discussions:** Questions, ideas, announcements
- **Comments:** Feedback on specific articles

### **Be Respectful**

- ✅ Constructive feedback welcome
- ✅ Different perspectives valued
- ✅ Fact-based discussions encouraged
- ❌ No personal attacks
- ❌ No misinformation
- ❌ No spam

---

## 📚 Style & Tone

### **Voice Guidelines**

**We Are:**
- Honest (never sugar-coat visa rates)
- Practical (every article has actionable steps)
- Respectful (acknowledge emotional weight)
- Data-driven (cite all sources)
- Supportive (celebrating migrations & learning from setbacks)

**We Are NOT:**
- Salesy or promotional
- Academic or overly formal
- Condescending
- Sensational or clickbaity
- Neutral on facts (verified info is stated clearly)

### **Tone Examples**

❌ **Too formal:**
"One may ascertain that the aforementioned jurisdiction presents a viable pathway..."

✅ **Just right:**
"Germany offers a clear pathway: get admitted, fund your blocked account, and your visa is likely approved."

❌ **Too casual:**
"Yo, Canada's visa process is wild. They'll reject you for basically anything lol"

✅ **Professional:**
"Canada has tightened visa requirements significantly. Most rejections cite insufficient proof of funds or unclear study plans."

---

## ✅ Review Process

### **Content Review**

Editor will check:
- [ ] Facts verified with official sources
- [ ] No duplicate content
- [ ] SEO keywords naturally integrated
- [ ] Structure matches template
- [ ] Writing quality & clarity
- [ ] Citations complete
- [ ] No outdated information

**Timeline:** 3-5 business days

### **Code Review**

Maintainers will check:
- [ ] Code quality & style
- [ ] Tests passing
- [ ] No breaking changes
- [ ] Performance impact acceptable
- [ ] Documentation updated

**Timeline:** 2-3 business days

---

## 🎯 Priority Areas (High Impact)

**We especially welcome contributions to:**

1. **Cornerstone articles** (top 10 keywords)
2. **Interactive tools** (calculators, comparisons)
3. **Success stories** (real applicant experiences)
4. **Policy updates** (visa law changes)
5. **Mobile optimization** (3G/4G performance)

---

## 🚀 Getting Help

- **Questions?** Open a GitHub Discussion
- **Unsure about topic?** Comment on an issue
- **Need feedback?** Open a draft PR early
- **Technical issues?** Check existing issues first

---

## 📜 License

All contributions are licensed under MIT. By contributing, you agree to this license.

---

## 🎉 Thank You!

Every contribution—from a typo fix to a full article—helps make migration guidance more accessible for Africans. Thank you for being part of this mission.

**Global Route: Radical Transparency. Real Opportunity. African Excellence.**
