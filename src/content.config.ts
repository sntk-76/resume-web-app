import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    summary: z.string(),
    coverImage: z.string(),
    githubUrl: z.url().optional(),
    demoUrl: z.url().optional(),
    featured: z.boolean().default(false),
    techStack: z.array(z.string()),
    impact: z.array(z.string()),
    order: z.number().default(99),
  }),
});

const certificates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/certificates' }),
  schema: z.object({
    title: z.string(),
    provider: z.string(),
    topic: z.string(),
    pdfUrl: z.string(),
    order: z.number().default(99),
  }),
});

export const collections = {
  projects,
  certificates,
};
