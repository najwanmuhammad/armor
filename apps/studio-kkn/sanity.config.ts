import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'

// Schema tim
import {anggota} from '@arungimorotai/sanity-schemas/tim/anggota'
import {programKerja} from '@arungimorotai/sanity-schemas/tim/programKerja'
import {dokumentasi} from '@arungimorotai/sanity-schemas/tim/dokumentasi'
import {mitra} from '@arungimorotai/sanity-schemas/tim/mitra'

// Schema desa
import {desa} from '@arungimorotai/sanity-schemas/desa/desa'
import {berita} from '@arungimorotai/sanity-schemas/desa/berita'
import {wisata} from '@arungimorotai/sanity-schemas/desa/wisata'
import {pengurus} from '@arungimorotai/sanity-schemas/desa/pengurus'
import {anggaran} from '@arungimorotai/sanity-schemas/desa/anggaran'
import {galeri} from '@arungimorotai/sanity-schemas/desa/galeri'
import {layanan} from '@arungimorotai/sanity-schemas/desa/layanan'

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_PROJECT_ID

const datasetTim = process.env.SANITY_STUDIO_DATASET_TIM
const datasetDesa = process.env.SANITY_STUDIO_DATASET_DESA

if (!projectId) {
  throw new Error('Missing SANITY_PROJECT_ID environment variable')
}

if (!datasetTim) {
  throw new Error('Missing SANITY_DATASET_TIM environment variable')
}

if (!datasetDesa) {
  throw new Error('Missing SANITY_DATASET_DESA environment variable')
}

export default defineConfig([
  {
    name: 'tim',
    title: 'Website Tim KKN',
    projectId,
    dataset: datasetTim,
    basePath: '/tim',
    plugins: [structureTool(), visionTool(), media()],
    schema: {types: [anggota, programKerja, dokumentasi, mitra]},
  },
  {
    name: 'desa',
    title: 'Website Desa',
    projectId,
    dataset: datasetDesa,
    basePath: '/desa',
    plugins: [structureTool(), visionTool(), media()],
    schema: {types: [desa, berita, wisata, pengurus, anggaran, galeri, layanan]},
  },
])
