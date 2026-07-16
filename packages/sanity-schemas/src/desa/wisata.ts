import { defineField, defineType } from 'sanity'

export const wisata = defineType({
  name: 'wisata',
  title: 'Wisata, UMKM & Potensi',
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
      name: 'nama',
      title: 'Nama',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tipe',
      title: 'Tipe',
      type: 'string',
      options: {
        list: [
          { title: 'Wisata Alam', value: 'wisata_alam' },
          { title: 'Wisata Budaya', value: 'wisata_budaya' },
          { title: 'Wisata Bahari', value: 'wisata_bahari' },
          { title: 'UMKM / Produk Lokal', value: 'umkm' },
          { title: 'Potensi Desa', value: 'potensi' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'deskripsi',
      title: 'Deskripsi',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'foto',
      title: 'Foto',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'caption', title: 'Keterangan', type: 'string' }],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'koordinat',
      title: 'Koordinat Lokasi (untuk Peta)',
      type: 'object',
      fields: [
        { name: 'lat', title: 'Latitude', type: 'number' },
        { name: 'lng', title: 'Longitude', type: 'number' },
      ],
    }),
    // Field khusus UMKM
    defineField({
      name: 'kontak',
      title: 'Kontak (khusus UMKM)',
      type: 'object',
      hidden: ({ document }) => document?.tipe !== 'umkm',
      fields: [
        { name: 'namaPemilik', title: 'Nama Pemilik', type: 'string' },
        { name: 'whatsapp', title: 'Nomor WhatsApp', type: 'string' },
        { name: 'instagram', title: 'Instagram', type: 'url' },
      ],
    }),
    defineField({
      name: 'hargaTiket',
      title: 'Harga Tiket Masuk (khusus Wisata)',
      type: 'string',
      hidden: ({ document }) =>
        document?.tipe !== 'wisata_alam' &&
        document?.tipe !== 'wisata_budaya' &&
        document?.tipe !== 'wisata_bahari',
      description: 'Contoh: Rp 10.000/orang atau Gratis',
    }),
    defineField({
      name: 'jamBuka',
      title: 'Jam Operasional',
      type: 'string',
      description: 'Contoh: 08.00 - 17.00 WIT',
    }),
    defineField({
      name: 'unggulan',
      title: 'Tampilkan sebagai Unggulan?',
      type: 'boolean',
      initialValue: false,
      description: 'Konten unggulan akan tampil di halaman beranda',
    }),
  ],
  preview: {
    select: {
      title: 'nama',
      subtitle: 'tipe',
      media: 'foto.0',
    },
  },
})
