import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { copyFileSync } from 'node:fs';
export default defineConfig({ base: './', plugins: [react(), tailwindcss(), { name:'preserve-resume', closeBundle(){ copyFileSync('Ashish_Singh_Resume.pdf','dist/Ashish_Singh_Resume.pdf'); } }] });
