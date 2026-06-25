import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    ssr: {
      // react-helmet-async ships as CommonJS. When externalized in the SSR
      // (prerender) build, Node's ESM loader can't resolve its named exports
      // ("does not provide an export named 'Helmet'"). Bundling it lets Vite
      // handle the CJS→ESM interop at build time. See scripts/prerender.ts.
      noExternal: ['react-helmet-async'],
    },
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
