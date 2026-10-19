import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://martin.kramolis.cz',
  output: 'static',
  integrations: [sitemap()],
});
