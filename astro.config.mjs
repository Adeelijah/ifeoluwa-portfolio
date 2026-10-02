import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';
import netlify from '@astrojs/netlify';

const target = process.env.DEPLOY_TARGET;

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://example.com',
  output: 'static',
  adapter: target === 'netlify' ? netlify() : vercel(),
  integrations: [react(), keystatic(), sitemap()],
  build: { assets: '_astro' },
});
