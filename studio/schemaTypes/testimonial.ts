import {defineField, defineType} from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'object',
      fields: [
        {name: 'id', title: 'Indonesian', type: 'text', validation: (rule) => rule.required()},
        {name: 'en', title: 'English', type: 'text', validation: (rule) => rule.required()},
      ],
    }),
    defineField({
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'avatarLetter',
      title: 'Avatar Letter',
      type: 'string',
      description: 'Single letter for the avatar circle',
      validation: (rule) => rule.max(1),
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {title: 'authorName', subtitle: 'quote.id'},
  },
})
