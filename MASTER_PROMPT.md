# Master Prompt: Suraj Automation Platform

You are building **Suraj Automation**, a professional freelancing, custom software, and SaaS developer portfolio website tailored for Indian Small & Medium Businesses (SMBs). The website highlights custom, cloud-integrated Google Sheets & Google Apps Script automations (branded under the "Sarthi" automation suite) that turn spreadsheets into fully functional ERPs, CRM systems, accounting packages, and HR portals.

---

## 1. Visual Style & Aesthetic Guidelines

- **Mood & Aesthetic**: Modern, premium, Swiss-style layout combining dark slate elements and crisp, clean off-white containers. The design utilizes generous negative space and micro-animations (`motion` imports from `motion/react`) for route and status transitions.
- **Color Palette**: 
  - Primary Background (Light Mode): `bg-slate-50` with elegant `text-slate-900`.
  - Accents: Deep Indigo (`text-indigo-600`, `bg-indigo-600`) as the professional brand color, combined with emerald indicators.
  - Interactive States: Smooth hover animations (`hover:scale-102 hover:shadow-lg transition-all`).
- **Typography**: 
  - Display & Headings: Clean sans-serif headings with tight tracking (`tracking-tight font-extrabold`).
  - Technical Stats & Blueprints: Monospaced typography using standard coding fonts (`font-mono text-xs`).
- **No Over-Engineering**: Completely avoid simulated terminal lines, raw system telemetry logs, container ports, or network status signals (e.g., no "PORT: 3000" or mock active indicators in rails). All headings, labels, and interactions must be literal, humble, and human-friendly.

---

## 2. Technical Stack & Architecture

- **Frontend**: React 18+ with Vite and TypeScript.
- **Routing**: Client-side routing with `react-router-dom` incorporating single-page layout structures.
- **Styling**: Tailwind CSS utility classes exclusively. All configurations must import Tailwind dynamically inside a single `src/index.css`.
- **Backend & Database**: Firebase Firestore for durable persistent storage and Firebase Authentication (Google popup sign-in and phone OTP authentication).
- **Libraries**:
  - Icons: Handled strictly via imports from `lucide-react`.
  - Animations: Powered by `motion/react` for elegant fades and slide-ins.
  - Custom Visualizers: D3.js and Recharts for custom ROI calculators and analytical dashboards.

---

## 3. Core Features & Business Modules

### A. Dynamic Products Catalog (The "Sarthi" Suite)
- **Concept**: A catalog of ready-to-copy, pre-coded Google Sheet templates with built-in Google Apps Script backends.
- **Example Products**:
  - *BillSarthi*: Invoicing and automatic billing.
  - *BookingSarthi*: Dynamic appointment scheduling.
  - *BudgetSarthi*: Business budgeting and tracking.
  - *CakeSarthi*: Bakery/orders booking manager.
  - *SupplySarthi*: Retail distribution, stock, and inventory tracking.
  - *HisabSarthi*: Ledger and ledger accounting.
  - *KarmSarthi*: HR task tracking and performance reporting.
- **Capabilities**: Authorized users can download sheet templates and view the underlying Apps Script code inside a fully fledged file explorer mock interface.

### B. Interactive Quotation Generator & Estimator Tool
- **Concept**: Users can select custom modules (e.g., "Sheets Sync", "WhatsApp Notifications", "PDF Generator", "Admin Panel") to calculate an estimated project quotation.
- **Action**: Generates a professional quote and persists the request directly into Firestore (`/quotations`).

### C. Client Reviews & Trust Testimonials
- **Concept**: A carousel of real client ratings with dynamic review submission.
- **Action**: Submitted reviews are written as unapproved into Firestore (`/reviews`) and are only displayed publicly after the admin toggles `isApproved` inside the control panel.

### D. User & Customer Portal
- **Concept**: Secure login area where customers can access their purchased automation templates, view setup guide handbooks, and copy source codes.
- **Action**: Purchase records are safely logged in Firestore (`/purchases`), verifying capture status via simulation before enabling file copy buttons.

### E. Fully Functional Blog Engine (New Feature)
- **Concept**: A modern, high-speed educational blog detailing automation tips, Apps Script tutorials, and business optimization case studies.
- **Layout**: 
  - **Blog List Page (`/blog`)**: Displays featured articles, filtered category tabs, quick search, reading times, tags, and stylized blog cards.
  - **Blog Detail Page (`/blog/:slug`)**: Deep reading experience utilizing structured headers, code snippets, beautiful callouts, and clean typographic rhythms.
- **Action**: Reads published articles directly in real-time from Firestore (`/blogs`).

### F. Control Panel & Administrative Portal (`/admin`)
- **Concept**: Secure command center restricted to the official administrator (`surajsingh.noida98@gmail.com`).
- **Core Tabs**:
  1. **Catalog Manager**: CRUD interface to create, edit, or delete "Sarthi" products.
  2. **Quotations Log**: Comprehensive log to track and search customer dynamic quotation estimates.
  3. **Blog Publisher (New Feature)**: A full-scale blogging management dashboard allowing the admin to create, edit, publish, draft, or delete articles directly, with live preview and tag configuration.

---

## 4. Secure Firestore & Security Rules Blueprint

### Firestore Schema:
- `/users/{userId}`: UserProfile (uid, email, displayName, photoURL, dates).
- `/custom_products/{productId}`: CustomProduct configurations (template copy URLs, description, multiple GS code files).
- `/purchases/{purchaseId}`: Secure PurchaseRecord (payment metadata, captures, user links).
- `/reviews/{reviewId}`: ServiceReviews (ratings, approval flags, metadata).
- `/quotations/{quotationId}`: Client projects dynamic quotation metrics.
- `/blogs/{blogId}`: Educational blog posts (title, slug, summary, content markdown, tags, status).

### Security Model:
- **Default Deny**: `match /{document=**} { allow read, write: if false; }`
- **Identity Protection**: Users are strictly limited to viewing/modifying their own profiles and purchase histories.
- **Admin Lockdown**: All catalog, blog creations, updates, deletions, and quotation reviews are strictly reserved to verified Google Accounts matching `request.auth.token.email == "surajsingh.noida98@gmail.com"` with verified emails.
