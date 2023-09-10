import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add your aliases here
      "@scrum-management/tailwindcss-classnames": "./src/style.generated.ts",
      "@scrum-management/module/*": "./src/modules",
      // Add more aliases as needed
    },
  },
})
