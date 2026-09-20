import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // ← ajoute

export default defineConfig({
  plugins: [react(), tailwindcss()], // ← ajoute tailwindcss()
})