import { defineField, defineType } from "sanity";

export const programKerja = defineType({
  name: "programKerja",
  title: "Program Kerja",
  type: "document",
  fields: [
    defineField({
      name: "judul",
      title: "Judul Program",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "deskripsi",
      title: "Deskripsi",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Direncanakan", value: "planned" },
          { title: "Sedang Berjalan", value: "ongoing" },
          { title: "Selesai", value: "done" },
        ],
        layout: "radio",
      },
      initialValue: "planned",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "kategori",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Ekowisata", value: "ekowisata" },
          { title: "Pendidikan", value: "pendidikan" },
          { title: "Kesehatan", value: "kesehatan" },
          { title: "Infrastruktur", value: "infrastruktur" },
          { title: "Ekonomi", value: "ekonomi" },
          { title: "Sosial Budaya", value: "sosial_budaya" },
          { title: "Lainnya", value: "lainnya" },
        ],
      },
    }),
    defineField({
      name: "tanggalMulai",
      title: "Tanggal Mulai",
      type: "date",
    }),
    defineField({
      name: "tanggalSelesai",
      title: "Tanggal Selesai",
      type: "date",
    }),
    defineField({
      name: "lokasi",
      title: "Lokasi Kegiatan",
      type: "string",
      description: "Contoh: Desa Kolorai, Desa Yayasan, atau keduanya",
    }),
    defineField({
      name: "foto",
      title: "Foto Kegiatan",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              title: "Keterangan Foto",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "urutan",
      title: "Urutan Tampil",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Urutan Tampil",
      name: "urutanAsc",
      by: [{ field: "urutan", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "judul", subtitle: "status", media: "foto.0" },
  },
});
