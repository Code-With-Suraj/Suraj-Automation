import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { BlogPost } from '../types';
import { FALLBACK_BLOGS } from '../data/fallbackBlogs';
import { Search, Calendar, Clock, BookOpen, ChevronRight, Sparkles, Filter } from 'lucide-react';

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const blogsRef = collection(db, 'blogs');
        // Fetch only published blogs to satisfy Firestore security rules (rules are not filters)
        const q = query(blogsRef, where('isPublished', '==', true));
        const querySnapshot = await getDocs(q);
        const fetchedBlogs: BlogPost[] = [];
        
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          fetchedBlogs.push({
            id: doc.id,
            title: data.title || '',
            slug: data.slug || doc.id,
            summary: data.summary || '',
            content: data.content || '',
            category: data.category || 'General',
            image: data.image,
            tags: data.tags || [],
            createdAt: data.createdAt ? (typeof data.createdAt.toDate === 'function' ? data.createdAt.toDate().toISOString() : data.createdAt) : new Date().toISOString(),
            readTime: data.readTime || '3 min read',
            isPublished: data.isPublished !== false
          });
        });

        // Filter & Sort in-memory
        const publishedBlogs = fetchedBlogs
          .filter(b => b.isPublished !== false)
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

        setBlogs(publishedBlogs);
      } catch (error) {
        console.error('Error fetching blogs from Firestore:', error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  const categories = ['All', ...Array.from(new Set(blogs.map(blog => blog.category)))];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (blog.tags && blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredBlog = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  const remainingBlogs = featuredBlog ? filteredBlogs.slice(1) : [];

  const formatDate = (dateString: string | Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-28 pb-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="mb-12 relative rounded-3xl overflow-hidden bg-slate-900 dark:bg-slate-950 p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 via-purple-900/20 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl pointer-events-none -mr-20 -mt-20" />
          
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-500/30">
              <Sparkles className="w-3 h-3 fill-indigo-300" />
              Sarthi Guides
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none mb-4">
              Automation & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400">
                Apps Script Blogs
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Read step-by-step guides, formulas, and operational blueprints to replace manual tasks with free automated engines inside Google Workspace.
            </p>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-10">
          {/* Categories Tab Group */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none scroll-smooth">
            <Filter className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0 hidden sm:block" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer border shrink-0 whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-350 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
                id={`btn-category-${category.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search guides, tags, formulas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 pl-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:focus:ring-indigo-500/30 transition-shadow shadow-sm"
              id="input-blog-search"
            />
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 dark:text-slate-500" />
          </div>
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-sm font-semibold text-slate-500">Compiling articles...</p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          /* Empty Search State */
          <div className="text-center py-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm p-8 max-w-md mx-auto">
            <BookOpen className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">No articles found</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              We couldn&apos;t find any posts matching &quot;{searchQuery}&quot;. Try exploring other categories.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Featured Post (Only if on 'All' or first post matched) */}
            {featuredBlog && selectedCategory === 'All' && searchQuery === '' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid lg:grid-cols-12 gap-8 items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-md group hover:border-slate-350 dark:hover:border-slate-700 transition-all duration-300"
              >
                {/* Image Section */}
                <div className="lg:col-span-7 h-64 sm:h-96 lg:h-full min-h-[320px] relative overflow-hidden bg-slate-800">
                  <img
                    src={featuredBlog.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'}
                    alt={featuredBlog.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/35 to-transparent lg:hidden" />
                  
                  {/* Category Pill Overlaid for mobile */}
                  <span className="absolute top-4 left-4 inline-flex px-3 py-1 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-wider shadow-md">
                    {featuredBlog.category}
                  </span>
                </div>

                {/* Info Section */}
                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <span className="hidden lg:inline-flex px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 rounded-xl text-[10px] font-black uppercase tracking-wider mb-4">
                      {featuredBlog.category}
                    </span>
                    
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-450 transition-colors">
                      <Link to={`/blog/${featuredBlog.slug}`}>
                        {featuredBlog.title}
                      </Link>
                    </h2>
                    
                    <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                      {featuredBlog.summary}
                    </p>
                  </div>

                  <div>
                    {/* Meta Indicators */}
                    <div className="flex items-center gap-4 text-xs text-slate-450 dark:text-slate-500 font-medium mb-6">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{formatDate(featuredBlog.createdAt)}</span>
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-800" />
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{featuredBlog.readTime}</span>
                      </div>
                    </div>

                    <Link
                      to={`/blog/${featuredBlog.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 group/btn"
                      id="btn-featured-blog-read"
                    >
                      Read Featured Post
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Grid for normal remaining blogs */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {(selectedCategory !== 'All' || searchQuery !== '' ? filteredBlogs : remainingBlogs).map((blog, idx) => (
                <motion.article
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={blog.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-slate-350 dark:hover:border-slate-700 transition-all duration-300 flex flex-col group h-full"
                >
                  {/* Thumbnail */}
                  <div className="h-48 relative overflow-hidden bg-slate-800 shrink-0">
                    <img
                      src={blog.image || 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop'}
                      alt={blog.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 inline-flex px-2.5 py-1 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md text-slate-800 dark:text-indigo-300 rounded-xl text-[9px] font-black uppercase tracking-wider shadow-sm border border-slate-100 dark:border-slate-850">
                      {blog.category}
                    </span>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      {/* Meta Information */}
                      <div className="flex items-center gap-3 text-[11px] text-slate-450 dark:text-slate-500 font-semibold mb-3">
                        <span>{formatDate(blog.createdAt)}</span>
                        <span>•</span>
                        <span>{blog.readTime}</span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                        <Link to={`/blog/${blog.slug}`}>
                          {blog.title}
                        </Link>
                      </h3>

                      <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                        {blog.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-850/80 flex items-center justify-between">
                      {/* Tags list (First 2 tags only to stay tidy) */}
                      <div className="flex items-center gap-1.5 overflow-hidden max-w-[60%]">
                        {blog.tags && blog.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-[10px] font-bold text-slate-450 bg-slate-100 dark:bg-slate-800/40 px-2 py-0.5 rounded-md truncate">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/blog/${blog.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-black text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 group/link shrink-0"
                        id={`btn-blog-read-${blog.id}`}
                      >
                        Read Post
                        <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
