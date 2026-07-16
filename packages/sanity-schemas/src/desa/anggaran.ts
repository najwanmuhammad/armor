import { defineField, defineType } from 'sanity'

export const anggaran = defineType({
  name: 'anggaran',
  title: 'Transparansi Anggaran',
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
      name: 'tahun',
      title: 'Tahun Anggaran',
      type: 'number',
      validation: (Rule) => Rule.required().min(2000).max(2100),
    }),
    defineField({
      name: 'totalAnggaran',
      title: 'Total Anggaran (Rp)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sumberDana',
      title: 'Sumber Dana',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'nama', title: 'Sumber', type: 'string', description: 'Contoh: Dana Desa, ADD, PAD' },
            { name: 'jumlah', title: 'Jumlah (Rp)', type: 'number' },
          ],
          preview: {
            select: { title: 'nama', subtitle: 'jumlah' },
          },
        },
      ],
    }),
    defineField({
      name: 'realisasi',
      title: 'Realisasi Belanja',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'kategori',
              title: 'Kategori Belanja',
              type: 'string',
              options: {
                list: [
                  { title: 'Penyelenggaraan Pemerintahan', value: 'pemerintahan' },
                  { title: 'Pembangunan Desa', value: 'pembangunan' },
                  { title: 'Pembinaan Kemasyarakatan', value: 'kemasyarakatan' },
                  { title: 'Pemberdayaan Masyarakat', value: 'pemberdayaan' },
                  { title: 'Penanggulangan Bencana', value: 'bencana' },
                  { title: 'Lainnya', value: 'lainnya' },
                ],
              },
            },
            { name: 'uraian', title: 'Uraian Kegiatan', type: 'string' },
            { name: 'anggaran', title: 'Anggaran (Rp)', type: 'number' },
            { name: 'realisasi', title: 'Realisasi (Rp)', type: 'number' },
          ],
          preview: {
            select: { title: 'uraian', subtitle: 'kategori' },
          },
        },
      ],
    }),
    defineField({
      name: 'dokumen',
      title: 'Dokumen APBDes (PDF)',
      type: 'file',
      options: { accept: '.pdf' },
      description: 'Upload file PDF APBDes untuk diunduh warga',
    }),
    defineField({
      name: 'catatan',
      title: 'Catatan',
      type: 'text',
      rows: 3,
    }),
  ],
  orderings: [
    {
      title: 'Tahun Terbaru',
      name: 'tahunDesc',
      by: [{ field: 'tahun', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'tahun',
      subtitle: 'desa.nama',
    },
    prepare({ title, subtitle }) {
      return { title: `Anggaran ${title}`, subtitle }
    },
  },
})
