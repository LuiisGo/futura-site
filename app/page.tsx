import IntroOverlay from "../components/layout/IntroOverlay";
import Hero from "../components/sections/Hero";
import Problem from "../components/sections/Problem";
import Solution from "../components/sections/Solution";
import Services from "../components/sections/Services";
import Methodology from "../components/sections/Methodology";
import SocialProofSection from "../components/sections/SocialProofSection";
import Sectors from "../components/sections/Sectors";

import SecuritySection from "../components/sections/SecuritySection";
import Wallet from "../components/sections/Wallet";
import CTASection from "../components/sections/CTASection";
import FAQ from "../components/sections/FAQ";

export default function HomePage() {
  return (
    <>
      <IntroOverlay />
      <Hero />
      <Problem />
      <Solution />
      <Services />
         <Methodology />
      <SocialProofSection />
      <Sectors />
   
      <SecuritySection />
      <Wallet />
      <CTASection />
      <FAQ />
    </>
  );
}
