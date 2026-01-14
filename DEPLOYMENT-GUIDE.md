# Deployment & Configuration Guide

## 1. Fix Auto-Scroll Issue ✅

**Problem**: Page automatically scrolls to the chat section on load.

**Solution**: The scrollToBottom function now uses `block: 'nearest'` to only scroll within the chat container, not the entire page.

**Status**: FIXED in the latest commit

---

## 2. Password Protection

### Quick Setup (5 minutes)

1. **Open** [app/layout.tsx](app/layout.tsx)

2. **Add import** at the top:
```typescript
import { PasswordProtection } from '@/components/auth/PasswordProtection';
```

3. **Wrap the children** with PasswordProtection:
```typescript
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PasswordProtection password="your-secret-password">
          {children}
        </PasswordProtection>
      </body>
    </html>
  )
}
```

4. **Change the password** from the default `"zenchef2025"` to your own secret password

5. **Commit and push** to deploy:
```bash
git add .
git commit -m "Add password protection"
git push
```

### Features:
- ✅ Simple password gate
- ✅ Session-based (unlocked until browser closes)
- ✅ Beautiful UI matching your brand
- ✅ No backend required

### Remove Password Protection:
Just remove the `<PasswordProtection>` wrapper from `app/layout.tsx`

---

## 3. Embed in Webflow

### Option A: Full Page Redirect (Easiest)

1. In Webflow, create a button or link
2. Set the link URL to: `https://zenchef-landing.vercel.app`
3. Check "Open in new tab" if desired

**Pros**: Simple, no coding
**Cons**: Leaves Webflow site

---

### Option B: iFrame Embed (Medium)

1. In Webflow, add an **Embed** element to your page
2. Paste this code:

```html
<iframe
  src="https://zenchef-landing.vercel.app"
  width="100%"
  height="3000px"
  style="border: none; display: block;"
  title="Zenchef Sales Intelligence Cockpit">
</iframe>
```

3. Adjust the height as needed for your content

**Pros**: Stays on your site
**Cons**: iFrame limitations (scrolling, mobile responsiveness)

---

### Option C: Subdomain (Best - Professional)

#### Step 1: Set up subdomain in Vercel

1. Go to https://vercel.com/shyft-ai-llc/zenchef-landing
2. Click **Settings** → **Domains**
3. Add: `cockpit.yourdomain.com` (or `demo.yourdomain.com`)
4. Vercel will show DNS records to add

#### Step 2: Add DNS records in your domain provider

1. Go to your domain DNS settings (GoDaddy, Namecheap, Cloudflare, etc.)
2. Add the CNAME record Vercel provided:
   - **Type**: CNAME
   - **Name**: cockpit (or demo)
   - **Value**: cname.vercel-dns.com

#### Step 3: Wait for DNS propagation (5-60 minutes)

#### Step 4: Link from Webflow

In Webflow, create a button/link to: `https://cockpit.yourdomain.com`

**Pros**:
- Professional branded URL
- No iFrame limitations
- SEO friendly
- Fast performance

**Cons**: Requires DNS access

---

### Option D: Custom Domain (Alternative to Subdomain)

Use a completely separate domain like `zenchef-cockpit.com`:

1. Buy the domain
2. In Vercel Settings → Domains, add it
3. Update nameservers or DNS records
4. Link from Webflow

---

## Recommended Approach

**For Demo/Preview**: Use **Option A** (direct link) or **Option B** (iframe)

**For Production**: Use **Option C** (subdomain) for the best experience:
- Example: `https://demo.shyft.ai`
- Example: `https://cockpit.zenchef.com`

---

## Current Live URLs

- **Production**: https://zenchef-landing.vercel.app
- **GitHub**: https://github.com/shyftai/zenchef-landing

---

## Auto-Deploy

Every push to the `master` branch automatically deploys to Vercel! No manual steps needed.

```bash
# Make changes
git add .
git commit -m "Update content"
git push

# Vercel automatically deploys in ~30 seconds
```

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Webflow Embed Guide**: https://university.webflow.com/lesson/custom-code-embed
