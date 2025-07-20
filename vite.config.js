import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), // ou vue() se for Vue
    VitePWA({
      injectManifest: false,
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg',
        'robots.txt',
        'apple-touch-icon.png',
        'assets/icons/icon-144x144.png',
        'assets/icons/icon-192x192.png',
        'assets/icons/icon-512x512.png',
        'assets/homepage-mobile.png',
        'assets/homepage-wide.png'
      ],
      manifest: {
        id: "/",
        name: 'ElaineTavaresDev',
        short_name: 'ElaineTavaresDev',
        description: 'Portfófio - Desenvolvedora Front-End',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          {
            src: 'assets/icons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'assets/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'assets/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable any'
          }
        ],
         screenshots: [
          {
            src: 'assets/homepage-wide.png',
            sizes: '1366x768',
            type: 'image/png',
            form_factor: 'wide'
          },
          {
            src: 'assets/homepage-mobile.png',
            sizes: '414x896',
            type: 'image/png',
            form_factor: 'narrow'
          }
        ]
      }
    })],
  
})
