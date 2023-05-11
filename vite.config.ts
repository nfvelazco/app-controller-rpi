import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Agrupar los módulos react y react-dom en un chunk separado
          react: ['react', 'react-dom'],
        },
      },
    },
  },
})

