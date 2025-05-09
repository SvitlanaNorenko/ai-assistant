import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: [
      'localhost',
      '127.0.0.1', '127.0.0.1:4040',
      '5910-94-139-28-212.ngrok-free.app' // 👈 твой ngrok-домен
    ]
  }
})








