import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MediaPartner from "@/components/Media";
import Navbar from "@/components/Navbar";
import QuickSearch from "@/components/QuickSearch";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonial";
import WhyChooseUs from "@/components/WhyChoose";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <QuickSearch />
      <HowItWorks />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <MediaPartner />
      <Testimonials />
      <FAQ />
      <CTA />
      <FloatingCTA />
      <Footer />
    </main>
  );
}
