import { config, collection, fields, singleton } from '@keystatic/core';

const githubRepo = process.env.KEYSTATIC_GITHUB_REPO;
const isHostedBuild = Boolean(process.env.VERCEL || process.env.NETLIFY);
if (isHostedBuild && !githubRepo) throw new Error('Set KEYSTATIC_GITHUB_REPO for the production Keystatic GitHub editor.');
const [repoOwner, repoName] = githubRepo?.split('/') || [];
if (githubRepo && (!repoOwner || !repoName)) throw new Error('KEYSTATIC_GITHUB_REPO must use the owner/repository format.');
const storage = githubRepo
  ? { kind: 'github' as const, repo: { owner: repoOwner, name: repoName } }
  : { kind: 'local' as const };
const imageField = (label: string) => fields.image({ label, directory: 'src/assets/media', publicPath: '@assets/media/' });

export default config({
  storage,
  singletons: {
    siteSettings: singleton({ label: 'Site settings', path: 'src/content/siteSettings/index', schema: {
      name: fields.text({ label: 'Name' }), role: fields.text({ label: 'Role' }), heroIntro: fields.text({ label: 'Hero intro', multiline: true }),
      phone: fields.text({ label: 'Phone' }), email: fields.text({ label: 'Email' }), linkedinUrl: fields.url({ label: 'LinkedIn URL' }), toolsText: fields.text({ label: 'Tools paragraph', multiline: true }),
      seoTitle: fields.text({ label: 'SEO title' }), seoDescription: fields.text({ label: 'SEO description', multiline: true }), socialImage: imageField('Social image'), portrait: imageField('Portrait'),
    } }),
    about: singleton({ label: 'About', path: 'src/content/about/index', schema: {
      heading: fields.text({ label: 'Heading' }), paragraphs: fields.array(fields.text({ label: 'Paragraph', multiline: true }), { label: 'Paragraphs', itemLabel: (props) => props.value || 'Paragraph' }), platformsLine: fields.text({ label: 'Platforms line' }),
    } }),
    caseStudy: singleton({ label: 'Case study', path: 'src/content/caseStudy/index', schema: {
      title: fields.text({ label: 'Title' }), paragraphs: fields.array(fields.text({ label: 'Paragraph', multiline: true }), { label: 'Paragraphs', itemLabel: (props) => props.value || 'Paragraph' }),
    } }),
  },
  collections: {
    figures: collection({ label: 'Figures', slugField: 'label', path: 'src/content/figures/*/', schema: {
      value: fields.text({ label: 'Value' }), label: fields.slug({ name: { label: 'Label' } }), order: fields.number({ label: 'Order', defaultValue: 1 }),
    } }),
    services: collection({ label: 'Services', slugField: 'title', path: 'src/content/services/*/', schema: {
      title: fields.slug({ name: { label: 'Title' } }), description: fields.text({ label: 'Description', multiline: true }), order: fields.number({ label: 'Order', defaultValue: 1 }),
    } }),
    brands: collection({ label: 'Brands', slugField: 'name', path: 'src/content/brands/*/', schema: {
      name: fields.slug({ name: { label: 'Name' } }), descriptor: fields.text({ label: 'Descriptor' }), bullets: fields.array(fields.text({ label: 'Bullet' }), { label: 'Bullets', itemLabel: (props) => props.value || 'Bullet' }), order: fields.number({ label: 'Order', defaultValue: 1 }),
    } }),
    gallery: collection({ label: 'Gallery items', slugField: 'caption', path: 'src/content/gallery/*', schema: {
      type: fields.select({ label: 'Type', options: [{ label: 'Image', value: 'image' }, { label: 'Video', value: 'video' }], defaultValue: 'image' }), caption: fields.slug({ name: { label: 'Caption' } }), order: fields.number({ label: 'Order', defaultValue: 1 }),
      image: imageField('Image'), poster: imageField('Poster'), mp4: fields.text({ label: 'MP4 URL' }), webm: fields.text({ label: 'WebM URL' }),
    } }),
    testimonials: collection({ label: 'Testimonial content', slugField: 'attribution', path: 'src/content/testimonials/*/', schema: {
      quote: fields.text({ label: 'Content', multiline: true }), attribution: fields.slug({ name: { label: 'Attribution' } }), order: fields.number({ label: 'Order', defaultValue: 1 }),
    } }),
    resultCards: collection({ label: 'Results cards', slugField: 'title', path: 'src/content/resultCards/*/', schema: {
      title: fields.slug({ name: { label: 'Title' } }), period: fields.text({ label: 'Period' }),
      rows: fields.array(fields.object({ label: fields.text({ label: 'Label' }), value: fields.text({ label: 'Value' }) }), { label: 'Rows', itemLabel: (props) => props.fields.label.value || 'Result' }),
      note: fields.text({ label: 'Note', multiline: true }), order: fields.number({ label: 'Order', defaultValue: 1 }),
    } }),
  },
});
