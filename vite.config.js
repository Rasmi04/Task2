import { defineConfig } from 'vite';
import nunjucks from 'vite-plugin-nunjucks';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    plugins: [
        nunjucks({
            variables: { 'index.html': { title: 'The Gilded Page' } },
        }),
    ],
    root: 'src',
    base: './',
    publicDir: '../public',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                browse: resolve(__dirname, 'src/browse.html'),
                request: resolve(__dirname, 'src/request.html'),
            },
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
});
