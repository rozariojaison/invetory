import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/test/**/*.test.jsx'],
    globals: true,
    environment: 'jsdom'
  }
});