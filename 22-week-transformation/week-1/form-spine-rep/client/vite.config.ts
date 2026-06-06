import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    fs: { allow: ['..'] }, // permit importing ../shared/feedback.schema (outside client root)
  },
});

// Teaches: fs.allow: ['..'] is the one line that lets the SPA reach the shared schema living above its root. Without it, Vite blocks the import.
