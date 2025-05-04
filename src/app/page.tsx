import Image from "next/image";
import styles from "@/styles/page.module.css";
import Header from "@/components/header";


export default function Home() {
  return (
    <>
      <Header />
      <Image 
        src="/images/hero-img.png" 
        alt="Hero image" 
        width={600}
        height={400}/>   
    </>
  );
}
