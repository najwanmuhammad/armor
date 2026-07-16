import { defineField, defineType } from "sanity";

export const anggota = defineType({
  name: "anggota",
  title: "Anggota Tim",
  type: "document",
  fields: [
    defineField({
      name: "nama",
      title: "Nama Lengkap",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "foto",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "jurusan",
      title: "Jurusan",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "universitas",
      title: "Universitas",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Jabatan di Tim",
      type: "string",
      options: {
        list: [
          { title: "Ketua", value: "ketua" },
          { title: "Wakil Ketua", value: "wakil_ketua" },
          { title: "Sekretaris", value: "sekretaris" },
          { title: "Bendahara", value: "bendahara" },
          { title: "Anggota", value: "anggota" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "urutan",
      title: "Urutan Tampil",
      type: "number",
      description: "Angka lebih kecil tampil lebih dulu",
    }),
    defineField({
      name: "instagram",
      title: "Instagram (opsional)",
      type: "url",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn (opsional)",
      type: "url",
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
    select: { title: "nama", subtitle: "role", media: "foto" },
  },
});
