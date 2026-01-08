// Example Code
import { z } from 'zod';

// User 엔티티 스키마
export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
  createdAt: z.string().datetime().optional(),
});

export type User = z.infer<typeof UserSchema>;
