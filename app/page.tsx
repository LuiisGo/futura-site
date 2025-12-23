import Hero from "../components/sections/Hero";
import Problem from "../components/sections/Problem";
import Solution from "../components/sections/Solution";
import Services from "../components/sections/Services";
import SocialProofSection from "../components/sections/SocialProofSection";
import Sectors from "../components/sections/Sectors";
import Methodology from "../components/sections/Methodology";
import SecuritySection from "../components/sections/SecuritySection";
import Wallet from "../components/sections/Wallet";
import CTASection from "../components/sections/CTASection";
import FAQ from "../components/sections/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <SocialProofSection />
      <Sectors />
      <Methodology />
      <SecuritySection />
      <Wallet />
      <CTASection />
      <FAQ />
    </>
  );
}
