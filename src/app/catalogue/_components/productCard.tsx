import styles from "@/styles/productCard.module.css";
import Image from "next/image";

type ProductProps = {
  id: number;
  title: string;
  category: string;
  description: string;
  material: string;
  dimensions: string;
  finish?: string;
  duration?: string;
  badge?: string;
  imageLabel: string;
  images?: string[];
};

const isValidImage = (src: string) =>
  src?.startsWith("http://") || src?.startsWith("https://") || src?.startsWith("/");

export default function ProductCard(props: ProductProps) {
  const imageSrc =
    props.images?.[0] && isValidImage(props.images[0])
      ? props.images[0]
      : isValidImage(props.imageLabel)
      ? props.imageLabel
      : "/placeholder.jpeg";

  return (
    <div className={styles.card} data-category={props.category}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={props.title}
          width={400}
          height={260}
          className={styles.image}
        />
        {props.badge && <div className={styles.badge}>{props.badge}</div>}
      </div>

      <div className={styles.info}>
        <div className={styles.category}>{props.category}</div>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.description}>{props.description}</p>

        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Matériau:</span>
            <span className={styles.detailValue}>{props.material}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Dimensions:</span>
            <span className={styles.detailValue}>{props.dimensions}</span>
          </div>
          {props.finish && (
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Finition:</span>
              <span className={styles.detailValue}>{props.finish}</span>
            </div>
          )}
          {props.duration && (
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Temps:</span>
              <span className={styles.detailValue}>{props.duration}</span>
            </div>
          )}
        </div>

        <a href={`/catalogue/${props.id}`} className={styles.cta}>
          Demander un devis →
        </a>
      </div>
    </div>
  );
}