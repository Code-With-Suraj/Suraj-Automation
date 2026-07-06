import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { collection, getDocs, query, where, limit, onSnapshot, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { useUser } from '../contexts/UserContext';
import { BlogPost } from '../types';
import { FALLBACK_BLOGS } from '../data/fallbackBlogs';
import { PRODUCT_SOLUTIONS } from '../data/productSolutions';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Calendar, Clock, Sparkles, User, Tag, Share2, Copy, Check, MessageSquare, Trash2, CornerDownRight } from 'lucide-react';

interface BlogComment {
  id: string;
  userId: string;
  userName: string;
  userPhoto?: string;
  content: string;
  parentId?: string;
  createdAt: Date;
}

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  // Recommended Blogs States
  const [recommendedBlogs, setRecommendedBlogs] = useState<BlogPost[]>([]);
  const [recLoading, setRecLoading] = useState(false);

  // Comments and replies system state
  const { user, login, isAdmin } = useUser();
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [newCommentContent, setNewCommentContent] = useState('');
  const [commentSubmitting, setCommentSubmitting] = useState(false);
  const [replyingToId, setReplyingToId] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');

  // Synchronize comments in real-time
  useEffect(() => {
    if (!blog?.id) return;

    setCommentsLoading(true);
    const commentsRef = collection(db, 'blogs', blog.id, 'comments');
    
    const unsubscribe = onSnapshot(commentsRef, (snapshot) => {
      const loadedComments: BlogComment[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        loadedComments.push({
          id: doc.id,
          userId: data.userId || '',
          userName: data.userName || '',
          userPhoto: data.userPhoto || '',
          content: data.content || '',
          parentId: data.parentId || '',
          createdAt: data.createdAt ? (typeof data.createdAt.toDate === 'function' ? data.createdAt.toDate() : new Date(data.createdAt)) : new Date(),
        });
      });

      // Sort in memory by createdAt ascending so replies and threads build chronologically
      const sorted = loadedComments.sort((a, b) => {
        return a.createdAt.getTime() - b.createdAt.getTime();
      });

      setComments(sorted);
      setCommentsLoading(false);
    }, (error) => {
      console.error("Error reading comments: ", error);
      setCommentsLoading(false);
    });

    return () => unsubscribe();
  }, [blog?.id]);

  const handlePostComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !blog?.id || !newCommentContent.trim()) return;

    setCommentSubmitting(true);
    const commentId = `comment-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    const commentPath = `blogs/${blog.id}/comments/${commentId}`;

    try {
      const commentDocRef = doc(db, 'blogs', blog.id, 'comments', commentId);
      const newCommentPayload = {
        id: commentId,
        userId: user.uid,
        userName: user.displayName || user.email || 'Anonymous User',
        userPhoto: user.photoURL || '',
        content: newCommentContent.trim(),
        parentId: '',
        createdAt: new Date(),
      };
      
      await setDoc(commentDocRef, newCommentPayload);
      setNewCommentContent('');
    } catch (err) {
      console.error('Error posting comment:', err);
      handleFirestoreError(err, OperationType.WRITE, commentPath);
    } finally {
      setCommentSubmitting(false);
    }
  };

  const handlePostReply = async (parentId: string) => {
    if (!user || !blog?.id || !replyContent.trim()) return;

    setCommentSubmitting(true);
    const commentId = `comment-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    const commentPath = `blogs/${blog.id}/comments/${commentId}`;

    try {
      const commentDocRef = doc(db, 'blogs', blog.id, 'comments', commentId);
      const newCommentPayload = {
        id: commentId,
        userId: user.uid,
        userName: user.displayName || user.email || 'Anonymous User',
        userPhoto: user.photoURL || '',
        content: replyContent.trim(),
        parentId: parentId,
        createdAt: new Date(),
      };
      
      await setDoc(commentDocRef, newCommentPayload);
      setReplyingToId(null);
      setReplyContent('');
    } catch (err) {
      console.error('Error posting reply:', err);
      handleFirestoreError(err, OperationType.WRITE, commentPath);
    } finally {
      setCommentSubmitting(false);
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    if (!blog?.id) return;
    if (!window.confirm('Are you sure you want to delete this comment?')) return;

    const commentPath = `blogs/${blog.id}/comments/${commentId}`;
    try {
      const commentDocRef = doc(db, 'blogs', blog.id, 'comments', commentId);
      await deleteDoc(commentDocRef);
    } catch (err) {
      console.error('Error deleting comment:', err);
      handleFirestoreError(err, OperationType.DELETE, commentPath);
    }
  };

  const formatDistanceToNow = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHr = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHr / 24);

    if (diffSec < 60) return 'Just now';
    if (diffMin < 60) return `${diffMin}m ago`;
    if (diffHr < 24) return `${diffHr}h ago`;
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const renderCommentTree = (parentId: string | null) => {
    const filtered = comments.filter(c => (parentId === null ? !c.parentId : c.parentId === parentId));
    
    return filtered.map((comment) => {
      const isTopLevel = parentId === null;
      const commentReplies = comments.filter(c => c.parentId === comment.id);
      const isMyComment = user?.uid === comment.userId;
      const isCommentAdmin = comment.userId === 'surajsingh.noida98@gmail.com' || comment.userName.toLowerCase().includes("suraj") || comment.userName.toLowerCase().includes("sarthi") || comment.userName.toLowerCase().includes("admin");
      
      return (
        <div 
          key={comment.id} 
          className={`${
            isTopLevel 
              ? 'border-b border-slate-100 dark:border-slate-800/60 pb-6 last:border-b-0' 
              : 'pl-4 sm:pl-8 mt-4 border-l-2 border-indigo-100/50 dark:border-slate-800/50'
          }`}
        >
          <div className="flex gap-3 sm:gap-4 items-start">
            
            {/* User Avatar */}
            <div className={`w-9 h-9 rounded-full shrink-0 overflow-hidden flex items-center justify-center border shadow-sm ${
              isCommentAdmin 
                ? 'bg-amber-500 border-amber-300 text-slate-950 font-black' 
                : 'bg-indigo-50 dark:bg-slate-800 border-indigo-100 dark:border-slate-700 text-indigo-700 dark:text-slate-300 font-bold'
            }`}>
              {comment.userPhoto ? (
                <img src={comment.userPhoto} alt={comment.userName} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              ) : (
                <span className="text-xs uppercase font-black">{comment.userName?.slice(0, 2)}</span>
              )}
            </div>

            {/* Content Box */}
            <div className="flex-1 space-y-1.5">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className={`text-xs font-extrabold ${isCommentAdmin ? 'text-amber-600 dark:text-amber-400' : 'text-slate-900 dark:text-white'}`}>
                  {comment.userName}
                </span>
                {isCommentAdmin && (
                  <span className="inline-flex px-1.5 py-0.5 bg-amber-500/10 text-amber-500 rounded text-[9px] font-black uppercase tracking-wider">Admin</span>
                )}
                <span className="text-[10px] text-slate-400 font-bold">
                  {formatDistanceToNow(comment.createdAt)}
                </span>
              </div>
              
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal whitespace-pre-wrap">
                {comment.content}
              </p>

              {/* Action Buttons: Reply, Delete */}
              <div className="flex items-center gap-4 pt-1 text-[10px] font-extrabold uppercase tracking-wider">
                {user && (
                  <button
                    onClick={() => {
                      if (replyingToId === comment.id) {
                        setReplyingToId(null);
                        setReplyContent('');
                      } else {
                        setReplyingToId(comment.id);
                        setReplyContent('');
                      }
                    }}
                    className="text-indigo-650 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    Reply
                  </button>
                )}
                
                {(isAdmin || isMyComment) && (
                  <button
                    onClick={() => handleDeleteComment(comment.id)}
                    className="text-rose-600 hover:text-rose-500 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    Delete
                  </button>
                )}
              </div>

              {/* Reply Box Inline */}
              {replyingToId === comment.id && (
                <div className="mt-3 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-800 space-y-3">
                  <textarea
                    rows={2}
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    placeholder={`Reply to ${comment.userName}...`}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 leading-relaxed resize-none"
                    disabled={commentSubmitting}
                    required
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setReplyingToId(null);
                        setReplyContent('');
                      }}
                      className="px-3 py-1.5 border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-700 dark:text-slate-450 dark:hover:text-slate-300 text-[10px] font-black rounded-lg uppercase tracking-wider cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={() => handlePostReply(comment.id)}
                      disabled={commentSubmitting || !replyContent.trim()}
                      className="px-3.5 py-1.5 bg-indigo-650 hover:bg-indigo-600 text-white text-[10px] font-black rounded-lg uppercase tracking-wider flex items-center gap-1 cursor-pointer shadow-sm"
                    >
                      Post Reply
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Render Replies Recursively */}
          {commentReplies.length > 0 && (
            <div className="space-y-4 mt-2">
              {renderCommentTree(comment.id)}
            </div>
          )}
        </div>
      );
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    async function fetchBlogDetail() {
      if (!slug) return;
      setLoading(true);
      try {
        const blogsRef = collection(db, 'blogs');
        const q = query(
          blogsRef, 
          where('slug', '==', slug), 
          where('isPublished', '==', true), 
          limit(1)
        );
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = doc.data();
          setBlog({
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
            isPublished: data.isPublished,
            primaryMatchedProductId: data.primaryMatchedProductId || '',
            relatedProductIds: data.relatedProductIds || [],
            customAutomationSuggestion: data.customAutomationSuggestion || ''
          });
        } else {
          const fallback = FALLBACK_BLOGS.find(b => b.slug === slug);
          setBlog(fallback || null);
        }
      } catch (error) {
        console.error('Error fetching blog details from Firestore:', error);
        const fallback = FALLBACK_BLOGS.find(b => b.slug === slug);
        setBlog(fallback || null);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogDetail();
  }, [slug]);

  // Fetch Recommended Blogs
  useEffect(() => {
    async function fetchRecommended() {
      if (!blog) return;
      setRecLoading(true);
      try {
        const blogsRef = collection(db, 'blogs');
        // Fetch up to 4 published blogs to find 3 that are not the current one
        const q = query(
          blogsRef,
          where('isPublished', '==', true),
          limit(4)
        );
        const snapshot = await getDocs(q);
        const loaded: BlogPost[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          if (data.slug !== blog.slug) {
            loaded.push({
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
              isPublished: data.isPublished,
              primaryMatchedProductId: data.primaryMatchedProductId || '',
              relatedProductIds: data.relatedProductIds || [],
              customAutomationSuggestion: data.customAutomationSuggestion || ''
            });
          }
        });
        setRecommendedBlogs(loaded.slice(0, 3));
      } catch (error) {
        console.error('Error fetching recommended blogs:', error);
      } finally {
        setRecLoading(false);
      }
    }

    fetchRecommended();
  }, [blog?.id, blog?.slug]);

  // Track Reading Progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setReadingProgress((window.scrollY / totalHeight) * 100);
      } else {
        setReadingProgress(0);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatDate = (dateString: string | Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center pt-28">
        <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-sm font-semibold text-slate-500">Unlocking guide...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center pt-28 px-4 text-center">
        <div className="w-16 h-16 bg-red-100 dark:bg-red-950/20 text-red-600 rounded-full flex items-center justify-center mb-6">
          <Clock className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-extrabold text-slate-950 dark:text-white tracking-tight mb-2">Guide not found</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6 text-sm">
          The requested article does not exist or has been archived by the administrator.
        </p>
        <Link
          to="/blog"
          className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-bold shadow-md transition-all inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>
    );
  }

  // Dynamic lookup for matched and related products as a bulletproof fallback!
  const getEnrichedProductDetails = () => {
    if (!blog) return { primary: null, related: [] };
    
    // 1. Resolve primary product
    let primary: any = null;
    if (blog.primaryMatchedProductId && PRODUCT_SOLUTIONS[blog.primaryMatchedProductId]) {
      primary = PRODUCT_SOLUTIONS[blog.primaryMatchedProductId];
    } else {
      // Simple fallback matching based on content or title
      const text = `${blog.title} ${blog.content}`.toLowerCase();
      const match = Object.values(PRODUCT_SOLUTIONS).find(p => 
        text.includes(p.name.toLowerCase()) || 
        (p.category && text.includes(p.category.toLowerCase()))
      );
      if (match) primary = match;
    }

    // 2. Resolve related products (same category)
    const relatedList: any[] = [];
    if (blog.relatedProductIds && blog.relatedProductIds.length > 0) {
      blog.relatedProductIds.forEach(id => {
        if (PRODUCT_SOLUTIONS[id] && PRODUCT_SOLUTIONS[id].id !== (primary?.id)) {
          relatedList.push(PRODUCT_SOLUTIONS[id]);
        }
      });
    }

    // If relatedList is empty, find products in the same category dynamically
    if (relatedList.length === 0 && primary) {
      Object.values(PRODUCT_SOLUTIONS).forEach(p => {
        if (p.id !== primary.id && p.category === primary.category && !p.isHidden) {
          relatedList.push(p);
        }
      });
    }

    return { primary, related: relatedList.slice(0, 3) };
  };

  const { primary, related } = getEnrichedProductDetails();

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-28 pb-24 transition-colors relative">
      
      {/* Reading Progress Indicator */}
      <div 
        className="fixed top-20 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-75 z-50 pointer-events-none" 
        style={{ width: `${readingProgress}%` }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Navigation back and Categories */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-indigo-600 dark:text-slate-350 dark:hover:text-indigo-400 transition-colors"
            id="btn-back-to-blog"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Guides
          </Link>
          
          <span className="inline-flex px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 rounded-xl text-xs font-black uppercase tracking-wider">
            {blog.category}
          </span>
        </div>

        {/* Hero Title and Summary */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
            {blog.title}
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium pb-6 border-b border-slate-200/60 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                <User className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <span className="font-extrabold text-slate-800 dark:text-slate-250">Suraj Singh</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-350 dark:bg-slate-800 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(blog.createdAt)}</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-350 dark:bg-slate-800" />
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {blog.image && (
          <div className="mb-12 rounded-3xl overflow-hidden bg-slate-800 aspect-[21/9] shadow-sm">
            <img
              src={blog.image}
              alt={blog.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content Container */}
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Main Article column wrapping article and comments */}
          <div className="lg:col-span-9 space-y-8">
            <article className="bg-white dark:bg-slate-900 p-6 sm:p-10 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            
            <div className="markdown-body text-slate-750 dark:text-slate-300 leading-relaxed text-sm sm:text-base space-y-6">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-8 mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mt-6 mb-3">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight mt-4 mb-2">{children}</h3>,
                  p: ({ children }) => <p className="leading-relaxed mb-4 text-slate-700 dark:text-slate-300">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700 dark:text-slate-300">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2 text-slate-700 dark:text-slate-300">{children}</ol>,
                  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                  blockquote: ({ children }) => <blockquote className="border-l-4 border-indigo-600 bg-indigo-50/40 dark:bg-indigo-500/5 p-4 rounded-r-xl italic my-4 text-slate-650 dark:text-slate-350">{children}</blockquote>,
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-6 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
                      <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800 text-sm">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children }) => <thead className="bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">{children}</thead>,
                  tbody: ({ children }) => <tbody className="divide-y divide-slate-100 dark:divide-slate-850 bg-white dark:bg-slate-900">{children}</tbody>,
                  tr: ({ children }) => <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-850/40 transition-colors">{children}</tr>,
                  th: ({ children }) => <th className="px-4 py-3.5 text-left text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">{children}</th>,
                  td: ({ children }) => <td className="px-4 py-3 text-slate-750 dark:text-slate-300 border-r border-slate-100 dark:border-slate-850/40 last:border-r-0">{children}</td>,
                  code: ({ children, className }) => {
                    const isInline = !className;
                    return isInline ? (
                      <code className="bg-slate-100 dark:bg-slate-800/80 px-1.5 py-0.5 rounded text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                        {children}
                      </code>
                    ) : (
                      <pre className="bg-slate-950 text-slate-200 p-4 rounded-2xl text-xs sm:text-sm font-mono overflow-x-auto border border-slate-800/60 my-6 shadow-inner relative max-w-full">
                        <code>{children}</code>
                      </pre>
                    );
                  },
                }}
              >
                {blog.content}
              </ReactMarkdown>
            </div>

            {/* Smart Product Recommendations & Custom Automation Suggestions */}
            {(primary || related.length > 0 || blog.customAutomationSuggestion) && (
              <div className="mt-12 pt-8 border-t border-slate-150 dark:border-slate-800 space-y-10">
                
                {/* 1. Primary Matched Product Card */}
                {primary && (
                  <div className="p-6 sm:p-8 bg-gradient-to-br from-indigo-50/50 to-indigo-100/30 dark:from-slate-900/60 dark:to-slate-950/40 border border-indigo-100 dark:border-indigo-950/50 rounded-3xl relative overflow-hidden shadow-sm">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
                    <span className="inline-flex px-3 py-1 bg-indigo-600 text-white rounded-full text-[10px] font-black uppercase tracking-wider mb-4 shadow-md">Featured Automation Utility</span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-2 flex flex-wrap items-center gap-2">
                      {primary.name}
                      {primary.tagline && (
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 font-mono tracking-tight bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                          {primary.tagline}
                        </span>
                      )}
                    </h3>
                    <p className="text-slate-650 dark:text-slate-350 text-sm mb-6 leading-relaxed">{primary.description}</p>
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                      <div>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-wider block">Exclusive Pricing</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">{primary.price}</span>
                          <span className="text-xs text-slate-400 line-through font-bold">{primary.marketPrice}</span>
                          <span className="text-xs text-emerald-600 dark:text-emerald-450 font-bold">50% Lower Cost!</span>
                        </div>
                      </div>
                      <Link 
                        to={`/products/${primary.id}`}
                        className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 hover:scale-[1.02] text-white text-xs font-black rounded-2xl shadow-md tracking-wider uppercase transition-all inline-block text-center"
                      >
                        Get Source & Setup Guide
                      </Link>
                    </div>
                  </div>
                )}

                {/* 2. Same Category Products Spotlight */}
                {related.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      <h4 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Related Tools in {primary?.category || blog.category || 'Automation'}</h4>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {related.map(prod => (
                        <Link 
                          key={prod.id}
                          to={`/products/${prod.id}`}
                          className="group block p-5 bg-slate-50/60 hover:bg-white dark:bg-slate-950/20 dark:hover:bg-slate-950 border border-slate-200/50 hover:border-indigo-400/50 dark:border-slate-850/60 dark:hover:border-slate-800 rounded-2xl transition-all shadow-sm"
                        >
                          <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1">{prod.category || 'Utility'}</span>
                          <h5 className="font-extrabold text-slate-900 dark:text-white text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-1">{prod.name}</h5>
                          <p className="text-slate-500 dark:text-slate-450 text-xs line-clamp-2 leading-relaxed mb-4">{prod.description}</p>
                          <div className="flex items-center justify-between text-[11px] font-bold">
                            <span className="text-slate-900 dark:text-slate-300">Price: {prod.price}</span>
                            <span className="text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">Explore →</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Suraj's Custom Automation Suggestion Box */}
                {(blog.customAutomationSuggestion || primary) && (
                  <div className="p-6 sm:p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-850/80 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="p-1.5 bg-amber-400/10 rounded-lg">
                        <Sparkles className="w-5 h-5 text-amber-400 fill-amber-400/20" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-200 uppercase tracking-wider">Suraj's Automation Suggestion</h4>
                        <p className="text-[10px] text-slate-500 font-bold font-mono uppercase tracking-widest">Smart Blueprint recommendation</p>
                      </div>
                    </div>
                    <div className="markdown-body prose prose-invert prose-xs text-xs sm:text-sm text-slate-300 leading-relaxed space-y-4">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          h1: ({ children }) => <h5 className="text-base sm:text-lg font-black text-white mt-5 mb-3">{children}</h5>,
                          h2: ({ children }) => <h5 className="text-base font-extrabold text-white mt-4 mb-2">{children}</h5>,
                          h3: ({ children }) => <h5 className="text-sm sm:text-base font-bold text-white mt-4 mb-2">{children}</h5>,
                          p: ({ children }) => <p className="mb-3 text-slate-300 leading-relaxed">{children}</p>,
                          ul: ({ children }) => <ul className="list-disc pl-5 mb-3 space-y-1">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal pl-5 mb-3 space-y-1">{children}</ol>,
                          li: ({ children }) => <li className="text-slate-300">{children}</li>,
                          table: ({ children }) => (
                            <div className="overflow-x-auto my-4 border border-slate-800 rounded-xl shadow-inner">
                              <table className="min-w-full divide-y divide-slate-800 text-xs">
                                {children}
                              </table>
                            </div>
                          ),
                          thead: ({ children }) => <thead className="bg-slate-900">{children}</thead>,
                          tbody: ({ children }) => <tbody className="divide-y divide-slate-900 bg-slate-950">{children}</tbody>,
                          tr: ({ children }) => <tr className="hover:bg-slate-900/40 transition-colors">{children}</tr>,
                          th: ({ children }) => <th className="px-3 py-2 text-left text-[10px] font-black text-slate-450 uppercase tracking-wider">{children}</th>,
                          td: ({ children }) => <td className="px-3 py-2 text-slate-300 border-r border-slate-900 last:border-r-0">{children}</td>,
                          code: ({ children }) => <code className="bg-slate-900 text-amber-400 px-1 py-0.5 rounded text-xs font-mono font-bold">{children}</code>,
                        }}
                      >
                        {blog.customAutomationSuggestion || `### 💡 Automation Plan: Smart Sheets Integration\n\nAap is manual step ko easily automate kar sakte hain Google Sheets backend aur Apps Script triggers ke jariye.\n\n- **100% Lifetime Free Data Hosting**: Google Workspace cloud environment me secure database setup hoga.\n- **Direct WhatsApp Notifications**: Customer requests dynamic forms se check hote hi automatically trigger alerts bhejenge.\n- **Straight 50% Lower Cost**: Custom software agencies se full 50% low service rate me develop hoga.\n\n📞 Humare contact page se Suraj se direct connect karke customized demo request karein!`}
                      </ReactMarkdown>
                    </div>
                  </div>
                )}

              </div>
            )}

            {/* Footer tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0 mr-1" />
                {blog.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800/40 text-xs text-slate-500 dark:text-slate-400 font-bold rounded-lg hover:bg-slate-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </article>

          {/* Recommended Blog Posts Section */}
          {recommendedBlogs.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl text-indigo-600 dark:text-indigo-400">
                  <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider">
                    Recommended Blog Posts
                  </h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Expand your knowledge with our top automation articles</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recommendedBlogs.map((recBlog) => (
                  <Link 
                    key={recBlog.id}
                    to={`/blog/${recBlog.slug}`}
                    className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {/* Featured Image */}
                    <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-950 overflow-hidden relative">
                      {recBlog.image ? (
                        <img 
                          src={recBlog.image} 
                          alt={recBlog.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-indigo-50 dark:bg-indigo-950/20 text-indigo-500 font-extrabold text-xs">
                          {recBlog.category}
                        </div>
                      )}
                      <span className="absolute top-3 left-3 px-2 py-0.5 bg-indigo-600 text-white rounded-lg text-[9px] font-black uppercase tracking-wider">
                        {recBlog.category}
                      </span>
                    </div>

                    {/* Meta & Title */}
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-[10px] text-slate-400 dark:text-slate-500 font-bold">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(recBlog.createdAt)}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {recBlog.readTime}
                          </span>
                        </div>
                        <h4 className="font-extrabold text-slate-900 dark:text-white text-sm leading-snug group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                          {recBlog.title}
                        </h4>
                      </div>
                      <span className="text-[11px] font-black text-indigo-600 dark:text-indigo-400 flex items-center gap-0.5 mt-auto group-hover:translate-x-1 transition-transform">
                        Read Guide →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Comments and Engagement Hub card */}
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl text-indigo-600 dark:text-indigo-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                  Discussion Forum
                  <span className="text-xs font-bold text-slate-400 font-mono">({comments.length})</span>
                </h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Join the automation community</p>
              </div>
            </div>

            {/* Add Comment Section */}
            {user ? (
              <div className="bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-150 dark:border-slate-800/60 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white shrink-0 overflow-hidden flex items-center justify-center border border-indigo-200 dark:border-slate-700 shadow-sm">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName || 'Me'} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  ) : (
                    <span className="text-sm font-black uppercase">{user.displayName?.slice(0, 2) || user.email?.slice(0, 2) || 'U'}</span>
                  )}
                </div>
                <form onSubmit={handlePostComment} className="flex-1 space-y-3">
                  <div className="text-xs font-extrabold text-slate-800 dark:text-slate-200">
                    Commenting as <span className="text-indigo-600 dark:text-indigo-400">{user.displayName || user.email}</span>
                  </div>
                  <textarea
                    rows={3}
                    value={newCommentContent}
                    onChange={(e) => setNewCommentContent(e.target.value)}
                    placeholder="Write your thoughts, ask a question about Apps Script, or request help..."
                    className="w-full px-4 py-2.5 text-xs sm:text-sm border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white bg-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 leading-relaxed resize-none"
                    disabled={commentSubmitting}
                    required
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={commentSubmitting || !newCommentContent.trim()}
                      className="px-5 py-2 bg-indigo-650 hover:bg-indigo-600 disabled:bg-slate-200 dark:disabled:bg-slate-800 disabled:text-slate-400 text-white text-xs font-black rounded-xl shadow-md uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
                    >
                      {commentSubmitting ? 'Posting...' : 'Post Comment'}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-slate-100 to-indigo-50/30 dark:from-slate-900/30 dark:to-indigo-950/10 p-6 rounded-2xl border border-slate-200/60 dark:border-indigo-950/40 text-center space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium max-w-md mx-auto leading-relaxed">
                  Aap is blog post ke niche comment ya reply nahi kar sakte kyunki aap logged-in nahi hain. Apne account se login karke community se connect karein.
                </p>
                <button
                  onClick={async () => {
                    try {
                      await login();
                    } catch (err) {
                      console.error('Login error:', err);
                    }
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black rounded-xl shadow-md uppercase tracking-wider transition-all cursor-pointer"
                >
                  <User className="w-4 h-4" />
                  Sign in with Google
                </button>
              </div>
            )}

            {/* Comments Tree */}
            {commentsLoading ? (
              <div className="flex flex-col items-center justify-center py-10 space-y-2">
                <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
                <span className="text-xs text-slate-400 font-bold uppercase tracking-widest animate-pulse">Loading comments...</span>
              </div>
            ) : comments.length === 0 ? (
              <div className="text-center py-12 bg-white dark:bg-transparent rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
                <MessageSquare className="w-10 h-10 text-slate-300 dark:text-slate-700 mx-auto mb-2.5" />
                <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">No comments yet</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto mt-1">Be the first to share your thoughts or ask a question about this guide!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {renderCommentTree(null)}
              </div>
            )}
          </div>

          </div>

          {/* Sticky Side Share Actions */}
          <div className="lg:col-span-3 lg:sticky lg:top-28 h-fit space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm text-center lg:text-left">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4">Share Resource</h4>
              <div className="flex lg:flex-col gap-3 justify-center">
                
                {/* Copy Link Button */}
                <button
                  onClick={handleCopyLink}
                  className="flex-1 lg:w-full py-2 px-3 bg-slate-50 hover:bg-indigo-50 dark:bg-slate-950/40 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-350 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all flex items-center justify-center gap-2"
                  id="btn-share-copy-link"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      Copy URL
                    </>
                  )}
                </button>

                {/* Twitter Share */}
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out this excellent guide by Suraj Automation: ${blog.title}`)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 lg:w-full py-2 px-3 bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 border border-[#1DA1F2]/20 rounded-xl text-xs font-bold text-[#1DA1F2] transition-all flex items-center justify-center gap-2"
                  id="btn-share-twitter"
                >
                  <Share2 className="w-4 h-4" />
                  Tweet Guide
                </a>
              </div>
            </div>

            {/* Prompt CTA */}
            <div className="bg-gradient-to-b from-indigo-900 to-slate-950 text-white rounded-3xl p-6 border border-indigo-850 shadow-md text-center lg:text-left">
              <Sparkles className="w-8 h-8 text-amber-400 fill-amber-400/20 mb-3 mx-auto lg:mx-0" />
              <h4 className="font-extrabold text-base tracking-tight mb-2">Need Custom Sheets ERP?</h4>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                We design fully tailored accounting, CRM, payroll, and stock management engines. Zero subscription licenses forever.
              </p>
              <Link
                to="/roi-tool"
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all shadow-md text-center block"
                id="btn-sidebar-cta"
              >
                Estimate Costs
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
