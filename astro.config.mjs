// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://irfan-dev.vercel.app',
  integrations: [sitemap(), mdx(), icon()],
  vite: {
    plugins: [tailwindcss()]
  }
});