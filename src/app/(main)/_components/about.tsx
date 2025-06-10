'use client'

import styles from '@/styles/about.module.css';
import CountUp from 'react-countup';

const AboutSection = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutHeader}>
          <span className={styles.aboutEyebrow}>Notre Héritage</span>
          <h2 className={styles.aboutTitle}>Notre Histoire</h2>
        </div>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <p>Depuis trois générations, la famille Nihal perpétue l'art traditionnel de la maroquinerie et du tissage dans notre atelier au cœur de Marrakech.</p>
            <p>Nos mains expertes transforment le cuir noble et les fibres naturelles en pièces uniques, alliant techniques ancestrales et sensibilité contemporaine.</p>
            <p>Chaque création porte l'empreinte de notre héritage culturel et témoigne d'un engagement sans faille envers l'excellence artisanale.</p>
          </div>
          <div className={styles.aboutStats}>
            <div className={styles.stat}>
                <div className={styles.statNumber}>
                <CountUp end={60} duration={2} />+
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
