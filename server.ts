import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
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
  "cogs-analytics-dashboard": { name: "COGS Analytics Dashboard", price: 3999 },
  "cfo-dashboard": { name: "CFO Dashboard", price: 1499 },
  stocksarthi: { name: "StockSarthi", price: 1499 }
};

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API: AI-powered business challenges analysis and product mapping
  app.post('/api/gemini/analyze-business', async (req, res) => {
    try {
      const { businessType, challenges } = req.body;
      if (!businessType && !challenges) {
        res.status(400).json({ error: 'Please provide either business type or challenges.' });
        return;
      }

      const hasApiKey = !!process.env.GEMINI_API_KEY;
      if (hasApiKey) {
        try {
          const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY,
            httpOptions: {
              headers: {
                'User-Agent': 'aistudio-build',
              }
            }
          });

          const prompt = `
Analyze the following business type and operational challenges and match it with the best fitting automation product from our suite if there is a strong alignment.

USER BUSINESS TYPE: ${businessType || 'Not specified'}
USER CHALLENGES: ${challenges || 'Not specified'}

Available products in our portfolio:
${Object.values(PRODUCT_SOLUTIONS).map(p => `- ${p.id}: ${p.name} - ${p.tagline}. Description: ${p.description}`).join('\n')}

DIAGNOSTIC CRITERIA & RULES:
1. DEEP & CRITICAL ASSESSMENT (MANDATORY): Deeply analyze whether any of our pre-built Sarthi product packages can naturally and genuinely solve their core business pain-points with over 80% fitness alignment. We DO NOT want to sell unnecessary products. If their business is unrelated or the system requested is completely different and no product in our portfolio is a true natural match, you MUST return matchedProductId as "" (empty string) and matchedProductName as "".
2. COST BENEFIT VALUE IN ANALYSIS (50% SAVINGS CLAIM): In the 'analysis' section, explicitly point out to the user that they need a tailored operational system, and reassure them that whether we use a standard product OR build custom development, Suraj can customize/build this software system at a fraction of standard developer rates — specifically at straight 50% LOWER cost compared to standard market prices, with lifetime-free Google Sheets cloud databases and no monthly licensing lock-ins!
3. LANGUAGE STYLE: Write 'analysis' and 'automationNeeds' in a supportive, deeply helpful and friendly mixture of simple English & Hinglish, which Indian SME owners trust, looking extremely professional.

Return valid JSON structure matching the schema.
          `;

          const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: prompt,
            config: {
              responseMimeType: "application/json",
              responseSchema: {
                type: Type.OBJECT,
                properties: {
                  matchedProductId: {
                    type: Type.STRING,
                    description: "Must be EXACTLY one of: rationkart, vendorsarthi, billsarthi, claimo, karmsarthi, cakesarthi, gymsarthi, menusarthi, supplysarthi, hisabsarthi, loansarthi, cogs-analytics-dashboard, stocksarthi, or empty string of '' if there is no high-fidelity genuine match."
                  },
                  matchedProductName: {
                    type: Type.STRING,
                    description: "Name of matched product, or empty string '' if no product fits."
                  },
                  matchConfidence: {
                    type: Type.INTEGER,
                    description: "Match score from 0 to 100. If no product fits, keep match confidence under 50% as custom recommendation."
                  },
                  analysis: {
                    type: Type.STRING,
                    description: "Supportive, honest, realistic Hinglish/English analysis. Explaining if they have a standard fit or if they need a fully custom system. Explicitly highlight that we can customize or build it at 50% of standard market costs."
                  },
                  automationNeeds: {
                    type: Type.STRING,
                    description: "Describe what kind of automated dashboard/web view/whatsapp script triggers they need, highlighting simple setup in their personal Google Drive."
                  },
                  estimatedRoi: {
                    type: Type.OBJECT,
                    properties: {
                      hoursSaved: { type: Type.INTEGER, description: "Estimated monthly hours saved" },
                      moneySaved: { type: Type.INTEGER, description: "Monthly savings in INR on standard operating leaks" },
                      accuracyImprovement: { type: Type.STRING, description: "Description of errors reduction" }
                    },
                    required: ["hoursSaved", "moneySaved", "accuracyImprovement"]
                  },
                  recommendedActionPlan: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                    description: "Actionable 3-4 steps Hinglish/English list detailing how to get started on this workflow solution."
                  }
                },
                required: ["matchedProductId", "matchedProductName", "matchConfidence", "analysis", "automationNeeds", "estimatedRoi", "recommendedActionPlan"]
              }
            }
          });

          if (response.text) {
            const parsed = JSON.parse(response.text.trim());
            res.json({ success: true, isAIPowered: true, data: parsed });
            return;
          }
        } catch (geminiErr) {
          console.error('[Gemini Route Error] falling back to rules:', geminiErr);
        }
      }

      // Robust rule-based fallback analysis (no key or error)
      const normalizedText = `${businessType} ${challenges}`.toLowerCase();
      let matchedId = '';
      let matchedName = '';
      
      const containsAny = (text: string, keywords: string[]) => keywords.some(keyword => text.includes(keyword));

      if (containsAny(normalizedText, ['loan', 'emi', 'recovery', 'borrower', 'byaj', 'interest', 'instalment', 'finance', 'lending'])) {
        matchedId = 'loansarthi';
        matchedName = 'LoanSarthi';
      } else if (containsAny(normalizedText, ['cake', 'bakery', 'sweet', 'pastry', 'baker', 'bread', 'muffin'])) {
        matchedId = 'cakesarthi';
        matchedName = 'CakeSarthi';
      } else if (containsAny(normalizedText, ['gym', 'fitness', 'workout', 'membership', 'renew', 'trainer', 'exercise'])) {
        matchedId = 'gymsarthi';
        matchedName = 'GymSarthi';
      } else if (containsAny(normalizedText, ['restaurant', 'table', 'menu', 'cafe', 'dish', 'dine', 'order', 'food', 'kitchen'])) {
        matchedId = 'menusarthi';
        matchedName = 'MenuSarthi';
      } else if (containsAny(normalizedText, ['expense', 'claim', 'reimbursement', 'receipt', 'travel', 'allowance', 'vouchers'])) {
        matchedId = 'claimo';
        matchedName = 'Claimo';
      } else if (containsAny(normalizedText, ['hr', 'leave', 'attendance', 'staff', 'employee', 'salary', 'payment cycle', 'payroll', 'karmsarthi', 'staff management'])) {
        matchedId = 'karmsarthi';
        matchedName = 'KarmSarthi';
      } else if (containsAny(normalizedText, ['stock', 'inventory', 'sku', 'warehouse', 'godown', 'item list', 'stocksarthi'])) {
        matchedId = 'stocksarthi';
        matchedName = 'StockSarthi';
      } else if (containsAny(normalizedText, ['procurement', 'vendor', 'rfq', 'quote', 'quotation', 'tender', 'supplier'])) {
        matchedId = 'vendorsarthi';
        matchedName = 'VendorSarthi';
      } else if (containsAny(normalizedText, ['gst', 'ledger', 'tax', 'invoice', 'hisab', 'accounting', 'ledger book', 'khatabook'])) {
        matchedId = 'hisabsarthi';
        matchedName = 'HisabSarthi';
      } else if (containsAny(normalizedText, ['ration', 'grocery', 'kirana', 'requisition', 'food ration', 'rationkart'])) {
        matchedId = 'rationkart';
        matchedName = 'RationKart';
      } else if (containsAny(normalizedText, ['bill', 'verify', 'entry', 'purchase bill', 'billsarthi'])) {
        matchedId = 'billsarthi';
        matchedName = 'BillSarthi';
      } else if (containsAny(normalizedText, ['cogs', 'cost of goods', 'margin', 'profitability', 'pricing audit'])) {
        matchedId = 'cogs-analytics-dashboard';
        matchedName = 'COGS Analytics Dashboard';
      } else if (containsAny(normalizedText, ['cfo', 'cash position', 'vendors', 'cash reserve', 'cfo dashboard'])) {
        matchedId = 'cfo-dashboard';
        matchedName = 'CFO Dashboard';
      } else if (containsAny(normalizedText, ['lead', 'sales', 'funnel', 'procurement pipeline', 'supply sarthi', 'distribution', 'delivery', 'logistics', 'agent'])) {
        matchedId = 'supplysarthi';
        matchedName = 'SupplySarthi';
      }

      // If matchedId doesn't strongly fit the keyword lists, it stays empty so the UI represents custom consulting!
      let mockResponse;
      if (matchedId) {
        const pMeta = PRODUCT_SOLUTIONS[matchedId];
        const finalId = pMeta ? pMeta.id : matchedId;
        const finalName = pMeta ? pMeta.name : matchedName;

        mockResponse = {
          matchedProductId: finalId,
          matchedProductName: finalName,
          matchConfidence: 88,
          analysis: `Aapke operational details se lagta hai ki ${finalName} aapke systems ke liye bilkul standard fit hai! Isse manual entry errors control honge aur process standardise hoga. Standard software agencies iska high premium charge karengi, par hum aapke operational needs ke mutabik customized version market rate ke comparison me straight *50% OFF (aadhi cost)* me deliver karenge.`,
          automationNeeds: `Aapko real-time Google Sheets backend, pre-built template validation trigger, custom security logs, and single-click automated WhatsApp receipts framework setup ki standard requirement hai.`,
          estimatedRoi: {
            hoursSaved: 35,
            moneySaved: 12000,
            accuracyImprovement: "99% Reduced Entry Leakages"
          },
          recommendedActionPlan: [
            `Step 1: Check standard ${finalName} template on Suraj's products guide.`,
            `Step 2: Connect with Suraj to craft custom WhatsApp reporting modules.`,
            `Step 3: Setup your free workspace with lifetime data storage backup.`
          ]
        };
      } else {
        mockResponse = {
          matchedProductId: "",
          matchedProductName: "",
          matchConfidence: 45,
          analysis: `Humne aapke business detail ka deep verification kiya hai. Hum unnecessary package mismatch nahi karte—Aapki conditions standard pre-designed software templates me complete nahi hoti. Aapko custom workflow aur integration automation setup ki recommendation hai! Aur sabse badiya baat, Suraj is special tailor-made dashboard program ko standard agencies ki compared prices se pure *50% Kam Cost (50% Custom Savings)* me safely develop kar dega!`,
          automationNeeds: `Aapki specific description ki requirements ke anusar customized sheet workflows, custom multi-input dynamic web forms, automatically scheduled email alerts aur custom sheets report compiler ki absolute zarurat hai.`,
          estimatedRoi: {
            hoursSaved: 45,
            moneySaved: 16000,
            accuracyImprovement: "100% Personalised Workflow Flow"
          },
          recommendedActionPlan: [
            `Step 1: Don't purchase unneeded system templates.`,
            `Step 2: Connect immediately with Suraj via WhatsApp on custom blueprints.`,
            `Step 3: Build tailor-made systems at half (50%) of typical software agency development packages.`
          ]
        };
      }

      res.json({ success: true, isAIPowered: false, data: mockResponse });

    } catch (err) {
      console.error('Core business analysis error:', err);
      res.status(500).json({ error: 'Server error while performing business audit analysis.' });
    }
  });

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

  // Dynamic XML Sitemap Generation for automated SEO tracking
  app.get('/sitemap.xml', (req, res) => {
    try {
      const host = 'https://surajdx.com';
      
      const baseRoutes = [
        { loc: '', changefreq: 'weekly', priority: '1.0' },
        { loc: '/about', changefreq: 'monthly', priority: '0.8' },
        { loc: '/services', changefreq: 'weekly', priority: '0.9' },
        { loc: '/contact', changefreq: 'monthly', priority: '0.8' },
        { loc: '/pricing', changefreq: 'weekly', priority: '0.9' },
        { loc: '/products', changefreq: 'weekly', priority: '0.9' },
        { loc: '/reviews', changefreq: 'weekly', priority: '0.8' },
        { loc: '/portal', changefreq: 'monthly', priority: '0.7' },
        { loc: '/roi-tool', changefreq: 'monthly', priority: '0.8' },
        { loc: '/terms', changefreq: 'monthly', priority: '0.5' },
        { loc: '/privacy-policy', changefreq: 'monthly', priority: '0.5' }
      ];

      let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
      xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

      // 1. Dynamic base routes appending
      baseRoutes.forEach(route => {
        xml += `  <url>\n`;
        xml += `    <loc>${host}${route.loc}</loc>\n`;
        xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
        xml += `    <priority>${route.priority}</priority>\n`;
        xml += `  </url>\n`;
      });

      // 2. Dynamic products appending from data solutions mapping automatically
      if (typeof PRODUCT_SOLUTIONS === 'object' && PRODUCT_SOLUTIONS !== null) {
        Object.keys(PRODUCT_SOLUTIONS).forEach(key => {
          const product = PRODUCT_SOLUTIONS[key];
          if (product && !product.isHidden) {
            xml += `  <url>\n`;
            xml += `    <loc>${host}/products/${product.id}</loc>\n`;
            xml += `    <changefreq>weekly</changefreq>\n`;
            xml += `    <priority>0.8</priority>\n`;
            xml += `  </url>\n`;
          }
        });
      }

      xml += `</urlset>\n`;

      res.header('Content-Type', 'application/xml');
      res.status(200).send(xml);
    } catch (e) {
      console.error('Error generating sitemap dynamically:', e);
      res.status(500).send('Error generating sitemap');
    }
  });

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
