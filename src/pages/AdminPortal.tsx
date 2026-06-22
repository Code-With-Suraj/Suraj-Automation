import { useState, useEffect, FormEvent } from 'react';
import { useUser } from '../contexts/UserContext';
import { useSEO } from '../hooks/useSEO';
import { 
  Plus, Settings, Trash2, Edit3, Clipboard, FileText, 
  Code2, Sparkles, Check, AlertCircle, X, ArrowLeft, ArrowUpRight,
  Eye, Phone, Mail, FolderHeart, Calendar, Search, MessageSquare, Download
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCT_SOLUTIONS, calculateDiscount } from '../data/productSolutions';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, query, getDocs, orderBy, deleteDoc, doc, Timestamp } from 'firebase/firestore';

export default function AdminPortal() {
  const { user, isAdmin, customProducts, saveCustomProduct, deleteCustomProduct, loading: authLoading } = useUser();
  useSEO('Admin Workspace | Suraj Automation', 'Manage custom products, code bases, and installation manuals.');

  // Workspace subtab selection
  const [adminTab, setAdminTab] = useState<'catalog' | 'quotations'>('catalog');

  // Quotation States
  const [quotations, setQuotations] = useState<any[]>([]);
  const [quotesLoading, setQuotesLoading] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState<any | null>(null);
  const [searchQuote, setSearchQuote] = useState('');
  const [searchCatalog, setSearchCatalog] = useState('');
  const [quoteSuccessMsg, setQuoteSuccessMsg] = useState('');
  const [quoteErrorMsg, setQuoteErrorMsg] = useState('');

  // Confirmation states for safe deletions inside iframes
  const [quoteDeletingId, setQuoteDeletingId] = useState<string | null>(null);
  const [productDeletingId, setProductDeletingId] = useState<string | null>(null);

  // Form states (Catalog Solutions)
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formName, setFormName] = useState('');
  const [formId, setFormId] = useState('');
  const [formPrice, setFormPrice] = useState('₹1,499');
  const [formMarketPrice, setFormMarketPrice] = useState('₹4,999');
  const [formTagline, setFormTagline] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formSheetUrl, setFormSheetUrl] = useState('');
  const [formCode, setFormCode] = useState('');
  const [formCodeFiles, setFormCodeFiles] = useState<{ filename: string; code: string }[]>([{ filename: 'Code.gs', code: '' }]);
  const [activeFileFormIndex, setActiveFileFormIndex] = useState<number>(0);
  const [formColor, setFormColor] = useState('indigo');
  const [formCategory, setFormCategory] = useState('Accounting & Finance');
  const [stepsInput, setStepsInput] = useState('');
  const [formSteps, setFormSteps] = useState<string[]>([]);
  const [imageInput, setImageInput] = useState('');
  const [formImages, setFormImages] = useState<string[]>([]);
  const [formYoutubeUrl, setFormYoutubeUrl] = useState('');
  const [formIsHidden, setFormIsHidden] = useState(false);

  // General feedback states
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch admin quotations from Firestore
  useEffect(() => {
    if (user && user.email === 'surajsingh.noida98@gmail.com' && isAdmin && adminTab === 'quotations') {
      fetchQuotations();
    }
  }, [user, isAdmin, adminTab]);

  const fetchQuotations = async () => {
    setQuotesLoading(true);
    setQuoteErrorMsg('');
    try {
      const q = query(collection(db, 'quotations'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const list: any[] = [];
      snapshot.forEach(docSnap => {
        const data = docSnap.data();
        list.push({
          id: docSnap.id,
          ...data,
          createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : new Date(data.createdAt || Date.now())
        });
      });
      setQuotations(list);
    } catch (err: any) {
      console.error("Failed to list quotations:", err);
      setQuoteErrorMsg('Failed to query quotations. Please check security rules configuration.');
    } finally {
      setQuotesLoading(false);
    }
  };

  const handleDeleteQuotation = async (id: string) => {
    if (quoteDeletingId !== id) {
      setQuoteDeletingId(id);
      setTimeout(() => {
        setQuoteDeletingId(prev => prev === id ? null : prev);
      }, 5000); // reset after 5 seconds
      return;
    }

    try {
      await deleteDoc(doc(db, 'quotations', id));
      setQuoteSuccessMsg('Quotation record successfully purged from database!');
      setSelectedQuote(null);
      setQuoteDeletingId(null);
      fetchQuotations();
      setTimeout(() => setQuoteSuccessMsg(''), 4000);
    } catch (err: any) {
      console.error("purging quotation failed:", err);
      setQuoteErrorMsg(`Error: ${err.message || err}`);
      setQuoteDeletingId(null);
      setTimeout(() => setQuoteErrorMsg(''), 5000);
    }
  };

  if (authLoading) {
    return (
      <main className="pt-32 pb-20 text-center text-slate-500">
        <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        <p className="font-bold text-slate-700">Verifying administrative credentials...</p>
      </main>
    );
  }

  if (!user || user.email !== 'surajsingh.noida98@gmail.com' || !isAdmin) {
    return (
      <main className="pt-32 pb-20 max-w-7xl mx-auto px-4 text-center">
        <div className="bg-white dark:bg-slate-900 p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm inline-block max-w-md">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Access Denied</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-semibold">
            This workspace is strictly restricted to surajsingh.noida98@gmail.com. Please log in with the official administrator account.
          </p>
          <Link 
            to="/" 
            className="inline-flex px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-md shadow-indigo-500/10"
          >
            Go Back Home
          </Link>
        </div>
      </main>
    );
  }

  const handleCreateId = (name: string) => {
    if (!editingId) {
      const generated = name.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
      setFormId(generated);
    }
  };

  const handleAddStep = () => {
    if (stepsInput.trim()) {
      setFormSteps([...formSteps, stepsInput.trim()]);
      setStepsInput('');
    }
  };

  const handleRemoveStep = (indexToRemove: number) => {
    setFormSteps(formSteps.filter((_, idx) => idx !== indexToRemove));
  };

  const handleAddImage = () => {
    if (imageInput.trim()) {
      setFormImages([...formImages, imageInput.trim()]);
      setImageInput('');
    }
  };

  const handleRemoveImage = (indexToRemove: number) => {
    setFormImages(formImages.filter((_, idx) => idx !== indexToRemove));
  };

  const handleEditProduct = (p: any) => {
    setEditingId(p.id);
    setFormId(p.id);
    setFormName(p.name);
    setFormPrice(p.price || '₹1,499');
    setFormMarketPrice(p.marketPrice || '');
    setFormTagline(p.tagline || '');
    setFormDescription(p.description || '');
    setFormSheetUrl(p.sheetTemplateUrl || '');
    setFormCode(p.appsScriptCode || '');
    const loadedFiles = p.codeFiles && p.codeFiles.length > 0 
      ? p.codeFiles 
      : [{ filename: 'Code.gs', code: p.appsScriptCode || '' }];
    setFormCodeFiles(loadedFiles);
    setActiveFileFormIndex(0);
    setFormColor(p.color || 'indigo');
    setFormCategory(p.category || 'Accounting & Finance');
    setFormSteps(p.setupSteps || []);
    setFormImages(p.images || []);
    setFormYoutubeUrl(p.youtubeUrl || '');
    setFormIsHidden(!!p.isHidden);
    setErrorMsg('');
    setSuccessMsg('');
  };

  const clearForm = () => {
    setEditingId(null);
    setFormId('');
    setFormName('');
    setFormPrice('₹1,499');
    setFormMarketPrice('₹4,999');
    setFormTagline('');
    setFormDescription('');
    setFormSheetUrl('');
    setFormCode('');
    setFormCodeFiles([{ filename: 'Code.gs', code: '' }]);
    setActiveFileFormIndex(0);
    setFormColor('indigo');
    setFormCategory('Accounting & Finance');
    setFormSteps([]);
    setFormImages([]);
    setFormYoutubeUrl('');
    setStepsInput('');
    setImageInput('');
    setFormIsHidden(false);
    setErrorMsg('');
    setSuccessMsg('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formId.trim() || !formName.trim() || !formPrice.trim() || !formSheetUrl.trim()) {
      setErrorMsg('All main fields must be specified.');
      return;
    }

    if (formCodeFiles.length === 0 || formCodeFiles.some(f => !f.filename.trim() || !f.code.trim())) {
      setErrorMsg('All code files must have a valid filename and script content.');
      return;
    }

    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      await saveCustomProduct({
        id: formId.trim().toLowerCase(),
        name: formName.trim(),
        price: formPrice.trim(),
        marketPrice: formMarketPrice.trim(),
        tagline: formTagline.trim(),
        description: formDescription.trim(),
        sheetTemplateUrl: formSheetUrl.trim(),
        appsScriptCode: formCodeFiles[0]?.code || formCode.trim(),
        codeFiles: formCodeFiles,
        color: formColor,
        category: formCategory,
        setupSteps: formSteps,
        images: formImages,
        youtubeUrl: formYoutubeUrl.trim(),
        isHidden: formIsHidden
      });

      setSuccessMsg(editingId ? 'Product customized successfully!' : 'New Automation deployed successfully!');
      clearForm();
    } catch (err: any) {
      setErrorMsg(err.message || 'Error occurred while saving product.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (productId: string) => {
    if (productDeletingId !== productId) {
      setProductDeletingId(productId);
      setTimeout(() => {
        setProductDeletingId(prev => prev === productId ? null : prev);
      }, 5000); // reset after 5 seconds
      return;
    }

    try {
      await deleteCustomProduct(productId);
      setSuccessMsg('Custom product configuration successfully deleted!');
      setProductDeletingId(null);
    } catch (err: any) {
      console.error("deleting product failed:", err);
      setErrorMsg(err.message || 'Error occurred during deletion.');
      setProductDeletingId(null);
    }
  };

  // Filter quotes by search string
  const filteredQuotes = quotations.filter(q => {
    const searchString = searchQuote.toLowerCase();
    return (
      (q.fullName || q.name || '').toLowerCase().includes(searchString) ||
      (q.email || '').toLowerCase().includes(searchString) ||
      (q.phone || '').includes(searchString) ||
      (q.projectName || q.company || '').toLowerCase().includes(searchString)
    );
  });

  return (
    <main className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300Unified">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Portal Headers */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="p-1 px-3 rounded-full bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-900 text-indigo-700 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                Authorized Admin Space
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Control Panel & Dynamic Workspace
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Add products, track dynamic user quotation sheets, and review custom script blueprints.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link 
              to="/portal" 
              className="inline-flex px-5 py-2.5 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 transition-all font-bold rounded-xl text-sm items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> To My Portal
            </Link>
            <Link 
              to="/products"
              target="_blank"
              className="inline-flex px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white transition-all font-bold rounded-xl text-sm items-center gap-2 shadow-sm"
            >
              Live Catalog Page <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Tab Selection Row */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 mb-8 space-x-6">
          <button
            onClick={() => setAdminTab('catalog')}
            className={`pb-4 px-2 font-bold text-sm md:text-base transition-all relative flex items-center gap-2 ${
              adminTab === 'catalog'
                ? 'text-indigo-600 dark:text-indigo-400'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
            }`}
          >
            <Settings className="w-4 h-4" />
            Catalog Manager
            {adminTab === 'catalog' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
            )}
          </button>
          <button
            onClick={() => setAdminTab('quotations')}
            className={`pb-4 px-2 font-bold text-sm md:text-base transition-all relative flex items-center gap-2 ${
              adminTab === 'quotations'
                ? 'text-indigo-600 dark:text-indigo-400'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            Quotations Log
            {adminTab === 'quotations' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
            )}
            {quotations.length > 0 && (
              <span className="bg-rose-500 text-white text-[10px] px-2 py-0.5 rounded-full font-black animate-pulse">
                {quotations.length}
              </span>
            )}
          </button>
        </div>

        {adminTab === 'catalog' ? (
          /* ==================== TAB 1: CATALOG MANAGER ==================== */
          <div>
            {successMsg && (
              <div className="mb-8 p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-400 rounded-xl font-medium text-sm flex items-center gap-3 animate-fade-in">
                <Check className="w-5 h-5 shrink-0" /> {successMsg}
              </div>
            )}

            {errorMsg && (
              <div className="mb-8 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-red-800 dark:text-red-400 rounded-xl font-medium text-sm flex items-center gap-3">
                <AlertCircle className="w-5 h-5 shrink-0" /> {errorMsg}
              </div>
            )}

            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Creator & Modifier Form */}
              <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-150 dark:border-slate-800 pb-4 mb-6">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                    <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    {editingId ? `Edit Product: ${formName}` : 'Deploy New Automation Solution'}
                  </h2>
                  {editingId && (
                    <button 
                      onClick={clearForm}
                      className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 font-bold text-xs uppercase"
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Product Name <span className="text-red-500">*</span></label>
                      <input 
                        type="text"
                        required
                        value={formName}
                        placeholder="e.g. AuditSarthi"
                        onChange={(e) => {
                          setFormName(e.target.value);
                          handleCreateId(e.target.value);
                        }}
                        className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Slug ID <span className="text-red-500">*</span></label>
                      <input 
                        type="text"
                        required
                        disabled={!!editingId}
                        placeholder="e.g. auditsarthi"
                        value={formId}
                        onChange={(e) => setFormId(e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, ''))}
                        className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-950 disabled:text-slate-500 disabled:bg-slate-100 dark:disabled:bg-slate-900/50 focus:outline-none"
                      />
                      <p className="text-xs text-slate-500 mt-1">Used as url path prefix `/products/auditsarthi`.</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Selling Price <span className="text-red-500">*</span></label>
                      <input 
                        type="text"
                        required
                        value={formPrice}
                        placeholder="₹1,499"
                        onChange={(e) => setFormPrice(e.target.value)}
                        className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 font-bold"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Market Price (Original) <span className="text-slate-400 font-normal">(Optional)</span></label>
                      <input 
                        type="text"
                        value={formMarketPrice}
                        placeholder="e.g. ₹4,999"
                        onChange={(e) => setFormMarketPrice(e.target.value)}
                        className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      {formPrice && formMarketPrice && (
                        <p className="text-xs text-emerald-600 font-bold mt-1.5 flex items-center gap-1">
                          <span>✓ Discount Preview:</span>
                          <span className="bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded text-[10px] border border-emerald-100 dark:border-emerald-900/50 font-black">
                            {calculateDiscount(formPrice, formMarketPrice)}% OFF
                          </span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Grouping Category</label>
                      <select 
                        value={formCategory}
                        onChange={(e) => setFormCategory(e.target.value)}
                        className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="Accounting & Finance">Accounting & Finance</option>
                        <option value="Retail & Supply">Retail & Supply</option>
                        <option value="HR & Payroll">HR & Payroll</option>
                        <option value="Operations & Tasking">Operations & Tasking</option>
                        <option value="Food & Beverage">Food & Beverage</option>
                        <option value="Custom solutions">Custom solutions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Display Tagline</label>
                    <input 
                      type="text"
                      value={formTagline}
                      placeholder="e.g. Complete GST & Tax Booking Ecosystem on Google Ecosystem"
                      onChange={(e) => setFormTagline(e.target.value)}
                      className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Full Description</label>
                    <textarea 
                      rows={3}
                      value={formDescription}
                      placeholder="Detail the problem, use-case, and workflows offered by this spreadsheet tool."
                      onChange={(e) => setFormDescription(e.target.value)}
                      className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Theme Color Palette</label>
                    <div className="flex flex-wrap gap-2.5">
                      {['indigo', 'emerald', 'blue', 'amber', 'purple', 'rose', 'orange', 'teal'].map((color) => (
                        <button
                          key={color}
                          type="button"
                          onClick={() => setFormColor(color)}
                          className={`w-9 h-9 rounded-full relative border flex items-center justify-center transition-all ${
                            formColor === color ? 'ring-2 ring-indigo-500 opacity-100 scale-105' : 'opacity-70'
                          }`}
                          style={{
                            backgroundColor: 
                              color === 'indigo' ? '#4f46e5' : 
                              color === 'emerald' ? '#059669' :
                              color === 'blue' ? '#2563eb' :
                              color === 'amber' ? '#d97706' :
                              color === 'purple' ? '#9333ea' :
                              color === 'rose' ? '#e11d48' :
                              color === 'orange' ? '#ea580c' : '#0d9488'
                          }}
                        >
                          {formColor === color && <Check className="w-4 h-4 text-white" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Google Sheet Template copy URL <span className="text-red-500">*</span></label>
                    <input 
                      type="url"
                      required
                      value={formSheetUrl}
                      placeholder="https://docs.google.com/spreadsheets/d/.../copy"
                      onChange={(e) => setFormSheetUrl(e.target.value)}
                      className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <p className="text-xs text-slate-500 mt-1">Make sure it has `/copy` ending so users can copy it directly onto their Drive.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">YouTube Setup Guide Link</label>
                    <input 
                      type="url"
                      value={formYoutubeUrl}
                      placeholder="https://www.youtube.com/watch?v=... or https://youtu.be/..."
                      onChange={(e) => setFormYoutubeUrl(e.target.value)}
                      className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  {/* Visibility Toggle */}
                  <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-xl">
                    <input 
                      type="checkbox"
                      id="formIsHidden"
                      checked={formIsHidden}
                      onChange={(e) => setFormIsHidden(e.target.checked)}
                      className="w-5 h-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500 cursor-pointer"
                    />
                    <label htmlFor="formIsHidden" className="text-sm font-bold text-slate-700 dark:text-slate-300 cursor-pointer select-none">
                      Hide product from live website catalog
                    </label>
                  </div>

                  {/* Steps input */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Installation Handbook Guidelines</label>
                    <div className="flex gap-2 mb-3">
                      <input 
                        type="text"
                        value={stepsInput}
                        placeholder="e.g. Copy script files inside App Script extensions menu and click Deploy."
                        onChange={(e) => setStepsInput(e.target.value)}
                        className="flex-grow px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white bg-transparent focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={handleAddStep}
                        className="px-4 py-2.5 bg-indigo-50 dark:bg-indigo-950 hover:bg-indigo-100 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-400 font-bold rounded-xl transition-all border border-indigo-150 dark:border-indigo-900/50"
                      >
                        Add
                      </button>
                    </div>
                    {formSteps.length > 0 && (
                      <div className="bg-slate-50 dark:bg-slate-950/20 p-4 rounded-xl border border-slate-200 dark:border-slate-800 max-h-48 overflow-y-auto space-y-2">
                        {formSteps.map((step, idx) => (
                          <div key={idx} className="flex items-start justify-between gap-3 p-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-150 dark:border-slate-800">
                            <span className="text-xs text-slate-500 font-mono font-bold pt-0.5">{idx + 1}.</span>
                            <p className="text-slate-700 dark:text-slate-300 text-sm flex-grow leading-relaxed font-semibold">{step}</p>
                            <button 
                              type="button"
                              onClick={() => handleRemoveStep(idx)}
                              className="p-1 hover:bg-slate-100 dark:hover:bg-slate-850 text-red-500 rounded"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                   {/* Multiple Apps Script Code Files Editor */}
                  <div className="space-y-4 bg-slate-50 dark:bg-slate-900/10 p-5 rounded-2xl border border-slate-200/65 dark:border-slate-800">
                    <div className="flex justify-between items-center bg-slate-100 dark:bg-slate-800/40 p-2 rounded-xl">
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-300">
                        Configure Source Code Files ({formCodeFiles.length}) <span className="text-red-500">*</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          const newFiles = [...formCodeFiles, { filename: `File${formCodeFiles.length + 1}.gs`, code: '' }];
                          setFormCodeFiles(newFiles);
                          setActiveFileFormIndex(newFiles.length - 1);
                        }}
                        className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-sm transition-colors"
                      >
                        + Add File
                      </button>
                    </div>

                    {/* File Tabs */}
                    <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                      {formCodeFiles.map((file, idx) => {
                        const isActive = activeFileFormIndex === idx;
                        return (
                          <div
                            key={idx}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer border transition-all ${
                              isActive
                                ? 'bg-indigo-600 text-white border-indigo-600 shadow-md scale-102'
                                : 'bg-white dark:bg-slate-900 text-slate-650 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850'
                            }`}
                            onClick={() => setActiveFileFormIndex(idx)}
                          >
                            <span>{file.filename || `File ${idx + 1}`}</span>
                            
                            {formCodeFiles.length > 1 && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const confirmDelete = window.confirm(`Are you sure you want to remove this code file (${file.filename || `File ${idx + 1}`})?`);
                                  if (!confirmDelete) return;
                                  
                                  const newFiles = formCodeFiles.filter((_, fIdx) => fIdx !== idx);
                                  setFormCodeFiles(newFiles);
                                  
                                  // Adjusting active tab safely
                                  if (activeFileFormIndex >= newFiles.length) {
                                    setActiveFileFormIndex(newFiles.length - 1);
                                  } else if (activeFileFormIndex === idx) {
                                    // if we delete current, lock on first available
                                    setActiveFileFormIndex(0);
                                  }
                                }}
                                className={`text-[15px] font-black leading-none px-1 rounded hover:bg-black/15 transition-colors shrink-0 ${
                                  isActive ? 'text-white' : 'text-red-500'
                                }`}
                              >
                                &times;
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Active File Input Area */}
                    {formCodeFiles[activeFileFormIndex] && (
                      <div className="space-y-3 bg-white dark:bg-slate-950 p-4 border border-slate-150 dark:border-slate-800 rounded-xl shadow-xs">
                        <div>
                          <label className="block text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                            File Name
                          </label>
                          <input
                            type="text"
                            required
                            value={formCodeFiles[activeFileFormIndex].filename}
                            placeholder="e.g. Code.gs, index.html, helpers.gs"
                            onChange={(e) => {
                              const nextFiles = [...formCodeFiles];
                              nextFiles[activeFileFormIndex].filename = e.target.value;
                              setFormCodeFiles(nextFiles);
                            }}
                            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-900 font-mono text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                            Script / Source Code
                          </label>
                          <textarea
                            rows={8}
                            required
                            value={formCodeFiles[activeFileFormIndex].code}
                            placeholder="Paste or write the Apps Script code of this file here..."
                            onChange={(e) => {
                              const nextFiles = [...formCodeFiles];
                              nextFiles[activeFileFormIndex].code = e.target.value;
                              setFormCodeFiles(nextFiles);
                              // Sync legacy formCode attribute for simple operations of first index
                              if (activeFileFormIndex === 0) {
                                setFormCode(e.target.value);
                              }
                            }}
                            className="w-full font-mono text-xs px-4 py-3 border border-slate-800 bg-slate-900 text-indigo-200 rounded-xl focus:outline-none"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Images configuration */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Optional Demo Screenshots URLs</label>
                    <div className="flex gap-2 mb-3">
                      <input 
                        type="url"
                        value={imageInput}
                        placeholder="e.g. https://images.unsplash.com/your-image-url..."
                        onChange={(e) => setImageInput(e.target.value)}
                        className="flex-grow px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white bg-transparent focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={handleAddImage}
                        className="px-4 py-2.5 bg-indigo-50 dark:bg-indigo-950 hover:bg-indigo-100 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-400 font-bold rounded-xl"
                      >
                        Add
                      </button>
                    </div>
                    {formImages.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {formImages.map((img, idx) => (
                          <div key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs">
                            <span className="text-slate-600 dark:text-slate-400 truncate max-w-xs">{img}</span>
                            <button 
                              type="button"
                              onClick={() => handleRemoveImage(idx)}
                              className="text-red-500"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="border-t border-slate-150 dark:border-slate-800 pt-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex justify-center items-center gap-2 py-3.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white rounded-xl font-bold transition-all shadow-md shadow-indigo-500/10"
                    >
                      {loading ? 'Processing...' : (editingId ? 'Save Configuration Updates' : 'Add Solution to Live Catalog')}
                    </button>
                  </div>

                </form>
              </div>

              {/* Dynamic Catalog Panel */}
              <div className="lg:col-span-5 space-y-8">
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    Products & Codes Catalog
                  </h3>

                  {/* Catalog Search Bar */}
                  <div className="relative mb-6">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Search className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      placeholder="Search catalog products..."
                      value={searchCatalog}
                      onChange={(e) => setSearchCatalog(e.target.value)}
                      className="w-full pl-10 pr-9 py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 text-xs font-semibold text-slate-800 dark:text-white"
                    />
                    {searchCatalog && (
                      <button
                        type="button"
                        onClick={() => setSearchCatalog('')}
                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* SECTION A: Predefined / Legacy Products */}
                  <div className="space-y-4 mb-8">
                    <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                      Legacy / Predefined Products ({
                        Object.values(PRODUCT_SOLUTIONS).filter(legacyProd => {
                          const dbOverride = customProducts.find((cp) => cp.id === legacyProd.id);
                          const displayProduct = dbOverride || legacyProd;
                          const q = searchCatalog.toLowerCase();
                          return (
                            displayProduct.name.toLowerCase().includes(q) ||
                            displayProduct.id.toLowerCase().includes(q) ||
                            (displayProduct.category || '').toLowerCase().includes(q) ||
                            (displayProduct.tagline || '').toLowerCase().includes(q)
                          );
                        }).length
                      })
                    </h4>
                    {Object.values(PRODUCT_SOLUTIONS)
                      .filter(legacyProd => {
                        const dbOverride = customProducts.find((cp) => cp.id === legacyProd.id);
                        const displayProduct = dbOverride || legacyProd;
                        const q = searchCatalog.toLowerCase();
                        return (
                          displayProduct.name.toLowerCase().includes(q) ||
                          displayProduct.id.toLowerCase().includes(q) ||
                          (displayProduct.category || '').toLowerCase().includes(q) ||
                          (displayProduct.tagline || '').toLowerCase().includes(q)
                        );
                      })
                      .map((legacyProd) => {
                      const dbOverride = customProducts.find((cp) => cp.id === legacyProd.id);
                      const isActiveOverride = !!dbOverride;
                      const displayProduct = dbOverride || legacyProd;

                      return (
                        <div key={legacyProd.id} className="bg-white dark:bg-slate-950 p-5 rounded-2xl border border-slate-200 dark:border-slate-850 shadow-sm flex flex-col gap-3">
                          <div>
                            <div className="flex items-center justify-between gap-2">
                              <h5 className="font-extrabold text-slate-950 dark:text-white text-base">
                                {displayProduct.name}
                                {displayProduct.isHidden && (
                                  <span className="ml-2 text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-bold uppercase">Hidden</span>
                                )}
                              </h5>
                              {isActiveOverride ? (
                                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 dark:bg-emerald-950/20 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900 px-2 py-0.5 rounded-full">
                                  Override Active
                                </span>
                              ) : (
                                <span className="text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded-full">
                                  Static
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-500 font-mono mt-1">ID: {legacyProd.id} • {legacyProd.category}</p>
                          </div>

                          <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed italic">
                            "{displayProduct.tagline || 'No tagline configured.'}"
                          </p>

                          <div className="flex justify-between items-center text-xs font-semibold bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-2.5 rounded-xl">
                            <span className="text-slate-600 dark:text-slate-350">Price: <span className="font-extrabold text-slate-800 dark:text-white">{displayProduct.price}</span></span>
                            {displayProduct.marketPrice && (
                              <span className="text-slate-500 flex items-center gap-1">
                                Market: <span className="line-through">{displayProduct.marketPrice}</span>
                                <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-black text-[10px] border border-emerald-100">
                                  -{calculateDiscount(displayProduct.price, displayProduct.marketPrice)}%
                                </span>
                              </span>
                            )}
                          </div>

                          <div className="flex items-center justify-between border-t border-slate-105 dark:border-slate-800/80 pt-3 mt-1">
                            <Link 
                              to={`/products/${legacyProd.id}`}
                              target="_blank"
                              className="hover:text-indigo-600 transition-colors font-bold text-xs flex items-center gap-1 text-slate-605"
                            >
                              View Live <ArrowUpRight className="w-4 h-4" />
                            </Link>
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => handleEditProduct(displayProduct)}
                                className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-bold text-xs"
                              >
                                <Edit3 className="w-3.5 h-3.5" /> Edit
                              </button>
                              {isActiveOverride && (
                                <button
                                  onClick={() => handleDelete(legacyProd.id)}
                                  className="inline-flex items-center gap-1 text-red-601 hover:text-red-700 font-bold text-xs"
                                >
                                  <Trash2 className="w-3.5 h-3.5" /> Reset
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* SECTION B: Brand New Dynamic Products */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                      Purely Dynamic Products ({
                        customProducts.filter(cp => {
                          if (PRODUCT_SOLUTIONS[cp.id]) return false;
                          const q = searchCatalog.toLowerCase();
                          return (
                            cp.name.toLowerCase().includes(q) ||
                            cp.id.toLowerCase().includes(q) ||
                            (cp.category || '').toLowerCase().includes(q) ||
                            (cp.tagline || '').toLowerCase().includes(q)
                          );
                        }).length
                      })
                    </h4>
                    {customProducts.filter(cp => {
                      if (PRODUCT_SOLUTIONS[cp.id]) return false;
                      const q = searchCatalog.toLowerCase();
                      return (
                        cp.name.toLowerCase().includes(q) ||
                        cp.id.toLowerCase().includes(q) ||
                        (cp.category || '').toLowerCase().includes(q) ||
                        (cp.tagline || '').toLowerCase().includes(q)
                      );
                    }).length === 0 ? (
                      <div className="p-6 text-center bg-white dark:bg-slate-950 rounded-2xl border border-slate-150 dark:border-slate-850 border-dashed">
                        <p className="text-slate-500 text-xs">No matching custom products found in database.</p>
                      </div>
                    ) : (
                      customProducts.filter(cp => {
                        if (PRODUCT_SOLUTIONS[cp.id]) return false;
                        const q = searchCatalog.toLowerCase();
                        return (
                          cp.name.toLowerCase().includes(q) ||
                          cp.id.toLowerCase().includes(q) ||
                          (cp.category || '').toLowerCase().includes(q) ||
                          (cp.tagline || '').toLowerCase().includes(q)
                        );
                      }).map((p) => (
                        <div key={p.id} className="bg-white dark:bg-slate-950 p-5 rounded-2xl border border-slate-200 dark:border-slate-850 shadow-sm flex flex-col gap-3">
                          <div>
                            <div className="flex items-center justify-between">
                              <h5 className="font-extrabold text-slate-950 dark:text-white text-base">
                                {p.name}
                                {p.isHidden && (
                                  <span className="ml-2 text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-bold uppercase">Hidden</span>
                                )}
                              </h5>
                              <span className="text-[10px] font-bold text-purple-700 bg-purple-50 dark:bg-purple-950 border border-purple-250 px-2 py-0.5 rounded-full">
                                Database Live
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 font-mono mt-1">ID: {p.id} • {p.category}</p>
                          </div>

                          <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed italic">
                            "{p.tagline || 'No tagline configured.'}"
                          </p>

                          <div className="flex justify-between items-center text-xs font-semibold bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-2.5 rounded-xl">
                            <span className="text-slate-600 dark:text-slate-350">Price: <span className="font-extrabold text-slate-800 dark:text-white">{p.price}</span></span>
                            {p.marketPrice && (
                              <span className="text-slate-500 flex items-center gap-1">
                                Market: <span className="line-through">{p.marketPrice}</span>
                                <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-black text-[10px] border border-emerald-100">
                                  -{calculateDiscount(p.price, p.marketPrice)}%
                                </span>
                              </span>
                            )}
                          </div>

                          <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 pt-3 mt-1">
                            <Link 
                              to={`/products/${p.id}`}
                              target="_blank"
                              className="hover:text-indigo-600 transition-colors font-bold text-xs flex items-center gap-1 text-slate-605"
                            >
                              Live Page <ArrowUpRight className="w-4 h-4" />
                            </Link>
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => handleEditProduct(p)}
                                className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-bold text-xs"
                              >
                                <Edit3 className="w-3.5 h-3.5" /> Edit
                              </button>
                              <button
                                onClick={() => handleDelete(p.id)}
                                className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-bold text-xs"
                              >
                                <Trash2 className="w-3.5 h-3.5" /> Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                </div>

                <div className="bg-slate-950 p-6 rounded-3xl text-indigo-200 border border-slate-800">
                  <h4 className="font-extrabold text-white text-sm mb-2 uppercase tracking-wide font-mono">Developer Handbook</h4>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Dynamic configurations represent localized overrides as well as catalog expansions hosted in real-time Firestore database storage.
                  </p>
                  <div className="border-t border-slate-800 pt-3 flex flex-col gap-1.5 font-mono text-[10px] text-slate-400">
                    <div>• Override static items automatically by slug ID matchmaking</div>
                    <div>• Security rule validation restrictions apply completely</div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        ) : (
          /* ==================== TAB 2: QUOTATIONS MONITOR ==================== */
          <div>
            {quoteSuccessMsg && (
              <div className="mb-8 p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-400 rounded-xl font-medium text-sm flex items-center gap-3">
                <Check className="w-5 h-5" /> {quoteSuccessMsg}
              </div>
            )}

            {quoteErrorMsg && (
              <div className="mb-8 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 text-red-800 dark:text-red-400 rounded-xl font-medium text-sm flex items-center gap-3">
                <AlertCircle className="w-5 h-5 animate-bounce" /> {quoteErrorMsg}
              </div>
            )}

            {/* Quote Action controls */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
              <div className="relative w-full md:max-w-md">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-5 h-5" />
                </span>
                <input
                  type="text"
                  placeholder="Search quotes by Client Name, Email, Phone or Project..."
                  value={searchQuote}
                  onChange={(e) => setSearchQuote(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none text-slate-800 dark:text-white"
                />
              </div>

              <div className="flex gap-3 shrink-0 w-full md:w-auto">
                <button
                  onClick={fetchQuotations}
                  disabled={quotesLoading}
                  className="w-full md:w-auto px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950 dark:hover:bg-indigo-900 text-indigo-750 dark:text-indigo-400 font-bold rounded-xl transition-all text-sm border border-indigo-100 dark:border-indigo-900"
                >
                  {quotesLoading ? 'Syncing...' : 'Refresh Logs'}
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Quotations List Sheet */}
              <div className="lg:col-span-12 xl:col-span-7 space-y-4">
                {quotesLoading && quotations.length === 0 ? (
                  <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
                    <div className="w-10 h-10 border-4 border-indigo-650 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-500 font-mono text-sm leading-relaxed">Loading logged quotations...</p>
                  </div>
                ) : filteredQuotes.length === 0 ? (
                  <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-500">
                    <FolderHeart className="w-16 h-16 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
                    <h4 className="text-lg font-extrabold text-slate-800 dark:text-white mb-1">No Quotations Found</h4>
                    <p className="text-sm font-semibold text-slate-400">
                      {searchQuote ? "No results match your active search filter." : "Users haven't requested any custom quote configurations yet."}
                    </p>
                  </div>
                ) : (
                  <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-50/70 dark:bg-slate-950/45 text-slate-500 dark:text-slate-400 text-xs font-mono font-bold border-b border-slate-200 dark:border-slate-800 uppercase tracking-widest">
                            <th className="py-4 px-6">Client & Date</th>
                            <th className="py-4 px-6">Project Request</th>
                            <th className="py-4 px-6">Estimated Cost</th>
                            <th className="py-4 px-6 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                          {filteredQuotes.map((quote) => {
                            const isSelected = selectedQuote?.id === quote.id;
                            const isDeleting = quoteDeletingId === quote.id;
                            return (
                              <tr 
                                key={quote.id}
                                onClick={() => setSelectedQuote(quote)}
                                className={`cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-850/50 transition-colors ${
                                  isSelected ? 'bg-indigo-50/30 dark:bg-indigo-950/20' : ''
                                }`}
                              >
                                <td className="py-4 px-6">
                                  <div className="font-extrabold text-slate-900 dark:text-white text-sm">{quote.fullName || quote.name}</div>
                                  <div className="text-slate-500 text-xs flex items-center gap-1.5 mt-1 font-semibold">
                                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                                    <span>{quote.createdAt.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                  </div>
                                </td>
                                <td className="py-4 px-6 max-w-xs">
                                  <div className="font-semibold text-slate-700 dark:text-slate-300 text-sm truncate">{quote.projectName || quote.company || 'My Custom Automation'}</div>
                                  <div className="text-slate-400 text-xs truncate mt-0.5 font-mono">{quote.phone || 'No phone'}</div>
                                </td>
                                <td className="py-4 px-6">
                                  <span className="text-indigo-650 dark:text-indigo-400 font-extrabold text-sm">
                                    ₹{quote.totalPrice?.toLocaleString('en-IN') || quote.totalPrice}
                                  </span>
                                  {quote.bundleDiscount && (
                                    <div className="text-[10px] text-emerald-600 font-bold mt-0.5">-{quote.bundleDiscount} Discount</div>
                                  )}
                                </td>
                                <td className="py-4 px-6 text-right" onClick={(e) => e.stopPropagation()}>
                                  <div className="flex items-center justify-end gap-2">
                                    <button
                                      onClick={() => setSelectedQuote(quote)}
                                      className="p-2 hover:bg-indigo-50 dark:hover:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-lg transition-all"
                                      title="Review checked features"
                                    >
                                      <Eye className="w-4 h-4" />
                                    </button>
                                    <button
                                      onClick={() => handleDeleteQuotation(quote.id)}
                                      className={`p-2 rounded-lg transition-all flex items-center gap-1 leading-none ${
                                        isDeleting
                                          ? 'bg-rose-600 hover:bg-rose-700 text-white animate-pulse px-2.5 py-1 text-[10px] font-black uppercase tracking-wider'
                                          : 'hover:bg-red-50 dark:hover:bg-red-950/30 text-rose-500'
                                      }`}
                                      title={isDeleting ? "Click again to confirm database purge" : "Permanent Delete"}
                                    >
                                      <Trash2 className="w-4 h-4" />
                                      {isDeleting && <span>Purge?</span>}
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              {/* Quotation Detail Sidebar Card */}
              <div className="lg:col-span-12 xl:col-span-5">
                {selectedQuote ? (
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm sticky top-24">
                    <div className="flex justify-between items-start border-b border-slate-100 dark:border-slate-800 pb-4">
                      <div>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-800 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">
                          Selected Proposal Log
                        </span>
                        <h4 className="text-xl font-black text-slate-900 dark:text-white mt-1.5 uppercase tracking-tight">{selectedQuote.fullName || selectedQuote.name}</h4>
                      </div>
                      <button 
                        onClick={() => setSelectedQuote(null)}
                        className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-850 rounded-lg text-slate-400"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Customer Contacts panel */}
                    <div className="grid grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-950/45 p-4 rounded-2xl border border-slate-150 dark:border-slate-800 text-xs space-y-0 text-slate-650 dark:text-slate-350 font-semibold leading-relaxed">
                      <div className="col-span-2 sm:col-span-1 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                        <a href={`tel:${selectedQuote.phone}`} className="hover:underline hover:text-indigo-605">{selectedQuote.phone}</a>
                      </div>
                      <div className="col-span-2 sm:col-span-1 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                        <a href={`mailto:${selectedQuote.email}`} className="hover:underline hover:text-indigo-605 truncate block">{selectedQuote.email}</a>
                      </div>
                    </div>

                    {/* Project overview */}
                    <div className="space-y-2">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Project Name / Company</h5>
                      <p className="text-sm text-slate-800 dark:text-slate-200 font-semibold bg-slate-50/50 dark:bg-slate-900/50 border border-slate-150 dark:border-slate-800 p-3.5 rounded-xl leading-relaxed">
                        {selectedQuote.projectName || selectedQuote.company || "No custom title entered."}
                      </p>
                    </div>

                    {/* Feature Modules Breakdown checklist */}
                    <div className="space-y-2">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Checked Feature Selections</h5>
                      <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                        {(() => {
                          let featuresToRender: Record<string, boolean> = {};
                          if (selectedQuote.modules && typeof selectedQuote.modules === 'object') {
                            featuresToRender = selectedQuote.modules;
                          } else {
                            // Map old flat keys to standard titles for perfect backward compatibility
                            featuresToRender = {
                              'Basic Landing Page': !!selectedQuote.hasLandingPage,
                              'Dynamic Web Subpages': !!selectedQuote.hasDynamicPages,
                              'Google Sheets Sync': !!selectedQuote.hasSheetsSync,
                              'Apps Script Integration': !!selectedQuote.hasAppsScript,
                              'WhatsApp Notifications Gateway': !!selectedQuote.hasWhatsAppNotification,
                              'Automated PDF dispatch': !!selectedQuote.hasPdfGenerator,
                              'Interactive Operational Charts': !!selectedQuote.hasDashboard,
                              'Admin panel operations': !!selectedQuote.hasAdminPanel,
                              'Onboarding Maintenance Setup': !!selectedQuote.hasMaintenance,
                            };
                          }

                          return Object.entries(featuresToRender).map(([modKey, modVal]: any) => {
                            const isChecked = modVal === 'Yes' || modVal === true;
                            const itemCleanLabel = modKey
                              .replace(/([A-Z])/g, ' $1')
                              .replace(/^./, (str: string) => str.toUpperCase());

                            return (
                              <div key={modKey} className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 dark:border-slate-850 text-xs">
                                <span className="font-extrabold text-slate-700 dark:text-slate-300">{itemCleanLabel}</span>
                                <span className={`px-2.5 py-0.5 rounded-full font-black text-[10px] uppercase font-mono border ${
                                  isChecked 
                                    ? 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900' 
                                    : 'text-slate-400 bg-slate-50 dark:bg-slate-950 border-transparent'
                                }`}>
                                  {isChecked ? 'YES' : 'NO'}
                                </span>
                              </div>
                            );
                          });
                        })()}
                      </div>
                    </div>

                    {/* Proposal Pricing Details Banner */}
                    <div className="p-4 bg-indigo-50/60 dark:bg-slate-950/20 rounded-2xl border border-indigo-120 dark:border-indigo-995/50 flex justify-between items-center text-xs">
                      <div>
                        {selectedQuote.bundleDiscount && (
                          <div className="text-emerald-600 font-black mb-1">
                            -{selectedQuote.bundleDiscount} Discount Applied
                          </div>
                        )}
                        <span className="text-slate-500 font-bold">Estimated Cost Summary</span>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-black text-indigo-700 dark:text-indigo-400 tracking-tight block">
                          ₹{selectedQuote.totalPrice?.toLocaleString('en-IN') || selectedQuote.totalPrice}
                        </span>
                      </div>
                    </div>

                    {/* Follow Up Click Buttons */}
                    <div className="grid grid-cols-1 gap-3 border-t border-slate-100 dark:border-slate-850 pt-4 mt-2">
                      <a
                        href={`https://wa.me/918851666208?text=${encodeURIComponent(
                          `Hi ${selectedQuote.fullName}, this is Suraj. I received your custom Quote request for "${selectedQuote.projectName || 'Custom ERP Automation'}" (Estimated: ${selectedQuote.totalPrice}). I would like to schedule a 10-minute workflow walkthrough call with you!`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex justify-center items-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm shadow-md shadow-emerald-600/15"
                      >
                        <MessageSquare className="w-4.5 h-4.5" />
                        Send WhatsApp Proposal →
                      </a>
                    </div>

                  </div>
                ) : (
                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 border-dashed rounded-3xl p-12 text-center text-slate-400 space-y-3">
                    <Eye className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto" />
                    <h5 className="font-extrabold text-slate-700 dark:text-slate-350 text-sm">No Document Selected</h5>
                    <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed font-semibold">
                      Click any user quote log line item from the list on the left to see dynamic form choices details immediately.
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </main>
  );
}
