// trpcClient.ts
import { createTRPCClient } from '@trpc/client';
import type { AppRouter } from '../pages/api/trpc/[trpc]';

const getUrl = () => {
    if (typeof window !== "undefined") return ""; // browser should use relative url
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
    return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
}

export const client = createTRPCClient<AppRouter>({
    url: getUrl() + "/api/trpc"

});