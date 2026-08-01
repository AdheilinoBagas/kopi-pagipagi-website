import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'Kopi Pagi Pagi',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      initialValue: '6281217219682',
    }),
    defineField({
      name: 'instagramHandle',
      title: 'Instagram Handle',
      type: 'string',
      initialValue: 'kopi.pagipagi',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      initialValue: 'kopi.bangunpagi@gmail.com',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
  ],
})
