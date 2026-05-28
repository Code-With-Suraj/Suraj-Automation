import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ShoppingCart, AlertTriangle, CheckCircle2, ListChecks, 
  History, Upload, Users, ArrowRight, RefreshCcw, 
  Copy, FileText, Check, ChevronLeft, Eye, Lock, Youtube
} from 'lucide-react';
import { useUser } from '../../contexts/UserContext';
import { useSEO } from '../../hooks/useSEO';
import RazorpayCheckout from '../../components/RazorpayCheckout';

function getYoutubeId(url: string | undefined): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export default function DynamicProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { getProductSolution, hasPurchased, user, login } = useUser();
  const [copied, setCopied] = useState(false);

  const product = productId ? getProductSolution(productId) : null;
  const isPurchased = productId ? hasPurchased(productId) : false;

  useSEO(
    product ? `${product.name} | Automation Solution` : 'Product Details',
    product ? product.description || `Automated spreadsheet and scripting solutions for ${product.name}` : 'Details regarding automation tools.',
    'google apps script, sheets automation, workflow management'
  );

  if (!product) {
    return (
      <main className="pt-32 pb-20 max-w-7xl mx-auto px-4 text-center">
        <div className="bg-white p-12 rounded-3xl border border-slate-200 shadow-sm inline-block max-w-md">
          <AlertTriangle className="w-16 h-16 text-amber-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Product Not Found</h2>
          <p className="text-slate-600 mb-8">
            The requested product solution does not exist or has been removed.
          </p>
          <Link 
            to="/products"
            className="inline-flex px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all items-center gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Catalog
          </Link>
        </div>
      </main>
    );
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(product.appsScriptCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = product.setupSteps || [];
  const ytId = product.youtubeUrl ? getYoutubeId(product.youtubeUrl) : null;

  return (
    <main className="pt-24 pb-20">
      {/* Dynamic Product Hero */}
      <section className="relative py-20 lg:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-bold tracking-wide mb-6 border border-indigo-500/20 backdrop-blur-sm">
                <ShoppingCart className="w-4 h-4" />
                Exclusive Automation Template
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
                {product.name} — <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
                  {product.tagline || 'Automate Your Workflows Completely.'}
                </span>
              </h1>
              
              <div className="bg-slate-900/80 border border-slate-800 p-6 md:p-8 rounded-2xl mb-10 text-lg md:text-xl text-slate-300 leading-relaxed backdrop-blur-md italic border-l-4 border-l-indigo-500">
                "{product.description || 'Enterprise grade workflow management built entirely on Google Sheets to end manual chasing, WhatsApp noise, and messy Excel templates.'}"
                <div className="mt-4 text-sm font-bold text-indigo-400 uppercase tracking-widest not-italic">
                  — Pre-configured Google Sheet solution equipped with powerful backlink Scripts.
                </div>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                {isPurchased ? (
                  <a 
                    href="#blueprintSection"
                    className="inline-flex px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-emerald-500/20 items-center justify-center gap-2 group hover:-translate-y-1"
                  >
                    View Setup Handbook & Codes
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <a 
                    href="#pricingSection"
                    className="inline-flex px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-indigo-500/25 items-center justify-center gap-2 group hover:-translate-y-1"
                  >
                    Get instant access for {product.price}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
                <a 
                  href={`https://wa.me/918851666208?text=Hi%20Suraj,%20I%20am%20interested%20in%20a%20personal%20demo%20of%20${encodeURIComponent(product.name)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex px-8 py-4 bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 rounded-xl font-bold text-lg transition-all items-center justify-center gap-2"
                >
                  Book 1-on-1 WhatsApp Demo
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Core Capabilities Grid */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Everything pre-configured in one package.
            </h2>
            <p className="text-xl text-slate-600">
              No extra databases, no monthly server costs. Just run it securely on your free Google Drive account.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <ListChecks className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Live Tracker System</h3>
              <p className="text-slate-600 leading-relaxed">
                Clean preloaded dashboard layout tracking all operations dynamically from submission to fulfillment.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <History className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Complete Change Audit</h3>
              <p className="text-slate-600 leading-relaxed">
                Immutable records of who edited what, when and why. No more spreadsheet finger-pointing or overwrites.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <Upload className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Import Templates ready</h3>
              <p className="text-slate-600 leading-relaxed">
                Built-in custom formatting validation sheets. Simply copy and paste large amounts of legacy items instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing and Payments Section */}
      <section id="pricingSection" className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Deploy this automation within 5 minutes.
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Get lifetime product updates, full apps script code, sandbox sheets, and deployment handbook guides.
          </p>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-lg text-left max-w-2xl mx-auto relative overflow-hidden">
            {isPurchased && (
              <div className="absolute top-0 right-0 bg-emerald-500 text-white font-bold text-xs uppercase px-4 py-1.5 rounded-bl-xl tracking-wider flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> Purchased
              </div>
            )}
            
            <h3 className="text-2xl font-bold text-slate-950 mb-2 flex items-center gap-3">
              {product.name} Solutions Pack
            </h3>
            <p className="text-slate-600 mb-8">
              Everything you need to launch a tailored spreadsheet application.
            </p>

            <div className="border-t border-b border-slate-100 py-6 mb-8 space-y-4">
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>Original Copyable Google Apps Script Code</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>Preloader Workspace Google Sheet Template Link</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>Full step-by-step documentation booklet</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>Lifetime product downloads from Portal</span>
              </div>
            </div>

            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-extrabold text-slate-950">{product.price}</span>
              <span className="text-slate-500 font-semibold uppercase text-sm tracking-widest">One-time payment</span>
            </div>

            {isPurchased ? (
              <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-6 text-center">
                <p className="text-emerald-800 font-bold mb-3 flex items-center justify-center gap-2 text-lg">
                  <Check className="w-5 h-5" /> You already own this product!
                </p>
                <a 
                  href="#blueprintSection"
                  className="inline-flex w-full justify-center px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-lg transition-transform hover:-translate-y-0.5"
                >
                  Access Product Files Now
                </a>
              </div>
            ) : (
              <div>
                {!user ? (
                  <button
                    onClick={async () => {
                      try {
                        await login();
                      } catch (err) {
                        console.error("Login failed:", err);
                      }
                    }}
                    className="w-full inline-flex justify-center items-center gap-2 py-4 bg-slate-950 hover:bg-slate-900 text-white rounded-xl font-bold text-lg transition-transform hover:-translate-y-0.5 shadow-lg shadow-slate-950/20"
                  >
                    Login with Google to Purchase
                  </button>
                ) : (
                  <RazorpayCheckout productId={product.id} />
                )}
                <p className="text-xs text-slate-500 text-center mt-4">
                  Secure Live Checkout. Transactions processed instantly via Razorpay.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blueprint Resources (Only unlocked if purchased / admin) */}
      <section id="blueprintSection" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-3">
              {isPurchased ? <CheckCircle2 className="w-10 h-10 text-emerald-500 shrink-0" /> : <Lock className="w-8 h-8 text-slate-400 shrink-0" />}
              Setup Blueprint handbook
            </h2>
            <p className="text-lg text-slate-600 mt-2">
              {isPurchased 
                ? "Your purchase has been verified. Access the pre-configured worksheets, scripts, and manuals below."
                : "Unlock the code base and deployment guidelines instantly after purchase."
              }
            </p>
          </div>

          {!isPurchased ? (
            <div className="bg-slate-50 rounded-3xl p-12 border border-slate-200 text-center max-w-2xl mx-auto shadow-sm">
              <Lock className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Content Locked</h3>
              <p className="text-slate-600 mb-6">
                Please purchase the solution blueprint packet above to unlock the template links, script engines, and manuals.
              </p>
              <a 
                href="#pricingSection"
                className="inline-flex px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all"
              >
                Purchase Now
              </a>
            </div>
          ) : (
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Step Guide List */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-4 uppercase tracking-wider flex items-center gap-2 border-b border-slate-200 pb-3">
                    <FileText className="w-5 h-5 text-indigo-600" />
                    Sheet Template Link
                  </h3>
                  <p className="text-sm text-slate-600 mb-6 font-medium leading-relaxed">
                    Make a copy of our customized Google Spreadsheet structure of {product.name} onto your Google Drive account.
                  </p>
                  <a 
                    href={product.sheetTemplateUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex w-full justify-center px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-transform hover:-translate-y-0.5 justify-center gap-2 shadow-md shadow-indigo-500/10"
                  >
                    <Eye className="w-5 h-5" /> Copy Google Sheet Template
                  </a>
                </div>

                {product.youtubeUrl && (
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <h3 className="text-lg font-extrabold text-slate-950 mb-4 uppercase tracking-wider flex items-center gap-2 border-b border-slate-200 pb-3">
                      <Youtube className="w-5 h-5 text-red-600" />
                      YouTube Setup Guide
                    </h3>
                    <p className="text-sm text-slate-600 mb-4 font-medium leading-relaxed">
                      Follow our video walkthrough to configure and deploy the {product.name} template:
                    </p>
                    {ytId ? (
                      <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 mb-4 shadow-sm bg-slate-950">
                        <iframe
                          src={`https://www.youtube.com/embed/${ytId}`}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full"
                        ></iframe>
                      </div>
                    ) : null}
                    <a 
                      href={product.youtubeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex w-full justify-center px-6 py-3.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-bold transition-transform hover:-translate-y-0.5 justify-center gap-2 shadow-md shadow-rose-500/10"
                    >
                      <Youtube className="w-5 h-5" /> Watch on YouTube
                    </a>
                  </div>
                )}

                <div className="bg-white p-6 rounded-2xl border border-slate-200">
                  <h3 className="text-sm font-extrabold text-slate-900 mb-4 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                    Step-by-Step setup Manual
                  </h3>
                  <ol className="relative border-l border-slate-200 ml-3 space-y-8 my-4">
                    {steps.map((step, idx) => (
                      <li key={idx} className="ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-50 border border-indigo-200 rounded-full -left-3 text-xs font-bold text-indigo-600">
                          {idx + 1}
                        </span>
                        <p className="text-sm text-slate-700 font-medium leading-relaxed">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Advanced Core Code Script Engine */}
              <div className="lg:col-span-7">
                <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                  <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <span className="font-mono text-xs text-slate-400 ml-4 font-bold tracking-wide">src/Code.gs</span>
                    </div>
                    <button
                      onClick={handleCopyCode}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors font-bold font-mono text-xs rounded-lg uppercase tracking-wider"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" /> Copy Code
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-6 overflow-x-auto max-h-[550px] font-mono text-[13px] leading-relaxed text-indigo-200">
                    <pre>{product.appsScriptCode}</pre>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
