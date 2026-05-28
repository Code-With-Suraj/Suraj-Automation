import { createContext, useContext, useEffect, useState, useRef, FormEvent, ReactNode } from 'react';
import { 
  User, 
  onAuthStateChanged, 
  signInWithPopup, 
  signOut, 
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult
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
import { X, Copy, Check, ExternalLink, AlertTriangle, Globe, Smartphone, Key, Loader2, Sparkles, AlertCircle, Phone } from 'lucide-react';
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

  // Login Modal and Phone OTP Verification States
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [otpStep, setOtpStep] = useState<'phone' | 'otp'>('phone');
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [otpError, setOtpError] = useState<string | null>(null);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);

  const loginPromiseRef = useRef<{
    resolve: (user: User) => void;
    reject: (err: any) => void;
  } | null>(null);

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
            images: data.images || [],
            youtubeUrl: data.youtubeUrl || ''
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

      const userEmail = firebaseUser.email || (firebaseUser.phoneNumber ? `${firebaseUser.phoneNumber}@phone.auth` : '');
      const userDisplayName = firebaseUser.displayName || firebaseUser.phoneNumber || 'User';

      if (userSnap.exists()) {
        const existingData = userSnap.data();
        profileData = {
          uid: firebaseUser.uid,
          email: userEmail,
          displayName: userDisplayName,
          photoURL: firebaseUser.photoURL || '',
          createdAt: existingData.createdAt?.toDate() || now,
          updatedAt: now,
        };
      } else {
        profileData = {
          uid: firebaseUser.uid,
          email: userEmail,
          displayName: userDisplayName,
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
        email: firebaseUser.email || (firebaseUser.phoneNumber ? `${firebaseUser.phoneNumber}@phone.auth` : ''),
        displayName: firebaseUser.displayName || firebaseUser.phoneNumber || 'User',
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

  const handleCancelLogin = () => {
    setShowLoginModal(false);
    if (loginPromiseRef.current) {
      loginPromiseRef.current.reject(new Error("Login cancelled by user"));
      loginPromiseRef.current = null;
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setAuthError(null);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setShowLoginModal(false);
      if (loginPromiseRef.current) {
        loginPromiseRef.current.resolve(result.user);
        loginPromiseRef.current = null;
      }
      return result.user;
    } catch (e: any) {
      setLoading(false);
      console.error("Firebase Sign-In Error caught:", e);
      setShowLoginModal(false);
      setAuthError({
        code: e?.code || 'unknown-error',
        message: e?.message || String(e),
        hostname: window.location.hostname
      });
      if (loginPromiseRef.current) {
        loginPromiseRef.current.reject(e);
        loginPromiseRef.current = null;
      }
      throw e;
    }
  };

  const setupRecaptcha = () => {
    try {
      let verifier = (window as any).recaptchaVerifier;
      if (!verifier) {
        verifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
          size: 'invisible',
          callback: () => {
            // reCAPTCHA solved
          },
          'expired-callback': () => {
            // reCAPTCHA expired, reset
          }
        });
        (window as any).recaptchaVerifier = verifier;
      }
      return verifier;
    } catch (err: any) {
      console.error("Error setting up RecaptchaVerifier:", err);
      setOtpError("Failed to initialize verification system. Please try again.");
      return null;
    }
  };

  const handleSendOtp = async (e?: FormEvent) => {
    if (e) e.preventDefault();
    setOtpError(null);
    
    let formattedPhone = phoneNumber.trim();
    if (!formattedPhone) {
      setOtpError("Please enter a valid phone number.");
      return;
    }
    
    if (/^\d{10}$/.test(formattedPhone)) {
      formattedPhone = `+91${formattedPhone}`;
    } else if (!formattedPhone.startsWith('+')) {
      formattedPhone = `+91${formattedPhone.replace(/[^0-9]/g, '')}`;
    }

    setIsSendingOtp(true);
    const verifier = setupRecaptcha();
    if (!verifier) {
      setIsSendingOtp(false);
      return;
    }

    try {
      const result = await signInWithPhoneNumber(auth, formattedPhone, verifier);
      setConfirmationResult(result);
      setOtpStep('otp');
      setOtpError(null);
    } catch (err: any) {
      console.error("Error sending SMS OTP:", err);
      if (err.code === 'auth/invalid-phone-number') {
        setOtpError("Must be a valid international phone number (e.g. +91 99999 99999)");
      } else if (err.code === 'auth/too-many-requests') {
        setOtpError("Too many SMS requests sent. Please try again later.");
      } else {
        setOtpError(err.message || "Failed to send OTP verification code. Try again.");
      }
      if ((window as any).recaptchaVerifier) {
        try {
          (window as any).recaptchaVerifier.clear();
          (window as any).recaptchaVerifier = null;
        } catch (_) {}
      }
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleVerifyOtp = async (e?: FormEvent) => {
    if (e) e.preventDefault();
    setOtpError(null);

    const trimmedCode = otpCode.trim();
    if (trimmedCode.length !== 6 || !/^\d{6}$/.test(trimmedCode)) {
      setOtpError("OTP must be a 6-digit numeric verification code.");
      return;
    }

    if (!confirmationResult) {
      setOtpError("No verification session found. Please re-enter your phone number.");
      setOtpStep('phone');
      return;
    }

    setIsVerifyingOtp(true);
    try {
      const result = await confirmationResult.confirm(trimmedCode);
      const firebaseUser = result.user;
      
      await syncUserProfile(firebaseUser);
      setUser(firebaseUser);
      
      setShowLoginModal(false);
      if (loginPromiseRef.current) {
        loginPromiseRef.current.resolve(firebaseUser);
        loginPromiseRef.current = null;
      }
    } catch (err: any) {
      console.error("Error confirming OTP verification code:", err);
      if (err.code === 'auth/invalid-verification-code') {
        setOtpError("The verification code you entered is incorrect. Please check and try again.");
      } else if (err.code === 'auth/code-expired') {
        setOtpError("The verification code has expired. Please request a new one.");
      } else {
        setOtpError(err.message || "Failed to verify code. Please try again.");
      }
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  const login = (): Promise<User> => {
    setAuthError(null);
    setOtpStep('phone');
    setOtpError(null);
    setPhoneNumber('');
    setOtpCode('');
    setShowLoginModal(true);
    return new Promise<User>((resolve, reject) => {
      loginPromiseRef.current = { resolve, reject };
    });
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
      youtubeUrl: product?.youtubeUrl || '',
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

      {/* Modern, Premium, Multi-Provider Login Dialog (Google + Phone Auth) */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in text-slate-900 dark:text-white">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] w-full max-w-md p-6 md:p-8 shadow-2xl relative flex flex-col max-h-[90vh] overflow-y-auto">
            {/* Invisible Recaptcha Container mandated by Firebase Phone Auth SDK */}
            <div id="recaptcha-container" className="hidden"></div>

            <button
              onClick={handleCancelLogin}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-650 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
              aria-label="Cancel login"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center pb-5 mb-5 border-b border-slate-100 dark:border-slate-800">
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Access Suraj Automation
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                Choose a method below to access your premium workspace
              </p>
            </div>

            {/* Login Selection / Form Body */}
            <div className="space-y-6">
              {/* Option A: Fast Google login */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 hover:border-indigo-400 dark:border-slate-800 dark:hover:border-indigo-500 bg-white hover:bg-slate-50 dark:bg-slate-950 dark:hover:bg-slate-900/60 rounded-xl font-bold text-sm text-slate-700 dark:text-slate-200 transition-all duration-200 cursor-pointer shadow-sm"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M12 5.04c1.66 0 3.2.57 4.38 1.69l3.27-3.27C17.67 1.48 14.99 1 12 1 7.35 1 3.37 3.67 1.39 7.56l3.89 3.02C6.22 7.56 8.87 5.04 12 5.04z" />
                  <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.29 1.48-1.14 2.73-2.42 3.57l3.77 2.92c2.2-2.03 3.48-5.02 3.48-8.64z" />
                  <path fill="#FBBC05" d="M5.28 14.78c-.24-.72-.38-1.49-.38-2.28s.14-1.56.38-2.28L1.39 7.2C.5 8.98 0 10.93 0 13s.5 4.02 1.39 5.8l3.89-3.02z" />
                  <path fill="#34A853" d="M12 23c3.24 0 5.97-1.09 7.96-2.96l-3.77-2.92c-1.09.73-2.49 1.18-4.19 1.18-3.13 0-5.78-2.52-6.72-5.54l-3.89 3.02C3.37 20.33 7.35 23 12 23z" />
                </svg>
                Continue with Google
              </button>

              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
                <span className="flex-shrink mx-4 text-slate-400 text-[10px] tracking-wider uppercase font-extrabold bg-white dark:bg-slate-900 px-2 rounded-md">
                  or use phone login
                </span>
                <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
              </div>

              {/* OTP Login Form */}
              {otpStep === 'phone' ? (
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" />
                      Mobile Number
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-bold font-mono text-sm border-r border-slate-200 dark:border-slate-800 pr-3">+91</span>
                      <input
                        type="tel"
                        required
                        placeholder="Enter 10-digit number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                        className="w-full pl-16 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm font-semibold text-slate-900 dark:text-white transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  {otpError && (
                    <div className="p-3 bg-rose-50 dark:bg-rose-550/10 border border-rose-100 dark:border-rose-950/20 rounded-xl flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">{otpError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSendingOtp}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/60 disabled:cursor-not-allowed text-white rounded-xl font-bold text-sm shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 hover:-translate-y-0.5 cursor-pointer transition-all"
                  >
                    {isSendingOtp ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending verification code...
                      </>
                    ) : (
                      <>
                        Send OTP via SMS
                        <Smartphone className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                        <Key className="w-3.5 h-3.5" />
                        Verification Code
                      </label>
                      <button
                        type="button"
                        onClick={() => { setOtpStep('phone'); setOtpError(null); }}
                        className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                      >
                        Change Number
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mb-2">
                      OTP code has been sent successfully to <span className="text-slate-800 dark:text-slate-200 font-mono font-extrabold">{phoneNumber.startsWith('+') ? phoneNumber : `+91 ${phoneNumber}`}</span>
                    </p>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      pattern="\d{6}"
                      placeholder="Enter 6-digit OTP code"
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                      className="w-full tracking-[0.5em] text-center py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-black font-mono text-xl text-slate-900 dark:text-white transition-all shadow-inner"
                    />
                  </div>

                  {otpError && (
                    <div className="p-3 bg-rose-50 dark:bg-rose-550/10 border border-rose-100 dark:border-rose-950/20 rounded-xl flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">{otpError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isVerifyingOtp}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/60 disabled:cursor-not-allowed text-white rounded-xl font-bold text-sm shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 hover:-translate-y-0.5 cursor-pointer transition-all"
                  >
                    {isVerifyingOtp ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Verifying details...
                      </>
                    ) : (
                      <>
                        Verify code & login
                        <Check className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <p className="text-[10px] text-slate-400 dark:text-slate-500 text-center font-medium mt-6 leading-relaxed">
              By connecting, you agree to the Suraj Automation secure identity sandbox. Mobile carriers standard rates for messaging/OTP service may apply.
            </p>
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
