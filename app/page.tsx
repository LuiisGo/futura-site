import IntroOverlay from "../components/layout/IntroOverlay";
import Hero from "../components/sections/Hero";
import StatsBar from "../components/sections/StatsBar";
import ScrollStory from "../components/sections/ScrollStory";
import BentoServices from "../components/sections/BentoServices";
import Methodology from "../components/sections/Methodology";
import SocialProofSection from "../components/sections/SocialProofSection";
import CasosDeExito from "../components/sections/CasosDeExito";
import TermometroSection from "../components/sections/TermometroSection";
import Sectors from "../components/sections/Sectors";
import SecuritySection from "../components/sections/SecuritySection";
import Wallet from "../components/sections/Wallet";
import TestimonialQuote from "../components/sections/TestimonialQuote";
import CTASection from "../components/sections/CTASection";
import FAQ from "../components/sections/FAQ";

export default function HomePage() {
  return (
    <>
      <IntroOverlay />
      <Hero />
      <StatsBar />
      <ScrollStory />
      <BentoServices />
      <Methodology />
      <SocialProofSection />
      <CasosDeExito />
      <TermometroSection />
      <Sectors />
      <SecuritySection />
      <Wallet />
      <TestimonialQuote />
      <CTASection />
      <FAQ />
    </>
  );
}
