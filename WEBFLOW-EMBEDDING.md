# Webflow Embedding Guide

This guide explains how to embed the Zenchef Sales Intelligence Cockpit landing page into your Webflow site.

## Build for Production

First, build the static export:

```bash
npm run build
```

This creates an `out/` directory with all static files.

## Hosting Options

### Option 1: Host on Vercel/Netlify (Recommended)

1. Push the project to GitHub
2. Connect to Vercel or Netlify
3. Deploy automatically
4. Get your production URL (e.g., `https://zenchef-landing.vercel.app`)

### Option 2: Host Files Manually

1. Upload the contents of the `out/` directory to your web server
2. Note the URL where the files are hosted

## Embedding in Webflow

### Method 1: Full Page Embed (Recommended for Landing Pages)

1. In Webflow, create a new page or use an existing one
2. Add an **Embed** component (Custom Code)
3. Paste this code:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
    }
    iframe {
      width: 100%;
      height: 100vh;
      border: none;
      display: block;
    }
  </style>
</head>
<body>
  <iframe
    src="YOUR_HOSTED_URL_HERE"
    title="Zenchef Sales Intelligence Cockpit"
    loading="eager"
  ></iframe>

  <script>
    // Auto-resize iframe to match content height
    window.addEventListener('message', function(e) {
      if (e.data.type === 'resize') {
        document.querySelector('iframe').style.height = e.data.height + 'px';
      }
    });
  </script>
</body>
</html>
```

### Method 2: Section Embed

If you want to embed it as a section within an existing page:

1. Add an **Embed** component where you want the landing page
2. Paste this code:

```html
<div class="zenchef-embed-container" style="width: 100%; min-height: 4000px;">
  <iframe
    src="YOUR_HOSTED_URL_HERE"
    style="width: 100%; height: 4000px; border: none;"
    title="Zenchef Sales Intelligence Cockpit"
    loading="lazy"
  ></iframe>
</div>
```

### Method 3: Custom Code in Page Settings (Full Page)

1. Go to Page Settings → Custom Code
2. Add to **Head Code**:

```html
<style>
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
</style>
```

3. Add to **Footer Code (Before </body>)**:

```html
<iframe
  src="YOUR_HOSTED_URL_HERE"
  style="position: fixed; top: 0; left: 0; width: 100%; height: 100vh; border: none; z-index: 999999;"
  title="Zenchef Sales Intelligence Cockpit"
></iframe>
```

## Making Links Work

If you want buttons in the landing page to navigate to other Webflow pages, you'll need to:

1. Update the button URLs in the components
2. Use `target="_parent"` or `target="_top"` in links to break out of iframe

Example in components:
```tsx
<Button href="https://yoursite.com/contact" target="_parent">
  Schedule a Call
</Button>
```

## Responsive Testing

Test the embedded page on:
- Desktop (1920px+)
- Laptop (1366px)
- Tablet (768px)
- Mobile (375px)

All sections are fully responsive and will adapt to the container width.

## Performance Tips

1. **Lazy Loading**: Use `loading="lazy"` for section embeds
2. **Preconnect**: Add this to your Webflow page head:
```html
<link rel="preconnect" href="YOUR_HOSTED_URL">
```

3. **Cache**: Enable browser caching on your hosting provider

## Troubleshooting

### iframe Not Scrolling Smoothly
Add this CSS to the parent page:
```css
html {
  scroll-behavior: smooth;
}
```

### Content Cut Off
Increase the `min-height` or `height` of the iframe container.

### Animations Not Playing
Ensure the iframe is visible on page load or use Intersection Observer to trigger animations when iframe becomes visible.

## Analytics

To track visits from the embedded page:

1. Add Google Analytics to the Next.js app
2. Or use Webflow's native analytics (will track iframe loads)

## Security

The landing page uses:
- No external data fetching
- Pure static content
- Safe animations
- CORS-friendly hosting

Safe to embed on any domain.

## Need Help?

Contact: [Your Contact Info]

---

**Example Hosted URLs:**
- Vercel: `https://zenchef-landing.vercel.app`
- Netlify: `https://zenchef-landing.netlify.app`
- Custom: `https://yoursite.com/sales-cockpit`
