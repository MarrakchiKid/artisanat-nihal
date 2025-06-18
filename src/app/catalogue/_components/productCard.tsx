import styles from "@/styles/productCard.module.css";

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
        <div className={styles.imageLabel}>{props.imageLabel}</div>
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
