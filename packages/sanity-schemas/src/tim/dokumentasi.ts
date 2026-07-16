import { defineField, defineType } from "sanity";

export const dokumentasi = defineType({
  name: "dokumentasi",
  title: "Dokumentasi Kegiatan",
  type: "document",
  fields: [
    defineField({
      name: "judul",
      title: "Judul Album",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "deskripsi",
      title: "Deskripsi Kegiatan",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "kategori",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Kegiatan Program Kerja", value: "proker" },
          { title: "Momen Tim", value: "tim" },
          { title: "Kehidupan di Desa", value: "desa" },
          { title: "Alam & Wisata", value: "wisata" },
          { title: "Seremonial", value: "seremonial" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tanggal",
      title: "Tanggal Kegiatan",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "foto",
      title: "Foto",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              title: "Keterangan",
              type: "string",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  orderings: [
    {
      title: "Terbaru",
      name: "tanggalDesc",
      by: [{ field: "tanggal", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "judul", subtitle: "tanggal", media: "foto.0" },
  },
});
