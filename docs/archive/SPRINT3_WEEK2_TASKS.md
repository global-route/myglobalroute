# 🎯 WEEK 2 CRITICAL TASKS: Blog Images & Deployment

**Current Date:** July 27, 2026  
**Week:** Week 2 (Jul 29 - Aug 3)  
**Status:** 🟢 Active  
**Deadline:** August 3, 2026

---

## 📋 OVERVIEW

**Objective:** Get blog live by August 3  
**Blockers to Remove:** Images + Local Test + Deployment  
**Total Time:** ~4 hours  
**Success:** Blog accessible at https://myglobalroute.com/pages/blog.html

---

## ✅ WEEK 2 TASK CHECKLIST

- [ ] **Task 1: Create 5 Blog Images** (2-3 hours)
- [ ] **Task 2: Test Local Build** (1 hour)
- [ ] **Task 3: Deploy to Netlify** (30 min - 1 hour)
- [ ] **Verification:** Blog live and working

---

---

# TASK 1: CREATE 5 BLOG IMAGES

**Time:** 2-3 hours  
**Priority:** 🔴 CRITICAL - Blocks everything  
**Status:** 🔴 Not Started

## Images Needed

### Image 1: Germany Visa from Nigeria
**File:** `germany-visa-2026.jpg`  
**Location:** `/public/blog/images/germany-visa-2026.jpg`  
**Concept:** German flag + Nigerian passport + blocked account symbol  
**Size:** 1200x630px  
**File Size:** <200KB  
**Alt Text:** "Germany student visa process for Nigerian applicants"

**Design Ideas:**
- German flag (left half) + Nigerian flag (right half)
- Document/passport in center
- Money/Euro symbol (representing blocked account)
- Color: Black, red, gold, green

---

### Image 2: Italy DSU Scholarship
**File:** `italy-dsu-scholarship.jpg`  
**Location:** `/public/blog/images/italy-dsu-scholarship.jpg`  
**Concept:** Italian university campus + scholarship symbol + African student  
**Size:** 1200x630px  
**File Size:** <200KB  
**Alt Text:** "Italy DSU Scholarship: Free tuition and living expenses for African students"

**Design Ideas:**
- Italian university building (background)
- "FREE" text prominently displayed
- Euro symbol or money bag
- Diverse student faces
- Color: Italian flag colors (green, white, red)

---

### Image 3: US LLC Setup from Africa
**File:** `us-llc-setup.jpg`  
**Location:** `/public/blog/images/us-llc-setup.jpg`  
**Concept:** US flag + laptop/business + Africa map  
**Size:** 1200x630px  
**File Size:** <200KB  
**Alt Text:** "How to set up US LLC from Nigeria: Complete guide"

**Design Ideas:**
- US flag (background)
- Laptop with business dashboard
- Africa map in corner
- Dollar sign
- "LLC" text
- Color: Blue, white, red

---

### Image 4: Chisom Canada Success Story
**File:** `chisom-canada-success.jpg`  
**Location:** `/public/blog/images/chisom-canada-success.jpg`  
**Concept:** Canadian skyline (Toronto) + success symbolism  
**Size:** 1200x630px  
**File Size:** <200KB  
**Alt Text:** "Nigeria to Canada: Chisom's 6-month immigration success story"

**Design Ideas:**
- Toronto skyline (CN Tower visible)
- Airplane or migration arrow
- Checkmark or success symbol
- "6 MONTHS" text
- Canadian flag
- Color: Red, white, blue

---

### Image 5: Canada SDS Cancelled
**File:** `canada-sds-cancelled.jpg`  
**Location:** `/public/blog/images/canada-sds-cancelled.jpg`  
**Concept:** Policy document + "cancelled" symbol + warning  
**Size:** 1200x630px  
**File Size:** <200KB  
**Alt Text:** "Canada SDS Program Cancelled: What Nigerian students need to know"

**Design Ideas:**
- Canadian flag (background)
- Document/policy paper
- Red "CANCELLED" stamp
- Question mark (confusion)
- Alternative pathways symbol
- Color: Red, blue, white

---

## 🛠️ How to Create These Images

### **Option A: Use Canva (Easiest)**

1. **Go to:** https://www.canva.com
2. **Create account** (free)
3. **Click:** "Create a design"
4. **Search:** "Social media image" or "Blog cover" (1200x630)
5. **Create each image:**
   - Add background
   - Add images/icons (Canva has free library)
   - Add text
   - Download as JPG

**Canva Steps per image:**
- [ ] Create new design (1200x630)
- [ ] Add background
- [ ] Add elements/icons
- [ ] Add text
- [ ] Download JPG
- [ ] Check file size (<200KB)
- [ ] Optimize if needed

**Time:** 20-25 min per image = 2 hours total

---

### **Option B: Use Figma (More Control)**

1. **Go to:** https://www.figma.com
2. **Create account** (free)
3. **Create new file**
4. **Set artboard:** 1200x630
5. **Design each image**
6. **Export as JPG**

---

### **Option C: Use Unsplash + Simple Editing**

1. **Go to:** https://unsplash.com
2. **Search for relevant images**
   - "Germany university"
   - "Italian campus"
   - "Toronto skyline"
   - "Business laptop"
   - "Policy document"
3. **Download images (free)**
4. **Edit with simple tool** (Canva or Preview)
5. **Add text overlay** if needed
6. **Export as JPG**

---

## 📋 Image Creation Checklist

**For each of the 5 images:**
- [ ] Design concept created
- [ ] Dimensions: 1200x630px
- [ ] File size: <200KB
- [ ] Quality: Readable, professional
- [ ] Alt text written
- [ ] Downloaded as JPG
- [ ] Saved to `/public/blog/images/`
- [ ] Named correctly

---

## 💾 AFTER CREATING IMAGES

### Step 1: Save Images
```bash
# Create directory if needed
mkdir -p /Users/machine/My\ Drive/Github\ Projects/Global\ Route/public/blog/images

# Save all 5 images here:
# - germany-visa-2026.jpg
# - italy-dsu-scholarship.jpg
# - us-llc-setup.jpg
# - chisom-canada-success.jpg
# - canada-sds-cancelled.jpg
```

### Step 2: Verify File Sizes
```bash
# Check file sizes (should be <200KB each)
ls -lh /Users/machine/My\ Drive/Github\ Projects/Global\ Route/public/blog/images/
```

### Step 3: Optimize if Needed
If any image is >200KB:
- Use Canva's "optimize" feature
- Or use online compressor: https://tinypng.com/

---

## ⏱️ TIME ESTIMATE

| Image | Time | Total |
|-------|------|-------|
| 1. Germany Visa | 25 min | 25 min |
| 2. Italy DSU | 25 min | 50 min |
| 3. US LLC | 25 min | 1:15 |
| 4. Chisom Canada | 25 min | 1:40 |
| 5. SDS Cancelled | 25 min | 2:05 |
| Verification | 15 min | 2:20 |
| **Total** | | **~2.5 hours** |

---

---

# TASK 2: TEST LOCAL BUILD

**Time:** 1 hour  
**Priority:** 🔴 CRITICAL - Verify before deploying  
**Status:** 🔴 Not Started

## What This Does
Tests that:
- 11ty builds successfully
- Blog pages render correctly
- Images display
- Links work
- Mobile responsive

## Step-by-Step

### Step 1: Navigate to Project
```bash
cd /Users/machine/My\ Drive/Github\ Projects/Global\ Route
```

### Step 2: Install Dependencies (if not done)
```bash
npm install
```

### Step 3: Build with 11ty
```bash
npm run build
```

**Expected output:**
```
[11ty] Writing _site/index.html from ./index.html
[11ty] Writing _site/pages/blog.html
[11ty] Writing _site/blog/post-1.html
...
[11ty] Benchmark: 1.45s
```

**If error:** Check error message, fix issue, retry

### Step 4: Start Development Server
```bash
npm run dev
```

**Expected output:**
```
[11ty] Serving on http://localhost:8080/
```

### Step 5: Test in Browser
**Open:** http://localhost:8080/pages/blog.html

**Verification checklist:**
- [ ] Page loads (no 404 error)
- [ ] Blog title visible
- [ ] Search bar visible
- [ ] 5 blog posts displayed
- [ ] Featured post visible
- [ ] Images load correctly
- [ ] Category filters visible
- [ ] Navigation links work
- [ ] No console errors (F12 > Console)
- [ ] Mobile view responsive (resize browser)

### Step 6: Test Blog Post Pages
- [ ] Click on first post
- [ ] Post content loads
- [ ] Featured image displays
- [ ] Post title correct
- [ ] Read time visible
- [ ] Date correct
- [ ] Related posts section visible

### Step 7: Check Performance
**Open DevTools (F12):**
- [ ] Network tab: all files load
- [ ] Console: no errors
- [ ] Lighthouse: run audit

---

## 🔴 Common Issues & Fixes

### Issue 1: "npm: command not found"
**Fix:**
```bash
# Install Node.js from https://nodejs.org/
# Then retry: npm install
```

### Issue 2: "Port 8080 already in use"
**Fix:**
```bash
# Kill process using port 8080
lsof -i :8080
# Kill the process ID shown
kill -9 <PID>
```

### Issue 3: "Module not found"
**Fix:**
```bash
npm install
```

### Issue 4: Images not displaying
**Fix:**
- [ ] Verify images exist in `/public/blog/images/`
- [ ] Check image paths in blog-posts.json
- [ ] Clear browser cache (Ctrl+Shift+Delete)

### Issue 5: Build takes >30 seconds
**Fix:**
- This is normal for first build
- Subsequent builds are faster

---

## ✅ Success Criteria
- Blog page loads without errors
- 5 posts visible with images
- Search bar functional
- Navigation works
- Mobile responsive
- No console errors

---

---

# TASK 3: DEPLOY TO NETLIFY

**Time:** 30 min - 1 hour  
**Priority:** 🔴 CRITICAL - Makes blog live  
**Status:** 🔴 Not Started

## Prerequisites
- ✅ Blog images created (Task 1)
- ✅ Local build tested (Task 2)
- ✅ GitHub account (already set up)
- ✅ Netlify account (should be connected)

## Step-by-Step

### Step 1: Add Images to Git
```bash
cd /Users/machine/My\ Drive/Github\ Projects/Global\ Route

# Add images
git add public/blog/images/

# Verify they're staged
git status
```

### Step 2: Commit Images
```bash
git commit -m "🖼️ Add blog featured images: Germany visa, Italy DSU, US LLC, Chisom Canada, SDS cancelled"
```

### Step 3: Push to GitHub
```bash
git push origin main
```

**Expected:**
```
Enumerating objects...
Writing objects...
remote: Resolving deltas: 100%
To https://github.com/global-route/myglobalroute.git
   xxxxxxx..xxxxxxx  main -> main
```

### Step 4: Verify Netlify Auto-Deploy
**Go to:** https://app.netlify.com

1. **Sign in** with your account
2. **Select** "myglobalroute" site
3. **Check** "Deploys" tab
4. **Look for** a new deploy in progress
5. **Wait** for "Published" status (usually 2-5 min)

### Step 5: Test Live URL
**Once published, open:**
- https://myglobalroute.com/pages/blog.html

**Verification:**
- [ ] Blog page loads
- [ ] 5 posts visible
- [ ] Featured images display
- [ ] Search works
- [ ] Navigation works
- [ ] Mobile responsive

---

## 🔴 Common Issues

### Issue 1: Build fails on Netlify
**Check:**
- [ ] Netlify build logs (in Deploys tab)
- [ ] Error message shows specific issue
- [ ] Common: Missing dependencies

**Fix:**
```bash
npm install
git add package-lock.json
git commit -m "Update dependencies"
git push origin main
```

### Issue 2: Images don't display
**Check:**
- [ ] Images in `/public/blog/images/`
- [ ] Paths in blog-posts.json
- [ ] File names match exactly

**Fix:**
- Verify image files exist
- Check paths match
- Redeploy

### Issue 3: Site still shows old version
**Fix:**
- [ ] Hard refresh (Ctrl+Shift+R)
- [ ] Clear Netlify cache: Go to Deploys > Trigger deploy > Deploy site

### Issue 4: DNS not working yet
**Fix:**
- Use Netlify subdomain temporarily: `myglobalroute.netlify.app`
- Or wait for DNS propagation (up to 48 hours)

---

## ✅ Success Criteria
- [ ] Blog page loads on live URL
- [ ] 5 posts visible with images
- [ ] All links working
- [ ] Mobile responsive
- [ ] No 404 errors
- [ ] Performance acceptable

---

---

# 📊 COMPLETE WEEK 2 CHECKLIST

## Monday-Tuesday (Jul 29-30)
- [ ] Create 5 blog images (2-3 hours)
- [ ] Save to `/public/blog/images/`
- [ ] Verify all <200KB

## Wednesday (Jul 31)
- [ ] Test local build (1 hour)
- [ ] Verify all pages load
- [ ] Check mobile responsive
- [ ] No console errors

## Thursday (Aug 1)
- [ ] Commit images to Git
- [ ] Push to GitHub
- [ ] Monitor Netlify deploy
- [ ] Test live URL

## Friday (Aug 3) - DEADLINE
- [ ] Final verification
- [ ] Blog fully functional
- [ ] All 5 posts visible
- [ ] Images display correctly
- [ ] Week 2 complete ✅

---

# 📈 SUCCESS METRICS

**By End of Week 2 (Aug 3):**
- ✅ Blog live at https://myglobalroute.com/pages/blog.html
- ✅ 5 posts visible with images
- ✅ Search functional
- ✅ Navigation working
- ✅ Mobile responsive
- ✅ No errors in console
- ✅ Performance >60 Lighthouse score

---

# 🚀 NEXT STEPS (Week 3)

Once Week 2 is complete:
1. Write 3 new blog posts (Canada, UK, Germany)
2. Implement blog search
3. Build category archive pages

---

# 📞 QUICK REFERENCE

**Directories:**
```
/Users/machine/My Drive/Github Projects/Global Route/
├─ public/blog/images/          ← Save images here
├─ src/pages/blog.html          ← Blog listing page
├─ src/data/blog-posts.json     ← Post data
└─ .eleventy.js                 ← Build config
```

**Commands:**
```bash
npm run build      # Build with 11ty
npm run dev        # Dev server
git push origin    # Push to GitHub
```

**URLs:**
```
Local: http://localhost:8080/pages/blog.html
Live:  https://myglobalroute.com/pages/blog.html
```

---

## 🎯 PRIORITY

This is your **only focus for Week 2**. Everything else waits.

**Blocker removed = Blog goes live = Success** ✨

---

**Updated:** July 27, 2026  
**Deadline:** August 3, 2026  
**Status:** Ready to execute

