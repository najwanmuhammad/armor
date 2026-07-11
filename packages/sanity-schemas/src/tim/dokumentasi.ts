import { defineType } from 'sanity'

export const dokumentasi = defineType({
  name: 'dokumentasi',
  title: 'Dokumentasi',
  type: 'document',
  fields: [
    {
      name: 'judul',
      title: 'Judul',
      type: 'string',
    },
  ],
})
