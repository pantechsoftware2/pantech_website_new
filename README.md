# PanTech Software

A responsive recreation of the supplied PanTech reference, built with Next.js App Router, React, TypeScript, and reusable components. Fonts and Lucide icons are installed locally; no CDN is required at runtime.

## Run locally

Requires Node.js 20.9 or newer (Node.js 24 recommended).

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Production

```sh
npm run lint
npm run build
npm run typecheck
npm run start
```

Deploy as a Next.js application on Vercel or a Node.js host. Commit `package-lock.json` and use `npm ci` for reproducible installs. Copy `.env.example` to `.env.local` for local configuration. On your deployment platform configure:

- `NEXT_PUBLIC_SITE_URL`: the actual HTTPS domain, used by metadata and sitemap.
- `NEXT_PUBLIC_CONTACT_EMAIL`: the verified enquiries address. The initial address follows the supplied design and must be confirmed before public launch.

These public variables are baked into the client build, so rebuild after changing them.

## Structure

```text
public/images/                 Original reference and future project assets
src/app/                       Routes, global styles, metadata, sitemap, robots
  contact/                     Contact page
  work/[slug]/                 Statically generated project pages
src/components/
  layout/                      Header, mobile navigation, logo, footer
  sections/                    Independent homepage sections
  ui/                          Shared buttons and artwork component
  contact-form.tsx             Validated email draft form
src/data/                      Editable project and service content
src/lib/site.ts                Site identity and environment configuration
tests/                         Desktop and mobile browser checks
```

## Replacing the project screenshots

The reference is the only artwork supplied so far. `Artwork` displays clipped visual regions from `public/images/design-reference.png` using CSS; headings, descriptions, layout, cards, navigation, and buttons are real HTML. The reference is unchanged. This keeps the original visual direction while waiting for high-resolution source assets. Its resolution limits sharpness on large displays.

1. Add a screenshot to `public/images/projects/`, for example `abroad-eduversity.webp`.
2. In `src/data/projects.ts`, add `src: "/images/projects/abroad-eduversity.webp"` to that project's `artwork` object.
3. Update its `alt` description. The component automatically uses an optimized Next.js image instead of the reference region.

Hero and AI globe artwork can be replaced the same way by supplying `src` to `Artwork` in their section components. The supplied PanTech logo is installed in the shared header and footer. The handwritten notes use Caveat, and the main text uses Inter.

## Brand assets

All brand files are saved locally in `public/images/brand/`:

- `pantech-logo-original.jpeg`: the supplied original, preserved unchanged.
- `pantech-logo-transparent.png`: transparent master prepared from the original using the built-in image generation tool.
- `pantech-logo.webp` and `pantech-logo.png`: optimized wordmark exports.
- `pantech-mark.png`: symbol for small-format uses.
- `icon-192.png` and `icon-512.png`: web manifest icons.
- `pantech-social.png`: 1200 × 630 sharing image for Open Graph and Twitter.

The header uses a light logo backing so the original gradient colors remain readable on the dark hero. The footer uses the transparent version. Native Next.js metadata files `src/app/favicon.ico`, `src/app/icon.png`, and `src/app/apple-icon.png` provide multi-resolution browser icons and the Apple touch icon. `src/app/manifest.ts` serves the web manifest. No logo asset depends on a Downloads folder or an external image host.

Regenerate the derived files from the saved master with `npm run assets:brand`. This uses Sharp for deterministic export sizes and ICO packaging. The transparent-master preparation prompt was: remove only the white background and excess whitespace; preserve the supplied P symbol, gradients, two-line PanTech Software wordmark, shapes and typography; use true alpha transparency with tight padding. The original file is retained for brand comparison or future replacement with an official transparent/vector master.

## Functionality and launch notes

- All five project cards open individual project pages. Content stays limited to the information supplied in the reference.
- Service cards open the contact page with that service selected.
- The enquiry form validates name, email and project description, then opens a prefilled `mailto:` draft. The user must send that draft. It does **not** claim to submit to a backend or store personal information. Connect a transactional email provider and server-side validation/rate limiting if direct delivery is required.
- “Schedule a call” opens an email requesting a call. Replace this with an actual booking URL when available.
- Placeholder phone numbers and unverified social profile destinations from the mockup are not published. The footer provides a working email action instead.
- Includes page metadata, generated sitemap/robots, favicon, basic security headers, keyboard focus styles, skip navigation, reduced-motion support, and responsive mobile navigation.

## Browser verification

```sh
npx playwright install chromium
npm run build
npm run test:e2e
```

Playwright starts an isolated production server on port 3100, separate from the development preview. Tests cover desktop and mobile layouts, browser errors, horizontal overflow, project navigation, 404s, contact validation, service selection, keyboard access, and mobile menu behavior. Full-page screenshots are saved under `test-results/`.

# pantech_website_new
