import sanity from '@sanity/astro'
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [
    sanity({
      projectId: 'rj2im5qa',
      dataset: 'production',
      useCdn: false,
    }),
  ],
})
