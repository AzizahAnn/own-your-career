import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel([
            // 'resources/css/app.css',  ← Comment ini dulu
            'resources/js/app.js',
        ]),
    ],
});