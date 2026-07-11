import { defineType } from 'sanity'

export const programKerja = defineType({
  name: 'programKerja',
  title: 'Program Kerja',
  type: 'document',
  fields: [
    {
      name: 'nama',
      title: 'Nama Program',
      type: 'string',
    },
  ],
})
