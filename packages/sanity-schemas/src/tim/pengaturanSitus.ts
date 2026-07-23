import { defineType, defineField } from 'sanity'

export const pengaturanSitus = defineType({
  name: 'pengaturanSitus',
  title: 'Pengaturan Aset',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (Judul Aset)',
      type: 'string',
      description: 'Masukkan nama/judul aset ini',
    }),
    defineField({
      name: 'type',
      title: 'Tipe Aset',
      type: 'string',
      options: {
        list: [
          { title: 'Image (Gambar)', value: 'image' },
          { title: 'Video', value: 'video' },
          { title: 'Font', value: 'font' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'file',
      title: 'Tambahkan File',
      type: 'file',
      options: {
        accept: 'image/*,video/mp4,video/webm,.woff,.woff2,.ttf,.otf',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
    },
  },
})
