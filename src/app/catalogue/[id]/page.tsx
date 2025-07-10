import Image from 'next/image'
import styles from '@/styles/productDetail.module.css'
import { prisma } from '../../../../lib/prisma'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ImageCarousel from '../_components/imageCarousel'

export default async function ProductPage(
  props: { params: Promise<{ id: string }> }
) {
  const { id } = await props.params;
  
  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
  });

  if (!product) {
    return <div>Produit introuvable</div>
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.productDetail}>
            <div className={styles.productImages}>
              <ImageCarousel
                images={product.images && product.images.length > 0
                  ? product.images
                  : [product.imageLabel]}
                title={product.title}
              />
            </div>

            <div className={styles.productInfo}>
              <div className={styles.productCategory}>{product.category}</div>
              <h1 className={styles.productTitle}>{product.title}</h1>
              <p className={styles.productDescription}>{product.description}</p>

              <div className={styles.productDetails}>
                <div className={styles.detailItem}>
                  <span>Matériau :</span>
                  <span className={styles.detailValue}>{product.material}</span>
                </div>
                <div className={styles.detailItem}>
                  <span>Dimensions :</span>
                  <span className={styles.detailValue}>{product.dimensions}</span>
                </div>
                <div className={styles.detailItem}>
                  <span>Finition :</span>
                  <span className={styles.detailValue}>{product.finish}</span>
                </div>
                <div className={styles.detailItem}>
                  <span>Durée :</span>
                  <span className={styles.detailValue}>{product.duration}</span>
                </div>
              </div>

              <a href="/contact" className={styles.productCta}>Demander un devis →</a>
            </div>
          </section>
        </div>

        <section className={styles.storySection}>
          <h2>Son histoire</h2>
          <p>
            Alyah — qui évoque en arabe l’idée d’élévation, de noblesse et de lumière — est une création qui transcende le simple accessoire pour devenir une œuvre d’art vivante. Ce sac au design minimaliste mais profondément ancré dans les codes artisanaux marocains rend hommage aux femmes puissantes et élégantes, ainsi qu’aux mains expertes qui le façonnent. Entre ses lignes pures, son cuir finement travaillé et sa texture inspirée des motifs traditionnels, Alyah porte l’écho d’un passé riche et d’un avenir lumineux. Destiné aux lieux d’exception et aux âmes sensibles à l’authenticité, Alyah incarne l’art de vivre marocain dans ce qu’il a de plus noble.          
          </p>
        </section>
                
        <section className={styles.valuesSection}>
          <h2>Nos Engagements, Notre Promesse</h2>
          <ul>
            <li><p>Artisanat d'excellence : Chaque pièce est le fruit d'un savoir-faire ancestral marocain, façonné à la main dans nos ateliers à Marrakech, garantissant une qualité incomparable.</p></li>
            <li><p>Matériaux nobles & durables : Nous privilégions des matières premières de qualité supérieure, issues de circuits courts pour une traçabilité irréprochable et un impact réduit.</p></li>
            <li><p>Production responsable : Notre démarche est guidée par les principes de responsabilité sociale et environnementale, pour un développement durable et éthique.</p></li>
            <li><p>Expérience client sur mesure : Au-delà de la création, nous assurons une livraison soignée et un service personnalisé, à la hauteur de vos attentes les plus exigeantes.</p></li>
          </ul>
        </section>

        <section className={styles.partnersSection}>
          <h2>Ils Nous Font Confiance</h2>
          <p>Nos créations, ambassadrices d'élégance, sont choyées par des établissements des plus prestigieux à travers le globe. Nous sommes fiers de collaborer avec des hôtels de renom, des spas exclusifs et des boutiques d'exception, partageant ainsi notre vision du luxe authentique et intemporel.</p>
          <div className={styles.partnerLogos}>
            
          </div>
        </section>

        <section className={styles.bulkSection}>
          <h2>Partenariats & Créations Sur Mesure</h2>
          <p>Pour vos projets d'envergure, nos ateliers d'exception sont à votre entière disposition. Nous concevons des commandes sur mesure pour les hôtels, concept stores et événements spéciaux, avec la possibilité d'adapter les formats, les nuances et même d'y apposer votre signature exclusive. Laissez-nous transformer votre vision en une réalité tangible et raffinée.</p>
          <a href="/contact" className={styles.bulkCta}>Faire une demande personnalisée →</a>
        </section>
      </main>
      <Footer />
    </>
  )
}