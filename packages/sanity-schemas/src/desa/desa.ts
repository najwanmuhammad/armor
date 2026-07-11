import { defineType } from 'sanity'

export const desa = defineType({
  name: 'desa',
  title: 'Desa',
  type: 'document',
  fields: [
    {
      name: 'nama',
      title: 'Nama Desa',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'nama',
        maxLength: 96,
      },
    },
  ],
})
