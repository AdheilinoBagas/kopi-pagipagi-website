import sanity from '@sanity/astro'
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [
    sanity({
      projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'placeholder',
      dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: false,
    }),
  ],
})
