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
  '/portal',
  '/reviews',
  '/roi-tool',
  '/offers',
  '/terms',
  '/privacy-policy',
  '/products/cogs-analytics-dashboard',
  '/products/cfo-dashboard',
  '/products/rationkart',
  '/products/stocksarthi',
  '/products/billsarthi',
  '/products/claimo',
  '/products/karmsarthi',
  '/products/cakesarthi',
  '/products/gymsarthi',
  '/products/menusarthi',
  '/products/supplysarthi',
  '/products/hisabsarthi',
  '/products/loansarthi',
  '/products/vendorsarthi',
  '/products/personalfinsarthi',
  '/products/hiresarthi',
  '/products/budgetsarthi',
  '/products/salarysarthi',
  '/products/bookingsarthi'
];

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      Sitemap({ 
        hostname: 'https://surajdx.com', 
        dynamicRoutes,
        generateRobotsTxt: false
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
