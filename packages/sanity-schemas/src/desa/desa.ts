import { defineField, defineType } from 'sanity'

export const desa = defineType({
  name: 'desa',
  title: 'Profil Desa',
  type: 'document',
  // Hanya boleh ada 2 dokumen: kolorai & yayasan
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'nama',
      title: 'Nama Desa',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Isi dengan "kolorai" atau "yayasan" — jangan diubah!',
      options: { source: 'nama' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline Desa',
      type: 'string',
      description: 'Kalimat singkat yang menggambarkan desa. Contoh: "Surga Tersembunyi di Morotai"',
    }),
    defineField({
      name: 'fotoCover',
      title: 'Foto Cover / Hero',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'warna',
      title: 'Warna Aksen Desa',
      type: 'string',
      description: 'Warna hex untuk identitas visual desa ini. Contoh: #1B6B8A',
      validation: (Rule) =>
        Rule.regex(/^#[0-9A-Fa-f]{6}$/, { name: 'hex color' }).warning(
          'Format warna harus hex, contoh: #1B6B8A'
        ),
    }),
    defineField({
      name: 'sejarah',
      title: 'Sejarah Desa',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'visi',
      title: 'Visi',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'misi',
      title: 'Misi',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Tambahkan tiap poin misi satu per satu',
    }),
    defineField({
      name: 'demografi',
      title: 'Data Demografi',
      type: 'object',
      fields: [
        { name: 'jumlahPenduduk', title: 'Jumlah Penduduk (jiwa)', type: 'number' },
        { name: 'jumlahKK', title: 'Jumlah KK', type: 'number' },
        { name: 'jumlahLakiLaki', title: 'Laki-laki (jiwa)', type: 'number' },
        { name: 'jumlahPerempuan', title: 'Perempuan (jiwa)', type: 'number' },
        { name: 'luasWilayah', title: 'Luas Wilayah', type: 'string', description: 'Contoh: 12,5 km²' },
        { name: 'jumlahDusun', title: 'Jumlah Dusun', type: 'number' },
      ],
    }),
    defineField({
      name: 'kontak',
      title: 'Kontak Desa',
      type: 'object',
      fields: [
        { name: 'alamat', title: 'Alamat Lengkap', type: 'text', rows: 2 },
        { name: 'telepon', title: 'Nomor Telepon / WhatsApp', type: 'string' },
        { name: 'email', title: 'Email', type: 'string' },
        { name: 'instagram', title: 'Instagram', type: 'url' },
        { name: 'facebook', title: 'Facebook', type: 'url' },
      ],
    }),
    defineField({
      name: 'koordinat',
      title: 'Koordinat Desa',
      type: 'object',
      fields: [
        { name: 'lat', title: 'Latitude', type: 'number' },
        { name: 'lng', title: 'Longitude', type: 'number' },
      ],
    }),
  ],
  preview: {
    select: { title: 'nama', subtitle: 'tagline', media: 'fotoCover' },
  },
})
