'use client'

import styles from '@/styles/about.module.css';
import CountUp from 'react-countup';

const AboutSection = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutHeader}>
          <span className={styles.aboutEyebrow}>Une Tradition Familiale</span>
          <h2 className={styles.aboutTitle}>Notre Histoire</h2>
        </div>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <p>Depuis plus de soixante ans, au cœur vibrant de Marrakech, la famille Nihal tisse l'histoire de l'artisanat marocain. Sur trois générations, nous avons perfectionné la maroquinerie et le tissage, transformant des matériaux nobles en véritables œuvres.</p>
            <p>Nos artisans, dépositaires de savoir-faire ancestraux, façonnent chaque pièce avec passion. Du cuir sélectionné aux fibres naturelles, chaque geste allie tradition et un souffle de modernité pour créer des objets uniques.</p>
            <p>Chaque création est bien plus qu'un accessoire : c'est l'empreinte de notre riche héritage culturel, le reflet d'un dévouement inébranlable à l'excellence et à la beauté du fait main.</p>
          </div>
          <div className={styles.aboutStats}>
            <div className={styles.stat}>
                <div className={styles.statNumber}>
                <CountUp end={25} duration={2} />+
                </div>
              <div className={styles.statLabel}>Années d'expérience</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>1000+</div>
              <div className={styles.statLabel}>Pièces créées</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>3</div>
              <div className={styles.statLabel}>Générations</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Fait main</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
