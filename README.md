# Suraj Automation (`surajdx.com`) — Excel se System tak

Production-ready website for **Suraj Automation**, built for Indian small and medium business owners looking to move from Excel and WhatsApp chaos to clean, isolated Google Sheets + Apps Script systems.

## 1. Tech Stack & Content Architecture
- **Frontend:** React 19 + TypeScript + Vite + Tailwind CSS v4 (`Plus Jakarta Sans`, `Noto Sans` + `Noto Sans Devanagari`, `JetBrains Mono`)
- **Single-File Content Management:** Edit `src/data/content.ts` to update copy (Hinglish & English), products, pricing tiers, FAQs, and placeholders without touching layout components.
- **Lead Form Backend:** `apps-script/lead-form-webapp.gs` (uses `LockService`, `CacheService` rate limiting, honeypot trap, formula-injection guard, `PropertiesService` secrets, `MailApp`, and optional Gupshup WhatsApp notification).
- **Server / Hosting:** Express + Vite (`server.ts`) or static Vite build deployed to Vercel (`vercel.json`).

---

## 2. Environment Variables
Create a `.env` file locally (or set in Vercel / Cloud Run):

```env
VITE_GOOGLE_SHEET_WEBAPP_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
GEMINI_API_KEY="optional_server_side_only"
```

Never hardcode API secrets in frontend files.

---

## 3. Setup, Run & Deploy

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Type-check and build for production
npm run lint
npm run build
```

### Deploying Lead Form Apps Script
1. Open a new Google Sheet in your Google account (`Suraj Automation Leads`).
2. Go to **Extensions → Apps Script** and paste the contents of `apps-script/lead-form-webapp.gs`.
3. Open **Project Settings → Script Properties** and add:
   - `NOTIFY_EMAIL`: `suraj.gasdeveloper@gmail.com`
   - `SHEET_NAME`: `Leads`
   - *(Optional for WhatsApp alerts)* `GUPSHUP_API_KEY`, `GUPSHUP_SOURCE`, `ADMIN_WHATSAPP`
4. Click **Deploy → New deployment → Web app**, set **Execute as: Me**, **Who has access: Anyone**, and paste the `/exec` URL into `VITE_GOOGLE_SHEET_WEBAPP_URL` (or `SITE_CONFIG.integrations.leadFormWebappUrl` in `src/data/content.ts`).

---

## 4. Prioritized `[PLACEHOLDER]` Checklist

Fill every placeholder in `src/data/content.ts` before your public launch:

### Priority 1 — High Trust & Conversion Blockers (Do First)
1. `[FOUNDER_PHOTO]` (`SITE_CONFIG.founder.photoUrl`): Upload a real, well-lit portrait photo of Suraj Singh to `/public/images/` and set the path.
2. `[WEBAPP_URL]` (`VITE_GOOGLE_SHEET_WEBAPP_URL` / `SITE_CONFIG.integrations.leadFormWebappUrl`): Deploy `apps-script/lead-form-webapp.gs` and connect the live URL.
3. `[PRICE_TIER_1]`, `[PRICE_TIER_2]`, `[PRICE_TIER_3]`, `[PAYMENT_TERMS]`, `[SUPPORT_DAYS]`, `[X_DAYS]` (`PRICING_TIERS`, `PRICING_TERMS`, `PROCESS_STEPS`): Confirm exact starting INR ranges, delivery days, and support period.
4. `[LEGAL_NAME]`, `[GSTIN_IF_AVAILABLE]`, `[ADDRESS/CITY]` (`SITE_CONFIG.legal`): Fill your legal proprietorship/company name, GST status, and Noida office/work address in the footer & legal pages.

### Priority 2 — Proof of Work & Product Demos
5. `[SCREENSHOT]` (`PRODUCTS_CATALOG` & `CUSTOM_CASE_STUDIES`): Capture real product screenshots (blurred client names/numbers) and replace screenshot placeholder strings.
6. `[DEMO_LINK_*]` & `[VIDEO_LINKS]`: Add live read-only Sheet / Web App demo links and short 2-minute Loom/YouTube walkthrough URLs.
7. `[REAL_RESULTS]` (`CUSTOM_CASE_STUDIES`): Replace result placeholders with verified numbers approved by clients (e.g., hours saved per week).
8. `[CONFIRM_PERMISSIONS]` (`SITE_CONFIG.permissions.confirmNcrClientPermissions`): Keep `false` until Amdi Enterprises, NCR Packaging, Hardeep Enterprises, and D Salon give written permission; then flip to `true` and add real URLs.
9. `[REAL_TESTIMONIALS]` (`SITE_CONFIG.realTestimonials`): Add real client quotes with name, business, city, and WhatsApp screenshot/photo once collected.

### Priority 3 — Local SEO & Analytics
10. `[GBP_LINK]` (`SITE_CONFIG.legal.gbpLink`): Paste your verified Google Business Profile URL.
11. `[CLARITY_ID]` (`SITE_CONFIG.legal.clarityId`): Add Microsoft Clarity project ID if using heatmaps/session recordings.

---

## 5. Post-Launch Trust Upgrades Roadmap
1. **Google Business Profile Reviews:** Request 5 honest Google reviews from real past/pilot clients mentioning Noida / Delhi-NCR and the specific system built.
2. **Short Loom / Screen-Record Demos:** Record 90-second Hindi/Hinglish walkthroughs for VasuliSarthi, SupplySarthi, and OrderSarthi showing real Sheet + WhatsApp flow.
3. **Written Client Permission & Logos:** Collect WhatsApp/email confirmation from NCR website & automation clients before publishing names/screenshots.
4. **MSME / Udyam Registration Badge:** Display your verified Udyam Registration number in the footer once registered.
5. **Legal Review:** Have a lawyer review the draft Privacy Policy, Terms of Service, and Refund & Data Ownership pages for full DPDP Act compliance.
