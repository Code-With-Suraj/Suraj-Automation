import { createContext, useContext, useState, ReactNode } from 'react';

export type SiteLang = 'hinglish' | 'en';

interface LanguageContextType {
  lang: SiteLang;
  setLang: (lang: SiteLang) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<SiteLang>(() => {
    try {
      const saved = localStorage.getItem('suraj_site_lang');
      return saved === 'en' ? 'en' : 'hinglish';
    } catch {
      return 'hinglish';
    }
  });

  const setLang = (next: SiteLang) => {
    setLangState(next);
    try {
      localStorage.setItem('suraj_site_lang', next);
    } catch {
      // ignore storage errors
    }
  };

  const toggleLang = () => setLang(lang === 'hinglish' ? 'en' : 'hinglish');

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
