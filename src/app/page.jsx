import LearnAboutUs from '@/components/LearnAboutUs/LearnAboutUs';
import TryOurCreativeTool from '@/components/TryOurCreativeTool/TryOurCreativeTool';
import Header from '@/components/Header/Header';
import OurPricingPlans from '@/components/OurPricingPlans/OurPricingPlans';
import OurMAinFeatures from '@/components/OurMainFeatures/OurMainFeatures';
import WhatOurClientSay from '@/components/WhatOurClientSay/WhatOurClientSay';

export default function Home() {
  return (
    <>
      <Header />
      <TryOurCreativeTool />
      <LearnAboutUs />
      <OurPricingPlans />
      <OurMAinFeatures />
      <WhatOurClientSay />
    </>
  );
}
