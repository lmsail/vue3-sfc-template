import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import path from "path"

export default defineConfig({
    plugins: [
        vue(),
        styleImport({
            libs: [
                {
                    libraryName: 'vant',
                    esModule: true,
                    resolveStyle: (name) => `vant/es/${name}/style`,
                },
            ],
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            '@comps': path.resolve(__dirname, 'src/components'),
        }
    },
    server: {
        // 配置文档：https://vitejs.cn/config/#server-proxy
        proxy: {
            '/api': {
                target: 'http://api.test.com:8080',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
        }
    }
})