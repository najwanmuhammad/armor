import { defineField, defineType } from 'sanity'

export const pengurus = defineType({
  name: 'pengurus',
  title: 'Pengurus Desa',
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
      title: 'Nama Lengkap',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'jabatan',
      title: 'Jabatan',
      type: 'string',
      options: {
        list: [
          { title: 'Kepala Desa', value: 'kepala_desa' },
          { title: 'Sekretaris Desa', value: 'sekretaris' },
          { title: 'Bendahara', value: 'bendahara' },
          { title: 'Kepala Urusan Pemerintahan', value: 'kaur_pemerintahan' },
          { title: 'Kepala Urusan Pembangunan', value: 'kaur_pembangunan' },
          { title: 'Kepala Urusan Kesejahteraan', value: 'kaur_kesejahteraan' },
          { title: 'Kepala Urusan Keuangan', value: 'kaur_keuangan' },
          { title: 'Kepala Dusun', value: 'kadus' },
          { title: 'Lainnya', value: 'lainnya' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'jabatanCustom',
      title: 'Jabatan (jika Lainnya)',
      type: 'string',
      hidden: ({ document }) => document?.jabatan !== 'lainnya',
    }),
    defineField({
      name: 'foto',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'urutan',
      title: 'Urutan Tampil',
      type: 'number',
      description: 'Angka lebih kecil tampil lebih dulu. Kepala Desa = 1',
    }),
  ],
  orderings: [
    {
      title: 'Urutan Jabatan',
      name: 'urutanAsc',
      by: [{ field: 'urutan', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'nama',
      subtitle: 'jabatan',
      media: 'foto',
    },
  },
})
