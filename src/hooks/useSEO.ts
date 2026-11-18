import { useEffect } from 'react';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FAQItem {
  q?: string;
  a?: string;
  question?: string;
  answer?: string;
}

export interface ServiceSchemaInfo {
  name: string;
  description: string;
  serviceType: string;
  areaServed?: string[];
  url?: string;
}

export interface ArticleSchemaInfo {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  keywords?: string[];
}

export interface SEOOptions {
  ogType?: 'website' | 'article';
  robots?: string;
  noindex?: boolean;
  canonicalPath?: string;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQItem[];
  serviceInfo?: ServiceSchemaInfo;
  service?: ServiceSchemaInfo;
  articleInfo?: ArticleSchemaInfo;
  isProduct?: boolean;
  productName?: string;
}

export function useSEO(
  title: string,
  description: string,
  keywords: string = '',
  imageUrl?: string,
  priceInfo?: { price: string; marketPrice?: string; discount?: number },
  options?: SEOOptions
) {
  const serializedOptions = JSON.stringify(options || {});
  const serializedPrice = JSON.stringify(priceInfo || null);

  useEffect(() => {
    const parsedOptions: SEOOptions = JSON.parse(serializedOptions);
    const parsedPrice: { price: string; marketPrice?: string; discount?: number } | null =
      JSON.parse(serializedPrice);

    document.title = title;

    const origin =
      typeof window !== 'undefined' && window.location.origin && !window.location.origin.includes('null')
        ? window.location.origin
        : 'https://surajdx.com';

    const rawPath = parsedOptions.canonicalPath || window.location.pathname || '/';
    const normalizedPath = rawPath === '/' ? '/' : rawPath.replace(/\/+$/, '');
    const canonicalUrl = `${origin}${normalizedPath}`;

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

    // Core SEO Meta
    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta(
      'robots',
      parsedOptions.robots || (parsedOptions.noindex ? 'noindex, nofollow' : 'index, follow')
    );

    // OpenGraph Tags
    setMeta('og:site_name', 'Suraj Automation', true);
    setMeta('og:title', title, true);

    let socialDesc = description;
    if (parsedPrice) {
      const discountText = parsedPrice.discount ? ` (${parsedPrice.discount}% OFF)` : '';
      socialDesc = `${parsedPrice.price}${discountText} - ${description}`;
    }
    setMeta('og:description', socialDesc, true);
    setMeta('og:type', parsedOptions.ogType || 'website', true);
    setMeta('og:url', canonicalUrl, true);

    const shareImage = imageUrl || '/favicon.svg';
    const absoluteImgUrl = shareImage.startsWith('http')
      ? shareImage
      : `${origin}${shareImage.startsWith('/') ? '' : '/'}${shareImage}`;

    setMeta('og:image', absoluteImgUrl, true);

    // Twitter Tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', socialDesc);
    setMeta('twitter:image', absoluteImgUrl);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Helper for injecting JSON-LD cleanly
    const upsertSchema = (id: string, payload: Record<string, unknown> | null) => {
      let scriptEl = document.getElementById(id) as HTMLScriptElement | null;
      if (!payload) {
        if (scriptEl) scriptEl.remove();
        return;
      }
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = id;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(payload);
    };

    // 1. Organization Schema
    upsertSchema('seo-schema-organization', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${origin}/#organization`,
      name: 'Suraj Automation',
      url: origin,
      logo: `${origin}/favicon.svg`,
      description:
        'Indian business automation and custom software development company specializing in Google Apps Script development, custom web applications, WhatsApp business automation, AI integrations, and MIS dashboards.',
      founder: {
        '@type': 'Person',
        '@id': `${origin}/#person`,
        name: 'Suraj Singh',
        jobTitle: 'Founder & Full-Stack Automation Architect'
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-9355337839',
          contactType: 'customer service',
          email: 'suraj.gasdeveloper@gmail.com',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi']
        },
        {
          '@type': 'ContactPoint',
          telephone: '+91-8851666208',
          contactType: 'customer service',
          email: 'suraj.gasdeveloper@gmail.com',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi']
        }
      ],
      sameAs: [
        'https://www.linkedin.com/in/surajautomation',
        'https://websarthi.surajdx.com/'
      ]
    });

    // 2. WebSite Schema
    upsertSchema('seo-schema-website', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${origin}/#website`,
      url: origin,
      name: 'Suraj Automation',
      publisher: { '@id': `${origin}/#organization` }
    });

    // 3. ProfessionalService Schema (consistent with visible Noida / Delhi NCR / India presence)
    upsertSchema('seo-schema-localbusiness', {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${origin}/#professionalservice`,
      name: 'Suraj Automation',
      image: `${origin}/favicon.svg`,
      url: origin,
      telephone: '+91-9355337839',
      email: 'suraj.gasdeveloper@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Noida',
        addressRegion: 'Uttar Pradesh',
        addressCountry: 'IN'
      },
      areaServed: ['Noida', 'Greater Noida', 'Ghaziabad', 'Delhi NCR', 'India'],
      description:
        'Custom software development, Google Apps Script automation, WhatsApp API workflows, AI integrations, and MIS dashboard engineering for SMBs across Noida, Delhi NCR, and India.'
    });

    // 4. Person Schema (Founder E-E-A-T)
    upsertSchema('seo-schema-person', {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `${origin}/#person`,
      name: 'Suraj Singh',
      jobTitle: 'Google Apps Script Developer & Full-Stack Automation Architect',
      worksFor: { '@id': `${origin}/#organization` },
      url: `${origin}/about`,
      sameAs: ['https://www.linkedin.com/in/surajautomation'],
      knowsAbout: [
        'Google Apps Script Development',
        'Custom Software Development',
        'Business Process Automation',
        'WhatsApp Business API Integration',
        'MIS Dashboards & Excel Reporting',
        'Gemini AI Integrations',
        'Custom Web Applications'
      ]
    });

    // 5. SoftwareApplication Schema for Product Pages
    const isProductPage =
      !!parsedOptions.isProduct ||
      normalizedPath.startsWith('/products/') ||
      normalizedPath.toLowerCase().includes('sarthi') ||
      !!parsedPrice;

    if (isProductPage) {
      const cleanPrice = parsedPrice ? parsedPrice.price.replace(/[^0-9]/g, '') : '1499';
      upsertSchema('seo-schema-product', {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: parsedOptions.productName || title.split('|')[0].trim(),
        operatingSystem: 'Web Browser, Google Workspace, Android, iOS',
        applicationCategory: 'BusinessApplication',
        description,
        url: canonicalUrl,
        provider: { '@id': `${origin}/#organization` },
        offers: {
          '@type': 'Offer',
          price: cleanPrice || '1499',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock'
        }
      });
    } else {
      upsertSchema('seo-schema-product', null);
    }

    // 6. BreadcrumbList Schema
    if (parsedOptions.breadcrumbs && parsedOptions.breadcrumbs.length > 0) {
      upsertSchema('seo-schema-breadcrumb', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: parsedOptions.breadcrumbs.map((item, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: item.name,
          item: item.path.startsWith('http') ? item.path : `${origin}${item.path}`
        }))
      });
    } else {
      upsertSchema('seo-schema-breadcrumb', null);
    }

    // 7. Service Schema
    const resolvedService = parsedOptions.serviceInfo || parsedOptions.service;
    if (resolvedService) {
      upsertSchema('seo-schema-service', {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: resolvedService.name,
        description: resolvedService.description,
        serviceType: resolvedService.serviceType,
        provider: { '@id': `${origin}/#organization` },
        areaServed: resolvedService.areaServed || [
          'Noida',
          'Greater Noida',
          'Ghaziabad',
          'Delhi NCR',
          'India'
        ],
        url: resolvedService.url || canonicalUrl
      });
    } else {
      upsertSchema('seo-schema-service', null);
    }

    // 8. FAQPage Schema
    if (parsedOptions.faqs && parsedOptions.faqs.length > 0) {
      upsertSchema('seo-schema-faq', {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: parsedOptions.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q || faq.question || '',
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a || faq.answer || ''
          }
        }))
      });
    } else {
      upsertSchema('seo-schema-faq', null);
    }

    // 9. Article Schema
    if (parsedOptions.articleInfo) {
      upsertSchema('seo-schema-article', {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: parsedOptions.articleInfo.headline,
        description: parsedOptions.articleInfo.description,
        image: parsedOptions.articleInfo.image || absoluteImgUrl,
        datePublished: parsedOptions.articleInfo.datePublished,
        dateModified: parsedOptions.articleInfo.dateModified || parsedOptions.articleInfo.datePublished,
        author: {
          '@type': 'Person',
          name: parsedOptions.articleInfo.authorName || 'Suraj Singh',
          url: `${origin}/about`
        },
        publisher: {
          '@type': 'Organization',
          name: 'Suraj Automation',
          logo: {
            '@type': 'ImageObject',
            url: `${origin}/favicon.svg`
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl
        },
        ...(parsedOptions.articleInfo.keywords
          ? { keywords: parsedOptions.articleInfo.keywords.join(', ') }
          : {})
      });
    } else {
      upsertSchema('seo-schema-article', null);
    }

    return () => {
      [
        'seo-schema-localbusiness',
        'seo-schema-organization',
        'seo-schema-website',
        'seo-schema-person',
        'seo-schema-product',
        'seo-schema-breadcrumb',
        'seo-schema-service',
        'seo-schema-faq',
        'seo-schema-article'
      ].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, [title, description, keywords, imageUrl, serializedPrice, serializedOptions]);
}
