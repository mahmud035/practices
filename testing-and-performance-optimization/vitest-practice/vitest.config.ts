import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: false, // keep explicit imports — better for learning
    include: ['tests/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
    },
  },
});
