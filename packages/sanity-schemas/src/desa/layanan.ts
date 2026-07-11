import { defineType } from 'sanity'

export const layanan = defineType({
  name: 'layanan',
  title: 'Layanan',
  type: 'document',
  fields: [
    {
      name: 'nama',
      title: 'Nama Layanan',
      type: 'string',
    },
  ],
})
