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
    'Suraj Automation | Noida\'s Premier AI Automation Company',
    'As Noida\'s leading AI automation company, we specialize in custom automation, interactive MIS dashboards, advanced apps script triggers, and AI automation softwares for SMBs.',
    'ai automation companies, mis dashboards, ai automation company, custom automation, apps script triggers, ai automation websites, ai automation softwares, automation company in noida'
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

