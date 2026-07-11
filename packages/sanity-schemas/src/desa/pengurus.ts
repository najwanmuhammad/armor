import { defineType } from 'sanity'

export const pengurus = defineType({
  name: 'pengurus',
  title: 'Pengurus',
  type: 'document',
  fields: [
    {
      name: 'nama',
      title: 'Nama',
      type: 'string',
    },
  ],
})
