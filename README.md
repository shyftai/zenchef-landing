# Zenchef Sales Intelligence Cockpit Landing Page

A modern, interactive landing page built for Zenchef's Netherlands expansion initiative. Features an AI-powered sales intelligence platform showcase with animated components and an interactive demo.

## Features

- 🎨 Zenchef brand colors and design system
- ✨ Smooth Framer Motion animations
- 💬 Interactive chat demo with typewriter effect
- 📱 Fully responsive design
- 🚀 Optimized for Webflow embedding
- ⚡ Built with Next.js 14 and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## For Webflow Embedding

To export for Webflow:

```bash
npm run build
```

The static files will be in the `out/` directory. You can then:

1. Upload the contents to your hosting
2. Embed in Webflow using an `<iframe>` or custom code embed
3. Or use the generated HTML/CSS/JS directly in Webflow

### Embedding Options

**Option 1: Full Page Embed (Recommended)**
```html
<iframe src="your-hosted-url" style="width: 100%; height: 100vh; border: none;"></iframe>
```

**Option 2: Section Embed**
```html
<iframe src="your-hosted-url" style="width: 100%; min-height: 4000px; border: none;"></iframe>
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── hero/               # Hero section with signal feed
│   ├── problem/            # Clay vs Cockpit comparison
│   ├── how-it-works/       # Flow diagram
│   ├── demo/               # Interactive chat demo
│   ├── features/           # Feature grid
│   ├── pricing/            # Pricing section
│   ├── timeline/           # 6-week timeline
│   ├── faq/                # FAQ accordion
│   ├── cta/                # Footer CTA
│   └── ui/                 # Reusable UI components
└── lib/
    └── constants.ts        # Demo data and constants
```

## Customization

### Brand Colors

Edit `tailwind.config.ts` to modify brand colors:

```typescript
colors: {
  'zenchef-cream': '#FDF8F3',
  'zenchef-olive': '#4A5D23',
  // ... etc
}
```

### Demo Conversations

Edit `lib/constants.ts` to modify the chat demo prompts and responses.

### Content

All section content can be modified in their respective component files in the `components/` directory.

## Technologies

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts)
- **TypeScript:** For type safety

## Performance

- Lazy loading for below-fold sections
- Optimized animations (GPU-accelerated)
- Static export for fast loading
- Minimal bundle size

## License

Private - Built for Zenchef by Shyft AI
