import styles from "@/styles/productCard.module.css";
import Image from "next/image";

type ProductProps = {
  title: string;
  category: string;
  description: string;
  material: string;
  dimensions: string;
  finish?: string;
  duration?: string;
  badge?: string;
  imageLabel: string;
};

export default function ProductCard(props: ProductProps) {
  return (
    <div className={styles.card} data-category={props.category}>
      <div className={styles.image}>
        <Image
          src={props.imageLabel}
          alt={props.imageLabel || props.title}
          width={350}
          height={220}
          className={styles.imageContent}
          style={{ objectFit: "cover" }}
        />
        {props.badge && <div className={styles.badge}>{props.badge}</div>}
      </div>
      <div className={styles.info}>
        <div className={styles.category}>{props.category}</div>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.description}>{props.description}</p>
        <div className={styles.details}>
          <div><strong>Matériau:</strong> {props.material}</div>
          <div><strong>Dimensions:</strong> {props.dimensions}</div>
          {props.finish && <div><strong>Finition:</strong> {props.finish}</div>}
          {props.duration && <div><strong>Temps:</strong> {props.duration}</div>}
        </div>
        <a href="#" className={styles.cta}>Demander un devis →</a>
      </div>
    </div>
  );
}
