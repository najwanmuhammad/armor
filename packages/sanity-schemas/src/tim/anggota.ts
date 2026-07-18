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
      title: "Foto Profil",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "penempatan",
      title: "Penempatan Desa / Subunit",
      type: "string",
      description: "Pilih penempatan tugas di Pulau Morotai",
      options: {
        list: [
          { title: "Desa Kolorai", value: "Desa Kolorai" },
          { title: "Desa Yayasan", value: "Desa Yayasan" },
          { title: "Koordinator Unit (Kedua Desa)", value: "Koordinator Unit" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "klaster",
      title: "Klaster / Rumpun",
      type: "string",
      options: {
        list: [
          { title: "Koordinator Unit", value: "Koordinator" },
          { title: "Klaster Saintek", value: "Klaster Saintek" },
          { title: "Klaster Soshum", value: "Klaster Soshum" },
          { title: "Klaster Medika", value: "Klaster Medika" },
          { title: "Klaster Agro", value: "Klaster Agro" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Jabatan / Peran di Tim",
      type: "string",
      description: "Contoh: KORMA, Koordinator Subunit Kolorai, Divisi Media & IT, Anggota",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "jurusan",
      title: "Jurusan • Fakultas",
      type: "string",
      description: "Contoh: Teknik Informatika • MIPA",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "universitas",
      title: "Universitas",
      type: "string",
      initialValue: "Universitas Gadjah Mada",
    }),
    defineField({
      name: "quote",
      title: "Motto / Quote Pengabdian",
      type: "text",
      rows: 3,
      description: "Kutipan atau semangat singkat dalam mengabdi",
    }),
    defineField({
      name: "urutan",
      title: "Urutan Tampil",
      type: "number",
      description: "Angka lebih kecil tampil lebih dulu (misal: 1 untuk KORMA, 2 untuk Wakil, dst.)",
    }),
    defineField({
      name: "instagram",
      title: "Instagram URL (opsional)",
      type: "url",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn URL (opsional)",
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
    select: {
      title: "nama",
      subtitle: "penempatan",
      media: "foto",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? `Penempatan: ${subtitle}` : "Anggota Tim",
        media,
      };
    },
  },
});
