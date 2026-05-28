import { useEffect } from 'react';

export function useSEO(
  title: string, 
  description: string, 
  keywords: string = '', 
  imageUrl?: string,
  priceInfo?: { price: string; marketPrice?: string; discount?: number }
) {
  useEffect(() => {
    document.title = title;
    
    // Helper to set meta tags
    const setMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(isProperty ? 'property' : 'name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Description & Keywords
    setMeta('description', description);
    setMeta('keywords', keywords);
    
    // Core OG Tags
    setMeta('og:title', title, true);
    
    // Append price structure directly to social description if provided
    let socialDesc = description;
    if (priceInfo) {
      const discountText = priceInfo.discount ? ` (${priceInfo.discount}% OFF)` : '';
      socialDesc = `${priceInfo.price}${discountText} - ${description}`;
    }
    setMeta('og:description', socialDesc, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', window.location.href, true);
    
    // Image Handling for Socials (WhatsApp, Twitter, LinkedIn etc)
    const shareImage = imageUrl || '/favicon.svg';
    // Resolve relative path to absolute URL
    const absoluteImgUrl = shareImage.startsWith('http') 
      ? shareImage 
      : `${window.location.origin}${shareImage}`;
    
    setMeta('og:image', absoluteImgUrl, true);
    setMeta('og:image:width', '1200', true);
    setMeta('og:image:height', '630', true);
    
    // Twitter Specific Meta
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', socialDesc);
    setMeta('twitter:image', absoluteImgUrl);

  }, [title, description, keywords, imageUrl, priceInfo]);
}

