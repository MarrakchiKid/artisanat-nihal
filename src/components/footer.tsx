import styles from '@/styles/footer.module.css';

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div>
            <div className={styles.footerBrand}>Artisan Nihal</div>
            <p className={styles.footerDesc}>
              Maître artisan spécialisé dans la maroquinerie de luxe et les tapis traditionnels depuis 1965.
            </p>
          </div>
          <div className={styles.footerSection}>
            <h4>Contact</h4>
            <p>contact@artisan-nihal.com</p>
            <p>+212 6XX XXX XXX</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Atelier</h4>
            <p>Médina, Marrakech</p>
            <p>Sur rendez-vous</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 Artisan Nihal. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
