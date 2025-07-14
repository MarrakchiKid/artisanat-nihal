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
            Un processus artisanal méticuleux pour des créations d'exception
          </p>
        </div>

        <div className={styles.servicesList}>
          <div className={styles.serviceItem}>
            <div className={styles.serviceNumber}>01</div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>Sélection des Matières</h3>
              <p className={styles.serviceDescription}>
                Choix rigoureux des cuirs les plus fins et des fibres naturelles de première qualité.
              </p>
            </div>
          </div>

          <div className={styles.serviceItem}>
            <div className={styles.serviceNumber}>02</div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>Techniques Traditionnelles</h3>
              <p className={styles.serviceDescription}>
                Application des méthodes ancestrales transmises de maître à apprenti.
              </p>
            </div>
          </div>

          <div className={styles.serviceItem}>
            <div className={styles.serviceNumber}>03</div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>Finitions Artisanales</h3>
              <p className={styles.serviceDescription}>
                Attention méticuleuse portée à chaque détail pour une finition parfaite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

