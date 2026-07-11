import { defineType } from 'sanity'

export const galeri = defineType({
  name: 'galeri',
  title: 'Galeri',
  type: 'document',
  fields: [
    {
      name: 'judul',
      title: 'Judul',
      type: 'string',
    },
  ],
})
