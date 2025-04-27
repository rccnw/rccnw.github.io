import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://rccnw.github.io',
  // No 'base' property is needed for deploying to the root user/org site
  integrations: [tailwind()]
});
