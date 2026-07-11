import { defineType } from 'sanity'

export const berita = defineType({
  name: 'berita',
  title: 'Berita',
  type: 'document',
  fields: [
    {
      name: 'judul',
      title: 'Judul',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'judul',
        maxLength: 96,
      },
    },
    {
      name: 'desa',
      title: 'Desa',
      type: 'reference',
      to: [{ type: 'desa' }],
    },
  ],
})
