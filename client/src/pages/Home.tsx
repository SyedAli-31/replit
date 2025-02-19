import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Services from "@/components/home/Services";
import WhatWeDo from "@/components/home/WhatWeDo";
import TechIndex from "@/components/home/TechIndex";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import CaseStudies from "@/components/home/CaseStudies";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Services />
      <WhatWeDo />
      <TechIndex />
      <Statistics />
      <Testimonials />
      <CaseStudies />
      <ContactSection />
    </>
  );
}