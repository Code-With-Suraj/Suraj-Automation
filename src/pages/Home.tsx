import Hero from '../components/Hero';
import Stats from '../components/Stats';
import SolutionsHighlight from '../components/SolutionsHighlight';
import Problem from '../components/Problem';
import DiagnosticSimulator from '../components/DiagnosticSimulator';
import WhatIDo from '../components/WhatIDo';
import WhatWeOffer from '../components/WhatWeOffer';
import ProductsSection from '../components/ProductsSection';
import WhyAppsScript from '../components/WhyAppsScript';
import WhyMe from '../components/WhyMe';
import WhoIsThisFor from '../components/WhoIsThisFor';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Process from '../components/Process';
import FinalCTA from '../components/FinalCTA';
import { useSEO } from '../hooks/useSEO';

export default function Home() {
  useSEO(
    'Business Automation using Google Sheets & AI | Suraj Automation',
    'Get custom business automation using Google Sheets, custom Apps Script triggers, automated WhatsApp systems, and interactive MIS dashboards. Automate 100% of your manual tasks today!',
    'business automation using Google Sheets, google sheets automation, custom business automation, apps script triggers, mis dashboards, automation company in noida'
  );

  return (
    <main>
      <Hero />
      <Stats />
      <SolutionsHighlight />
      <Problem />
      <DiagnosticSimulator />
      <WhatIDo />
      <WhatWeOffer />
      <ProductsSection />
      <WhyAppsScript />
      <WhyMe />
      <WhoIsThisFor />
      <Process />
      <TestimonialCarousel />
      <FinalCTA />
    </main>
  );
}

