import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/gastro/', // Boa prática: adicione a barra final
  build: {
    outDir: 'docs', // 🚨 ESTA LINHA MUDA A PASTA DE SAÍDA DE 'dist' PARA 'docs'
  },
})