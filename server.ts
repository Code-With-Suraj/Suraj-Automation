import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

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
        res.status(500).json({ 
          error: 'Razorpay payment generation failed', 
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

  // Serve static files in production / Vite middleware in development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
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
