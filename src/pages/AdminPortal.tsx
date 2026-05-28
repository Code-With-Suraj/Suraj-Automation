import { useState, FormEvent } from 'react';
import { useUser } from '../contexts/UserContext';
import { useSEO } from '../hooks/useSEO';
import { 
  Plus, Settings, Trash2, Edit3, Clipboard, FileText, 
  Code2, Sparkles, Check, AlertCircle, X, ArrowLeft, ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCT_SOLUTIONS } from '../data/productSolutions';

export default function AdminPortal() {
  const { user, isAdmin, customProducts, saveCustomProduct, deleteCustomProduct, loading: authLoading } = useUser();
  useSEO('Admin Workspace | Suraj Automation', 'Manage custom products, code bases, and installation manuals.');

  // Form states
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formName, setFormName] = useState('');
  const [formId, setFormId] = useState('');
  const [formPrice, setFormPrice] = useState('₹1,499');
  const [formTagline, setFormTagline] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formSheetUrl, setFormSheetUrl] = useState('');
  const [formCode, setFormCode] = useState('');
  const [formColor, setFormColor] = useState('indigo');
  const [formCategory, setFormCategory] = useState('Accounting & Finance');
  const [stepsInput, setStepsInput] = useState('');
  const [formSteps, setFormSteps] = useState<string[]>([]);
  const [imageInput, setImageInput] = useState('');
  const [formImages, setFormImages] = useState<string[]>([]);
  const [formYoutubeUrl, setFormYoutubeUrl] = useState('');

  // Feedback states
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

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
        <div className="bg-white p-12 rounded-3xl border border-slate-200 shadow-sm inline-block max-w-md">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Access Denied</h2>
          <p className="text-slate-600 mb-8 leading-relaxed font-medium">
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
    setFormTagline(p.tagline || '');
    setFormDescription(p.description || '');
    setFormSheetUrl(p.sheetTemplateUrl || '');
    setFormCode(p.appsScriptCode || '');
    setFormColor(p.color || 'indigo');
    setFormCategory(p.category || 'Accounting & Finance');
    setFormSteps(p.setupSteps || []);
    setFormImages(p.images || []);
    setFormYoutubeUrl(p.youtubeUrl || '');
    setErrorMsg('');
    setSuccessMsg('');
  };

  const clearForm = () => {
    setEditingId(null);
    setFormId('');
    setFormName('');
    setFormPrice('₹1,499');
    setFormTagline('');
    setFormDescription('');
    setFormSheetUrl('');
    setFormCode('');
    setFormColor('indigo');
    setFormCategory('Accounting & Finance');
    setFormSteps([]);
    setFormImages([]);
    setFormYoutubeUrl('');
    setStepsInput('');
    setImageInput('');
    setErrorMsg('');
    setSuccessMsg('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formId.trim() || !formName.trim() || !formPrice.trim() || !formSheetUrl.trim() || !formCode.trim()) {
      setErrorMsg('All main fields must be specified.');
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
        tagline: formTagline.trim(),
        description: formDescription.trim(),
        sheetTemplateUrl: formSheetUrl.trim(),
        appsScriptCode: formCode.trim(),
        color: formColor,
        category: formCategory,
        setupSteps: formSteps,
        images: formImages,
        youtubeUrl: formYoutubeUrl.trim()
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
    if (window.confirm('Are you strictly sure you want to permanently delete this automation? This action is irreversible.')) {
      try {
        await deleteCustomProduct(productId);
        setSuccessMsg('Product eliminated safely!');
      } catch (err: any) {
        setErrorMsg(err.message || 'Error occurred during deletion.');
      }
    }
  };

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Portal Headers */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="p-1 px-3 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                Authorized Admin Space
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Control Panel & Dynamic Catalog Manager
            </h1>
            <p className="text-slate-600 mt-1">
              Add products, embed Apps Script blueprints, update guides. Everything updates instantly.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link 
              to="/portal" 
              className="inline-flex px-5 py-2.5 border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition-all font-bold rounded-xl text-sm items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> To My Portal
            </Link>
            <Link 
              to="/products"
              target="_blank"
              className="inline-flex px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white transition-all font-bold rounded-xl text-sm items-center gap-2"
            >
              Live Catalog Page <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Messaging Panels */}
        {successMsg && (
          <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl font-medium text-sm flex items-center gap-3 animate-fade-in">
            <Check className="w-5 h-5 shrink-0" /> {successMsg}
          </div>
        )}

        {errorMsg && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl font-medium text-sm flex items-center gap-3">
            <AlertCircle className="w-5 h-5 shrink-0" /> {errorMsg}
          </div>
        )}

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Creator & Modifier Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-150 pb-4 mb-6">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                {editingId ? `Edit Product: ${formName}` : 'Deploy New Automation Solution'}
              </h2>
              {editingId && (
                <button 
                  onClick={clearForm}
                  className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 font-bold text-xs uppercase"
                >
                  Cancel Edit
                </button>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Product Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text"
                    required
                    value={formName}
                    placeholder="e.g. AuditSarthi"
                    onChange={(e) => {
                      setFormName(e.target.value);
                      handleCreateId(e.target.value);
                    }}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Slug ID <span className="text-red-500">*</span></label>
                  <input 
                    type="text"
                    required
                    disabled={!!editingId}
                    placeholder="e.g. auditsarthi"
                    value={formId}
                    onChange={(e) => setFormId(e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, ''))}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-slate-900 bg-slate-50 disabled:text-slate-500 disabled:bg-slate-100 focus:outline-none"
                  />
                  <p className="text-xs text-slate-500 mt-1">Used as url path prefix `/products/auditsarthi`.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Pricing Amount (String) <span className="text-red-500">*</span></label>
                  <input 
                    type="text"
                    required
                    value={formPrice}
                    placeholder="₹1,499"
                    onChange={(e) => setFormPrice(e.target.value)}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Grouping Category</label>
                  <select 
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                <label className="block text-sm font-bold text-slate-700 mb-2">Display Tagline</label>
                <input 
                  type="text"
                  value={formTagline}
                  placeholder="e.g. Complete GST & Tax Booking Ecosystem on Google Ecosystem"
                  onChange={(e) => setFormTagline(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Description</label>
                <textarea 
                  rows={3}
                  value={formDescription}
                  placeholder="Detail the problem, use-case, and dynamic workflows offered by this spreadsheet."
                  onChange={(e) => setFormDescription(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Theme Color Palette</label>
                <div className="flex items-center gap-3">
                  {['indigo', 'emerald', 'blue', 'amber', 'purple', 'rose', 'orange', 'teal'].map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setFormColor(color)}
                      className={`w-9 h-9 rounded-full relative border flex items-center justify-center transition-all ${
                        formColor === color ? 'ring-2 ring-indigo-500 opacity-100' : 'opacity-70'
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
                <label className="block text-sm font-bold text-slate-700 mb-2">Google Sheet Template copy URL <span className="text-red-500">*</span></label>
                <input 
                  type="url"
                  required
                  value={formSheetUrl}
                  placeholder="https://docs.google.com/spreadsheets/d/.../copy"
                  onChange={(e) => setFormSheetUrl(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <p className="text-xs text-slate-500 mt-1">Make sure it has `/copy` ending so users can copy it directly onto their Drive.</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">YouTube Setup Guide Link (Only displayed post-purchase)</label>
                <input 
                  type="url"
                  value={formYoutubeUrl}
                  placeholder="https://www.youtube.com/watch?v=... or https://youtu.be/..."
                  onChange={(e) => setFormYoutubeUrl(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <p className="text-xs text-slate-500 mt-1">Enter a YouTube tutorial link detailing the setup configuration for this product.</p>
              </div>

              {/* Steps input */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Installation Handbook Guidelines</label>
                <div className="flex gap-2 mb-3">
                  <input 
                    type="text"
                    value={stepsInput}
                    placeholder="e.g. Copy script files inside App Script extensions menu and click Deploy."
                    onChange={(e) => setStepsInput(e.target.value)}
                    className="flex-grow px-4 py-2.5 border border-slate-200 rounded-xl text-slate-900 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleAddStep}
                    className="px-4 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold rounded-xl transition-all"
                  >
                    Add
                  </button>
                </div>
                {formSteps.length > 0 && (
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 max-h-48 overflow-y-auto space-y-2">
                    {formSteps.map((step, idx) => (
                      <div key={idx} className="flex items-start justify-between gap-3 p-2 bg-white rounded-lg border border-slate-150">
                        <span className="text-xs text-slate-500 font-mono font-bold pt-0.5">{idx + 1}.</span>
                        <p className="text-slate-700 text-sm flex-grow leading-relaxed">{step}</p>
                        <button 
                          type="button"
                          onClick={() => handleRemoveStep(idx)}
                          className="p-1 hover:bg-slate-100 text-red-500 rounded"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Apps Script code Editor */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Raw Apps Script Core Code (Code.gs) <span className="text-red-500">*</span></label>
                <textarea 
                  rows={8}
                  required
                  value={formCode}
                  placeholder="function onEdit(e) { ... }"
                  onChange={(e) => setFormCode(e.target.value)}
                  className="w-full font-mono text-xs px-4 py-3 border border-slate-800 bg-slate-900 text-indigo-200 rounded-2xl focus:outline-none"
                />
              </div>

              {/* Images configuration */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Optional Demo Screenshots URLs</label>
                <div className="flex gap-2 mb-3">
                  <input 
                    type="url"
                    value={imageInput}
                    placeholder="e.g. https://images.unsplash.com/your-image-url..."
                    onChange={(e) => setImageInput(e.target.value)}
                    className="flex-grow px-4 py-2.5 border border-slate-200 rounded-xl text-slate-900 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleAddImage}
                    className="px-4 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold rounded-xl"
                  >
                    Add
                  </button>
                </div>
                {formImages.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formImages.map((img, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                        <span className="text-slate-600 truncate max-w-xs">{img}</span>
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

              <div className="border-t border-slate-150 pt-6">
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
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Settings className="w-5 h-5 text-indigo-600" />
                Products & Codes Catalog
              </h3>

              {/* SECTION A: Predefined / Legacy Products */}
              <div className="space-y-4 mb-8">
                <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                  Legacy / Predefined Products ({Object.keys(PRODUCT_SOLUTIONS).length})
                </h4>
                {Object.values(PRODUCT_SOLUTIONS).map((legacyProd) => {
                  const dbOverride = customProducts.find((cp) => cp.id === legacyProd.id);
                  const isActiveOverride = !!dbOverride;
                  const displayProduct = dbOverride || legacyProd;

                  return (
                    <div key={legacyProd.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3">
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <h5 className="font-extrabold text-slate-950 text-base">{displayProduct.name}</h5>
                          {isActiveOverride ? (
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                              Override Active (Live)
                            </span>
                          ) : (
                            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full">
                              Static Standard
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 font-mono mt-1">ID: {legacyProd.id} • {legacyProd.category}</p>
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed italic">
                        "{displayProduct.tagline || 'No tagline configured.'}"
                      </p>

                      <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-1">
                        <Link 
                          to={`/products/${legacyProd.id}`}
                          target="_blank"
                          className="hover:text-indigo-600 transition-colors font-bold text-xs flex items-center gap-1 text-slate-600"
                        >
                          View Live <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleEditProduct(displayProduct)}
                            className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-bold text-xs"
                          >
                            <Edit3 className="w-3.5 h-3.5" /> {isActiveOverride ? 'Edit Override' : 'Customize / Edit'}
                          </button>
                          {isActiveOverride && (
                            <button
                              onClick={() => handleDelete(legacyProd.id)}
                              className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-bold text-xs"
                              title="Delete database override and fallback to original hardcoded code"
                            >
                              <Trash2 className="w-3.5 h-3.5" /> Reset Override
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
                  Purely Dynamic Products ({customProducts.filter(cp => !PRODUCT_SOLUTIONS[cp.id]).length})
                </h4>
                {customProducts.filter(cp => !PRODUCT_SOLUTIONS[cp.id]).length === 0 ? (
                  <div className="p-6 text-center bg-white rounded-2xl border border-slate-150 border-dashed">
                    <p className="text-slate-500 text-xs">No purely dynamic products inside Firestore.</p>
                  </div>
                ) : (
                  customProducts.filter(cp => !PRODUCT_SOLUTIONS[cp.id]).map((p) => (
                    <div key={p.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3">
                      <div>
                        <div className="flex items-center justify-between">
                          <h5 className="font-extrabold text-slate-950 text-base">{p.name}</h5>
                          <span className="text-[10px] font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-full">
                            Database Live
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 font-mono mt-1">ID: {p.id} • {p.category}</p>
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed italic">
                        "{p.tagline || 'No tagline configured.'}"
                      </p>

                      <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-1">
                        <Link 
                          to={`/products/${p.id}`}
                          target="_blank"
                          className="hover:text-indigo-600 transition-colors font-bold text-xs flex items-center gap-1 text-slate-600"
                        >
                          View Live <ArrowUpRight className="w-4 h-4" />
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
              <h4 className="font-extrabold text-white text-base mb-2 uppercase tracking-wide">Developer Handbook</h4>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Dynamic configurations represent localized overrides as well as catalog expansions hosted in real-time Firestore database storage.
              </p>
              <div className="border-t border-slate-800 pt-3 flex flex-col gap-1.5 font-mono text-[11px] text-slate-400">
                <div>• Predefined Overrides: Stored by slug ID in database</div>
                <div>• Security Rules: Restricted to surajsingh.noida98@gmail.com</div>
                <div>• Portal Syncing: Instantaneous across other users</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
