// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  site: 'https://whiteravens.net',
  integrations: [icon(), sitemap()],
  build: {
    // keep every stylesheet external so the CSP can stay `style-src 'self'`
    inlineStylesheets: 'never',
  },
  vite: {
    plugins: [yaml()],
    build: {
      // never inline scripts into the HTML — the CSP only allowlists
      // external same-origin scripts plus the hashed theme-init snippet
      assetsInlineLimit: 0,
    },
  },
});
