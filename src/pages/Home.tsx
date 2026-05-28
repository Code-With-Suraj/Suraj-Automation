import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Problem from '../components/Problem';
import DiagnosticSimulator from '../components/DiagnosticSimulator';
import WhatIDo from '../components/WhatIDo';
import WhatWeOffer from '../components/WhatWeOffer';
import ProductsSection from '../components/ProductsSection';
import WhyAppsScript from '../components/WhyAppsScript';
import WhyMe from '../components/WhyMe';
import WhoIsThisFor from '../components/WhoIsThisFor';
import Process from '../components/Process';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Problem />
      <DiagnosticSimulator />
      <WhatIDo />
      <WhatWeOffer />
      <ProductsSection />
      <WhyAppsScript />
      <WhyMe />
      <WhoIsThisFor />
      <Process />
      <FinalCTA />
    </main>
  );
}

