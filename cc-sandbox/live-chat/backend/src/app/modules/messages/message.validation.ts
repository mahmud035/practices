import { z } from 'zod';
import { ROOMS } from './message.interface';

const saveMessage = z.object({
  room: z.enum(ROOMS),
  username: z.string().min(1).max(30),
  content: z.string().min(1).max(2000),
  type: z.enum(['message', 'system']).default('message'),
});

export const messageValidation = { saveMessage };
