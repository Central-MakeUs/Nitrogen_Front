// Example Code
import { api } from '@/shared/api/client';
import type { User } from '../model/schema';

export const userApi = {
  getMe: () => api.get<User>('users/me'),
  getById: (id: string) => api.get<User>(`users/${id}`),
};
