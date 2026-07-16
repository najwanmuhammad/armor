import { defineField, defineType } from "sanity";

export const mitra = defineType({
  name: "mitra",
  title: "Mitra & Sponsor",
  type: "document",
  fields: [
    defineField({
      name: "nama",
      title: "Nama Organisasi / Perusahaan",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tipe",
      title: "Tipe",
      type: "string",
      options: {
        list: [
          { title: "Sponsor", value: "sponsor" },
          { title: "Media Partner", value: "media_partner" },
          { title: "Mitra Kegiatan", value: "mitra" },
          { title: "Pendukung Institusi", value: "institusi" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "Website / Sosial Media",
      type: "url",
    }),
    defineField({
      name: "urutan",
      title: "Urutan Tampil",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Tipe & Urutan",
      name: "tipeUrutan",
      by: [
        { field: "tipe", direction: "asc" },
        { field: "urutan", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: { title: "nama", subtitle: "tipe", media: "logo" },
  },
});
