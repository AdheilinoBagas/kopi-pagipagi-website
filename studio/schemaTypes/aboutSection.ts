import {defineField, defineType} from 'sanity'

export const aboutSection = defineType({
  name: 'aboutSection',
  title: 'About Section',
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
      name: 'title',
      title: 'Section Title',
      type: 'object',
      fields: [
        {name: 'id', title: 'Indonesian', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
    }),
    defineField({
      name: 'description1',
      title: 'Description 1',
      type: 'object',
      fields: [
        {name: 'id', title: 'Indonesian', type: 'text'},
        {name: 'en', title: 'English', type: 'text'},
      ],
    }),
    defineField({
      name: 'description2',
      title: 'Description 2',
      type: 'object',
      fields: [
        {name: 'id', title: 'Indonesian', type: 'text'},
        {name: 'en', title: 'English', type: 'text'},
      ],
    }),
    defineField({
      name: 'aboutImage',
      title: 'About Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'missionCards',
      title: 'Mission Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'object',
              fields: [
                {name: 'id', title: 'Indonesian', type: 'string'},
                {name: 'en', title: 'English', type: 'string'},
              ],
            },
            {
              name: 'description',
              title: 'Description',
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
