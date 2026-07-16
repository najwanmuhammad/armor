import { defineField, defineType } from 'sanity'

export const berita = defineType({
  name: 'berita',
  title: 'Berita & Pengumuman',
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
      title: 'Judul Berita',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: { source: 'judul', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'kategori',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Berita Desa', value: 'berita' },
          { title: 'Pengumuman', value: 'pengumuman' },
          { title: 'Kegiatan', value: 'kegiatan' },
          { title: 'Wisata', value: 'wisata' },
          { title: 'UMKM', value: 'umkm' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Foto Utama',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ringkasan',
      title: 'Ringkasan',
      type: 'text',
      rows: 3,
      description: 'Tampil di halaman list berita. Maksimal 200 karakter.',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'konten',
      title: 'Isi Berita',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'caption', title: 'Keterangan Foto', type: 'string' }],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'penulis',
      title: 'Penulis',
      type: 'string',
    }),
    defineField({
      name: 'tanggal',
      title: 'Tanggal Terbit',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
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
      subtitle: 'desa.nama',
      media: 'thumbnail',
    },
  },
})
