import Hero from '../components/Hero';
import TrustedByMarquee from '../components/TrustedByMarquee';
import WhyChooseUs from '../components/WhyChooseUs';
import WhatWeOffer from '../components/WhatWeOffer';
import IndustriesGrid from '../components/IndustriesGrid';
import ProductsSection from '../components/ProductsSection';
import TechStack from '../components/TechStack';
import CaseStudies from '../components/CaseStudies';
import DiagnosticSimulator from '../components/DiagnosticSimulator';
import Process from '../components/Process';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FaqSection, { HOME_FAQS } from '../components/FaqSection';
import FinalCTA from '../components/FinalCTA';
import AIChatWidget from '../components/AIChatWidget';
import { useSEO } from '../hooks/useSEO';

export default function Home() {
  useSEO(
    'Business Automation Company India | Suraj Automation',
    'Suraj Automation is a business automation & custom software development company in India helping SMBs automate workflows with Apps Script, WhatsApp & MIS.',
    'business automation company india, custom software development company india, business process automation services, custom web application development, small business automation solutions, workflow automation solutions',
    undefined,
    undefined,
    {
      faqs: HOME_FAQS,
      serviceInfo: {
        name: 'Business Automation & Custom Software Development',
        description:
          'Custom web applications, Google Apps Script ERPs, WhatsApp business automation, AI integrations, and MIS dashboards for Indian SMBs.',
        serviceType: 'Business Process Automation & Custom Software Development',
        areaServed: ['India', 'Noida', 'Greater Noida', 'Ghaziabad', 'Delhi NCR'],
        url: 'https://surajdx.com/'
      }
    }
  );

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <TrustedByMarquee />
      <WhyChooseUs />
      <WhatWeOffer />
      <IndustriesGrid />
      <ProductsSection />
      <TechStack />
      <CaseStudies />
      <DiagnosticSimulator />
      <Process />
      <TestimonialCarousel />
      <FaqSection />
      <FinalCTA />
      <AIChatWidget />
    </main>
  );
}
