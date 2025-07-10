'use client';

import Image from 'next/image';
import styles from '@/styles/productDetail.module.css';
import { useState } from 'react';

type Props = {
  images: string[];
  title: string;
};

export default function ImageCarousel({ images, title }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = (index: number) => {
    setCurrentIndex(index);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.mainImageWrapper}>
        <button className={styles.navLeft} onClick={prevImage}>←</button>
        <Image
          src={images[currentIndex]}
          alt={`${title} - vue ${currentIndex + 1}`}
          width={600}
          height={600}
          className={styles.mainImage}
        />
        <button className={styles.navRight} onClick={nextImage}>→</button>
      </div>

      <div className={styles.thumbnailRow}>
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`${styles.thumbnailBtn} ${i === currentIndex ? styles.active : ''}`}
          >
            <Image
              src={img}
              alt={`Miniature ${i + 1}`}
              width={80}
              height={80}
              className={styles.thumbnail}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
