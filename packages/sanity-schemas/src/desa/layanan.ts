import { defineField, defineType } from 'sanity'

export const layanan = defineType({
  name: 'layanan',
  title: 'Layanan Desa',
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
      title: 'Nama Layanan',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'kategori',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Administrasi Kependudukan', value: 'kependudukan' },
          { title: 'Surat Menyurat', value: 'surat' },
          { title: 'Perizinan', value: 'perizinan' },
          { title: 'Sosial & Kesehatan', value: 'sosial' },
          { title: 'Lainnya', value: 'lainnya' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'deskripsi',
      title: 'Deskripsi Layanan',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'persyaratan',
      title: 'Persyaratan',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Tambahkan tiap syarat satu per satu',
    }),
    defineField({
      name: 'prosedur',
      title: 'Prosedur / Langkah-langkah',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Tambahkan tiap langkah satu per satu sesuai urutan',
    }),
    defineField({
      name: 'waktuProses',
      title: 'Estimasi Waktu Proses',
      type: 'string',
      description: 'Contoh: 1-3 hari kerja',
    }),
    defineField({
      name: 'biaya',
      title: 'Biaya',
      type: 'string',
      initialValue: 'Gratis',
      description: 'Contoh: Gratis atau Rp 5.000',
    }),
    defineField({
      name: 'ikon',
      title: 'Ikon (emoji)',
      type: 'string',
      description: 'Emoji sebagai ikon layanan. Contoh: 📄 🏠 👶',
    }),
    defineField({
      name: 'urutan',
      title: 'Urutan Tampil',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Urutan Tampil',
      name: 'urutanAsc',
      by: [{ field: 'urutan', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'nama',
      subtitle: 'kategori',
      emoji: 'ikon',
    },
    prepare({ title, subtitle, emoji }) {
      return { title: `${emoji ?? '📋'} ${title}`, subtitle }
    },
  },
})
