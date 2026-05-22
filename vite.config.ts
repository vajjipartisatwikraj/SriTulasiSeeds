import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { vercel } from '@tanstack/start-vercel/vite'

export default defineConfig({
  plugins: [
    tanstackStart({
      adapter: vercel(),
    }),
    react(),
  ],
})