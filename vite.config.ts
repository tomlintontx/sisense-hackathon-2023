import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import webExtension from '@samrum/vite-plugin-web-extension'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log({ command, mode })
  return {
    plugins: [
      react({
        jsxImportSource: "@emotion/react",
        babel: {
          plugins: ["@emotion/babel-plugin"],
        },
      }),
      /* (command === 'build') &&  */
      webExtension({
        manifest: {
          manifest_version: 3,
          name: 'Hackathon 2023',
          version: '1.0.0',
          // permissions: [
          //   // "scripting"
          // ],
          // action: {
          //   default_popup: 'index.html',
          // },
          content_scripts: [
            {
              matches: ["<all_urls>"], // TODO? only http(s)?
              js: ['src/entry-content-script.tsx'],
              css: [
                'src/content/style.css',
                // 'src/components/PlayerCard/PlayerCard.css',
              ],
            }
          ],
          background: {
            service_worker: 'src/entry-background-worker.ts'
          },
        }
      }),
    ],
    build: {
    }
  }
})
