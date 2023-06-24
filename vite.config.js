import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Drikkespillet',
        short_name: 'Drikkespillet',
        description: 'Et drikkespill',
        theme_color: '#000',
        orientation: 'landscape'
      }
    }),
    vitePluginFaviconsInject('./src/assets/logo.png')
  ],
})
