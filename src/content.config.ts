import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const optionalUrl = z.preprocess(
  (value) => (value === '' ? undefined : value),
  z.string().url().optional(),
);

const optionalImage = z.preprocess(
  (value) => (value === '' ? undefined : value),
  z.string().optional(),
);

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['思想与经历', '技术文章']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    coverImage: optionalImage,
  }),
});

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    technologies: z.array(z.string()).default([]),
    repo: optionalUrl,
    demo: optionalUrl,
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, works };
