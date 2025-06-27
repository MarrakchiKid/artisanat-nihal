"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import styles from "@/styles/aboutpage.module.css";
import { Scissors, Star, Palmtree, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <>
    <Header />
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>

        <div className={styles.heroSection}>
          <span className={styles.badge}>Notre Univers</span>
          <h1 className={styles.title}>
            Une histoire de <span className={styles.highlight}>transmission</span>
          </h1>
          <p className={styles.subtitle}>
            Artisanat Nihal, c’est avant tout une passion familiale pour le cuir, un amour du geste précis et un profond respect de l’héritage marocain.
          </p>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Nos Racines</h2>
          <p>
            Dans le tumulte apaisant des ruelles de Marrakech, notre atelier a vu le jour il y a plus de deux décennies. Là, les outils sont polis par le temps, et le cuir parle une langue que seule la main sait entendre.
          </p>
          <p>
            Ce que nous faisons ? Préserver une tradition tout en la réinventant. Chaque couture, chaque bord franc, chaque odeur de peau raconte une mémoire que nous perpétuons fièrement.
          </p>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Un savoir-faire à taille humaine</h2>
          <p>
            Nous travaillons exclusivement à la main. Pas de machine industrielle, pas de production de masse. Un rythme lent, choisi. Nous utilisons des teintures végétales, des outils anciens, et une patience infinie.
          </p>
          <p>
            Nos pièces sont conçues pour durer, vieillir, se patiner. Elles ne cherchent pas la perfection : elles expriment l’authenticité.
          </p>
        </div>

        <div className={styles.valuesGrid}>
          <div className={styles.valueItem}>
            <Scissors className={styles.icon} />
            <h3>Héritage</h3>
            <p>Une transmission familiale du geste, du regard, du temps juste.</p>
          </div>
          <div className={styles.valueItem}>
            <Palmtree className={styles.icon} />
            <h3>Identité</h3>
            <p>Une signature marocaine fièrement ancrée dans nos matières et nos formes.</p>
          </div>
          <div className={styles.valueItem}>
            <Star className={styles.icon} />
            <h3>Exigence</h3>
            <p>Le souci du détail, la noblesse du cuir, la sincérité du travail bien fait.</p>
          </div>
          <div className={styles.valueItem}>
            <Users className={styles.icon} />
            <h3>Humain</h3>
            <p>Un lien direct entre vous et l’artisan, sans intermédiaire, sans artifice.</p>
          </div>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Visiter notre atelier</h2>
          <p>
            Chaque visite est une rencontre. Nous vous accueillons sur rendez-vous dans notre espace de création, au cœur de Marrakech. Vous pourrez découvrir nos outils, nos gestes, nos matières. Ressentir le cuir, comprendre son langage.
          </p>
          <p>
            Nous croyons que l’artisanat n’est pas un produit, mais une expérience partagée.
          </p>
        </div>

        <div className={styles.closingText}>
          <p>
            Artisanat Nihal, c’est une invitation à ralentir. À regarder, à toucher, à ressentir. C’est un hommage vivant aux choses simples, durables, vraies.
          </p>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
