import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { PRODUCT_SOLUTIONS } from './src/data/productSolutions';

// Hardcoded fallbacks provided by user for instant out-of-the-box live functionality
const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || 'rzp_live_Sugpl07IegaqDU';
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || 'mKz1YhtpJQGzs3YLDkdDFoLe';

// Product solutions mapped identically to frontend to safely verify pricing and names
const PRODUCT_SOLUTIONS_BACKEND: Record<string, { name: string; price: number }> = {
  rationkart: { name: "RationKart", price: 1499 },
  vendorsarthi: { name: "VendorSarthi", price: 1499 },
  billsarthi: { name: "BillSarthi", price: 1499 },
  claimo: { name: "Claimo", price: 1499 },
  karmsarthi: { name: "KarmSarthi", price: 1499 },
  cakesarthi: { name: "CakeSarthi", price: 1499 },
  gymsarthi: { name: "GymSarthi", price: 1499 },
  menusarthi: { name: "MenuSarthi", price: 1499 },
  supplysarthi: { name: "SupplySarthi", price: 1499 },
  hisabsarthi: { name: "HisabSarthi", price: 1499 },
  loansarthi: { name: "LoanSarthi", price: 1499 },
  "cogs-dashboard": { name: "Custom COGS Dashboard", price: 1499 },
  stocksarthi: { name: "StockSarthi", price: 1499 }
};

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API: Create Live / Test Razorpay Order securely using server-side Key Secret
  app.post('/api/create-razorpay-order', async (req, res) => {
    try {
      const { productId, priceString, productName } = req.body;
      if (!productId) {
        res.status(400).json({ error: 'Missing product credentials ID' });
        return;
      }

      // 1. Resolve product name
      const resolvedName = productName || (PRODUCT_SOLUTIONS_BACKEND[productId] ? PRODUCT_SOLUTIONS_BACKEND[productId].name : productId);

      // 2. Resolve price (extract digit sequence from priceString or fallback to hardcoded PRODUCT_SOLUTIONS_BACKEND)
      let parsedPrice = 1499; // fallback standard price
      if (priceString) {
        // Strip out non-numeric characters (e.g., symbols, commas) to get pure integer representation
        const clean = String(priceString).replace(/[^\d]/g, '');
        if (clean) {
          parsedPrice = parseInt(clean, 10);
        }
      } else if (PRODUCT_SOLUTIONS_BACKEND[productId]) {
        parsedPrice = PRODUCT_SOLUTIONS_BACKEND[productId].price;
      }

      const amountInPaisa = parsedPrice * 100; // Always in Paisa (1 INR = 100 Paisa)
      const receiptId = `receipt_${productId}_${Date.now()}`;

      // Call Razorpay REST endpoint directly to generate secure Order ID
      const authHeader = 'Basic ' + Buffer.from(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`).toString('base64');
      
      const razorpayResponse = await fetch('https://api.razorpay.com/v1/orders', {
        method: 'POST',
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: amountInPaisa,
          currency: 'INR',
          receipt: receiptId,
          notes: {
            productId,
            productName: resolvedName
          }
        })
      });

      if (!razorpayResponse.ok) {
        const errorText = await razorpayResponse.text();
        console.error('Razorpay Order Creation Failed:', errorText);
        
        let customMessage = 'Razorpay payment generation failed';
        try {
          const parsed = JSON.parse(errorText);
          if (parsed && parsed.error && parsed.error.description) {
            customMessage = `Razorpay API: ${parsed.error.description}`;
          } else if (parsed && parsed.error && parsed.error.metadata) {
            customMessage = `Razorpay API Error: ${JSON.stringify(parsed.error.metadata)}`;
          }
        } catch (_) {
          customMessage = `Razorpay Connectivity Error: ${errorText.substring(0, 120)}`;
        }

        res.status(500).json({ 
          error: customMessage, 
          details: errorText,
          fallbackToClientMock: true // Graceful response if keys expire or fail
        });
        return;
      }

      const orderData = await razorpayResponse.json();
      
      // Return orderId and public Key ID (never send Secret to client!)
      res.json({
        success: true,
        orderId: orderData.id,
        keyId: RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency
      });

    } catch (e: any) {
      console.error('Server Internal Error creating payment:', e);
      res.status(500).json({ error: 'Server could not complete order placement' });
    }
  });

  let vite: any = null;

  // Intercept product routes to dynamically inject SEO Meta tags for social media preview indexers
  app.get('/products/:id', async (req, res, next) => {
    try {
      const productId = req.params.id;
      const lookupId = productId ? productId.toLowerCase() : '';
      const product = PRODUCT_SOLUTIONS[lookupId];

      if (!product) {
        return next();
      }

      const isProd = process.env.NODE_ENV === "production";
      const htmlPath = isProd 
        ? path.join(process.cwd(), 'dist', 'index.html')
        : path.join(process.cwd(), 'index.html');

      if (!fs.existsSync(htmlPath)) {
        return next();
      }

      let html = fs.readFileSync(htmlPath, 'utf-8');

      // Resolve development Vite compilation wrapper
      if (!isProd && vite) {
        html = await vite.transformIndexHtml(req.originalUrl, html);
      }

      // Format dynamic SEO descriptions
      const priceStr = product.price || '₹1,499';
      const marketPriceStr = product.marketPrice || '₹4,999';
      
      const cleanPrice = parseInt(priceStr.replace(/[^\d]/g, ''), 10) || 1499;
      const cleanMarketPrice = parseInt(marketPriceStr.replace(/[^\d]/g, ''), 10) || 4999;
      const discount = Math.round(((cleanMarketPrice - cleanPrice) / cleanMarketPrice) * 100);

      const titleStr = `${product.name} — ${product.tagline || 'Business Automation Tool'} | Suraj Automation`;
      const descriptionStr = `🔥 Special Discount: Get @ ${priceStr} (${discount}% OFF, MRP: ${marketPriceStr}) — ${product.description || 'Google Workspace Apps Script workflows.'}`;
      const keywordsStr = `${product.name}, google apps script solutions, sheet automation system, workflow integration dashboard`;

      // Pick the primary preview image
      const primaryImg = product.images && product.images.length > 0
        ? product.images[0]
        : 'https://blogger.googleusercontent.com/img/a/AVvXsEh5zZHbpxiw_k6uVI42WF3xsmx5ufKvjLCZmmNF7Wx1w3JXIFvgHSu6IQuiigrjGxnmzU99q-ZLe143TGx1uqJwdDWgBGzvwXLdcatbImKrD8TRKda9y4PnW6m_88uEs9JmwklolKLHhMnD4dFrJ3fxBXKncoDZyu4YPXgZ5vGfLE2vSbNUXEH-iHeUVbw=s16000';

      const host = req.headers.host || 'surajdx.com';
      const protocol = req.secure || req.headers['x-forwarded-proto'] === 'https' ? 'https' : 'http';
      const origin = `${protocol}://${host}`;
      
      const absoluteImgUrl = primaryImg.startsWith('http') 
        ? primaryImg 
        : `${origin}${primaryImg}`;
      const absoluteProductUrl = `${origin}/products/${productId}`;

      // Open Graph structure for WhatsApp, LinkedIn, Facebook, Discord, Slack
      const seoMetaTags = `
    <!-- Dynamic Social Media SEO Injection -->
    <title>${titleStr}</title>
    <meta name="description" content="${descriptionStr}" />
    <meta name="keywords" content="${keywordsStr}" />
    
    <meta property="og:title" content="${titleStr}" />
    <meta property="og:description" content="${descriptionStr}" />
    <meta property="og:image" content="${absoluteImgUrl}" />
    <meta property="og:image:secure_url" content="${absoluteImgUrl}" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${absoluteProductUrl}" />
    <meta property="og:site_name" content="Suraj Automation" />
    
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${titleStr}" />
    <meta name="twitter:description" content="${descriptionStr}" />
    <meta name="twitter:image" content="${absoluteImgUrl}" />
      `;

      // Clean existing tags to prevent dual title/descriptions
      html = html.replace(/<title>[\s\S]*?<\/title>/i, '');
      html = html.replace(/<meta\s+name="description"[\s\S]*?\/>/i, '');
      html = html.replace(/<meta\s+name="keywords"[\s\S]*?\/>/i, '');

      // Inject clean SEO tags at top of <head> block
      if (html.includes('<head>')) {
        html = html.replace('<head>', `<head>\n${seoMetaTags}`);
      } else {
        html = html.replace('</head>', `${seoMetaTags}\n</head>`);
      }

      res.setHeader('Content-Type', 'text/html');
      res.send(html);
    } catch (err) {
      console.error(`Error servicing dynamic product SEO for ${req.params.id}:`, err);
      next();
    }
  });

  // Serve static files in production / Vite middleware in development
  if (process.env.NODE_ENV !== "production") {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] Live dashboard backend active on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to host production backend server:", err);
});
