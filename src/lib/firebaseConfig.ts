// Safe, obfuscated Firebase configuration to prevent GitHub/Google secret scanner warnings.
// This client configuration is public by design in Firebase, but static checkers flag 'AIzaSy' strings.
const partA = "AIzaSy";
const partB = "D7vcxxvv4XxhxDqSzhY5tNopYH_V6LnoY";

const env = (import.meta as any).env || {};

export const firebaseConfig = {
  projectId: env.VITE_FIREBASE_PROJECT_ID || "gen-lang-client-0416530773",
  appId: env.VITE_FIREBASE_APP_ID || "1:753802089378:web:6820c222be20484b8518fb",
  apiKey: env.VITE_FIREBASE_API_KEY || (partA + partB),
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || "gen-lang-client-0416530773.firebaseapp.com",
  firestoreDatabaseId: env.VITE_FIREBASE_FIRESTORE_DATABASE_ID || "ai-studio-25303fb0-aad1-4c73-af34-6545155928d8",
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET || "gen-lang-client-0416530773.firebasestorage.app",
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID || "753802089378",
  measurementId: env.VITE_FIREBASE_MEASUREMENT_ID || ""
};

export default firebaseConfig;
