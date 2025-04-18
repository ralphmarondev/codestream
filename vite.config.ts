import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [vue()],
    base: mode === 'development' ? '' : '/codestream/',
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    }
  }
})
