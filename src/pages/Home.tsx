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
import FaqSection from '../components/FaqSection';
import FinalCTA from '../components/FinalCTA';
import AIChatWidget from '../components/AIChatWidget';
import { useSEO } from '../hooks/useSEO';

export default function Home() {
  useSEO(
    'Custom Software & Business Automation Company | Suraj Automation',
    "We don't just build websites. We build software that runs businesses. Custom Web Apps, Google Apps Script ERPs, WhatsApp Automation, and MIS Dashboards for growing SMBs.",
    'custom web application development, business automation company, google apps script erp, whatsapp automation system, mis dashboard software, suraj automation'
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
