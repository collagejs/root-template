import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { cjsCssPlugin } from '@collagejs/vite-css';

const port = 6101;
// https://vite.dev/config/
export default defineConfig(({ command }) => {
    return {
        plugins: [svelte(), cjsCssPlugin({
            serverPort: port,
            aim: false
        })],
        base: command === 'build' ? `http://localhost:${port}/` : '/',
    };
});
