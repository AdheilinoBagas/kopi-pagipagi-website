import {defineField, defineType} from 'sanity'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'object',
      fields: [
        {name: 'id', title: 'Indonesian', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
    }),
    defineField({
      name: 'titleLine1',
      title: 'Title Line 1',
      type: 'object',
      fields: [
        {name: 'id', title: 'Indonesian', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
    }),
    defineField({
      name: 'titleLine2',
      title: 'Title Line 2',
      type: 'object',
      fields: [
        {name: 'id', title: 'Indonesian', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {name: 'id', title: 'Indonesian', type: 'text'},
        {name: 'en', title: 'English', type: 'text'},
      ],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'value', title: 'Value', type: 'string'},
            {
              name: 'label',
              title: 'Label',
              type: 'object',
              fields: [
                {name: 'id', title: 'Indonesian', type: 'string'},
                {name: 'en', title: 'English', type: 'string'},
              ],
            },
          ],
        },
      ],
    }),
  ],
})
