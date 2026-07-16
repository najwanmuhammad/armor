import { defineField, defineType } from 'sanity'

export const galeri = defineType({
  name: 'galeri',
  title: 'Galeri Foto',
  type: 'document',
  fields: [
    defineField({
      name: 'desa',
      title: 'Desa',
      type: 'reference',
      to: [{ type: 'desa' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'judul',
      title: 'Judul Album',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'kategori',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Kegiatan Desa', value: 'kegiatan' },
          { title: 'Wisata & Alam', value: 'wisata' },
          { title: 'Kehidupan Warga', value: 'warga' },
          { title: 'Infrastruktur', value: 'infrastruktur' },
          { title: 'Budaya & Adat', value: 'budaya' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tanggal',
      title: 'Tanggal',
      type: 'date',
    }),
    defineField({
      name: 'foto',
      title: 'Foto',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'caption', title: 'Keterangan', type: 'string' },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  orderings: [
    {
      title: 'Terbaru',
      name: 'tanggalDesc',
      by: [{ field: 'tanggal', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'judul',
      subtitle: 'kategori',
      media: 'foto.0',
    },
  },
})
