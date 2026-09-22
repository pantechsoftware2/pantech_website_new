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

Hero and AI globe artwork can be replaced the same way by supplying `src` to `Artwork` in their section components. The logo is an SVG approximation of the reference; replace it with the official brand asset when available. The handwritten notes use Caveat, and the main text uses Inter.

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
