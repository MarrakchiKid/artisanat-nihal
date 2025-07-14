'use client';

import React from 'react';
import styles from '@/styles/services.module.css';

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesHeader}>
          <span className={styles.sectionEyebrow}>De la Matière à l’Œuvre</span>
          <h2 className={styles.sectionTitle}>Notre Savoir-faire</h2>
          <p className={styles.sectionSubtitle}>
            Chaque création incarne un art de vivre, façonnée à la main avec une exigence constante de qualité et d’authenticité.
          </p>
        </div>

        <div className={styles.servicesList}>
          <div className={styles.serviceItem}>
            <div className={styles.serviceNumber}>01</div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>Matières d’Exception</h3>
              <p className={styles.serviceDescription}>
                Nos artisans sélectionnent les cuirs les plus souples et les tissus les plus nobles, alliant esthétique, toucher et longévité.
              </p>
            </div>
          </div>

          <div className={styles.serviceItem}>
            <div className={styles.serviceNumber}>02</div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>Gestes Hérités</h3>
              <p className={styles.serviceDescription}>
                Chaque étape de fabrication repose sur un savoir-faire ancestral transmis de génération en génération, sans compromis.
              </p>
            </div>
          </div>

          <div className={styles.serviceItem}>
            <div className={styles.serviceNumber}>03</div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>Finitions Signature</h3>
              <p className={styles.serviceDescription}>
                Coutures apparentes, patines naturelles ou tranches cirées : chaque finition reflète notre souci du détail et du beau.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

