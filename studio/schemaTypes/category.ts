import {defineField, defineType} from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Product Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'object',
      fields: [
        {name: 'id', title: 'Indonesian', type: 'string', validation: (rule) => rule.required()},
        {name: 'en', title: 'English', type: 'string', validation: (rule) => rule.required()},
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name.id'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {title: 'name.id'},
  },
})
