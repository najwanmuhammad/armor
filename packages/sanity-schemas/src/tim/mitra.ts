import { defineType } from 'sanity'

export const mitra = defineType({
  name: 'mitra',
  title: 'Mitra',
  type: 'document',
  fields: [
    {
      name: 'nama',
      title: 'Nama Mitra',
      type: 'string',
    },
  ],
})
