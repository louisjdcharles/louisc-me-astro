// trpcClient.ts
import { createTRPCClient } from '@trpc/client';
import type { AppRouter } from '../pages/api/trpc/[trpc]';

export const client = createTRPCClient<AppRouter>({
    url: process.env.NODE_ENV === 'production'
            ? `${process.env.VERCEL_URL || ""}/api/trpc`
            : `http://localhost:3000/api/trpc`,
});