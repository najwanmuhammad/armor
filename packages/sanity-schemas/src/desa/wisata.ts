import { defineType } from 'sanity'

export const wisata = defineType({
  name: 'wisata',
  title: 'Wisata',
  type: 'document',
  fields: [
    {
      name: 'nama',
      title: 'Nama Wisata',
      type: 'string',
    },
    {
      name: 'desa',
      title: 'Desa',
      type: 'reference',
      to: [{ type: 'desa' }],
    },
  ],
})
