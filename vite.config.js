import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import { ViteFaviconsPlugin } from "vite-plugin-favicon";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA(),
    ViteFaviconsPlugin({
      logo: 'src/assets/logo.png'
    })
  ],
})