import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import Sitemap from 'vite-plugin-sitemap';

const dynamicRoutes = [
  '/about',
  '/services',
  '/services/google-apps-script-development',
  '/services/custom-software-development',
  '/services/web-application-development',
  '/services/whatsapp-automation',
  '/services/mis-dashboard-development',
  '/services/ai-automation-services',
  '/services/inventory-management-software',
  '/custom-software-noida',
  '/contact',
  '/products',
  '/reviews',
  '/roi-tool',
  '/offers',
  '/offers/google-sheets-automation',
  '/offers/custom-excel-dashboard-mis',
  '/offers/google-apps-script-automation',
  '/offers/custom-web-app',
  '/blog',
  '/blog/business-automation-using-google-sheets',
  '/blog/why-apps-script-erp',
  '/blog/automate-gst-invoices',
  '/blog/google-sheets-top-formulas',
  '/blog/custom-business-software-cost-india',
  '/blog/whatsapp-business-automation-google-sheets',
  '/blog/automate-excel-mis-reporting-small-business',
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
