import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thesheng.netlify.app',
  integrations: [sitemap()],
});
