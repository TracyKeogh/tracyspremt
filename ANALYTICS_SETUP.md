# Google Analytics Setup Instructions

## 🎯 What's Been Added

Your website now has Google Analytics 4 (GA4) tracking implemented! Here's what was added:

### Files Created/Modified:
- ✅ **index.html** - Added Google Analytics gtag script
- ✅ **src/utils/analytics.ts** - Analytics utility functions
- ✅ **src/hooks/usePageTracking.ts** - React hook for page tracking
- ✅ **src/App.tsx** - Added page tracking initialization
- ✅ **src/components/Contact.tsx** - Added contact method tracking

## 🚀 How to Complete Setup

### Step 1: Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Create an account name (e.g., "Spremt Labs")
5. Choose your data sharing settings

### Step 2: Create a Property
1. Property name: "Tracy Spremt Labs Website"
2. Time zone: Choose your timezone
3. Currency: Choose your currency
4. Click "Next"

### Step 3: Set Up Data Stream
1. Choose "Web"
2. Website URL: `https://tracy.spremtlabs.com`
3. Stream name: "Tracy Spremt Labs"
4. Click "Create stream"

### Step 4: Get Your Measurement ID
1. After creating the stream, you'll see your **Measurement ID** (format: G-XXXXXXXXXX)
2. Copy this ID

### Step 5: Update Your Code
Replace `GA_MEASUREMENT_ID` in these files with your actual Measurement ID:

**In index.html (lines 9 & 14):**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**In src/utils/analytics.ts (line 9):**
```typescript
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
```

### Step 6: Deploy Your Changes
After updating the Measurement ID, commit and push your changes:
```bash
git add .
git commit -m "Add Google Analytics tracking with Measurement ID"
git push origin main
```

## 📊 What Gets Tracked

### Automatic Tracking:
- ✅ **Page views** - Every time someone visits your site
- ✅ **Session duration** - How long people stay
- ✅ **Bounce rate** - Single-page visits
- ✅ **Traffic sources** - Where visitors come from
- ✅ **Device/browser info** - What devices people use

### Custom Event Tracking:
- ✅ **Email clicks** - When someone clicks your email link
- ✅ **Calendly clicks** - When someone books a consultation
- ✅ **LinkedIn clicks** - Social media engagement
- ✅ **Twitter clicks** - Social media engagement

## 🔍 Viewing Your Analytics

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. View reports in the left sidebar:
   - **Reports > Realtime** - See live visitors
   - **Reports > Acquisition** - See traffic sources
   - **Reports > Engagement** - See page views and events
   - **Reports > Demographics** - See visitor info

## 🎯 Key Metrics to Watch

- **Users** - Number of unique visitors
- **Sessions** - Number of visits
- **Page views** - Total pages viewed
- **Average session duration** - How engaged visitors are
- **Bounce rate** - Percentage of single-page visits
- **Contact events** - How many people try to contact you

## 🔧 Advanced Features Available

The implementation includes functions for tracking:
- Custom button clicks
- Form submissions
- Specific user actions
- Conversion goals

You can add more tracking by using the functions in `src/utils/analytics.ts`.

## 🛡️ Privacy Compliance

Google Analytics 4 is designed to be privacy-friendly and GDPR compliant. It:
- Doesn't store IP addresses
- Uses cookieless tracking when possible
- Respects user privacy settings
- Provides data retention controls

## 🚨 Important Notes

1. **Replace the Measurement ID** - The tracking won't work until you add your real GA4 Measurement ID
2. **Test after deployment** - Check Google Analytics Realtime reports to verify tracking
3. **Data delay** - Most reports have a 24-48 hour delay (except Realtime)
4. **Mobile tracking** - Works automatically on all devices

## 🆘 Troubleshooting

**Not seeing data?**
- Check that you replaced `GA_MEASUREMENT_ID` with your actual ID
- Verify the site is deployed and live
- Check browser console for JavaScript errors
- Use Google Analytics Realtime reports for immediate verification

**Want to test locally?**
- The tracking works in development mode too
- Visit your local site and check Google Analytics Realtime reports