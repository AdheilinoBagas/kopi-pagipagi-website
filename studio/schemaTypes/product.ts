import {defineField, defineType} from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
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
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {name: 'id', title: 'Indonesian', type: 'text'},
        {name: 'en', title: 'English', type: 'text'},
      ],
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g. "Rp 350.000"',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Active', value: 'active'},
          {title: 'Inactive', value: 'inactive'},
        ],
      },
      initialValue: 'active',
      hidden: true,
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {title: 'name.id', subtitle: 'price', media: 'image'},
  },
})
