import { getClient } from '@umami/api-client';

export const umamiClient = getClient({apiKey:process.env.UMAMI_API_KEY,apiEndpoint:process.env.UMAMI_API_CLIENT_ENDPOINT});

