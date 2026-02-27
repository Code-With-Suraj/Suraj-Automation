import Hero from '../components/Hero';
import Problem from '../components/Problem';
import WhatIDo from '../components/WhatIDo';
import WhyAppsScript from '../components/WhyAppsScript';
import WhyMe from '../components/WhyMe';
import WhoIsThisFor from '../components/WhoIsThisFor';
import Process from '../components/Process';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <WhatIDo />
      <WhyAppsScript />
      <WhyMe />
      <WhoIsThisFor />
      <Process />
      <FinalCTA />
    </main>
  );
}
