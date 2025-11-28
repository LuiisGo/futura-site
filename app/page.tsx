import Hero from "../components/sections/Hero";
import Problem from "../components/sections/Problem";
import Solution from "../components/sections/Solution";
import Services from "../components/sections/Services";
import Sectors from "../components/sections/Sectors";
import Methodology from "../components/sections/Methodology";
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
      <Sectors />
      <Methodology />
      <Wallet />
      <CTASection />
      <FAQ />
    </>
  );
}
