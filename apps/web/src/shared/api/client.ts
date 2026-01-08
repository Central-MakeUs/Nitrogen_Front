import ky from 'ky';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8080';

export const apiClient = ky.create({
  prefixUrl: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  retry: {
    limit: 2,
    methods: ['get'],
    statusCodes: [408, 429, 500, 502, 503, 504],
  },
});

// API 헬퍼
export const api = {
  get: <T>(url: string, options?: Parameters<typeof apiClient.get>[1]) =>
    apiClient.get(url, options).json<T>(),

  post: <T>(url: string, json?: unknown, options?: Parameters<typeof apiClient.post>[1]) =>
    apiClient.post(url, { json, ...options }).json<T>(),

  put: <T>(url: string, json?: unknown, options?: Parameters<typeof apiClient.put>[1]) =>
    apiClient.put(url, { json, ...options }).json<T>(),

  patch: <T>(url: string, json?: unknown, options?: Parameters<typeof apiClient.patch>[1]) =>
    apiClient.patch(url, { json, ...options }).json<T>(),

  delete: <T>(url: string, options?: Parameters<typeof apiClient.delete>[1]) =>
    apiClient.delete(url, options).json<T>(),
};
