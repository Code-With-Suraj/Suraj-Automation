import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, CheckCircle2, AlertCircle, Download, Send, 
  RefreshCw, Sparkles, User, Mail, Phone, Building, Info, Check, HelpCircle
} from 'lucide-react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useUser } from '../contexts/UserContext';
import { jsPDF } from 'jspdf';

interface FeatureOption {
  id: string;
  name: string;
  description: string;
  price: number;
}

const PROJECT_FEATURES: FeatureOption[] = [
  // Web Solutions
  {
    id: 'starterWeb',
    name: 'Basic Website Setup (Starter)',
    description: '1-Page structured landing page, 100% mobile friendly, WhatsApp chat integrations, SEO tags.',
    price: 3999
  },
  {
    id: 'standardWeb',
    name: 'Professional System Website (Standard)',
    description: '4–5 fully dynamic web page structures, automatic lead tracker ingestion, WhatsApp alerts, admin panel (text edits).',
    price: 9999
  },
  {
    id: 'eliteWeb',
    name: 'Custom Enterprise Portal (Corporate Elite)',
    description: 'Razorpay payment tracking, auto invoice generation, client CRM, Google sheets real-time sync, automated PDF dispatch, 1-mo support.',
    price: 19999
  },
  // Data Plans
  {
    id: 'excelDashboard',
    name: 'Basic Offline Excel Dashboard (Local Excel)',
    description: '1–2 worksheet sources, up to 5 charts, Pivot layouts, slicers, clean formulas (private offline file).',
    price: 2000
  },
  {
    id: 'sheetsDashboard',
    name: 'Live Google Sheets Dashboard (Cloud Automation)',
    description: 'Forms-to-sheet pipeline, team cloud sync, summarized dynamic cards, date/personnel filters, 1 auto email alert, responsive.',
    price: 3000
  },
  {
    id: 'advancedSuite',
    name: 'Advanced Sheets + Apps Script System Suite',
    description: 'Google Apps Script custom backend compiler, bi-directional WhatsApp/Email notification, automated PDF reporter, role-based filters.',
    price: 8000
  },
  // Addons
  {
    id: 'extraPageSlot',
    name: 'Extra Web Page/Spreadsheet Tab Module',
    description: 'Add a custom worksheet tab or nested web page under the main menu.',
    price: 1000
  },
  {
    id: 'webhookSync',
    name: 'Custom External Webhook Sync Integration',
    description: 'Connect with external REST APIs or webhooks to push/pull database configurations automatically.',
    price: 3000
  },
  {
    id: 'pdfDispatch',
    name: 'Google Apps Script Automated PDF Dispatch',
    description: 'Generate beautiful custom PDF invoices or reports and email them automatically on form triggers.',
    price: 1999
  },
  {
    id: 'whatsappGateway',
    name: 'Direct WhatsApp Message Trigger Gateway Sync',
    description: 'Instantly broadcast transactional customer notifications on successful triggers to customer WhatsApp numbers.',
    price: 2999
  },
  {
    id: 'premiumSupport',
    name: 'Premium Support & Configuration Modifications (1 Month)',
    description: 'Includes full documentation logs, team screenshare workshop training and basic debug revisions.',
    price: 999
  }
];

export default function QuotationTool() {
  const { user } = useUser();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Client Details States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');

  // Feature Options States
  const [selectedFeatures, setSelectedFeatures] = useState<Record<string, boolean>>({
    standardWeb: true,
    sheetsDashboard: true,
    advancedSuite: true,
  });

  // Quotation Result States
  const [quotationId, setQuotationId] = useState('');
  const [savedQuote, setSavedQuote] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pdfGenerating, setPdfGenerating] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Auto-fill logged in user email and name
  useEffect(() => {
    if (user) {
      if (user.displayName) setName(user.displayName);
      if (user.email) setEmail(user.email);
    }
  }, [user]);

  // Pricing calculations
  const selectedList = PROJECT_FEATURES.filter(f => selectedFeatures[f.id]);
  const subtotal = selectedList.reduce((sum, f) => sum + f.price, 0);
  
  // Dynamic bundle discount: 15% off if 3 or more features are checked
  const hasBundleDiscount = selectedList.length >= 3;
  const discountRate = 0.15;
  const discountAmount = hasBundleDiscount ? Math.round(subtotal * discountRate) : 0;
  const grandTotal = subtotal - discountAmount;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg('Please specify your Name, Email, and Phone to generate a valid quote.');
      return;
    }
    setErrorMsg('');
    setStep(2);
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const handleGenerateQuote = async () => {
    setIsSubmitting(true);
    setErrorMsg('');

    // Generate a unique professional Quotation Number
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const generatedId = `QTN-2026-${randomSuffix}`;

    // Map new fields to legacy fields for validation rule compatibility
    const quoteData = {
      id: generatedId,
      userId: user?.uid || 'anonymous',
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      company: company.trim() || 'Custom Team',
      hasLandingPage: !!(selectedFeatures.starterWeb || selectedFeatures.standardWeb || selectedFeatures.eliteWeb),
      hasDynamicPages: !!(selectedFeatures.standardWeb || selectedFeatures.eliteWeb),
      hasSheetsSync: !!(selectedFeatures.sheetsDashboard || selectedFeatures.advancedSuite),
      hasAppsScript: !!(selectedFeatures.advancedSuite || selectedFeatures.pdfDispatch),
      hasWhatsAppNotification: !!selectedFeatures.whatsappGateway,
      hasPdfGenerator: !!selectedFeatures.pdfDispatch,
      hasDashboard: !!(selectedFeatures.excelDashboard || selectedFeatures.sheetsDashboard),
      hasAdminPanel: !!selectedFeatures.eliteWeb,
      hasMaintenance: !!selectedFeatures.premiumSupport,
      modules: selectedFeatures, // Save full answers dict for custom layout reviewer
      totalPrice: grandTotal,
      notes: notes.trim(),
      status: 'Received',
      createdAt: new Date()
    };

    try {
      const docRef = doc(db, 'quotations', generatedId);
      await setDoc(docRef, quoteData);

      setQuotationId(generatedId);
      setSavedQuote(quoteData);
      setStep(3);
    } catch (err: any) {
      console.error("Quotation creation failed inside Firestore:", err);
      setErrorMsg(`Failed to store quotation in database: ${err.message || err}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadPDF = async () => {
    if (!savedQuote) return;
    setPdfGenerating(true);

    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Page Dimension settings: A4 is 210mm x 297mm
      const pageWidth = 210;
      const pageHeight = 297;
      const margin = 15;
      const contentWidth = pageWidth - (margin * 2); // 180mm
      
      let currentY = 15;

      // Helper function to draw top header bands on pages
      const drawPageHeader = () => {
        // Aesthetic Top Indigo Band
        pdf.setFillColor(79, 70, 229); // Indigo-600
        pdf.rect(0, 0, pageWidth, 4, 'F');
      };

      const checkPageBreak = (neededHeight: number) => {
        if (currentY + neededHeight > pageHeight - 20) {
          pdf.addPage();
          drawPageHeader();
          currentY = 15;
          return true;
        }
        return false;
      };

      // Draw first page header
      drawPageHeader();

      // ==========================================
      // 1. CORPORATE SARAJ AUTOMATION HEADER
      // ==========================================
      // Draw Logo Icon: solid dark indigo square
      pdf.setFillColor(79, 70, 229);
      pdf.rect(margin, currentY, 10, 10, 'F');
      
      // Text inside Logobox
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(11);
      pdf.setTextColor(255, 255, 255);
      pdf.text('SA', margin + 1.8, currentY + 7);

      // Company Name & Tags
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(14);
      pdf.setTextColor(15, 23, 42); // slate-900
      pdf.text('Suraj Automation', margin + 13, currentY + 5.5);

      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(7);
      pdf.setTextColor(79, 70, 229); // Indigo-600
      pdf.text('PROCESS AUTOMATION • www.surajdx.com', margin + 13, currentY + 9);

      // Left Column Contact Details
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8.5);
      pdf.setTextColor(71, 85, 105); // slate-600
      pdf.text('Developer: Suraj Singh', margin, currentY + 16);
      pdf.text('Email: surajsingh.noida98@gmail.com', margin, currentY + 20.5);
      pdf.text('Telegram/WhatsApp: +91 8851666208', margin, currentY + 25);
      pdf.text('Web: www.surajdx.com', margin, currentY + 29.5);

      // Right Column Invoice Info (X = 130)
      const rightColX = 130;
      pdf.setFillColor(241, 245, 249); // slate-100
      pdf.rect(rightColX, currentY, 65, 8, 'F');
      
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(9.5);
      pdf.setTextColor(51, 65, 85); // slate-700
      pdf.text(savedQuote.id, rightColX + 4, currentY + 5.5);

      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(18);
      pdf.setTextColor(15, 23, 42); // slate-900
      pdf.text('Service Quotation', rightColX, currentY + 15);

      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8.5);
      pdf.setTextColor(100, 116, 139); // slate-500
      const displayDateLocal = savedQuote?.createdAt instanceof Date
        ? savedQuote.createdAt
        : (savedQuote?.createdAt?.seconds
            ? new Date(savedQuote.createdAt.seconds * 1000)
            : new Date());
      const formattedDate = displayDateLocal.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
      pdf.text(`Date: ${formattedDate}`, rightColX, currentY + 20.5);

      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(79, 70, 229); // indigo-600
      pdf.text('Validity: 30 Calendar Days (Reasonable Est.)', rightColX, currentY + 25);

      currentY += 34;

      // Divider Line
      pdf.setDrawColor(226, 232, 240); // slate-200
      pdf.setLineWidth(0.3);
      pdf.line(margin, currentY, pageWidth - margin, currentY);

      currentY += 6;

      // ==========================================
      // 2. CLIENT INFO & SCOPE NOTES
      // ==========================================
      const halfWidth = contentWidth / 2; // 90mm
      
      // Box for Prepared For
      pdf.setFillColor(248, 250, 252); // slate-50
      pdf.rect(margin, currentY, contentWidth, 30, 'F');
      pdf.setDrawColor(241, 245, 249);
      pdf.rect(margin, currentY, contentWidth, 30, 'S');

      // Add "PREPARED FOR" Title
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(7.5);
      pdf.setTextColor(148, 163, 184); // slate-400
      pdf.text('PREPARED FOR', margin + 5, currentY + 5.5);

      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(11);
      pdf.setTextColor(15, 23, 42); // slate-900
      pdf.text(savedQuote.name, margin + 5, currentY + 11.5);

      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(9);
      pdf.setTextColor(71, 85, 105);
      const companyVal = savedQuote.company || 'Custom Project';
      pdf.text(companyVal, margin + 5, currentY + 16.5);

      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8);
      pdf.setTextColor(71, 85, 105);
      pdf.text(`Email: ${savedQuote.email}`, margin + 5, currentY + 21.5);
      pdf.text(`Phone: ${savedQuote.phone}`, margin + 5, currentY + 25.5);

      // Under SPECIAL SCOPE NOTES
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(7.5);
      pdf.setTextColor(148, 163, 184); // slate-400
      pdf.text('SPECIAL SCOPE NOTES', margin + halfWidth + 5, currentY + 5.5);

      pdf.setFont('helvetica', 'italic');
      pdf.setFontSize(8);
      pdf.setTextColor(100, 116, 139);
      
      const notesX = margin + halfWidth + 5;
      const notesWidth = halfWidth - 10;
      const notesText = savedQuote.notes || 'No custom client specifications specified. Standard modular delivery and training structure will apply.';
      const wrappedNotes = pdf.splitTextToSize(notesText, notesWidth);
      
      // Limit to 4 lines to fit inside the header box
      const notesToShow = wrappedNotes.slice(0, 4);
      notesToShow.forEach((line: string, i: number) => {
        pdf.text(line, notesX, currentY + 11.5 + (i * 4.2));
      });

      currentY += 36;

      // ==========================================
      // 3. COST STRUCTURE TABLE
      // ==========================================
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(7.5);
      pdf.setTextColor(148, 163, 184); // slate-400
      pdf.text('ITEMIZED COST STRUCTURE', margin, currentY);

      currentY += 3.5;

      // Table Header
      const colWidths = {
        ref: 12,
        desc: 135,
        price: 33
      };

      pdf.setFillColor(241, 245, 249); // slate-100
      pdf.rect(margin, currentY, contentWidth, 8, 'F');

      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(8);
      pdf.setTextColor(51, 65, 85); // slate-700
      
      pdf.text('Ref', margin + 3, currentY + 5.5);
      pdf.text('Project Module / Solution Scope Description', margin + colWidths.ref + 3, currentY + 5.5);
      pdf.text('Price Rate', margin + colWidths.ref + colWidths.desc + colWidths.price - 3, currentY + 5.5, { align: 'right' });

      currentY += 8;

      // Output Selected Features Loop
      selectedList.forEach((item, index) => {
        // Calculate dynamic height needed for this wrapped row description
        const descText = item.description;
        const wrappedDesc = pdf.splitTextToSize(descText, colWidths.desc - 6);
        
        // Row height depends on number of lines in description: header holds 1 line of title, and each line of description takes 4mm.
        const titlePadding = 5;
        const lineSpacing = 3.8;
        const rowHeightNeeded = titlePadding + (wrappedDesc.length * lineSpacing) + 4;

        // Check if page break is needed
        checkPageBreak(rowHeightNeeded);

        // Render alternating light row background
        if (index % 2 === 1) {
          pdf.setFillColor(250, 251, 252);
          pdf.rect(margin, currentY, contentWidth, rowHeightNeeded, 'F');
        }

        // Draw light bottom border for row
        pdf.setDrawColor(241, 245, 249);
        pdf.line(margin, currentY + rowHeightNeeded, margin + contentWidth, currentY + rowHeightNeeded);

        // Print Row values
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(8);
        pdf.setTextColor(148, 163, 184);
        pdf.text(`#0${index + 1}`, margin + 3, currentY + 5);

        // Print Module Title
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(8.5);
        pdf.setTextColor(15, 23, 42); // slate-900
        pdf.text(item.name, margin + colWidths.ref + 3, currentY + 5);

        // Print wrapped Description lines
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(7.5);
        pdf.setTextColor(100, 116, 139); // slate-500
        wrappedDesc.forEach((line: string, i: number) => {
          pdf.text(line, margin + colWidths.ref + 3, currentY + 9.2 + (i * lineSpacing));
        });

        // Print Line Price
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(9);
        pdf.setTextColor(15, 23, 42);
        const priceStr = `INR ${item.price.toLocaleString('en-IN')}`;
        pdf.text(priceStr, margin + colWidths.ref + colWidths.desc + colWidths.price - 3, currentY + 5, { align: 'right' });

        currentY += rowHeightNeeded;
      });

      // Total balance bottom block space check
      checkPageBreak(40);

      currentY += 4;

      // ==========================================
      // 4. TERMS AND CALCULATIONS TOTAL BLOCKS
      // ==========================================
      // Terms Column (Left size 105mm)
      const termsWidth = 105;
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(7.5);
      pdf.setTextColor(100, 116, 139); // slate-500
      pdf.text('PROPOSAL TERMS & CONDITIONS:', margin, currentY);

      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(6.5);
      pdf.setTextColor(100, 116, 139);
      
      let termY = currentY + 4;
      const termLines = [
        "1. Project Advance Payment: 50% upfront retainer is required before onboarding.",
        "   Remaining on the weekend of active demo deployment.",
        "2. Turnaround Time (Sarthi Value): Within 4-7 business working days post advance payment.",
        "3. Additional Edits: Revisions requested separate from selection scope applies at",
        "   standard INR 1,000 hourly scale rate."
      ];
      termLines.forEach(line => {
        pdf.text(line, margin, termY);
        termY += 3.2;
      });

      // Pricing Summary Columns (Right size)
      const rightSummX = margin + termsWidth + 5;
      const summWidth = contentWidth - termsWidth - 5; // 70mm

      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8.5);
      pdf.setTextColor(100, 116, 139);
      
      // Subtotal
      pdf.text('Subtotal Rate:', rightSummX, currentY);
      pdf.setFont('helvetica', 'bold');
      pdf.text(`INR ${subtotal.toLocaleString('en-IN')}`, margin + contentWidth - 3, currentY, { align: 'right' });

      let summY = currentY + 4.5;
      
      if (hasBundleDiscount) {
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(16, 185, 129); // emerald-500
        pdf.text('Bundle Discount (15%):', rightSummX, summY);
        pdf.text(`-INR ${discountAmount.toLocaleString('en-IN')}`, margin + contentWidth - 3, summY, { align: 'right' });
        
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(100, 116, 139);
        summY += 4.5;
      }

      // Applicable Taxes/GST (0%)
      pdf.text('Applicable Taxes/GST:', rightSummX, summY);
      pdf.text('0%', margin + contentWidth - 3, summY, { align: 'right' });

      summY += 6;

      // Grand Total Box Accent
      pdf.setFillColor(243, 244, 246); // slate-100
      pdf.rect(rightSummX, summY - 4, summWidth, 8, 'F');

      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(9.5);
      pdf.setTextColor(15, 23, 42);
      pdf.text('Estimated Total:', rightSummX + 3, summY + 1.2);

      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10.5);
      pdf.setTextColor(79, 70, 229); // Indigo-600
      pdf.text(`INR ${grandTotal.toLocaleString('en-IN')}`, margin + contentWidth - 3, summY + 1.2, { align: 'right' });

      currentY = summY + 14;

      // ==========================================
      // 5. SIGNATURES
      // ==========================================
      checkPageBreak(15);
      
      pdf.setDrawColor(241, 245, 249);
      pdf.line(margin, currentY, margin + contentWidth, currentY);

      currentY += 4.5;

      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(6.5);
      pdf.setTextColor(148, 163, 184);
      pdf.text('ISSUED BY SYSTEM', margin, currentY);
      pdf.text('ACKNOWLEDGED CLIENT COPY', margin + halfWidth + 5, currentY);

      currentY += 4;
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(8);
      pdf.setTextColor(51, 65, 85);
      pdf.text('Suraj Singh Automation', margin, currentY);
      pdf.text(savedQuote.name, margin + halfWidth + 5, currentY);

      // Save the generated document
      pdf.save(`Quotation_${savedQuote.id}.pdf`);
    } catch (saveErr) {
      console.error("Vector jsPDF generation failed, falling back to printer capture:", saveErr);
      window.print();
    } finally {
      setPdfGenerating(false);
    }
  };

  const displayDate = savedQuote?.createdAt instanceof Date
    ? savedQuote.createdAt
    : (savedQuote?.createdAt?.seconds
        ? new Date(savedQuote.createdAt.seconds * 1000)
        : new Date());

  return (
    <div id="quotation-card" className="w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden transition-colors">
      
      {/* Top Banner Accent */}
      <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 print:hidden"></div>

      {/* Header Info */}
      <div className="p-8 border-b border-slate-150 dark:border-slate-800 bg-slate-50/55 dark:bg-slate-950/25 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 print:bg-white print:p-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 rounded-full text-xs font-bold uppercase tracking-wider mb-2 print:hidden">
            <Sparkles className="w-3.5 h-3.5" /> 
            Live Project Quote Planner
          </div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Surajdx Custom Quotation Portal
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5 font-medium leading-relaxed">
            Create a detailed corporate service proposal automatically tailored to your specifications.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center gap-3 font-mono text-xs font-bold print:hidden shrink-0">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${step >= 1 ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>1</div>
          <div className="h-0.5 w-6 bg-slate-200 dark:bg-slate-800"></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${step >= 2 ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>2</div>
          <div className="h-0.5 w-6 bg-slate-200 dark:bg-slate-800"></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${step >= 3 ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>✓</div>
        </div>
      </div>

      <div className="p-8 md:p-10">
        
        {step === 1 && (
          <form onSubmit={handleNextStep} className="space-y-6 print:hidden">
            <div className="bg-indigo-50/40 dark:bg-indigo-950/20 p-5 rounded-2xl border border-indigo-100/50 dark:border-indigo-900/30 flex items-start gap-4">
              <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <div className="text-sm text-indigo-900/90 dark:text-indigo-300 font-semibold leading-relaxed">
                <span className="font-extrabold">Getting Started:</span> Enter your business profile details. Your quotation estimate remains strictly reasonable and valid for 30 calendar days. Only actual selected features will generate line-item costs.
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-900 dark:text-white text-sm font-semibold focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="e.g. rahul@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-900 dark:text-white text-sm font-semibold focus:outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono">
                  Mobile / WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    maxLength={15}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/[^\d+]/g, ''))}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-900 dark:text-white text-sm font-semibold focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono">
                  Company / Organization <span className="text-slate-405 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="e.g. Sharma Logistics"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-900 dark:text-white text-sm font-semibold focus:outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-extrabold text-slate-550 dark:text-slate-400 uppercase tracking-widest font-mono">
                Brief Scope / Specific Project Requirements <span className="text-slate-405 font-normal">(Optional)</span>
              </label>
              <textarea
                rows={3}
                placeholder="Give details about your existing spreadsheet files, business models, or specific workflows you want to automate..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-900 dark:text-white text-sm font-semibold focus:outline-none transition-all leading-relaxed"
              />
            </div>

            {errorMsg && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-800 dark:bg-red-950/20 dark:border-red-900 dark:text-red-400 rounded-xl text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-5 h-5 shrink-0" />
                {errorMsg}
              </div>
            )}

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/10 hover:-translate-y-0.5"
              >
                Configure Project Modules →
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <div className="space-y-8 print:hidden animate-fade-in">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
              <h4 className="text-lg font-black text-slate-950 dark:text-white tracking-tight mb-1">
                Select Project Scope & Modules
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
                Select <span className="font-bold text-slate-800 dark:text-white">Yes</span> or <span className="font-bold text-slate-800 dark:text-white">No</span> below to declare requirements. Individual module pricing is listed on each option.
              </p>
            </div>

            {/* Feature Question Cards GRID */}
            <div className="grid md:grid-cols-2 gap-5">
              {PROJECT_FEATURES.map((feature) => {
                const isSelected = !!selectedFeatures[feature.id];
                return (
                  <div 
                    key={feature.id} 
                    className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full ${
                      isSelected 
                        ? 'bg-indigo-50/20 dark:bg-indigo-950/10 border-indigo-400 hover:shadow-indigo-500/5' 
                        : 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/80 hover:border-slate-300'
                    }`}
                  >
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-extrabold text-slate-900 dark:text-white text-sm leading-snug">
                          {feature.name}
                        </span>
                        <span className="font-black text-indigo-605 dark:text-indigo-400 whitespace-nowrap text-xs bg-indigo-50 dark:bg-indigo-500/10 px-2 py-0.5 rounded-lg border border-indigo-100/50 dark:border-indigo-950">
                          ₹{feature.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-semibold">
                        {feature.description}
                      </p>
                    </div>

                    {/* Yes/No Button toggle switches */}
                    <div className="flex items-center gap-2 pt-3 border-t border-slate-100 dark:border-slate-850 justify-end">
                      <button
                        type="button"
                        onClick={() => setSelectedFeatures(prev => ({ ...prev, [feature.id]: false }))}
                        className={`px-4 py-1.5 rounded-lg text-xs font-bold font-mono transition-all uppercase leading-none border ${
                          !isSelected 
                            ? 'bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-900/50' 
                            : 'bg-slate-50 dark:bg-slate-800/40 text-slate-400 border-transparent hover:bg-slate-100'
                        }`}
                      >
                        No
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedFeatures(prev => ({ ...prev, [feature.id]: true }))}
                        className={`px-4 py-1.5 rounded-lg text-xs font-bold font-mono transition-all uppercase leading-none border flex items-center gap-1 ${
                          isSelected 
                            ? 'bg-emerald-600 text-white border-transparent' 
                            : 'bg-slate-50 dark:bg-slate-800/40 text-slate-400 border-transparent hover:bg-slate-100'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                        Yes
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Estimator Panel (Hidden custom value calculations until step 3) */}
            <div className="bg-slate-50 dark:bg-slate-950/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-xs text-slate-400 uppercase tracking-widest font-extrabold font-mono">Module Selection Summary</span>
                <h5 className="text-base font-bold text-slate-900 dark:text-white">
                  Active Configurations: {selectedList.length} of {PROJECT_FEATURES.length} Selected
                </h5>
                {hasBundleDiscount && (
                  <p className="text-emerald-600 dark:text-emerald-400 text-xs font-extrabold">
                    🎉 Excellent! Bundle Discount applied automatically on 3+ active solutions!
                  </p>
                )}
              </div>

              <div className="text-left md:text-right flex flex-col items-start md:items-end shrink-0 max-w-sm">
                <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                  Estimating Package Budget...
                </div>
                <div className="text-[11px] font-semibold text-slate-500 mt-1 leading-relaxed">
                  Total price quotation breakdown and special discounts will be auto-calculated & presented on the official PDF proposal document generated next!
                </div>
              </div>
            </div>

            {errorMsg && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-00 rounded-xl text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-5 h-5 shrink-0" />
                {errorMsg}
              </div>
            )}

            {/* Step navigation buttons */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/85 flex justify-between gap-4">
              <button
                type="button"
                onClick={handlePrevStep}
                className="px-6 py-3 border border-slate-200 text-slate-650 dark:border-slate-800 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 font-bold rounded-xl transition-all text-sm"
              >
                ← Client Profile
              </button>
              
              <button
                type="button"
                onClick={handleGenerateQuote}
                disabled={selectedList.length === 0 || isSubmitting}
                className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-200 dark:disabled:bg-slate-850 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-600/10 hover:-translate-y-0.5 flex items-center gap-2 text-base shrink-0"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Generating Proposal...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Generate & Save Proposal
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {step === 3 && savedQuote && (
          <div className="space-y-8 animate-fade-in">
            {/* Success message banner - hidden in printed document */}
            <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-250 text-emerald-800 dark:text-emerald-350 p-5 rounded-2xl flex items-start gap-4 print:hidden shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-sm uppercase tracking-wider">
                  Professional Quotation Generated Successfully!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium leading-relaxed">
                  Your customized proposal has been assigned ID: <strong className="font-black text-slate-900 dark:text-white">{savedQuote.id}</strong>. We have securely saved this onto our database. You can instantly print or download this proposal structure as a corporate PDF.
                </p>
              </div>
            </div>

            {/* THE PRINTABLE INVOICE SHEETS LAYOUT */}
            <div 
              id="printable-quotation-invoice" 
              className="bg-white text-slate-900 p-8 md:p-12 border border-slate-300 rounded-[2rem] shadow-sm max-w-4xl mx-auto space-y-8 font-sans print:border-0 print:shadow-none print:p-0 print:max-w-full"
            >
              
              {/* Proposal Corporate Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-6 border-b border-slate-200 pb-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black text-lg">
                      SA
                    </div>
                    <div>
                      <h2 className="text-xl font-black tracking-tight text-slate-950">
                        Suraj Automation
                      </h2>
                      <p className="text-[10px] font-mono font-bold text-indigo-600 tracking-wider">
                        PROCESS AUTOMATION • www.surajdx.com
                      </p>
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 space-y-0.5 leading-relaxed font-semibold">
                    <p>Developer: Suraj Singh</p>
                    <p>Email: surajsingh.noida98@gmail.com</p>
                    <p>Telegram/WhatsApp: +91 8851666208</p>
                    <p>Web portal: www.surajdx.com</p>
                  </div>
                </div>

                <div className="text-left sm:text-right space-y-1">
                  <div className="bg-slate-100 text-slate-800 inline-block px-3 py-1 rounded-lg text-xs font-black font-mono tracking-widest border border-slate-200 select-all">
                    {savedQuote.id}
                  </div>
                  <h1 className="text-2xl font-black tracking-tight text-slate-900 pt-1.5">
                    Service Quotation
                  </h1>
                  <p className="text-xs text-slate-550 leading-relaxed font-semibold">
                    Date: {displayDate.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <p className="text-xs text-indigo-650 font-bold">
                    Validity: 30 Calendar Days (Reasonable Est.)
                  </p>
                </div>
              </div>

              {/* Client Proposal Information */}
              <div className="grid md:grid-cols-2 gap-8 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-sm">
                <div className="space-y-2 font-semibold">
                  <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest font-mono">Prepared For</span>
                  <p className="text-base font-black text-slate-950">{savedQuote.name}</p>
                  {savedQuote.company && (
                    <p className="text-slate-700 font-bold flex items-center gap-1.5">
                      <Building className="w-4 h-4 text-slate-400 shrink-0" />
                      {savedQuote.company}
                    </p>
                  )}
                  <p className="text-slate-600 flex items-center gap-1.5 font-mono text-xs">
                    <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                    {savedQuote.email}
                  </p>
                  <p className="text-slate-600 flex items-center gap-1.5 font-mono text-xs">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    {savedQuote.phone}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest font-mono">Special Scope Notes</span>
                  {savedQuote.notes ? (
                    <p className="text-slate-650 leading-relaxed text-xs italic bg-white p-3 rounded-xl border border-slate-150 max-h-32 overflow-y-auto font-medium">
                      "{savedQuote.notes}"
                    </p>
                  ) : (
                    <p className="text-slate-400 leading-relaxed text-xs italic">
                      No custom client specifications specified. Standard modular delivery and training structure will apply.
                    </p>
                  )}
                </div>
              </div>

              {/* Proposal Line Items Table */}
              <div className="space-y-4">
                <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest font-mono">Itemized Cost Structure</span>
                <div className="border border-slate-250 rounded-2xl overflow-hidden shadow-sm">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-100 text-slate-750 font-extrabold border-b border-slate-200">
                      <tr>
                        <th className="px-5 py-3.5">Ref</th>
                        <th className="px-5 py-3.5 flex-grow">Project Module / Solution Scope Description</th>
                        <th className="px-5 py-3.5 text-right whitespace-nowrap">Price Rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 font-semibold text-slate-700">
                      {selectedList.map((item, index) => (
                        <tr key={item.id} className="hover:bg-slate-50/50">
                          <td className="px-5 py-3.5 font-mono text-slate-400 text-xs">#{index + 1}</td>
                          <td className="px-5 py-3.5 space-y-0.5">
                            <span className="font-extrabold text-slate-900">{item.name}</span>
                            <p className="text-xs text-slate-500 leading-relaxed font-normal">{item.description}</p>
                          </td>
                          <td className="px-5 py-3.5 text-right font-extrabold text-slate-900 whitespace-nowrap">
                            ₹{item.price.toLocaleString('en-IN')}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Summary Balance & Calculations */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-8 pt-4">
                <div className="text-xs text-slate-500 max-w-sm space-y-2 leading-relaxed font-medium">
                  <p className="font-bold uppercase text-slate-700 tracking-wider">Proposal Terms & conditions:</p>
                  <p>1. <strong>Project Advance Payment:</strong> 50% upfront retainer is required before onboarding. Remaining on the weekend of demo deployment.</p>
                  <p>2. <strong>Turnaround Time (Sarthi Value):</strong> Within 4–7 business working days post advance payment.</p>
                  <p>3. <strong>Additional Edits:</strong> Revisions requested separate from selection scope applies at standard ₹1,000 hourly scale rate.</p>
                </div>

                <div className="w-full sm:w-72 divide-y divide-slate-200 text-sm font-semibold border-t border-slate-200 shrink-0">
                  <div className="flex justify-between py-3">
                    <span className="text-slate-500">Subtotal Rate:</span>
                    <span className="text-slate-800">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  {hasBundleDiscount && (
                    <div className="flex justify-between py-3 text-emerald-600">
                      <span>Bundle Discount (15%):</span>
                      <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-3 text-slate-500 text-xs">
                    <span>Applicable Taxes/GST:</span>
                    <span>No Taxes Overhead (0%)</span>
                  </div>
                  <div className="flex justify-between py-4 font-black text-base border-t border-slate-300">
                    <span className="text-slate-900">Estimated Total:</span>
                    <span className="text-indigo-650 text-xl font-black">₹{grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Executive Signoff Footer */}
              <div className="flex justify-between items-center pt-8 border-t border-dashed border-slate-250 mt-4">
                <div className="space-y-0.5">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">Issued by System</p>
                  <p className="text-xs font-black text-slate-900">Suraj Singh Automation</p>
                </div>
                <div className="text-right space-y-0.5">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">Acknowledged Client Copy</p>
                  <p className="text-xs font-black text-slate-900">{savedQuote.name}</p>
                </div>
              </div>

            </div>

            {/* Print & Return action drawer buttons - hidden in print capture */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center pt-6 print:hidden">
              <button
                type="button"
                onClick={handleDownloadPDF}
                disabled={pdfGenerating}
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-black flex items-center justify-center gap-2.5 shadow-lg shadow-indigo-600/10 border border-transparent hover:-translate-y-0.5 disabled:bg-indigo-400 transition-all cursor-pointer"
              >
                {pdfGenerating ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Generating PDF File...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Download Official PDF Document
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  setSavedQuote(null);
                  setSelectedFeatures({
                    standardWeb: true,
                    sheetsDashboard: true,
                    advancedSuite: true,
                  });
                }}
                className="w-full sm:w-auto px-6 py-4 bg-slate-100 hover:bg-slate-205 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 rounded-xl font-bold transition-all text-sm shrink-0"
              >
                Configure New Proposal
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
