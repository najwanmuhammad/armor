import { defineType } from 'sanity'

export const anggota = defineType({
  name: 'anggota',
  title: 'Anggota',
  type: 'document',
  fields: [
    {
      name: 'nama',
      title: 'Nama',
      type: 'string',
    },
  ],
})
