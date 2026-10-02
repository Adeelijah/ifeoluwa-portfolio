# Ifeoluwa Odejinmi portfolio

Single-page portfolio built with Astro, TypeScript, plain CSS, Astro content collections and Keystatic. The portfolio page is prerendered; the `/keystatic` editor uses the selected host's server functions. The reference prototype is `C:\Users\USER\Downloads\index.html`; its copy and embedded images have been seeded into the site.

React and `@astrojs/react` are included for Keystatic's editor UI; the public portfolio has no hydrated React components. The Vercel/Netlify adapters, sitemap integration, Fontsource packages, and Keystatic packages support the requested hosting, SEO, typography and editing features.

## Local setup

Requirements: Node 22.19+ and npm.

```sh
npm install
Copy-Item .env.example .env
npm run dev
```

Open `http://localhost:4321` and `http://localhost:4321/keystatic`. In development, Keystatic runs in local mode and writes edits to `src/content`. Run `npm run check` for the Astro and TypeScript diagnostics, then `npm run build` to create the site.

## Editing content in Keystatic

Open `/keystatic` while the local dev server is running. The **Site settings**, **About**, and **Case study** entries are singletons. Use the **Figures**, **Services**, **Brands**, **Gallery items**, **Testimonial content**, and **Results cards** collections to edit ordered records. All images are stored in `src/assets/media`; the page uses Astro's image pipeline to generate AVIF and WebP variants and retains explicit image dimensions.

For production GitHub mode:

1. Push the project to a GitHub repository.
2. Set `KEYSTATIC_GITHUB_REPO` to `owner/repository` and configure `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET`, and `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` in the host's environment.
3. Deploy and open `/keystatic`. Register a GitHub OAuth App using the callback URL shown by Keystatic. Grant access to the portfolio repository and keep access limited to the people who should edit the site.

Local development remains in local mode unless GitHub storage is configured. Production builds on Vercel and Netlify require `KEYSTATIC_GITHUB_REPO` so the editor writes changes back to GitHub.

## Adding a video reel

Add a Gallery item with Type `video`, a Poster image, caption and order, then enter the MP4 URL and optional WebM URL. The poster is used in the gallery and as the video poster. The lightbox opens the reel muted with controls; users can enable sound. If neither video URL is set, the still opens as an image. Two video entries are seeded with the Forevermore reel and Yard.ng testimonial reel stills. **TODO: replace their empty MP4/WebM sources with the real video files when supplied.**

## Contact form

Set `PUBLIC_FORM_ENDPOINT` to a Formspree form endpoint (or another endpoint accepting a normal HTML POST and JSON fetch requests with `Accept: application/json`). It is used for both the browser's native form submission and the progressive fetch enhancement. The form includes browser validation and a honeypot. If the endpoint is unset, the enhanced form explains how to contact Ifeoluwa through the phone and LinkedIn links; configure an endpoint before launch.

## Analytics

Analytics are disabled until `PUBLIC_ANALYTICS_ID` is set. Set `PUBLIC_ANALYTICS_PROVIDER=plausible` (the default) and use the Plausible domain as the ID, or set the provider to `ga4` and use its measurement ID. Analytics scripts load only when both values are set and the visitor has not enabled Do Not Track. GA4 storage is disabled; Plausible is cookieless. The site emits events for contact submission, phone and LinkedIn clicks, gallery opens, and video playback.

## Deploy to Vercel

Import the repository in Vercel. The default Astro adapter is Vercel. Set `PUBLIC_SITE_URL`, `PUBLIC_FORM_ENDPOINT`, optional analytics values, and the Keystatic GitHub variables in Project Settings → Environment Variables. The build command is `npm run build`; Astro emits the prerendered portfolio and Vercel functions for Keystatic.

## Deploy to Netlify

Import the repository in Netlify. `netlify.toml` sets `DEPLOY_TARGET=netlify`, `npm run build`, and `dist` as the publish directory; the Astro config then selects the Netlify adapter. Add `PUBLIC_SITE_URL`, `PUBLIC_FORM_ENDPOINT`, optional analytics values, and the Keystatic GitHub variables in Site configuration → Environment variables. Netlify Functions support Keystatic's server routes.

## Owner items before launch

- Confirm the spelling distinction found in the prototype: **Calidad Foods** as the brand name and **Calidads** only in the ads result label.
- Supply the contact email address; none is present in the prototype.
- Set the production domain in `PUBLIC_SITE_URL`.
- Supply the actual Forevermore and Yard.ng reel video files; their extracted stills already appear in the gallery.
- Confirm whether the Yard.ng team photo from the original portfolio should be credited; it is not used here.
- Set up the production form endpoint and, if desired, analytics credentials.

## Astro and Keystatic compatibility

Astro's current latest stable release is v7, but Keystatic has an open request for Astro v7 compatibility. This project stays on the Astro 5 line required by its tested Keystatic integration so local and GitHub editing work. Revisit the Astro major upgrade when Keystatic documents support. See the [Astro release documentation](https://docs.astro.build/en/upgrade-astro/) and [Keystatic Astro compatibility request](https://github.com/Thinkmill/keystatic/issues).
