'use client';

import React from 'react';
import styles from '@/styles/collab.module.css';
import Image from "next/image";

export default function CollaborationsSection() {
  return (
    <section className={styles.prestigeSection}>
        <div className={styles.container}>
            <div className={styles.servicesHeader}>
                <span className={styles.sectionEyebrow}>Ils nous font confiance</span>
                <h2 className={styles.sectionTitle}>Nos Partenaires</h2>
                <p className={styles.sectionSubtitle}>
                    Nos pièces uniques trouvent leur place dans les plus grands palaces, hôtels de luxe et établissements d'exception à travers le monde.
                </p>
            </div>
            <div className={styles.partnerGrid}>
                <Image src="/images/partners/royalmansour.png" alt="Royal Mansour" width={160} height={110} />
                <Image src="/images/partners/lamamounia.png" alt="La Mamounia" width={160} height={160} />
                <Image src="/images/partners/fourseasons.png" alt="Four Seasons" width={160} height={130} />
                <Image src="/images/partners/theoberoi.jpg" alt="The Oberoi" width={160} height={160} />
                <Image src="/images/partners/hivernage.png" alt="Hivernage" width={160} height={160} />
            </div>
        </div>
    </section>
    );
}

