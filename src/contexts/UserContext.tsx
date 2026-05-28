import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { 
  User, 
  onAuthStateChanged, 
  signInWithPopup, 
  signOut, 
  GoogleAuthProvider 
} from 'firebase/auth';
import { 
  doc, 
  getDoc, 
  setDoc, 
  collection, 
  query, 
  where, 
  onSnapshot,
  deleteDoc
} from 'firebase/firestore';
import { auth, db, handleFirestoreError, OperationType } from '../lib/firebase';
import { PRODUCT_SOLUTIONS, ProductSolution } from '../data/productSolutions';
import { X, Copy, Check, ExternalLink, AlertTriangle, Globe } from 'lucide-react';
import { firebaseConfig } from '../lib/firebaseConfig';

interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  createdAt: Date;
  updatedAt: Date;
}

interface PurchaseRecord {
  userId: string;
  email: string;
  productId: string;
  productName: string;
  amount: number;
  currency: string;
  paymentId: string;
  orderId: string;
  status: string;
  createdAt: Date;
}

interface UserContextType {
  user: User | null;
  userProfile: UserProfile | null;
  purchases: PurchaseRecord[];
  customProducts: ProductSolution[];
  loading: boolean;
  isAdmin: boolean;
  login: () => Promise<User>;
  logout: () => Promise<void>;
  hasPurchased: (productId: string) => boolean;
  addPurchaseRecord: (
    productId: string, 
    paymentId: string, 
    orderId: string, 
    priceString: string
  ) => Promise<void>;
  saveCustomProduct: (product: ProductSolution) => Promise<void>;
  deleteCustomProduct: (productId: string) => Promise<void>;
  getProductSolution: (productId: string) => ProductSolution | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [purchases, setPurchases] = useState<PurchaseRecord[]>([]);
  const [customProducts, setCustomProducts] = useState<ProductSolution[]>([]);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState<{ code: string; message: string; hostname: string } | null>(null);
  const [copiedHost, setCopiedHost] = useState(false);

  const isAdmin = user?.email === 'surajsingh.noida98@gmail.com';

  // Synchronize Custom Products Real-time Listener (independent of authentication)
  useEffect(() => {
    const customProductsRef = collection(db, 'custom_products');
    const unsubscribeCustom = onSnapshot(
      customProductsRef,
      (querySnapshot) => {
        const list: ProductSolution[] = [];
        querySnapshot.forEach((docSnap) => {
          const data = docSnap.data();
          list.push({
            id: data.id,
            name: data.name,
            price: data.price,
            sheetTemplateUrl: data.sheetTemplateUrl,
            appsScriptCode: data.appsScriptCode,
            setupSteps: data.setupSteps || [],
            tagline: data.tagline || '',
            description: data.description || '',
            category: data.category || 'General',
            color: data.color || 'indigo',
            images: data.images || []
          });
        });
        setCustomProducts(list);
      },
      (error) => {
         console.error("Error subscribing custom products:", error);
      }
    );

    return () => unsubscribeCustom();
  }, []);

  // Synchronize User profile document
  const syncUserProfile = async (firebaseUser: User) => {
    const userRef = doc(db, 'users', firebaseUser.uid);
    try {
      const userSnap = await getDoc(userRef);
      const now = new Date();
      let profileData: UserProfile;

      if (userSnap.exists()) {
        const existingData = userSnap.data();
        profileData = {
          uid: firebaseUser.uid,
          email: firebaseUser.email || '',
          displayName: firebaseUser.displayName || 'User',
          photoURL: firebaseUser.photoURL || '',
          createdAt: existingData.createdAt?.toDate() || now,
          updatedAt: now,
        };
      } else {
        profileData = {
          uid: firebaseUser.uid,
          email: firebaseUser.email || '',
          displayName: firebaseUser.displayName || 'User',
          photoURL: firebaseUser.photoURL || '',
          createdAt: now,
          updatedAt: now,
        };
      }

      // Strictly matches the 6 keys of isValidUserProfile
      await setDoc(userRef, {
        uid: profileData.uid,
        email: profileData.email,
        displayName: profileData.displayName,
        photoURL: profileData.photoURL,
        createdAt: profileData.createdAt,
        updatedAt: profileData.updatedAt
      });

      setUserProfile(profileData);
    } catch (e) {
      console.error("Error creating/syncing user profile in Firestore:", e);
      // Fail gracefully for basic authentication state fallback
      setUserProfile({
        uid: firebaseUser.uid,
        email: firebaseUser.email || '',
        displayName: firebaseUser.displayName || 'User',
        photoURL: firebaseUser.photoURL || '',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
  };

  // Synchronize Purchases Real-time Listener
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        await syncUserProfile(firebaseUser);

        // Map real-time purchases listener
        const purchasesRef = collection(db, 'purchases');
        const q = query(purchasesRef, where('userId', '==', firebaseUser.uid));

        const unsubscribeSnapshot = onSnapshot(
          q,
          (querySnapshot) => {
            const list: PurchaseRecord[] = [];
            querySnapshot.forEach((docSnap) => {
              const data = docSnap.data();
              list.push({
                userId: data.userId,
                email: data.email,
                productId: data.productId,
                productName: data.productName,
                amount: data.amount,
                currency: data.currency,
                paymentId: data.paymentId,
                orderId: data.orderId,
                status: data.status,
                createdAt: data.createdAt?.toDate() || new Date(),
              });
            });
            setPurchases(list);
            setLoading(false);
          },
          (error) => {
            // Handle error in accordance with security-rules framework specifications
            handleFirestoreError(error, OperationType.LIST, 'purchases');
            setLoading(false);
          }
        );

        return () => unsubscribeSnapshot();
      } else {
        setUserProfile(null);
        setPurchases([]);
        setLoading(false);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  const login = async () => {
    setLoading(true);
    setAuthError(null);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (e: any) {
      setLoading(false);
      console.error("Firebase Sign-In Error caught:", e);
      setAuthError({
        code: e?.code || 'unknown-error',
        message: e?.message || String(e),
        hostname: window.location.hostname
      });
      throw e;
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      setUserProfile(null);
      setPurchases([]);
    } finally {
      setLoading(false);
    }
  };

  // Helper verifying purchases locally & database synched
  const hasPurchased = (productId: string) => {
    // Falls back to localStorage, but respects Firestore sync list
    const isLocal = localStorage.getItem(`purchased_${productId}`) === 'true';
    const isFire = purchases.some((p) => p.productId === productId);
    return isLocal || isFire;
  };

  const getProductSolution = (productId: string) => {
    const custom = customProducts.find((p) => p.id === productId);
    if (custom) return custom;
    return PRODUCT_SOLUTIONS[productId] || null;
  };

  const saveCustomProduct = async (product: ProductSolution) => {
    if (!isAdmin) {
      throw new Error("Access denied: Admin-only capability");
    }
    const productRef = doc(db, 'custom_products', product.id);
    await setDoc(productRef, {
      id: product.id,
      name: product.name,
      price: product.price,
      sheetTemplateUrl: product.sheetTemplateUrl,
      appsScriptCode: product.appsScriptCode,
      setupSteps: product.setupSteps || [],
      tagline: product?.tagline || '',
      description: product?.description || '',
      category: product?.category || 'General',
      color: product?.color || 'indigo',
      images: product?.images || [],
      createdAt: new Date()
    });
  };

  const deleteCustomProduct = async (productId: string) => {
    if (!isAdmin) {
      throw new Error("Access denied: Admin-only capability");
    }
    await deleteDoc(doc(db, 'custom_products', productId));
  };

  // Creates secure verified transaction history document in Firestore
  const addPurchaseRecord = async (
    productId: string, 
    paymentId: string, 
    orderId: string, 
    priceString: string
  ) => {
    if (!user) {
      throw new Error("Must be logged in to record purchase transactions");
    }

    const priceNum = parseInt(priceString.replace(/[^0-9]/g, ''), 10) || 1499;
    const solution = getProductSolution(productId);
    const purchaseId = `pay_${productId}_${user.uid}_${Date.now()}`;
    const pRef = doc(db, 'purchases', purchaseId);

    const record: PurchaseRecord = {
      userId: user.uid,
      email: user.email || '',
      productId,
      productName: solution?.name || productId,
      amount: priceNum,
      currency: 'INR',
      paymentId: paymentId || 'simulate_payment_id',
      orderId: orderId || 'simulate_order_id',
      status: 'captured',
      createdAt: new Date(),
    };

    try {
      // Must exactly define keys validated on strict rules list size 10
      await setDoc(pRef, {
        userId: record.userId,
        email: record.email,
        productId: record.productId,
        productName: record.productName,
        amount: record.amount,
        currency: record.currency,
        paymentId: record.paymentId,
        orderId: record.orderId,
        status: record.status,
        createdAt: record.createdAt,
      });

      // Synchronize in localstorage to match instant page transitions too
      localStorage.setItem(`purchased_${productId}`, 'true');
    } catch (e) {
      handleFirestoreError(e, OperationType.WRITE, `purchases/${purchaseId}`);
    }
  };

  const handleCopyHost = () => {
    if (authError?.hostname) {
      navigator.clipboard.writeText(authError.hostname);
      setCopiedHost(true);
      setTimeout(() => setCopiedHost(false), 2000);
    }
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      userProfile, 
      purchases, 
      customProducts,
      loading, 
      isAdmin,
      login, 
      logout, 
      hasPurchased, 
      addPurchaseRecord,
      saveCustomProduct,
      deleteCustomProduct,
      getProductSolution
    }}>
      {children}

      {/* Elegant, Premium Authorization Help Dialog Overlay */}
      {authError && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in text-slate-900 dark:text-white">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] w-full max-w-lg p-6 md:p-8 shadow-2xl relative flex flex-col max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setAuthError(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-650 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
              aria-label="Close Error dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="w-12 h-12 bg-amber-50 dark:bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center shrink-0 border border-amber-100 dark:border-amber-505/20">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black tracking-tight text-slate-905 dark:text-white">
                  Google Login Error Help
                </h3>
                <p className="text-[11px] font-mono font-bold text-rose-500 mt-1 uppercase tracking-wide">
                  CODE: {authError.code}
                </p>
              </div>
            </div>

            <div className="py-5 space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
              <p>
                To secure your data, Google Sign-In requires your deployed website domain to be approved in your Firebase Authentication configuration.
              </p>

              <div className="space-y-2 bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800 p-4 rounded-xl">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Step 1: Copy Your Current Domain</span>
                <div className="flex items-center justify-between gap-3 bg-white dark:bg-slate-900 px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-850">
                  <span className="font-mono text-xs text-indigo-650 dark:text-indigo-400 break-all select-all">{authError.hostname}</span>
                  <button
                    onClick={handleCopyHost}
                    className="shrink-0 p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-505 dark:text-slate-400 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    {copiedHost ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2 bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800 p-4 rounded-xl">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Step 2: Add it to Firebase Console</span>
                <p className="text-xs text-slate-550 dark:text-slate-400 font-medium">
                  Add this domain to the <strong className="text-slate-900 dark:text-white font-bold">Authorized domains</strong> list in your Firebase Console under:
                  <br />
                  <span className="font-mono text-[11px] text-indigo-500 block mt-1">Authentication → Settings → Authorized domains</span>
                </p>
                <a
                  href={`https://console.firebase.google.com/project/${firebaseConfig.projectId}/authentication/providers`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2.5 border border-indigo-200 hover:border-indigo-300 bg-indigo-50/50 hover:bg-indigo-50 transition-colors text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20 dark:hover:bg-indigo-505/20 rounded-xl text-xs font-bold cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Open Firebase Authorizations Console
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-orange-50 dark:bg-orange-950/10 border border-orange-100 dark:border-orange-950/20 gap-2.5 flex items-start">
                <Globe className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <p className="text-[12px] text-orange-600 dark:text-orange-400 font-medium">
                  <strong>Notice (AI Studio Iframe Constraints):</strong> Some browsers block popups inside code editor iframes. Simply click the <strong>"Open in New Tab"</strong> icon on the top right above the app review, and try signing in again there.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setAuthError(null)}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 text-white rounded-xl font-bold text-xs transition-transform cursor-pointer hover:scale-[1.02]"
              >
                Dismiss Help
              </button>
            </div>
          </div>
        </div>
      )}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
