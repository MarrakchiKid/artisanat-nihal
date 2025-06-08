'use client'

import Image from 'next/image'
import styles from '@/styles/hero.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Artisanat Marocain</span>
          <h1>
            Cuir & <span className={styles.highlight}>Tapis</span><br />
            Artisanaux
          </h1>
          <p className={styles.heroDescription}>
            Découvrez l'excellence de l'artisanat marocain à travers nos créations uniques, 
            façonnées selon des techniques séculaires transmises de génération en génération.
          </p>
          <div className={styles.heroActions}>
            <a href="#work" className={styles.heroCta}>
              <span>Voir nos créations</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.visualGrid}>
            <div className={`${styles.visualItem} ${styles.visualItem1}`}>
              <Image src="/images/pouf.webp" alt="Cuir artisanal" fill style={{ objectFit: 'cover' }} />
              <div className={styles.visualOverlay}></div>
            </div>
            <div className={`${styles.visualItem} ${styles.visualItem2}`}>
              <Image src="/images/dufflebag.jpg" alt="Tapis berbère" fill style={{ objectFit: 'cover' }} />
              <div className={styles.visualOverlay}></div>
            </div>
            <div className={`${styles.visualItem} ${styles.visualItem3}`}>
              <Image src="/images/pillows.jpg" alt="Artisan au travail" fill style={{ objectFit: 'cover' }} />
              <div className={styles.visualOverlay}></div>
            </div>
          </div>

          <div className={styles.floatingStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>25+</span>
              <span className={styles.statLabel}>Années d'expérience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Créations uniques</span>
            </div>
          </div>

          <div className={styles.floatingBadge}>
            Artisanat<br />
            100%<br />
            Authentique
          </div>
        </div>
      </div>
    </section>
  )
}
