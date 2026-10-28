import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const workCollection = defineCollection({
  // Gunakan glob loader untuk membaca file .md di folder content/work
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    desc: z.array(z.string()),
    year: z.string(),
    tech: z.array(z.string()),
    thumbnail: z.string(),
    images: z.array(z.string()).optional().default([]),
    category: z.array(z.number()).optional().default([1]),
    preview: z.string().optional(),
    code: z.string().optional(),
  }),
});

export const collections = {
  work: workCollection,
};