// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  site: 'https://whiteravens.net',
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [yaml()],
  },
});
