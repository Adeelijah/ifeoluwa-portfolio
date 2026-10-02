# Ifeoluwa Odejinmi portfolio

Astro, TypeScript, static output, plain CSS and Keystatic. The portfolio page is prerendered; Keystatic's GitHub editor endpoints run through the Vercel or Netlify adapter.

## Local setup

Requirements: Node 22.19+ and npm.

```sh
npm install
Copy-Item .env.example .env
npm run dev
```

Open `http://localhost:4321` and `http://localhost:4321/keystatic`. Keystatic runs in local mode during development and writes content into `src/content`. Add the original `index.html` prototype before launch: it was not present in the supplied workspace, so exact copy, embedded pictures, the four figures, service rows, testimonial text, and results could not be recovered or seeded. The current data files contain only details supplied in the brief; do not treat the incomplete page as final portfolio content.

## Editing content

Use `/keystatic` in the local dev server. Edit Site settings, About, Case study, Results, Figures, Services, Brands, Gallery items, and Testimonial content. Keystatic commits its edits to files under `src/content`; check and commit those files with the website changes. The project uses Astro content collections and validates data with `src/content.config.ts`.

For GitHub mode, push the repository to GitHub, set `KEYSTATIC_GITHUB_REPO=owner/repository`, and configure `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET`, and `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` in the production host. Visit `/keystatic` on the deployed site to create/configure a GitHub App; give it repository write access and add the deployed callback URL as prompted. Only people with repository write access can edit content. Local development remains in local mode.

## Adding a video reel

Create a Gallery item with Type `video`, add a still image as Poster, set its caption and order, then provide an MP4 URL and optional WebM URL. Keep reels muted and provide captions/alt text in the media description. With no video URL, the item opens its poster as an image. Two video entries are seeded with the supplied Forevermore and Yard.ng reel labels, but the referenced poster stills are missing from this workspace; until they are added, those entries show caption-only fallbacks. Real stills and video files remain TODO.

## Contact form

Set `PUBLIC_FORM_ENDPOINT` to a Formspree form endpoint or another endpoint that accepts normal HTML form POST requests and returns JSON when sent with `Accept: application/json`. The form uses that value for both native POST and progressive fetch enhancement. Empty endpoint shows a setup message with JavaScript; configure an endpoint before launch.

## Analytics

Plausible is the default provider; analytics is disabled unless `PUBLIC_ANALYTICS_ID` is set. `PUBLIC_ANALYTICS_PROVIDER` accepts `plausible` or `ga4`; ID is the Plausible domain or GA4 measurement ID. Do Not Track disables all analytics loading and events. Plausible and GA4 are configured without cookies.

## Deploy to Vercel

Import the repository in Vercel, set `PUBLIC_SITE_URL`, `PUBLIC_FORM_ENDPOINT`, analytics values if needed, and Keystatic GitHub environment variables. Build command is `npm run build`; the Vercel adapter is the default. The portfolio route is prerendered while Keystatic API routes use Vercel functions.

## Deploy to Netlify

Import the repository in Netlify. `netlify.toml` sets the build command, publish directory, and `DEPLOY_TARGET=netlify`; the Astro config selects the Netlify adapter. Add the same public form, site URL, analytics and Keystatic variables in Site configuration. Keystatic requires Netlify Functions for its API routes while the portfolio page is prerendered.

## Owner items before launch

- Supply the exact self-contained prototype `index.html` so its copy, spacing, figures, services, result cards, testimonials and all nine embedded images can be extracted.
- Confirm the prototype spelling discrepancy: use **Calidad Foods** for the brand and **Calidads** only in the ads label.
- Supply a contact email address and confirm phone/LinkedIn details.
- Set the production domain and `PUBLIC_SITE_URL`.
- Supply the Forevermore and Yard.ng reel stills plus their video files, or confirm poster-only display.
- Confirm whether the Yard.ng team photo should carry a credit.
- Supply the portrait and social sharing image (current OG card is a typographic SVG without the portrait).

## Stack note

The newest stable Astro major is ahead of the Astro compatibility range currently documented for `@keystatic/astro`. This project pins the Astro 5 line with Keystatic 5 so the CMS can run, and uses adapters for its required Node.js routes. This is a deliberate compatibility choice; upgrade to Astro 7 only after Keystatic documents support for it.
