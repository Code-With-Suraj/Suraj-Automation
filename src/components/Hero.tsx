import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Terminal, Sparkles, Play, Database, Check, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const presets = [
  {
    id: 'invoice',
    fileName: 'autoInvoiceGenerator.gs',
    description: 'Auto-compile Google Sheet row into a PDF receipt and fire a WhatsApp confirmation.',
    code: `function generateInvoicePDF(saleData) {
  const template = DriveApp.getFileById(TEMPLATE_ID);
  const copy = template.makeCopy(\`INV-\${saleData.id}\`);
  const doc = DocumentApp.openById(copy.getId());
  const body = doc.getBody();
  
  // Custom cell mapping & replacement
  body.replaceText('{{party_name}}', saleData.party);
  body.replaceText('{{grand_total}}', '₹' + saleData.total);
  doc.saveAndClose();
  
  // Dispatch Webhook attachment
  sendWhatsAppPDF(saleData.phone, copy.getAs('application/pdf'));
  return { status: "DISPATCHED", id: saleData.id };
}`,
    logs: [
      { text: '[SYSTEM] Initializing daily triggers...', color: 'text-slate-400' },
      { text: '[SUCCESS] Coupled into Master Ledger spreadsheet API.', color: 'text-emerald-400' },
      { text: '[PROCESS] Binding fields for: surajsingh.noida98@gmail.com', color: 'text-indigo-400' },
      { text: '[PROCESS] Generating invoice: INV-2026-0604...', color: 'text-indigo-400 font-mono' },
      { text: '[DISPATCH] Forwarding payload to Twilio/WhatsApp Webhook API...', color: 'text-amber-400' },
      { text: '[OK] Pipeline complete. Row saved in 2.1s.', color: 'text-emerald-400 font-bold' }
    ],
    sheetRows: [
      ['Inv No', 'Customer Name', 'Amount', 'Status'],
      ['INV-4201', 'Rajesh Gupta', '₹12,499', 'Verified'],
      ['INV-4202', 'Kapil Sharma', '₹4,599', 'Sent'],
      ['INV-4203', 'Suraj Singh', '₹1,499', 'Processed']
    ]
  },
  {
    id: 'whatsapp',
    fileName: 'whatsappWebhookReceiver.gs',
    description: 'Listen for real-time messages and stream rows directly to Google Sheets database.',
    code: `function doPost(e) {
  const jsonPayload = JSON.parse(e.postData.contents);
  const message = jsonPayload.messages[0];
  
  if (message.type === 'text') {
    const parsedOrder = extractOrderDetails(message.body);
    const sheet = SpreadsheetApp.getActive().getSheetByName("Orders");
    sheet.appendRow([
      new Date(),
      message.from,
      parsedOrder.item,
      parsedOrder.qty,
      "WhatsApp Direct"
    ]);
  }
  return ContentService.createTextOutput("OK");
}`,
    logs: [
      { text: '[NETWORK] Port 3000 Webhook listener live on active script.', color: 'text-slate-400' },
      { text: '[ALERT] Inbound message detected from +91 88516 66208.', color: 'text-amber-400' },
      { text: '[PARSER] Cleaned query: "2kg Butter Cake, deliver at 4pm today"', color: 'text-indigo-400 font-mono' },
      { text: '[WRITER] Accessing google spreadsheet columns securely...', color: 'text-indigo-400' },
      { text: '[OK] Row added. Table-ID: Orders_2026.', color: 'text-emerald-400 font-bold' }
    ],
    sheetRows: [
      ['Timestamp', 'WhatsApp Phone', 'Ordered Item', 'Source'],
      ['04/06/11:15', '+91 88516xxxxx', 'Vanilla Pound Cake (1kg)', 'WhatsApp'],
      ['03/06/18:42', '+91 99110xxxxx', 'Sourdough Loaf (x2)', 'WhatsApp'],
      ['03/06/14:10', '+91 85994xxxxx', 'Chocolate Truffle', 'WhatsApp']
    ]
  },
  {
    id: 'alert',
    fileName: 'expiryRetentionAlerter.gs',
    description: 'Daily automated sweep to email accounts with balance warnings or membership expiries.',
    code: `function runSweeperJob() {
  const sheet = SpreadsheetApp.getActive().getSheetByName("Members");
  const data = sheet.getDataRange().getValues();
  const today = new Date();
  
  for(let i = 1; i < data.length; i++) {
    const expDate = new Date(data[i][4]);
    const diffDays = Math.ceil((expDate - today) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 3) {
      sendRenewalMail(data[i][2], data[i][1], data[i][3]); // Email, Customer, Cost
      sheet.getRange(i+1, 6).setValue("Alert Dispatched");
    }
  }
}`,
    logs: [
      { text: '[CRON] Sweep script triggered at 08:00 AM daily.', color: 'text-slate-400' },
      { text: '[SCANNER] Checking ledger memberships for due dates...', color: 'text-indigo-400' },
      { text: '[MATCH] Found 2 records expiring within 72 hours limits.', color: 'text-amber-400' },
      { text: '[MAIL] Delivery email via GmailApp.sendEmail() queue...', color: 'text-indigo-400' },
      { text: '[OK] Dispatched warnings. Trigger logged.', color: 'text-emerald-400 font-bold' }
    ],
    sheetRows: [
      ['MemberID', 'Customer', 'Due Date', 'Renewal Alert'],
      ['MEM-820', 'Amit Verma', '07/06/2026', 'Dispatched'],
      ['MEM-821', 'Riya Sen', '08/06/2026', 'Dispatched'],
      ['MEM-822', 'Rohit Jha', '12/06/2026', 'Scheduled']
    ]
  }
];

export default function Hero() {
  const words = [
    "Google Apps Script Automation",
    "Tailored SMB Software Tools",
    "Interactive Process Dashboards",
    "WhatsApp & Spreadsheet Webhooks",
    "Replacing Chaos with Smart Systems"
  ];

  const [wordIdx, setWordIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState(presets[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [runProgress, setRunProgress] = useState(0);
  const [runLogs, setRunLogs] = useState<typeof presets[0]['logs']>([]);

  // Smooth typewriter
  useEffect(() => {
    if (subIdx === words[wordIdx].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(timeout);
    }
    if (subIdx === 0 && isDeleting) {
      setIsDeleting(false);
      setWordIdx((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIdx((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 30 : 60);

    return () => clearTimeout(timeout);
  }, [subIdx, wordIdx, isDeleting]);

  // Execute terminal automation
  const handleExecute = () => {
    if (isRunning) return;
    setIsRunning(true);
    setRunProgress(0);
    setRunLogs([]);
  };

  useEffect(() => {
    if (!isRunning) return;

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      setRunProgress(Math.min(100, step * 16.6));

      // Append logs incrementally
      const logIdx = Math.floor((step - 1) / 1);
      if (selectedPreset.logs[logIdx]) {
        setRunLogs((prev) => [...prev, selectedPreset.logs[logIdx]]);
      }

      if (step >= 6) {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 450);

    return () => clearInterval(interval);
  }, [isRunning, selectedPreset]);

  // Change preset resets logs
  useEffect(() => {
    setRunLogs([]);
    setIsRunning(false);
    setRunProgress(0);
  }, [selectedPreset]);

  return (
    <section className="relative min-h-[100svh] lg:min-h-screen flex items-center pt-28 pb-16 bg-slate-950 text-white overflow-hidden" id="hero">
      {/* Aesthetic grid overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>
      
      {/* Light gradient glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copywriting Copy */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-wider uppercase border border-indigo-500/25">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              Custom Business Automation Services
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Replace Excel Chaos With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400">
                Self-Running Code
              </span>
            </h1>

            {/* Live active dynamic sub title */}
            <div className="min-h-[3rem] flex items-center bg-slate-900/30 border border-slate-800/60 py-3 px-4 rounded-xl max-w-xl">
              <span className="text-slate-400 text-xs font-mono tracking-wider font-bold mr-3 uppercase">Status:</span>
              <span className="text-base font-semibold text-emerald-400 font-sans tracking-tight">
                {words[wordIdx].substring(0, subIdx)}
                <span className="inline-block w-2 h-4 ml-1 bg-emerald-400 animate-pulse" />
              </span>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-body">
              Stop fighting with WhatsApp messages and broken formulas. I engineer enterprise-grade Google Workspace integration systems, automated report generators, and light web products for SMEs. 
              <span className="block mt-2 font-semibold text-indigo-300">No recurring software fees — you own 100% of your code.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20process%20audit." 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-[0_4px_24px_rgba(79,70,229,0.4)] hover:shadow-[0_8px_32px_rgba(79,70,229,0.5)] flex items-center justify-center gap-3 hover:-translate-y-0.5 text-base text-center"
              >
                Book a Free Process Audit
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link 
                to="/products" 
                className="px-8 py-4 bg-slate-900 hover:bg-slate-850 text-white border border-slate-800 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 text-base text-center"
              >
                Explore Products
              </Link>
            </div>

            {/* Tech badges inline footer */}
            <div className="pt-6 border-t border-slate-900 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5"><Database className="w-4 h-4 text-indigo-400 inline" /> Google Apps Script (GAS)</span>
              <span className="flex items-center gap-1.5"><Terminal className="w-4 h-4 text-emerald-400 inline" /> Direct Webhooks API</span>
              <span className="flex items-center gap-1.5">⚡ Infinite Free Cloud Ingress</span>
            </div>
          </div>

          {/* Right Column: Code simulator Terminal */}
          <div className="lg:col-span-6 w-full flex flex-col justify-center">
            <div className="w-full bg-slate-900/60 border border-slate-800/80 rounded-[1.75rem] backdrop-blur-xl shadow-2xl overflow-hidden">
              
              {/* Header with red/yellow/green visual buttons */}
              <div className="bg-slate-950 px-6 py-4 flex items-center justify-between border-b border-slate-850">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  <span className="ml-2.5 text-xs text-slate-400 font-mono font-semibold tracking-wider flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    suraj-script-engine_v4
                  </span>
                </div>
                <div className="text-[10px] font-mono text-emerald-400 font-extrabold tracking-widest bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/40 animate-pulse">
                  ONLINE
                </div>
              </div>

              {/* Preset selectors styled like vscode file tabs */}
              <div className="flex bg-slate-950/70 border-b border-slate-850 overflow-x-auto scrollbar-none">
                {presets.map((pre) => {
                  const isSelected = selectedPreset.id === pre.id;
                  return (
                    <button
                      key={pre.id}
                      onClick={() => setSelectedPreset(pre)}
                      className={`px-5 py-3 text-xs font-mono border-r border-slate-850 transition-all font-semibold flex items-center gap-2 whitespace-nowrap ${
                        isSelected 
                          ? 'bg-slate-900 text-white border-b-2 border-b-indigo-500 font-bold' 
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                      }`}
                    >
                      <Database className={`w-3.5 h-3.5 ${isSelected ? 'text-indigo-400' : 'text-slate-500'}`} />
                      {pre.fileName}
                    </button>
                  );
                })}
              </div>

              {/* Console Body Area */}
              <div className="p-6 space-y-6">
                <div>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed font-body">
                    {selectedPreset.description}
                  </p>
                </div>

                {/* Simulated Monospace code representation */}
                <div className="relative bg-slate-950 p-4 rounded-xl border border-slate-850/80 max-h-[170px] overflow-y-auto">
                  <pre className="text-[11px] leading-relaxed font-mono text-indigo-200 overflow-x-auto text-left">
                    <code>{selectedPreset.code}</code>
                  </pre>
                  <div className="absolute bottom-2 right-2">
                    <button
                      onClick={handleExecute}
                      disabled={isRunning}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 text-white font-mono text-xs font-bold rounded-lg flex items-center gap-1.5 transition-all shadow-md active:scale-95"
                    >
                      {isRunning ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          RUNNING...
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          RUN AUTOMATION
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Console System Output Logs */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-850/80 min-h-[120px] flex flex-col justify-start">
                  <div className="text-left font-mono text-[11px] space-y-1.5">
                    <p className="text-slate-500 italic pb-1">-- Script logs console output --</p>
                    {runLogs.length === 0 && !isRunning && (
                      <p className="text-slate-400/70">Click "Run Automation" on the right to simulate live deployment execution.</p>
                    )}
                    {runLogs.map((log, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.15 }}
                        className={`${log.color}`}
                      >
                        {log.text}
                      </motion.div>
                    ))}
                  </div>

                  {/* Horizontal progress visualization slider */}
                  {isRunning && (
                    <div className="mt-4 pt-3 border-t border-slate-900">
                      <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mb-1">
                        <span>Deploy Process Progress</span>
                        <span>{Math.round(runProgress)}%</span>
                      </div>
                      <div className="h-1 bg-slate-900 rounded-full overflow-hidden w-full">
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-300" 
                          style={{ width: `${runProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Live Spreadsheet visualization underneath standard code */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                      Synced Google Spreadsheet (Target DB view)
                    </span>
                  </div>
                  <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-850/80">
                    <table className="w-full text-[11px] font-mono text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-slate-350 border-b border-slate-850">
                          {selectedPreset.sheetRows[0].map((th, i) => (
                            <th key={i} className="px-3 py-2 font-bold font-mono border-r border-slate-850 last:border-r-0">{th}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <AnimatePresence>
                          {selectedPreset.sheetRows.slice(1).map((row, rowIdx) => (
                            <tr 
                              key={rowIdx} 
                              className={`border-b last:border-b-0 border-slate-900 text-slate-300 transition-colors ${
                                rowIdx === 0 && runLogs.length >= 4 
                                  ? 'bg-emerald-500/10 text-emerald-200' 
                                  : 'hover:bg-slate-900/30'
                              }`}
                            >
                              {row.map((cell, cellIdx) => (
                                <td key={cellIdx} className="px-3 py-1.5 border-r border-slate-900 last:border-r-0">
                                  {rowIdx === 0 && cellIdx === 3 && runLogs.length >= 4 ? (
                                    <span className="inline-flex items-center gap-1 text-emerald-400 font-extrabold animate-pulse">
                                      <Check className="w-3 h-3" />
                                      {cell}
                                    </span>
                                  ) : (
                                    cell
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </AnimatePresence>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

