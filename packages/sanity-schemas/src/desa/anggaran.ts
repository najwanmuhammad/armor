import { defineType } from 'sanity'

export const anggaran = defineType({
  name: 'anggaran',
  title: 'Anggaran',
  type: 'document',
  fields: [
    {
      name: 'tahun',
      title: 'Tahun',
      type: 'string',
    },
  ],
})
