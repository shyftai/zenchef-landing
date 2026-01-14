'use client';

import { useEffect } from 'react';
import { HeroSection } from '@/components/hero/HeroSection';
import { ComparisonSection } from '@/components/problem/ComparisonSection';
import { ValuePropsSection } from '@/components/value-props/ValuePropsSection';
import { FlowDiagram } from '@/components/how-it-works/FlowDiagram';
import { ChatDemo } from '@/components/demo/ChatDemo';
import { TAMSection } from '@/components/tam/TAMSection';
import { FeatureGrid } from '@/components/features/FeatureGrid';
import { DeliverablesSection } from '@/components/deliverables/DeliverablesSection';
import { PricingSection } from '@/components/pricing/PricingSection';
import { TimelineSection } from '@/components/timeline/TimelineSection';
import { FAQSection } from '@/components/faq/FAQSection';
export default function Home() {
  useEffect(() => {
    // Ensure page starts at the top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <ComparisonSection />
      <ValuePropsSection />
      <FlowDiagram />
      <ChatDemo />
      <TAMSection />
      <FeatureGrid />
      <DeliverablesSection />
      <PricingSection />
      <TimelineSection />
      <FAQSection />
    </main>
  );
}
