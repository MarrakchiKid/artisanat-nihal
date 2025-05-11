import Image from "next/image";
import styles from "@/styles/hero.module.css";
import Button from "@/components/ui/hero-button";

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      <Image
        src="/images/hero-img.png"
        alt="Hero image"
        fill
        priority
        className={styles.image}
      />
      <div className={styles.overlay}>
        <h1>L’artisanat marocain au service des professionnels</h1>
        <Button variant="hero">Demander un devis</Button>
      </div>
    </div>
  );
}