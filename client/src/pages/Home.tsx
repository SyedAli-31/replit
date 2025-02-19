import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import CaseStudies from "@/components/home/CaseStudies";
import About from "@/components/home/About";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <About />
      <ContactSection />
    </>
  );
}
