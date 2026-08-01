import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'kopipagipagi',
  title: 'Kopi Pagi Pagi CMS',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'rj2im5qa',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})
