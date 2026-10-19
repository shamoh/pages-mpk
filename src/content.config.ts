import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// An achievement = one Markdown file in src/content/uspechy/ (see _vzor.md there).
// Files starting with "_" are templates, not achievements.
const uspechy = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/uspechy' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    /** veda = knowledge (olympiads, competitions, papers), sport = discgolf and other sports */
    kategorie: z.enum(['veda', 'sport']),
    /** the result, e.g. "1. místo", "finále", "úspěšný řešitel" */
    vysledek: z.string().optional(),
    /** where it happened */
    misto: z.string().optional(),
    odkaz: z.string().url().optional(),
    /** a sample entry from the start of the site: shown with a "ukázka" badge until it is deleted */
    ukazka: z.boolean().default(false),
  }),
});

export const collections = { uspechy };
