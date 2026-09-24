import { Hero } from '@/components/Hero';
import { WhatWeBuild } from '@/components/WhatWeBuild';
import { ProductWall } from '@/components/ProductWall';
import { SelectedWork } from '@/components/SelectedWork';
import { WhyMateru } from '@/components/WhyMateru';
import { Process } from '@/components/Process';
import { FinalCTA } from '@/components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeBuild />
      <ProductWall />
      <SelectedWork />
      <WhyMateru />
      <Process />
      <FinalCTA />
    </>
  );
}
