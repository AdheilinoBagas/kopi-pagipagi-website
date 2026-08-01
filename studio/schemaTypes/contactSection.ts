import {defineField, defineType} from 'sanity'

export const contactSection = defineType({
  name: 'contactSection',
  title: 'Contact Section',
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
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {name: 'id', title: 'Indonesian', type: 'text'},
        {name: 'en', title: 'English', type: 'text'},
      ],
    }),
    defineField({
      name: 'impactTitle',
      title: 'Impact Title',
      type: 'object',
      fields: [
        {name: 'id', title: 'Indonesian', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
    }),
    defineField({
      name: 'impactDescription',
      title: 'Impact Description',
      type: 'object',
      fields: [
        {name: 'id', title: 'Indonesian', type: 'text'},
        {name: 'en', title: 'English', type: 'text'},
      ],
    }),
    defineField({
      name: 'impactStats',
      title: 'Impact Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'value', title: 'Value', type: 'string'},
            {name: 'label', title: 'Label', type: 'string'},
          ],
        },
      ],
    }),
    defineField({
      name: 'operatingHours',
      title: 'Operating Hours',
      type: 'object',
      fields: [
        {
          name: 'weekday',
          title: 'Weekday Hours',
          type: 'object',
          fields: [
            {name: 'id', title: 'Indonesian', type: 'string'},
            {name: 'en', title: 'English', type: 'string'},
          ],
        },
        {
          name: 'weekend',
          title: 'Weekend Hours',
          type: 'object',
          fields: [
            {name: 'id', title: 'Indonesian', type: 'string'},
            {name: 'en', title: 'English', type: 'string'},
          ],
        },
      ],
    }),
  ],
})
