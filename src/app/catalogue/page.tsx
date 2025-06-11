'use client';

import Footer from "@/components/footer";
import Header from "@/components/header";
import styles from "@/styles/catalogue.module.css"
import { SetStateAction, useState } from "react";

export default function CataloguePage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { label: 'Toutes nos créations', value: 'all' },
    { label: 'Maroquinerie', value: 'maroquinerie' },
    { label: 'Tapis Berbères', value: 'tapis' },
    { label: 'Kilims', value: 'kilim' },
    { label: 'Sur Mesure', value: 'sur-mesure' },
  ];

  const handleFilterClick = (value: SetStateAction<string>) => {
    setActiveFilter(value);
  };

  return (
    <>
      <Header />
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.patternDecoration}></div>
          <span className={styles.sectionEyebrow}>Artisanat Marocain</span>
          <h1 className={styles.heroTitle}>
            Catalogue de nos <span className={styles.highlight}>Créations</span>
            <br />
            Artisanales
          </h1>
          <p className={styles.heroSubtitle}>
            Découvrez notre collection exclusive de cuir et tapis, façonnée selon des techniques séculaires transmises de génération en génération par nos maîtres artisans.
          </p>
          <a href="#produits" className={styles.heroCta}>
            <span>Parcourir nos créations</span>
            <span>→</span>
          </a>
        </div>
      </section>

      <section className={styles.filters}>
        <div className={styles.container}>
          <div className={styles.filterContainer}>
            {filters.map((filter) => (
              <button
                key={filter.value}
                className={`${styles.filterBtn} ${activeFilter === filter.value ? styles.active : ''}`}
                onClick={() => handleFilterClick(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}