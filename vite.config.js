import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader';
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    svgLoader({
      defaultImport: 'raw' // or 'raw'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/auto-import.scss";` //rename to auto-import.scss
      }
    }
  },
  // build: {
  //
  //   /** If you set esmExternals to true, this plugins assumes that
  //    all external dependencies are ES modules */
  //
  //   commonjsOptions: {
  //     esmExternals: true
  //   },
  // },
  esbuild: { loader: { '.js': '.jsx' } } // <--- Added this line
})
