import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { cjsImPlugin } from '@collagejs/vite-im';

const port = 6100;
// https://vite.dev/config/
export default defineConfig({
    plugins: [svelte(), cjsImPlugin()],
    server: {
        port,
    },
    preview: {
        port,
    }
});
