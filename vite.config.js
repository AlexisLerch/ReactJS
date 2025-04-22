import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['appwrite'], // Asegura que Vite lo procese al hacer dev
  },
  ssr: {
    noExternal: ['appwrite'], // Necesario para compilaciones tipo SSR o Vercel
  }
})