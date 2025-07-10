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
      </main>
      <Footer />
    </>
  )
}