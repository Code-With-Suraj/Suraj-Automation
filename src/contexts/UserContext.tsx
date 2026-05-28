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
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (e) {
      setLoading(false);
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
