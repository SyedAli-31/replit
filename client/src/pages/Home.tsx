import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhatWeDo from "@/components/home/WhatWeDo";
import TechIndex from "@/components/home/TechIndex";
import CaseStudies from "@/components/home/CaseStudies";
import About from "@/components/home/About";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhatWeDo />
      <TechIndex />
      <CaseStudies />
      <About />
      <ContactSection />
    </>
  );
}