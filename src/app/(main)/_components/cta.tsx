import styles from '@/styles/cta.module.css';

export default function CtaSection() {
  return (
    <section id="cta" className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <span className={styles.ctaEyebrow}>Votre Projet</span>
          <h2 className={styles.ctaTitle}>Créons Ensemble</h2>
          <p className={styles.ctaDesc}>
            Vous avez un projet ? Discutons de vos besoins et donnons vie à vos idées les plus créatives.
          </p>
          <a href="#contact" className={styles.ctaButton}>
            <span>Demander un devis</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
