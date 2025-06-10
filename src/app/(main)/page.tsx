import Header from "@/components/header";
import HeroSection from "@/app/(main)/_components/hero";
import WorkSection from "./_components/work";
import AboutSection from "./_components/about";
import ServicesSection from "./_components/services";


export default function Home() {
  return (
    <>
      <Header />
      <HeroSection /> 
      <WorkSection />
      <AboutSection />
      <ServicesSection/ >
    </>
  );
}
