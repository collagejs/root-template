import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { cjsImPlugin } from '@collagejs/vite-im';

// https://vite.dev/config/
export default defineConfig({
    plugins: [svelte(), cjsImPlugin()],
});
