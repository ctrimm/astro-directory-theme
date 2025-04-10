import { defineCollection, z } from 'astro:content';

const directoryCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    logo: z.string(),
    author: z.string(),
    createdAt: z.date(),
    tags: z.array(z.string()),
    featured: z.boolean().optional().default(false),
    official: z.boolean().optional().default(false),
    new: z.boolean().optional().default(false),
    advertisement: z.boolean().optional().default(false),
    url: z.string().optional(),
    rating: z.number().min(0).max(5).optional().default(0),
  }),
});

export const collections = {
  directory: directoryCollection,
};
