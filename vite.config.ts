import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import Sitemap from 'vite-plugin-sitemap';

const dynamicRoutes = [
  '/',
  '/about',
  '/contact',
  '/pricing',
  '/products',
  '/products/loansarthi',
  '/products/billsarthi',
  '/products/cakesarthi',
  '/products/claimo',
  '/products/cogsdashboard',
  '/products/gymsarthi',
  '/products/hisabsarthi',
  '/products/karmsarthi',
  '/products/menusarthi',
  '/products/rationkart',
  '/products/stocksarthi',
  '/products/supplysarthi'
];

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      Sitemap({ 
        hostname: 'https://www.surajautomation.com', 
        dynamicRoutes 
      })
    ],
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
