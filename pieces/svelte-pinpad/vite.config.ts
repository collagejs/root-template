import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { cjsCssPlugin } from '@collagejs/vite-css';

// https://vite.dev/config/
export default defineConfig(({ command }) => {
    const port = 6100;
    return {
        plugins: [svelte(), cjsCssPlugin({
            serverPort: port,
            aim: false
        })],
        base: command === 'build' ? `http://localhost:${port}/` : '/',
    };
});
