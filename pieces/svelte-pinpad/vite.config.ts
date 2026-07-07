import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { cjsCssPlugin } from '@collagejs/vite-css';

// https://vite.dev/config/
export default defineConfig(({ command }) => {
    return {
        plugins: [svelte(), cjsCssPlugin({
            serverPort: 6100,
            aim: false
        })],
        base: command === 'build' ? 'http://localhost:6100/' : '/',
    };
});
