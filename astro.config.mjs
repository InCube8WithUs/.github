import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// If astro-ink exposes an integration, it can be added here later.
// For now we rely on its components/layouts and Tailwind styles.

export default defineConfig({
  site: 'https://incube8withus.github.io',
  integrations: [tailwind({ applyBaseStyles: true }), mdx()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark'
      }
    }
  },
  vite: {
    build: {
      rollupOptions: {
        external: ['astro-ink']
      }
    }
  }
});
