import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry:'src/main.js',
        formats: ['es'],
        fileName: 'vueWC',
      },
    },
    plugins: [vue({})]
  };
});