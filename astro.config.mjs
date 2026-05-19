import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sntk-76.github.io/resume-web-app',
  base: '/resume-web-app',
  integrations: [sitemap()],
  devToolbar: {
    enabled: false,
  },
});
