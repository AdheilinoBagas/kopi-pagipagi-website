import {defineField, defineType} from 'sanity'

export const galleryItem = defineType({
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'object',
      fields: [
        {name: 'id', title: 'Indonesian', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'size',
      title: 'Display Size',
      type: 'string',
      options: {
        list: [
          {title: 'Normal', value: 'normal'},
          {title: 'Large', value: 'large'},
        ],
      },
      initialValue: 'normal',
    }),
  ],
  preview: {
    select: {title: 'alt.id', media: 'image'},
  },
})
