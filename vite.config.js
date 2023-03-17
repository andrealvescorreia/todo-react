import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

base: "/todo-react/"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
