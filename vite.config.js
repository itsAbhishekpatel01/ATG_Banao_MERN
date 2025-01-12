// filepath: /Volumes/Data/Developement/Internship Tasks/Banao MERN/Banao_Mern_Groups/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all addresses, including LAN
    port: 5173, // Ensure this matches the port you are using
  },
})