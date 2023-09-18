import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import webExtension from '@samrum/vite-plugin-web-extension'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  return {
    plugins: [
      react(),
      webExtension({
        manifest: {
          manifest_version: 3,
          name: 'Hackathon 2023',
          version: '1.0.0',
          action: {
            default_popup: 'index.html',
          },
          // content_security_policy: {

          // }
          content_scripts: [
            {
              matches: ["<all_urls>"], // TODO? only http(s)?
              js: ['src/content/main.ts']
            }
          ]
        }
      }),
    ],
    build: {
    }
  }
})
