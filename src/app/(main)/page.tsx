import Header from "@/components/header";
import HeroSection from "@/app/(main)/_components/hero";
import WorkSection from "./_components/work";
import AboutSection from "./_components/about";
import ServicesSection from "./_components/services";
import Footer from "@/components/footer";
import CtaSection from "./_components/cta";


export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ServicesSection />
      <CtaSection />
      <Footer />
    </>
  );
}
