import type { APIRoute } from 'astro';

export const prerender = true;
export const GET: APIRoute = () => {
  const site = import.meta.env.PUBLIC_SITE_URL || 'https://example.com';
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${site}/sitemap-index.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
