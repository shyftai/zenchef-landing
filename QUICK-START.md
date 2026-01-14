# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd zenchef-landing
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your landing page!

### 3. Build for Production
```bash
npm run build
```

Static files will be in the `out/` directory, ready to deploy.

---

## 📁 Project Structure

```
zenchef-landing/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── hero/             # Hero section with signal feed
│   ├── problem/          # Comparison section
│   ├── how-it-works/     # Flow diagram
│   ├── demo/             # Interactive chat demo ⭐
│   ├── features/         # Feature grid
│   ├── pricing/          # Pricing section
│   ├── timeline/         # Timeline
│   ├── faq/              # FAQ accordion
│   ├── cta/              # Footer CTA
│   └── ui/               # Reusable components
└── lib/
    └── constants.ts      # Demo data & content
```

---

## ✏️ Customizing Content

### Change Demo Conversations
Edit `lib/constants.ts`:

```typescript
export const DEMO_CONVERSATIONS = {
  weekly: {
    prompt: "Your prompt here",
    response: `Your response here`
  }
  // ... add more
};
```

### Update Pricing
Edit `lib/constants.ts`:

```typescript
export const PRICING = {
  partner: 7500,  // Change price
  standard: 24700,
  // ...
};
```

### Modify Brand Colors
Edit `tailwind.config.ts`:

```typescript
colors: {
  'zenchef-cream': '#FDF8F3',
  'zenchef-olive': '#4A5D23',
  // ... change colors
}
```

### Update Section Content
Navigate to the specific component:
- Hero: `components/hero/HeroSection.tsx`
- Pricing: `components/pricing/PricingSection.tsx`
- FAQ: Edit FAQs in `lib/constants.ts`

---

## 🎨 Key Features

✅ **Animated Signal Feed** - Real-time style notifications
✅ **Interactive Chat Demo** - Typewriter effect, clickable prompts
✅ **Responsive Design** - Mobile, tablet, desktop
✅ **Smooth Animations** - Framer Motion throughout
✅ **Zenchef Brand Colors** - Full design system
✅ **Static Export** - Ready for Webflow/hosting

---

## 📦 Deployment Options

### Vercel (Easiest)
```bash
# Push to GitHub, then:
# 1. Visit vercel.com
# 2. Import your GitHub repo
# 3. Deploy (automatic)
```

### Netlify
```bash
# Push to GitHub, then:
# 1. Visit netlify.com
# 2. Import your GitHub repo
# 3. Build command: npm run build
# 4. Publish directory: out
```

### Manual Hosting
```bash
npm run build
# Upload contents of `out/` folder to your web server
```

---

## 🔧 Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Run production build locally
npm run lint      # Run ESLint
```

---

## 🎯 What's Built

### ✅ Complete Sections
1. **Hero Section** - Headline, subheadline, animated signal feed, stats
2. **Comparison Section** - Clay vs Sales Cockpit side-by-side
3. **How It Works** - 4-step flow diagram (clickable cards)
4. **Chat Demo** - Interactive AI conversation simulator ⭐
5. **Features Grid** - 6 feature cards with hover effects
6. **Pricing Section** - Partner offer, savings calculator, monthly costs
7. **Timeline Section** - 6-week project timeline
8. **FAQ Section** - Accordion with 5 questions
9. **CTA Footer** - Call-to-action with branding

### 🎨 Design Elements
- Zenchef brand colors throughout
- Smooth scroll behavior
- Framer Motion animations
- Responsive grid layouts
- Custom button components
- Hover effects
- Typewriter effect in chat

---

## 💡 Pro Tips

1. **Test Locally First**: Always run `npm run dev` to test changes
2. **Build Before Deploy**: Run `npm run build` to catch errors
3. **Check Mobile**: Test on different screen sizes
4. **Customize Gradually**: Change one section at a time
5. **Keep Original**: Make a backup before major changes

---

## 📚 Documentation

- **README.md** - Full project documentation
- **WEBFLOW-EMBEDDING.md** - How to embed in Webflow
- **This file** - Quick reference

---

## 🆘 Common Issues

**Build fails?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Animations not smooth?**
- Ensure you're testing in production build
- Check browser hardware acceleration

**Colors look wrong?**
- Verify Tailwind config
- Check CSS conflicts

---

## 📱 Support

Need help? Check:
1. README.md for detailed docs
2. Component comments in code
3. Next.js docs: nextjs.org
4. Tailwind docs: tailwindcss.com
5. Framer Motion docs: framer.com/motion

---

**🎉 You're ready to go! Run `npm run dev` to start.**
