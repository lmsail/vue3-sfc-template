import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "comps": path.resolve(__dirname, "src/components"),
        }
    },
    server: {
        proxy: {
            '/api': 'http://api.test/'
        }
    }
})