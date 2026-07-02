import { useState, useEffect, FormEvent } from 'react';
import { useUser } from '../contexts/UserContext';
import { useSEO } from '../hooks/useSEO';
import { 
  Plus, Settings, Trash2, Edit3, Clipboard, FileText, 
  Code2, Sparkles, Check, AlertCircle, X, ArrowLeft, ArrowUpRight,
  Eye, Phone, Mail, FolderHeart, Calendar, Search, MessageSquare, Download,
  BookOpen, Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCT_SOLUTIONS, calculateDiscount } from '../data/productSolutions';
import { FALLBACK_BLOGS } from '../data/fallbackBlogs';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, query, getDocs, orderBy, deleteDoc, doc, Timestamp, setDoc } from 'firebase/firestore';

export default function AdminPortal() {
  const { user, isAdmin, customProducts, saveCustomProduct, deleteCustomProduct, loading: authLoading } = useUser();
  useSEO('Admin Workspace | Suraj Automation', 'Manage custom products, code bases, and installation manuals.');

  // Workspace subtab selection
  const [adminTab, setAdminTab] = useState<'catalog' | 'quotations' | 'blogs' | 'seo'>('catalog');

  // SEO & Search Console Tab states
  const [seoUrls, setSeoUrls] = useState<{
    baseUrls: { url: string; type: string; priority: string }[];
    specialOffers: { url: string; type: string; priority: string }[];
    productUrls: { url: string; type: string; priority: string; name: string }[];
    blogUrls: { url: string; type: string; priority: string; title: string }[];
  } | null>(null);
  const [seoLoading, setSeoLoading] = useState(false);
  const [seoError, setSeoError] = useState<string | null>(null);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [seoSearchQuery, setSeoSearchQuery] = useState('');
  const [activeSeoTypeFilter, setActiveSeoTypeFilter] = useState<'all' | 'base' | 'offers' | 'products' | 'blogs'>('all');

  const generateClientSideSeoUrls = async () => {
    const host = 'https://surajdx.com';
    const baseUrls = [
      { url: `${host}`, type: 'Base Page', priority: '1.0' },
      { url: `${host}/about`, type: 'Base Page', priority: '0.8' },
      { url: `${host}/services`, type: 'Base Page', priority: '0.9' },
      { url: `${host}/contact`, type: 'Base Page', priority: '0.8' },
      { url: `${host}/pricing`, type: 'Base Page', priority: '0.9' },
      { url: `${host}/products`, type: 'Base Page', priority: '0.9' },
      { url: `${host}/reviews`, type: 'Base Page', priority: '0.8' },
      { url: `${host}/portal`, type: 'Base Page', priority: '0.7' },
      { url: `${host}/roi-tool`, type: 'Base Page', priority: '0.8' },
      { url: `${host}/terms`, type: 'Base Page', priority: '0.5' },
      { url: `${host}/privacy-policy`, type: 'Base Page', priority: '0.5' },
      { url: `${host}/offers`, type: 'Base Page', priority: '0.9' },
      { url: `${host}/blog`, type: 'Base Page', priority: '0.9' }
    ];

    const specialOffers = [
      { url: `${host}/offers/google-sheets-automation`, type: 'Special Offer', priority: '0.85' },
      { url: `${host}/offers/custom-excel-dashboard-mis`, type: 'Special Offer', priority: '0.85' },
      { url: `${host}/offers/google-apps-script-automation`, type: 'Special Offer', priority: '0.85' },
      { url: `${host}/offers/custom-web-app`, type: 'Special Offer', priority: '0.85' }
    ];

    const productUrls: { url: string; type: string; priority: string; name: string }[] = [];
    if (typeof PRODUCT_SOLUTIONS === 'object' && PRODUCT_SOLUTIONS !== null) {
      Object.keys(PRODUCT_SOLUTIONS).forEach(key => {
        const product = PRODUCT_SOLUTIONS[key];
        if (product && !product.isHidden) {
          productUrls.push({
            url: `${host}/products/${product.id}`,
            type: 'Product',
            priority: '0.8',
            name: product.name
          });
        }
      });
    }

    const blogUrls: { url: string; type: string; priority: string; title: string }[] = [];
    try {
      const snapshot = await getDocs(collection(db, 'blogs'));
      snapshot.forEach(docSnap => {
        const data = docSnap.data();
        if (data.isPublished) {
          const slug = data.slug || docSnap.id;
          const title = data.title || slug;
          blogUrls.push({
            url: `${host}/blog/${slug}`,
            type: 'Blog Post',
            priority: '0.7',
            title
          });
        }
      });
    } catch (blogErr) {
      console.error('Failed to fetch client side blog urls for SEO:', blogErr);
    }

    return {
      baseUrls,
      specialOffers,
      productUrls,
      blogUrls
    };
  };

  const fetchSeoUrls = async () => {
    try {
      setSeoLoading(true);
      setSeoError(null);
      const res = await fetch('/api/seo/urls');
      if (res.ok) {
        const data = await res.json();
        setSeoUrls(data);
      } else {
        console.warn('Backend SEO API returned non-ok status, falling back to client-side SEO generation.');
        const clientData = await generateClientSideSeoUrls();
        setSeoUrls(clientData);
      }
    } catch (err) {
      console.warn('Failed to connect to backend SEO API, falling back to client-side SEO generation:', err);
      try {
        const clientData = await generateClientSideSeoUrls();
        setSeoUrls(clientData);
      } catch (fallbackErr) {
        console.error('Error in client-side fallback fetchSeoUrls:', fallbackErr);
        setSeoError('Failed to generate SEO URLs list.');
      }
    } finally {
      setSeoLoading(false);
    }
  };

  useEffect(() => {
    if (adminTab === 'seo') {
      fetchSeoUrls();
    }
  }, [adminTab]);

  // BlogPost States
  const [blogsList, setBlogsList] = useState<any[]>([]);
  const [blogsLoading, setBlogsLoading] = useState(false);
  const [blogEditingId, setBlogEditingId] = useState<string | null>(null);
  const [blogDeletingId, setBlogDeletingId] = useState<string | null>(null);
  const [searchBlog, setSearchBlog] = useState('');

  // Blog Form Fields
  const [blogTitle, setBlogTitle] = useState('');
  const [blogSlug, setBlogSlug] = useState('');
  const [blogSummary, setBlogSummary] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [blogCategory, setBlogCategory] = useState('Apps Script & Automation');
  const [blogImage, setBlogImage] = useState('');
  const [blogTagsInput, setBlogTagsInput] = useState('');
  const [blogTags, setBlogTags] = useState<string[]>([]);
  const [blogReadTime, setBlogReadTime] = useState('5 min read');
  const [blogIsPublished, setBlogIsPublished] = useState(true);
  const [blogSuccessMsg, setBlogSuccessMsg] = useState('');
  const [blogErrorMsg, setBlogErrorMsg] = useState('');
  const [blogPrimaryMatchedProductId, setBlogPrimaryMatchedProductId] = useState('');
  const [blogRelatedProductIds, setBlogRelatedProductIds] = useState<string[]>([]);
  const [blogCustomAutomationSuggestion, setBlogCustomAutomationSuggestion] = useState('');
  const [isEnriching, setIsEnriching] = useState(false);
  const [isSummarizing, setIsSummarizing] = useState(false);

  // Automatically update Read Time when blogContent changes
  useEffect(() => {
    if (!blogContent.trim()) {
      setBlogReadTime('1 min read');
      return;
    }
    const wordsCount = blogContent.trim().split(/\s+/).filter(Boolean).length;
    const computedMinutes = Math.max(1, Math.ceil(wordsCount / 200));
    setBlogReadTime(`${computedMinutes} min read`);
  }, [blogContent]);

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
  const [formSetupMarkdown, setFormSetupMarkdown] = useState('');

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

  // Fetch admin blogs from Firestore
  useEffect(() => {
    if (user && user.email === 'surajsingh.noida98@gmail.com' && isAdmin && adminTab === 'blogs') {
      fetchBlogs();
    }
  }, [user, isAdmin, adminTab]);

  const fetchBlogs = async () => {
    setBlogsLoading(true);
    setBlogErrorMsg('');
    try {
      const snapshot = await getDocs(collection(db, 'blogs'));
      const list: any[] = [];
      snapshot.forEach(docSnap => {
        const data = docSnap.data();
        list.push({
          id: docSnap.id,
          ...data,
          createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate().toISOString() : (data.createdAt || new Date().toISOString())
        });
      });
      // Sort in-memory by createdAt descending
      list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setBlogsList(list);
    } catch (err: any) {
      console.error("Failed to list blogs:", err);
      setBlogErrorMsg('Failed to query blogs database.');
      setBlogsList([]);
      handleFirestoreError(err, OperationType.LIST, 'blogs');
    } finally {
      setBlogsLoading(false);
    }
  };

  const handleSaveBlog = async (e: FormEvent) => {
    e.preventDefault();
    if (!blogTitle.trim() || !blogSlug.trim() || !blogSummary.trim() || !blogContent.trim()) {
      setBlogErrorMsg('All fields (Title, Slug, Summary, Content) are required.');
      return;
    }

    setLoading(true);
    setBlogErrorMsg('');
    setBlogSuccessMsg('');

    const finalSlug = blogSlug.trim().toLowerCase().replace(/[^a-z0-9_-]/g, '-').replace(/(^-|-$)+/g, '');
    const finalId = blogEditingId || finalSlug;

    const postData = {
      id: finalId,
      title: blogTitle.trim(),
      slug: finalSlug,
      summary: blogSummary.trim(),
      content: blogContent.trim(),
      category: blogCategory,
      image: blogImage.trim() || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
      tags: blogTags,
      readTime: blogReadTime.trim() || '5 min read',
      isPublished: blogIsPublished,
      primaryMatchedProductId: blogPrimaryMatchedProductId,
      relatedProductIds: blogRelatedProductIds,
      customAutomationSuggestion: blogCustomAutomationSuggestion,
      createdAt: blogEditingId 
        ? Timestamp.fromDate(new Date(blogsList.find(b => b.id === blogEditingId)?.createdAt || new Date().toISOString())) 
        : Timestamp.now(),
      updatedAt: Timestamp.now()
    };

    try {
      // Create or update the blog post
      await setDoc(doc(db, 'blogs', finalId), postData);
      setBlogSuccessMsg(blogEditingId ? 'Blog article updated successfully!' : 'Blog post published live!');
      clearBlogForm();
      fetchBlogs();
      setTimeout(() => setBlogSuccessMsg(''), 4000);
    } catch (err: any) {
      console.error("Failed to save blog post:", err);
      setBlogErrorMsg(`Save failed: ${err.message || err}`);
      handleFirestoreError(err, blogEditingId ? OperationType.UPDATE : OperationType.CREATE, `blogs/${finalId}`);
    } finally {
      setLoading(false);
    }
  };

  const clearBlogForm = () => {
    setBlogEditingId(null);
    setBlogTitle('');
    setBlogSlug('');
    setBlogSummary('');
    setBlogContent('');
    setBlogCategory('Apps Script & Automation');
    setBlogImage('');
    setBlogTags([]);
    setBlogTagsInput('');
    setBlogReadTime('5 min read');
    setBlogIsPublished(true);
    setBlogErrorMsg('');
    setBlogPrimaryMatchedProductId('');
    setBlogRelatedProductIds([]);
    setBlogCustomAutomationSuggestion('');
  };

  const handleEditBlog = (b: any) => {
    setBlogEditingId(b.id);
    setBlogTitle(b.title);
    setBlogSlug(b.slug);
    setBlogSummary(b.summary);
    setBlogContent(b.content);
    setBlogCategory(b.category);
    setBlogImage(b.image || '');
    setBlogTags(b.tags || []);
    setBlogReadTime(b.readTime || '5 min read');
    setBlogIsPublished(b.isPublished !== false);
    setBlogPrimaryMatchedProductId(b.primaryMatchedProductId || '');
    setBlogRelatedProductIds(b.relatedProductIds || []);
    setBlogCustomAutomationSuggestion(b.customAutomationSuggestion || '');
    setBlogErrorMsg('');
    setBlogSuccessMsg('');
  };

  const clientSideEnrichBlog = (title: string, content: string) => {
    const normalizedContent = `${title} ${content}`.toLowerCase();
    let primaryMatchedProductId = '';
    const relatedProductIds: string[] = [];

    // Simple keyword matching for fallbacks
    if (normalizedContent.includes('vendorsarthi') || normalizedContent.includes('procurement') || normalizedContent.includes('quotation') || normalizedContent.includes('vendor')) {
      primaryMatchedProductId = 'vendorsarthi';
    } else if (normalizedContent.includes('hisabsarthi') || normalizedContent.includes('accounting') || normalizedContent.includes('ledger') || normalizedContent.includes('gst')) {
      primaryMatchedProductId = 'hisabsarthi';
    } else if (normalizedContent.includes('rationkart') || normalizedContent.includes('grocery') || normalizedContent.includes('kirana')) {
      primaryMatchedProductId = 'rationkart';
    } else if (normalizedContent.includes('billsarthi') || normalizedContent.includes('billing') || normalizedContent.includes('invoice')) {
      primaryMatchedProductId = 'billsarthi';
    } else if (normalizedContent.includes('karmsarthi') || normalizedContent.includes('staff') || normalizedContent.includes('attendance') || normalizedContent.includes('salary')) {
      primaryMatchedProductId = 'karmsarthi';
    } else if (normalizedContent.includes('claimo') || normalizedContent.includes('expense') || normalizedContent.includes('reimbursement')) {
      primaryMatchedProductId = 'claimo';
    } else if (normalizedContent.includes('cakesarthi') || normalizedContent.includes('bakery') || normalizedContent.includes('cake')) {
      primaryMatchedProductId = 'cakesarthi';
    } else if (normalizedContent.includes('gymsarthi') || normalizedContent.includes('gym') || normalizedContent.includes('fitness')) {
      primaryMatchedProductId = 'gymsarthi';
    } else if (normalizedContent.includes('menusarthi') || normalizedContent.includes('restaurant') || normalizedContent.includes('menu')) {
      primaryMatchedProductId = 'menusarthi';
    } else if (normalizedContent.includes('supplysarthi') || normalizedContent.includes('lead') || normalizedContent.includes('sales')) {
      primaryMatchedProductId = 'supplysarthi';
    } else if (normalizedContent.includes('loansarthi') || normalizedContent.includes('loan') || normalizedContent.includes('interest')) {
      primaryMatchedProductId = 'loansarthi';
    } else if (normalizedContent.includes('stocksarthi') || normalizedContent.includes('inventory') || normalizedContent.includes('stock')) {
      primaryMatchedProductId = 'stocksarthi';
    }

    // Auto-populate related products of same category
    if (primaryMatchedProductId) {
      const refProduct = PRODUCT_SOLUTIONS[primaryMatchedProductId];
      if (refProduct && refProduct.category) {
        Object.values(PRODUCT_SOLUTIONS).forEach((p: any) => {
          if (p.id !== primaryMatchedProductId && p.category === refProduct.category && !p.isHidden) {
            relatedProductIds.push(p.id);
          }
        });
      }
    }

    const finalRelated = relatedProductIds.slice(0, 3);

    // Smart link insertion fallback (Regex-based search and replace)
    let enrichedContent = content;
    Object.values(PRODUCT_SOLUTIONS).forEach((prod: any) => {
      const regex = new RegExp(`\\b${prod.name}\\b(?!\\s*\\))`, 'gi');
      enrichedContent = enrichedContent.replace(regex, `[${prod.name}](/products/${prod.id})`);
    });

    // Simple fallback automation suggestions
    let customAutomationSuggestion = `### 💡 Suraj's Automation Suggestion for ${title}\n\n`;
    if (primaryMatchedProductId) {
      const prodName = PRODUCT_SOLUTIONS[primaryMatchedProductId].name;
      customAutomationSuggestion += `Aap is blog topic ko manage karne ke liye humara pre-built **${prodName}** utility pack check kar sakte hain. Isme aapko milta hai:\n\n`;
      customAutomationSuggestion += `1. **Google Sheets Dashboard**: Centralized cloud backup jo clear reports deta hai.\n`;
      customAutomationSuggestion += `2. **Apps Script System**: Ek button click karte hi custom triggers run honge.\n`;
      customAutomationSuggestion += `3. **WhatsApp Auto Alerts**: Client/Staff ko real-time status notifications send karne ki facility.\n\n`;
      customAutomationSuggestion += `👉 Aap typical developers ko ₹20,000+ dene ke bajaye humare system ko standard **50% Discount** rate me direct download kar sakte hain! Koi recurring fee ya data tracking nahi.`;
    } else {
      customAutomationSuggestion += `Aap is problem statement ko fully automate karne ke liye humare Google Sheets + App Script system ko implement kar sakte hain.\n\n`;
      customAutomationSuggestion += `- **Automated Workflow**: Excel templates ko cloud sheet setup se connect karke alerts chalu karein.\n`;
      customAutomationSuggestion += `- **Hinglish/English Customization Support**: Suraj se direct consult karke customized trigger code likhwayein.\n\n`;
      customAutomationSuggestion += `📞 Niche "Request Custom Demo" click karke direct discuss karein, standard cost se full 50% ki bachat hogi!`;
    }

    // Catchy Hinglish fallback summaries
    let briefSummary = '';
    if (primaryMatchedProductId) {
      const prodName = PRODUCT_SOLUTIONS[primaryMatchedProductId]?.name || primaryMatchedProductId;
      briefSummary = `🚀 Apne business operations ko manual registers se cloud sheets par shift karein! Is detailed guide mein sikhein kaise ${prodName} setup aapke system workflows ko automate karke daily 2+ ghante bacha sakta hai. Aaj hi automatic WhatsApp alerts aur Google Sheets ka power check karein! 📊🔥`;
    } else {
      briefSummary = `💡 Kya aapka business manually maintain ho raha hai? Sheets aur Apps Script ke automatic triggers ke sath pure automation setup ko chalu karein aur errors ko 100% khatam karein! Padhein poori guide aur sikhein professional auto-delivery system setup karna. 🚀📦`;
    }

    return {
      success: true,
      isAIPowered: false,
      enrichedContent,
      primaryMatchedProductId,
      relatedProductIds: finalRelated,
      customAutomationSuggestion,
      briefSummary
    };
  };

  const handleGenerateSummary = async () => {
    if (!blogTitle.trim() || !blogContent.trim()) {
      setBlogErrorMsg('Please fill in Article Title and Article Content before generating a summary.');
      return;
    }
    setIsSummarizing(true);
    setBlogErrorMsg('');
    setBlogSuccessMsg('');
    try {
      const res = await fetch('/api/gemini/summarize-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: blogTitle.trim(),
          content: blogContent.trim()
        })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.briefSummary) {
          setBlogSummary(data.briefSummary);
          setBlogSuccessMsg(data.isAIPowered 
            ? '✨ Catchy Hinglish summary generated successfully using Gemini AI!'
            : '⚠️ Summary generated using fallback pattern (no Gemini key configured).'
          );
          setTimeout(() => setBlogSuccessMsg(''), 6000);
        } else {
          setBlogErrorMsg(data.error || 'Failed to generate summary.');
        }
      } else {
        const norm = `${blogTitle} ${blogContent}`.toLowerCase();
        let briefSummaryFallback = '';
        if (norm.includes('billsarthi') || norm.includes('billing') || norm.includes('invoice')) {
          briefSummaryFallback = `🧾 Manual billing se pareshan hain? BillSarthi system setup karke ek single click mein automatic invoices generate karein aur data leaks ko 100% rokein! Padhein complete professional workflow guide aur apna dhanda digitalize karein! 🚀📈`;
        } else {
          briefSummaryFallback = `🚀 Apne business operations ko manual processes se cloud sheets par shift karein! Is detailed step-by-step guide se automatic triggers aur simple setups seekhein aur dhanda automate karke daily hours bachaayein! 🔥📊`;
        }
        setBlogSummary(briefSummaryFallback);
        setBlogSuccessMsg('⚠️ Summary generated using client-side fallback pattern.');
        setTimeout(() => setBlogSuccessMsg(''), 6000);
      }
    } catch (err) {
      console.warn('Failed to call summarizer endpoint, using client fallback:', err);
      const norm = `${blogTitle} ${blogContent}`.toLowerCase();
      let briefSummaryFallback = `🚀 Apne business operations ko manual processes se cloud sheets par shift karein! Is detailed step-by-step guide se automatic triggers aur simple setups seekhein aur dhanda automate karke daily hours bachaayein! 🔥📊`;
      setBlogSummary(briefSummaryFallback);
      setBlogSuccessMsg('⚠️ Summary generated using client-side fallback pattern.');
      setTimeout(() => setBlogSuccessMsg(''), 6000);
    } finally {
      setIsSummarizing(false);
    }
  };

  const handleEnrichBlog = async () => {
    if (!blogTitle.trim() || !blogContent.trim()) {
      setBlogErrorMsg('Please fill in Article Title and Article Content before running smart enrichment.');
      return;
    }
    setIsEnriching(true);
    setBlogErrorMsg('');
    setBlogSuccessMsg('');
    try {
      const res = await fetch('/api/gemini/enrich-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: blogTitle.trim(),
          content: blogContent.trim(),
          category: blogCategory
        })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          setBlogContent(data.enrichedContent);
          setBlogPrimaryMatchedProductId(data.primaryMatchedProductId || '');
          setBlogRelatedProductIds(data.relatedProductIds || []);
          setBlogCustomAutomationSuggestion(data.customAutomationSuggestion || '');
          if (data.briefSummary) {
            setBlogSummary(data.briefSummary);
          }
          setBlogSuccessMsg(data.isAIPowered 
            ? '✨ Gemini AI successfully analyzed, linked relevant products, generated code, and updated your Hinglish summary!'
            : '⚠️ Enriched using high-precision fallback matches (no Gemini key configured).'
          );
          setTimeout(() => setBlogSuccessMsg(''), 6000);
        } else {
          setBlogErrorMsg(data.error || 'Failed to enrich blog content.');
        }
      } else {
        console.warn('Backend blog enrichment API returned non-ok status, falling back to client-side enrichment.');
        const clientData = clientSideEnrichBlog(blogTitle.trim(), blogContent.trim());
        setBlogContent(clientData.enrichedContent);
        setBlogPrimaryMatchedProductId(clientData.primaryMatchedProductId);
        setBlogRelatedProductIds(clientData.relatedProductIds);
        setBlogCustomAutomationSuggestion(clientData.customAutomationSuggestion);
        setBlogSummary(clientData.briefSummary);
        setBlogSuccessMsg('⚠️ Enriched and summarized using client-side high-precision matches (fallback mode).');
        setTimeout(() => setBlogSuccessMsg(''), 6000);
      }
    } catch (err: any) {
      console.warn('Failed to connect to enrichment endpoint, falling back to client-side enrichment:', err);
      try {
        const clientData = clientSideEnrichBlog(blogTitle.trim(), blogContent.trim());
        setBlogContent(clientData.enrichedContent);
        setBlogPrimaryMatchedProductId(clientData.primaryMatchedProductId);
        setBlogRelatedProductIds(clientData.relatedProductIds);
        setBlogCustomAutomationSuggestion(clientData.customAutomationSuggestion);
        setBlogSummary(clientData.briefSummary);
        setBlogSuccessMsg('⚠️ Enriched and summarized using client-side high-precision matches (fallback mode).');
        setTimeout(() => setBlogSuccessMsg(''), 6000);
      } catch (fallbackErr: any) {
        console.error('Error during client-side fallback enrichment:', fallbackErr);
        setBlogErrorMsg('Failed to enrich blog content.');
      }
    } finally {
      setIsEnriching(false);
    }
  };

  const handleDeleteBlog = async (id: string) => {
    if (blogDeletingId !== id) {
      setBlogDeletingId(id);
      setTimeout(() => {
        setBlogDeletingId(prev => prev === id ? null : prev);
      }, 5000);
      return;
    }

    try {
      await deleteDoc(doc(db, 'blogs', id));
      setBlogSuccessMsg('Blog article permanently deleted.');
      setBlogDeletingId(null);
      fetchBlogs();
      setTimeout(() => setBlogSuccessMsg(''), 4000);
    } catch (err: any) {
      console.error("Failed to delete blog:", err);
      setBlogErrorMsg(`Deletion failed: ${err.message || err}`);
      setBlogDeletingId(null);
      handleFirestoreError(err, OperationType.DELETE, `blogs/${id}`);
    }
  };

  const handleAddBlogTag = () => {
    if (blogTagsInput.trim() && !blogTags.includes(blogTagsInput.trim())) {
      setBlogTags([...blogTags, blogTagsInput.trim()]);
      setBlogTagsInput('');
    }
  };

  const handleRemoveBlogTag = (indexToRemove: number) => {
    setBlogTags(blogTags.filter((_, idx) => idx !== indexToRemove));
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
    setFormSetupMarkdown(p.setupMarkdown || '');
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
    setFormSetupMarkdown('');
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
        isHidden: formIsHidden,
        setupMarkdown: formSetupMarkdown.trim()
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
        <div className="flex border-b border-slate-200 dark:border-slate-800 mb-8 space-x-6 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setAdminTab('catalog')}
            className={`pb-4 px-2 font-bold text-sm md:text-base transition-all relative flex items-center gap-2 shrink-0 ${
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
            className={`pb-4 px-2 font-bold text-sm md:text-base transition-all relative flex items-center gap-2 shrink-0 ${
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
          <button
            onClick={() => setAdminTab('blogs')}
            className={`pb-4 px-2 font-bold text-sm md:text-base transition-all relative flex items-center gap-2 shrink-0 ${
              adminTab === 'blogs'
                ? 'text-indigo-600 dark:text-indigo-400'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Blog Publisher
            {adminTab === 'blogs' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
            )}
          </button>
          <button
            onClick={() => setAdminTab('seo')}
            className={`pb-4 px-2 font-bold text-sm md:text-base transition-all relative flex items-center gap-2 shrink-0 ${
              adminTab === 'seo'
                ? 'text-indigo-600 dark:text-indigo-400'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
            }`}
          >
            <Globe className="w-4 h-4" />
            Google Indexing & SEO
            {adminTab === 'seo' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
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

                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center justify-between">
                      <span>Product Setup Guide (Markdown Format)</span>
                      <span className="text-[10px] bg-indigo-50 dark:bg-indigo-500/10 px-2 py-0.5 rounded-full text-indigo-600 dark:text-indigo-400 font-bold font-mono">Pristine Setup Docs</span>
                    </label>
                    <textarea 
                      rows={6}
                      value={formSetupMarkdown}
                      placeholder="# Apps Script Setup Guide&#10;&#10;Here are the steps to deploy the application successfully:&#10;&#10;1. Copy the Google CSS & Index structure.&#10;2. Configure your properties.&#10;3. Run initialization from menus.&#10;&#10;Happy automating!"
                      onChange={(e) => setFormSetupMarkdown(e.target.value)}
                      className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-xs leading-relaxed"
                    />
                    <p className="text-[11px] text-slate-500 mt-1">Write beautiful markdown setup guides. Supports titles, list items, bold texts, and tables that will render brilliantly inside the User Portal.</p>
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
        ) : adminTab === 'quotations' ? (
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
        ) : adminTab === 'blogs' ? (
          /* ==================== TAB 3: BLOGS PUBLISHER ==================== */
          <div>
            {blogSuccessMsg && (
              <div className="mb-8 p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-400 rounded-xl font-medium text-sm flex items-center gap-3 animate-fade-in">
                <Check className="w-5 h-5 shrink-0" /> {blogSuccessMsg}
              </div>
            )}

            {blogErrorMsg && (
              <div className="mb-8 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 text-red-800 dark:text-red-400 rounded-xl font-medium text-sm flex items-center gap-3">
                <AlertCircle className="w-5 h-5 shrink-0" /> {blogErrorMsg}
              </div>
            )}

            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Blog Form (Create / Edit) */}
              <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-150 dark:border-slate-800 pb-4 mb-6">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                    <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    {blogEditingId ? `Edit Post: ${blogTitle}` : 'Draft New Educational Article'}
                  </h2>
                  {blogEditingId && (
                    <button 
                      onClick={clearBlogForm}
                      className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 font-bold text-xs uppercase cursor-pointer"
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>

                <form onSubmit={handleSaveBlog} className="space-y-6">
                  
                  {/* Title and Slug */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-450 dark:text-slate-500 mb-2">Article Title *</label>
                      <input 
                        type="text"
                        required
                        value={blogTitle}
                        placeholder="e.g. Mastering VLOOKUP alternative in Sheets"
                        onChange={(e) => {
                          setBlogTitle(e.target.value);
                          if (!blogEditingId) {
                            const generated = e.target.value.toLowerCase()
                              .replace(/[^a-z0-9]+/g, '-')
                              .replace(/(^-|-$)+/g, '');
                            setBlogSlug(generated);
                          }
                        }}
                        className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-450 dark:text-slate-500 mb-2">Slug URL Path *</label>
                      <input 
                        type="text"
                        required
                        disabled={!!blogEditingId}
                        placeholder="e.g. mastering-vlookup-alternative"
                        value={blogSlug}
                        onChange={(e) => setBlogSlug(e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, '-'))}
                        className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-950 disabled:text-slate-550 disabled:bg-slate-100 dark:disabled:bg-slate-900/50 focus:outline-none"
                      />
                      <p className="text-[10px] text-slate-500 mt-1">Saves as `/blog/mastering-vlookup-alternative`.</p>
                    </div>
                  </div>

                  {/* Category, Banner Image, and Reading Time */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-450 dark:text-slate-500 mb-2">Category *</label>
                      <select
                        value={blogCategory}
                        onChange={(e) => setBlogCategory(e.target.value)}
                        className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white bg-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="Apps Script & Automation">Apps Script & Automation</option>
                        <option value="Tutorials & Guides">Tutorials & Guides</option>
                        <option value="Productivity Hacks">Productivity Hacks</option>
                        <option value="General">General News</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-450 dark:text-slate-500 mb-2">Read Time</label>
                      <input 
                        type="text"
                        value={blogReadTime}
                        placeholder="e.g. 5 min read"
                        onChange={(e) => setBlogReadTime(e.target.value)}
                        className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-450 dark:text-slate-500 mb-2">Cover Image URL</label>
                      <input 
                        type="text"
                        value={blogImage}
                        placeholder="Unsplash / custom url"
                        onChange={(e) => setBlogImage(e.target.value)}
                        className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  {/* Summary Textarea */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">Brief Summary * (Visible on cards)</label>
                      <button
                        type="button"
                        onClick={handleGenerateSummary}
                        disabled={isSummarizing || !blogTitle.trim() || !blogContent.trim()}
                        className="text-[11px] font-black text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 disabled:text-slate-400 flex items-center gap-1 cursor-pointer select-none bg-none border-none p-0"
                      >
                        {isSummarizing ? (
                          <>
                            <div className="w-2.5 h-2.5 border border-indigo-600 dark:border-indigo-400 border-t-transparent rounded-full animate-spin" />
                            Summarizing...
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500/10" />
                            Auto-generate (Hinglish)
                          </>
                        )}
                      </button>
                    </div>
                    <textarea 
                      required
                      rows={3}
                      value={blogSummary}
                      placeholder="Type a catchy 2-sentence summary of what users will learn..."
                      onChange={(e) => setBlogSummary(e.target.value)}
                      className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  {/* Content Markdown Area */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">Article Content * (Supports Markdown)</label>
                      <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 font-mono"># Heading, **Bold**, \`Code\`</span>
                    </div>
                    <textarea 
                      required
                      rows={12}
                      value={blogContent}
                      placeholder="# Why you need this guide...&#10;&#10;Write detailed steps using Markdown format here..."
                      onChange={(e) => setBlogContent(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-sm leading-relaxed"
                    />
                  </div>

                  {/* Tags Builder */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-450 dark:text-slate-500 mb-2">Tags</label>
                    <div className="flex gap-2 mb-3">
                      <input 
                        type="text"
                        value={blogTagsInput}
                        placeholder="e.g. ERP"
                        onChange={(e) => setBlogTagsInput(e.target.value.replace(/[^a-zA-Z0-9\s-]/g, ''))}
                        onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddBlogTag(); } }}
                        className="flex-grow px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white bg-transparent focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={handleAddBlogTag}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold rounded-xl text-xs cursor-pointer border-none"
                      >
                        Add Tag
                      </button>
                    </div>

                    {/* Tag Pills List */}
                    <div className="flex flex-wrap gap-1.5">
                      {blogTags.map((tag, i) => (
                        <span 
                          key={tag}
                          className="inline-flex items-center gap-1 text-[11px] font-bold bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md"
                        >
                          #{tag}
                          <button
                            type="button"
                            onClick={() => handleRemoveBlogTag(i)}
                            className="text-slate-400 hover:text-red-500 focus:outline-none text-[10px] font-bold cursor-pointer"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Smart AI Content Optimizer / Product Recommendation */}
                  <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-150 dark:border-slate-800 pb-4">
                      <div>
                        <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500/25" />
                          Smart AI Content Optimizer
                        </h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Powered by Google Gemini AI Model</p>
                      </div>
                      
                      <button
                        type="button"
                        onClick={handleEnrichBlog}
                        disabled={isEnriching || !blogTitle.trim() || !blogContent.trim()}
                        className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-650 disabled:from-indigo-400 disabled:to-indigo-450 text-white text-xs font-black rounded-xl shadow-md uppercase tracking-wider flex items-center gap-2 cursor-pointer border-none"
                      >
                        {isEnriching ? (
                          <>
                            <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Optimizing Content...
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300/10" />
                            Smart Enrich & Link Products
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      This smart optimizer will automatically scan your article title and content to find relevant business automation tools, naturally insert markdown product page links, recommend similar category items, and draft an Apps Script suggestion code blueprint.
                    </p>

                    {/* AI / Manual Inputs */}
                    <div className="grid md:grid-cols-2 gap-6">
                      
                      {/* Primary Product Selector */}
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-550 mb-2">Primary Matched Product</label>
                        <select
                          value={blogPrimaryMatchedProductId}
                          onChange={(e) => setBlogPrimaryMatchedProductId(e.target.value)}
                          className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white bg-white dark:bg-slate-950 focus:outline-none"
                        >
                          <option value="">-- No matching product --</option>
                          <option value="vendorsarthi">VendorSarthi (Procurement / Quotations)</option>
                          <option value="hisabsarthi">HisabSarthi (GST Billing / Accounting)</option>
                          <option value="rationkart">RationKart (Grocery Kirana billing)</option>
                          <option value="billsarthi">BillSarthi (Point of Sales & Invoices)</option>
                          <option value="karmsarthi">KarmSarthi (Staff Attendance & Payroll)</option>
                          <option value="claimo">ClaimO (Expense Reimbursements)</option>
                          <option value="cakesarthi">CakeSarthi (Bakery order sheets)</option>
                          <option value="gymsarthi">GymSarthi (Fitness Club logs)</option>
                          <option value="menusarthi">MenuSarthi (Digital Restaurant menus)</option>
                          <option value="supplysarthi">SupplySarthi (Lead capture & Sales CRM)</option>
                          <option value="loansarthi">LoanSarthi (Interest Ledger calculator)</option>
                          <option value="stocksarthi">StockSarthi (Inventory sheets)</option>
                        </select>
                      </div>

                      {/* Related Products Selector */}
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-550 mb-2">Related Products (Showcase in Spotlight)</label>
                        <div className="flex flex-wrap gap-2 p-2.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-950 max-h-36 overflow-y-auto">
                          {[
                            { id: 'vendorsarthi', name: 'VendorSarthi' },
                            { id: 'hisabsarthi', name: 'HisabSarthi' },
                            { id: 'rationkart', name: 'RationKart' },
                            { id: 'billsarthi', name: 'BillSarthi' },
                            { id: 'karmsarthi', name: 'KarmSarthi' },
                            { id: 'claimo', name: 'ClaimO' },
                            { id: 'cakesarthi', name: 'CakeSarthi' },
                            { id: 'gymsarthi', name: 'GymSarthi' },
                            { id: 'menusarthi', name: 'MenuSarthi' },
                            { id: 'supplysarthi', name: 'SupplySarthi' },
                            { id: 'loansarthi', name: 'LoanSarthi' },
                            { id: 'stocksarthi', name: 'StockSarthi' }
                          ].map(prod => {
                            const isChecked = blogRelatedProductIds.includes(prod.id);
                            return (
                              <label key={prod.id} className="inline-flex items-center gap-1.5 px-2 py-1 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer select-none">
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => {
                                    if (isChecked) {
                                      setBlogRelatedProductIds(prev => prev.filter(id => id !== prod.id));
                                    } else {
                                      setBlogRelatedProductIds(prev => [...prev, prod.id]);
                                    }
                                  }}
                                  className="w-3 h-3 text-indigo-650"
                                />
                                {prod.name}
                              </label>
                            );
                          })}
                        </div>
                      </div>

                    </div>

                    {/* Custom Automation suggestion blueprint content */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-[10px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-550">Custom Apps Script Suggestion Blueprint (Markdown)</label>
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Shown in dark blueprint box</span>
                      </div>
                      <textarea
                        rows={6}
                        value={blogCustomAutomationSuggestion}
                        placeholder="### 💡 Suraj's Suggestion...&#10;&#10;Write Apps Script or custom Sheet triggers step-by-step suggestions here..."
                        onChange={(e) => setBlogCustomAutomationSuggestion(e.target.value)}
                        className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-xs leading-relaxed"
                      />
                    </div>

                  </div>

                  {/* Publish Status Toggle */}
                  <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-900">
                    <input 
                      type="checkbox"
                      id="blogIsPublished"
                      checked={blogIsPublished}
                      onChange={(e) => setBlogIsPublished(e.target.checked)}
                      className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 rounded border-slate-350"
                    />
                    <label htmlFor="blogIsPublished" className="text-xs font-extrabold text-slate-700 dark:text-slate-300 cursor-pointer select-none">
                      Publish Live immediately (Check this to make visible on public website)
                    </label>
                  </div>

                  {/* Submission Row */}
                  <div className="flex gap-4 border-t border-slate-150 dark:border-slate-800/80 pt-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-400 text-white font-bold rounded-xl text-sm transition-all shadow-md cursor-pointer"
                    >
                      {loading ? 'Saving Post...' : blogEditingId ? 'Update Article' : 'Publish Article'}
                    </button>
                    {blogEditingId && (
                      <button
                        type="button"
                        onClick={clearBlogForm}
                        className="py-3 px-6 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold rounded-xl text-sm transition-all cursor-pointer border-none"
                      >
                        Reset
                      </button>
                    )}
                  </div>

                </form>
              </div>

              {/* Published Posts Sidebar (Real-time + Seed lists) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Search / Filter bar */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h3 className="font-extrabold text-slate-950 dark:text-white text-sm uppercase tracking-wider mb-3">Published Catalog ({blogsList.length})</h3>
                  <div className="relative">
                    <input 
                      type="text"
                      placeholder="Search posts..."
                      value={searchBlog}
                      onChange={(e) => setSearchBlog(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-800 dark:text-white focus:outline-none"
                    />
                    <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  </div>
                </div>

                {/* Article Cards Grid scrollbar */}
                <div className="space-y-4 max-h-[700px] overflow-y-auto pr-2 scrollbar-none">
                  {blogsLoading && blogsList.length === 0 ? (
                    <div className="text-center py-10 bg-white dark:bg-slate-900 rounded-2xl border border-slate-150 dark:border-slate-850">
                      <div className="w-8 h-8 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                      <p className="text-slate-500 font-mono text-xs">Loading database guides...</p>
                    </div>
                  ) : blogsList.length === 0 ? (
                    <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-250 text-slate-500">
                      <BookOpen className="w-12 h-12 text-slate-350 mx-auto mb-3" />
                      <h4 className="font-bold text-sm text-slate-800 dark:text-white mb-1">No guides in cloud database</h4>
                      <p className="text-xs text-slate-400 mb-4">You have not published any guides yet. Publish your first post, or view fallbacks on live page.</p>
                    </div>
                  ) : (
                    blogsList.filter(b => {
                      const q = searchBlog.toLowerCase();
                      return b.title.toLowerCase().includes(q) || b.slug.toLowerCase().includes(q) || b.category.toLowerCase().includes(q);
                    }).map((b) => (
                      <div key={b.id} className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3 group">
                        
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <h5 className="font-extrabold text-slate-950 dark:text-white text-sm line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                              {b.title}
                            </h5>
                            
                            <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              b.isPublished !== false
                                ? 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-900/50'
                                : 'bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400 border border-amber-200/50 dark:border-amber-900/50'
                            }`}>
                              {b.isPublished !== false ? 'Live' : 'Draft'}
                            </span>
                          </div>
                          
                          <p className="text-[10px] text-slate-500 font-mono mt-1">/{b.slug} • {b.category}</p>
                        </div>

                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                          {b.summary}
                        </p>

                        <div className="flex justify-between items-center border-t border-slate-100 dark:border-slate-850 pt-3 mt-1 text-xs">
                          <Link 
                            to={`/blog/${b.slug}`}
                            target="_blank"
                            className="hover:text-indigo-650 font-bold flex items-center gap-1 text-slate-500 dark:text-slate-400 transition-colors"
                          >
                            Read Article <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>

                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => handleEditBlog(b)}
                              className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-bold cursor-pointer"
                            >
                              <Edit3 className="w-3.5 h-3.5" /> Edit
                            </button>
                            <button
                              onClick={() => handleDeleteBlog(b.id)}
                              className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-bold cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              {blogDeletingId === b.id ? 'Confirm?' : 'Delete'}
                            </button>
                          </div>
                        </div>

                      </div>
                    ))
                  )}
                </div>

                <div className="bg-slate-950 p-6 rounded-3xl text-indigo-200 border border-slate-800">
                  <h4 className="font-extrabold text-white text-xs mb-2 uppercase tracking-wider font-mono">Content Management Guide</h4>
                  <p className="text-slate-350 text-xs leading-relaxed mb-4">
                    Blogs are synchronized in real-time from your Firestore. If your cloud collection has zero posts, the public page seamlessly populates high-quality hardcoded fallback assets.
                  </p>
                  <div className="border-t border-slate-800 pt-3 flex flex-col gap-1 text-[10px] text-slate-550 font-mono">
                    <div>• Drafts remain invisible to search engines and guest accounts.</div>
                    <div>• Cover images can be sourced from high-resolution Unsplash URLs.</div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        ) : (
          /* ==================== TAB 4: GOOGLE INDEXING & SEO TOOL ==================== */
          <div>
            <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                  <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  Google Indexing & SEO Dashboard
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                  Monitor, manage, and push your dynamically generated pages, products, and blogs directly to Google.
                </p>
              </div>
              <button
                onClick={fetchSeoUrls}
                disabled={seoLoading}
                className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 dark:bg-slate-900 dark:hover:bg-slate-850 text-indigo-600 dark:text-indigo-400 font-bold rounded-xl text-xs flex items-center gap-2 border border-indigo-100 dark:border-slate-800 transition-all cursor-pointer disabled:opacity-50"
              >
                {seoLoading ? 'Refreshing...' : 'Refresh URL list'}
              </button>
            </div>

            {seoError && (
              <div className="mb-8 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 text-red-800 dark:text-red-400 rounded-xl font-medium text-sm flex items-center gap-3">
                <AlertCircle className="w-5 h-5 shrink-0" /> {seoError}
              </div>
            )}

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-wider">Total Sitemap URLs</span>
                <span className="text-3xl font-black text-indigo-600 dark:text-indigo-400 block mt-1">
                  {seoUrls ? (
                    seoUrls.baseUrls.length +
                    seoUrls.specialOffers.length +
                    seoUrls.productUrls.length +
                    seoUrls.blogUrls.length
                  ) : '...'}
                </span>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-wider">Base Pages</span>
                <span className="text-3xl font-black text-slate-900 dark:text-white block mt-1">
                  {seoUrls ? seoUrls.baseUrls.length : '...'}
                </span>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-wider">Dynamic Products</span>
                <span className="text-3xl font-black text-slate-900 dark:text-white block mt-1">
                  {seoUrls ? seoUrls.productUrls.length : '...'}
                </span>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-wider">Published Blogs</span>
                <span className="text-3xl font-black text-slate-900 dark:text-white block mt-1">
                  {seoUrls ? seoUrls.blogUrls.length : '...'}
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: List of Sitemap URLs */}
              <div className="lg:col-span-8 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-150 dark:border-slate-800 pb-4 mb-6 gap-4">
                  <div>
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Active Sitemap Pages</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">All of these URLs are generated dynamic and live at <a href="/sitemap.xml" target="_blank" className="text-indigo-600 hover:underline">/sitemap.xml</a></p>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        if (!seoUrls) return;
                        const allUrls = [
                          ...seoUrls.baseUrls,
                          ...seoUrls.specialOffers,
                          ...seoUrls.productUrls,
                          ...seoUrls.blogUrls
                        ].map(item => item.url).join('\n');
                        navigator.clipboard.writeText(allUrls);
                        setCopiedUrl('all');
                        setTimeout(() => setCopiedUrl(null), 2000);
                      }}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 font-bold rounded-lg text-xs flex items-center gap-1 transition-all cursor-pointer"
                    >
                      {copiedUrl === 'all' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" /> Copied list!
                        </>
                      ) : (
                        <>
                          <Clipboard className="w-3.5 h-3.5" /> Copy all URLs
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => {
                        if (!seoUrls) return;
                        const allUrls = [
                          ...seoUrls.baseUrls,
                          ...seoUrls.specialOffers,
                          ...seoUrls.productUrls,
                          ...seoUrls.blogUrls
                        ].map(item => item.url).join('\n');
                        const blob = new Blob([allUrls], { type: 'text/plain' });
                        const link = document.createElement('a');
                        link.href = URL.createObjectURL(blob);
                        link.download = 'sitemap-urls.txt';
                        link.click();
                      }}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 font-bold rounded-lg text-xs flex items-center gap-1 transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" /> Download TXT
                    </button>
                  </div>
                </div>

                {/* Filter & Search */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between">
                  {/* Tabs */}
                  <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl gap-1 overflow-x-auto scrollbar-none self-start">
                    {(['all', 'base', 'offers', 'products', 'blogs'] as const).map(filter => (
                      <button
                        key={filter}
                        onClick={() => setActiveSeoTypeFilter(filter)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all capitalize shrink-0 cursor-pointer ${
                          activeSeoTypeFilter === filter
                            ? 'bg-white dark:bg-slate-900 text-indigo-650 dark:text-indigo-400 shadow-sm'
                            : 'text-slate-550 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>

                  {/* Search Bar */}
                  <div className="relative max-w-xs w-full">
                    <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-2.5" />
                    <input
                      type="text"
                      placeholder="Search URLs..."
                      value={seoSearchQuery}
                      onChange={e => setSeoSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 outline-none dark:text-white"
                    />
                  </div>
                </div>

                {/* URL List Table */}
                <div className="border border-slate-150 dark:border-slate-850 rounded-2xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-150 dark:border-slate-850 text-[10px] uppercase font-black text-slate-500 tracking-wider">
                          <th className="py-3 px-4">Type</th>
                          <th className="py-3 px-4">Page / Resource Name</th>
                          <th className="py-3 px-4">Dynamic URL</th>
                          <th className="py-3 px-4 text-center">Priority</th>
                          <th className="py-3 px-4 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-150 dark:divide-slate-850 text-xs">
                        {seoLoading ? (
                          <tr>
                            <td colSpan={5} className="py-12 text-center text-slate-400 font-mono">
                              Fetching dynamic live sitemap components...
                            </td>
                          </tr>
                        ) : !seoUrls ? (
                          <tr>
                            <td colSpan={5} className="py-12 text-center text-slate-400 font-mono">
                              No SEO metrics loaded. Click Refresh to query database.
                            </td>
                          </tr>
                        ) : (() => {
                          const allItems: { url: string; type: string; priority: string; name: string }[] = [];
                          
                          if (activeSeoTypeFilter === 'all' || activeSeoTypeFilter === 'base') {
                            seoUrls.baseUrls.forEach(item => {
                              allItems.push({
                                url: item.url,
                                type: 'Base Page',
                                priority: item.priority,
                                name: item.url.split('/').pop() || 'Homepage'
                              });
                            });
                          }
                          if (activeSeoTypeFilter === 'all' || activeSeoTypeFilter === 'offers') {
                            seoUrls.specialOffers.forEach(item => {
                              allItems.push({
                                url: item.url,
                                type: 'Special Offer',
                                priority: item.priority,
                                name: item.url.split('/').pop()?.replace(/-/g, ' ') || 'Special Offer'
                              });
                            });
                          }
                          if (activeSeoTypeFilter === 'all' || activeSeoTypeFilter === 'products') {
                            seoUrls.productUrls.forEach(item => {
                              allItems.push({
                                url: item.url,
                                type: 'Product',
                                priority: item.priority,
                                name: item.name
                              });
                            });
                          }
                          if (activeSeoTypeFilter === 'all' || activeSeoTypeFilter === 'blogs') {
                            seoUrls.blogUrls.forEach(item => {
                              allItems.push({
                                url: item.url,
                                type: 'Blog Post',
                                priority: item.priority,
                                name: item.title
                              });
                            });
                          }

                          const filteredItems = allItems.filter(item => {
                            const queryStr = seoSearchQuery.toLowerCase();
                            return (
                              item.url.toLowerCase().includes(queryStr) ||
                              item.type.toLowerCase().includes(queryStr) ||
                              item.name.toLowerCase().includes(queryStr)
                            );
                          });

                          if (filteredItems.length === 0) {
                            return (
                              <tr>
                                <td colSpan={5} className="py-12 text-center text-slate-400">
                                  No URLs found matching your query.
                                </td>
                              </tr>
                            );
                          }

                          return filteredItems.map((item, idx) => (
                            <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-850/40 transition-colors">
                              <td className="py-3.5 px-4 font-bold">
                                <span className={`px-2 py-0.5 rounded-full text-[9px] uppercase font-black ${
                                  item.type === 'Base Page' ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400' :
                                  item.type === 'Special Offer' ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400' :
                                  item.type === 'Product' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400' :
                                  'bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400'
                                }`}>
                                  {item.type}
                                </span>
                              </td>
                              <td className="py-3.5 px-4 font-extrabold text-slate-900 dark:text-white capitalize truncate max-w-[150px]" title={item.name}>
                                {item.name}
                              </td>
                              <td className="py-3.5 px-4 font-mono text-[11px] text-slate-500 dark:text-slate-400 select-all truncate max-w-[200px]" title={item.url}>
                                {item.url}
                              </td>
                              <td className="py-3.5 px-4 text-center font-mono text-slate-550">
                                {item.priority}
                              </td>
                              <td className="py-3.5 px-4 text-right">
                                <button
                                  onClick={() => {
                                    navigator.clipboard.writeText(item.url);
                                    setCopiedUrl(item.url);
                                    setTimeout(() => setCopiedUrl(null), 1500);
                                  }}
                                  className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all cursor-pointer"
                                  title="Copy single URL"
                                >
                                  {copiedUrl === item.url ? (
                                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                                  ) : (
                                    <Clipboard className="w-4 h-4 shrink-0" />
                                  )}
                                </button>
                              </td>
                            </tr>
                          ));
                        })()}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Guides and instructions */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                
                {/* Search Console Actions */}
                <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-3xl text-slate-300 border border-slate-800 animate-fade-in">
                  <h4 className="font-extrabold text-white text-xs mb-3 uppercase tracking-wider font-mono flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    Quick Actions
                  </h4>
                  <p className="text-slate-350 text-xs leading-relaxed mb-4">
                    Submit sitemap dynamically and monitor index status in Search Console instantly.
                  </p>
                  
                  <div className="flex flex-col gap-3">
                    <a
                      href="https://search.google.com/search-console/sitemaps?resource_id=https://surajdx.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex justify-center items-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer"
                    >
                      Open Google Search Console <ArrowUpRight className="w-4 h-4" />
                    </a>
                    
                    <a
                      href="https://surajdx.com/sitemap.xml"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex justify-center items-center gap-2 py-3 bg-slate-800 hover:bg-slate-750 text-white rounded-xl font-bold text-xs border border-slate-700 transition-all cursor-pointer"
                    >
                      Preview Sitemap XML <Eye className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Automation setup guide */}
                <div className="bg-indigo-50/60 dark:bg-slate-900 p-6 rounded-3xl border border-indigo-100 dark:border-slate-800 text-slate-650 dark:text-slate-300">
                  <h4 className="font-black text-slate-900 dark:text-white text-xs uppercase tracking-widest font-mono mb-3">Google Indexing Blueprint</h4>
                  <p className="text-xs leading-relaxed mb-4">
                    Suraj bhaiya, sitemap update karne pe pages automatic index hone ke 2 tarike hain. Aapka custom sitemap humne complete dynamic kar diya hai:
                  </p>
                  
                  <div className="space-y-4 text-xs">
                    <div className="border-l-2 border-indigo-500 pl-3">
                      <strong className="block text-slate-900 dark:text-white mb-1 font-bold">1. GSC Automatic Crawling (Highly Recommended)</strong>
                      <p className="text-slate-500 dark:text-slate-400">
                        Aap Google Search Console me jaakar sitemap section me <code className="bg-slate-200 dark:bg-slate-850 px-1 py-0.5 rounded text-[10px] font-mono">sitemap.xml</code> submit kar dejiye. Iske baad, jab bhi aap naya Product add karenge ya Blog likhenge, Google search engines use automatically schedule karke fetch kar lenge.
                      </p>
                    </div>
                    <div className="border-l-2 border-indigo-500 pl-3">
                      <strong className="block text-slate-900 dark:text-white mb-1 font-bold">2. Google Indexing API (Sub-minute Submission)</strong>
                      <p className="text-slate-500 dark:text-slate-400">
                        Agar aap instantly (kuch hi minutes me) URL add karwana chahte hain, toh aap Google Cloud Platform me free service account banakar use Google Indexing API permissions de sakte hain.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </main>
  );
}

