import { defineCollection, z } from 'astro:content';

const siteSettings = defineCollection({ type: 'data', schema: ({ image }) => z.object({
  name: z.string(), role: z.string(), heroIntro: z.string(), phone: z.string(), email: z.string(), linkedinUrl: z.string().url().or(z.literal('')), toolsText: z.string(),
  seoTitle: z.string(), seoDescription: z.string(), socialImage: image().nullable().optional(), portrait: image().nullable().optional(),
}) });
const figures = defineCollection({ type: 'data', schema: z.object({ value: z.string(), label: z.string(), order: z.number() }) });
const about = defineCollection({ type: 'data', schema: z.object({ heading: z.string(), paragraphs: z.array(z.string()), platformsLine: z.string() }) });
const services = defineCollection({ type: 'data', schema: z.object({ title: z.string(), description: z.string(), order: z.number() }) });
const brands = defineCollection({ type: 'data', schema: z.object({ name: z.string(), descriptor: z.string(), bullets: z.array(z.string()), order: z.number() }) });
const caseStudy = defineCollection({ type: 'data', schema: z.object({ title: z.string(), paragraphs: z.array(z.string()) }) });
const gallery = defineCollection({ type: 'data', schema: ({ image }) => z.object({
  type: z.enum(['image', 'video']), caption: z.string(), order: z.number(), image: image().nullable().optional(), poster: image().nullable().optional(), mp4: z.string().optional(), webm: z.string().optional(),
}) });
const testimonials = defineCollection({ type: 'data', schema: z.object({ quote: z.string(), attribution: z.string(), order: z.number() }) });
const resultCards = defineCollection({ type: 'data', schema: z.object({ title: z.string(), period: z.string(), rows: z.array(z.object({ label: z.string(), value: z.string() })), note: z.string(), order: z.number() }) });

export const collections = { siteSettings, figures, about, services, brands, caseStudy, gallery, testimonials, resultCards };
