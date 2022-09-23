import { createAstroTRPCApiHandler } from 'astro-trpc';
import * as trpc from '@trpc/server';
import { z } from 'zod';
import Parser from 'rss-parser';

export type BlogItem = {
    title: string,
    date_posted: Date,
    link: string
}

// the tRPC router
export const appRouter = trpc.router()
    .query('greeting', {
        input: z
            .object({
                name: z.string().nullish(),
            }).nullish(),

        resolve({ input }) {
            return {
                greeting: `hello ${input?.name ?? 'world!'}`,
            };
        }
    })
    .query('books', {
        async resolve({}) {
            const parser = new Parser()

            const feed = await parser.parseURL("https://www.goodreads.com/review/list_rss/149512363?key=n2G3kbI4eGAqybgjxaGmWowwODeoR2fpzrIaOAac4YRf4vvP&shelf=currently-reading")

            return feed.items.map(item => item.title || "" )
        }
    })
    .query('medium', {
        async resolve({}) {
            const parser = new Parser()

            const feed = await parser.parseURL("https://medium.com/feed/@louisjdcharles")
            
            const posts = feed.items.length > 4 ? feed.items.slice(0, 3) : feed.items

            return posts.map(item => { return { title: item.title || '', date_posted: new Date(item.isoDate || 0), link: item.link || '' } }) as BlogItem[]
        }
    });

// type definition of the router
export type AppRouter = typeof appRouter;

// API handler
export const all = createAstroTRPCApiHandler({
    router: appRouter,
    createContext: () => null,
});