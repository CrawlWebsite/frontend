import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@frontend/tailwindcss-classnames": path.resolve(
        __dirname,
        "./src/style.generated.ts"
      ),
      "@frontend": path.resolve(__dirname, "./src/"),
      "/helper": path.resolve(__dirname, "./src/helpers/"),
    },
  },
})
