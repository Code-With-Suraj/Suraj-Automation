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

    // Dynamic JSON-LD Schema Markup Generation for SEO & AI Search Engines
    const origin = window.location.origin;
    const currentUrl = window.location.href;
    const isProductPage = currentUrl.includes('/products/') || currentUrl.toLowerCase().includes('sarthi') || !!priceInfo;

    // 1. LocalBusiness Schema (Always present)
    let schemaScriptLocal = document.getElementById('seo-schema-localbusiness') as HTMLScriptElement;
    if (!schemaScriptLocal) {
      schemaScriptLocal = document.createElement('script');
      schemaScriptLocal.id = 'seo-schema-localbusiness';
      schemaScriptLocal.type = 'application/ld+json';
      document.head.appendChild(schemaScriptLocal);
    }

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Suraj Automation",
      "image": `${origin}/favicon.svg`,
      "@id": `${origin}/#localbusiness`,
      "url": origin,
      "telephone": "+91-8851666208",
      "email": "suraj.gasdeveloper@gmail.com",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sector 62",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201301",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.6273,
        "longitude": 77.3725
      },
      "description": "Noida's premier AI automation company specializing in custom automation, interactive MIS dashboards, background apps script triggers, and AI automation software for Indian SMBs."
    };

    schemaScriptLocal.textContent = JSON.stringify(localBusinessSchema);

    // 1b. Organization Schema (E-E-A-T: Trust & Authority)
    let schemaScriptOrg = document.getElementById('seo-schema-organization') as HTMLScriptElement;
    if (!schemaScriptOrg) {
      schemaScriptOrg = document.createElement('script');
      schemaScriptOrg.id = 'seo-schema-organization';
      schemaScriptOrg.type = 'application/ld+json';
      document.head.appendChild(schemaScriptOrg);
    }

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${origin}/#organization`,
      "name": "Suraj Automation",
      "url": origin,
      "logo": `${origin}/favicon.svg`,
      "description": "Noida's leading AI automation company specializing in professional custom automation, custom software systems, and background apps script triggers.",
      "founder": {
        "@type": "Person",
        "name": "Suraj Singh",
        "jobTitle": "Google Apps Script Expert & Full-Stack Automation Architect"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8851666208",
        "contactType": "customer service",
        "email": "suraj.gasdeveloper@gmail.com",
        "areaServed": "IN",
        "availableLanguage": ["Hindi", "English"]
      },
      "sameAs": [
        "https://www.linkedin.com/in/surajautomation"
      ]
    };

    schemaScriptOrg.textContent = JSON.stringify(organizationSchema);

    // 1c. Person Schema (E-E-A-T: Founder's individual Experience & Expertise)
    let schemaScriptPerson = document.getElementById('seo-schema-person') as HTMLScriptElement;
    if (!schemaScriptPerson) {
      schemaScriptPerson = document.createElement('script');
      schemaScriptPerson.id = 'seo-schema-person';
      schemaScriptPerson.type = 'application/ld+json';
      document.head.appendChild(schemaScriptPerson);
    }

    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${origin}/#person`,
      "name": "Suraj Singh",
      "jobTitle": "Google Apps Script Expert & Full-Stack Automation Architect",
      "image": `${origin}/favicon.svg`,
      "worksFor": {
        "@type": "Organization",
        "name": "Suraj Automation",
        "url": origin
      },
      "url": `${origin}/about`,
      "sameAs": [
        "https://www.linkedin.com/in/surajautomation"
      ],
      "knowsAbout": [
        "Google Apps Script",
        "Business Process Automation",
        "AI Integrations",
        "Full-Stack Web Development",
        "Google Workspace Development",
        "MIS Dashboards",
        "Custom Software Development"
      ]
    };

    schemaScriptPerson.textContent = JSON.stringify(personSchema);

    // 2. SoftwareApplication Schema (Specifically for products)
    let schemaScriptProduct = document.getElementById('seo-schema-product') as HTMLScriptElement;
    if (isProductPage) {
      if (!schemaScriptProduct) {
        schemaScriptProduct = document.createElement('script');
        schemaScriptProduct.id = 'seo-schema-product';
        schemaScriptProduct.type = 'application/ld+json';
        document.head.appendChild(schemaScriptProduct);
      }
      
      const cleanPrice = priceInfo ? priceInfo.price.replace(/[^0-9]/g, '') : '1499';
      const softwareAppSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": title.split('|')[0].trim(),
        "operatingSystem": "All (Web Browser, Google Workspace, Android, iOS)",
        "applicationCategory": "BusinessApplication",
        "description": description,
        "offers": {
          "@type": "Offer",
          "price": cleanPrice,
          "priceCurrency": "INR"
        }
      };
      
      schemaScriptProduct.textContent = JSON.stringify(softwareAppSchema);
    } else {
      if (schemaScriptProduct) {
        schemaScriptProduct.remove();
      }
    }

    // Cleanup on component unmount to maintain clean HTML DOM
    return () => {
      const elLocal = document.getElementById('seo-schema-localbusiness');
      if (elLocal) elLocal.remove();
      const elOrg = document.getElementById('seo-schema-organization');
      if (elOrg) elOrg.remove();
      const elPerson = document.getElementById('seo-schema-person');
      if (elPerson) elPerson.remove();
      const elProd = document.getElementById('seo-schema-product');
      if (elProd) elProd.remove();
    };

  }, [title, description, keywords, imageUrl, priceInfo]);
}

