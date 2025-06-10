import Header from "@/components/header";
import HeroSection from "@/app/(main)/_components/hero";
import WorkSection from "./_components/work";
import AboutSection from "./_components/about";


export default function Home() {
  return (
    <>
      <Header />
      <HeroSection /> 
      <WorkSection />
      <AboutSection />
    </>
  );
}
