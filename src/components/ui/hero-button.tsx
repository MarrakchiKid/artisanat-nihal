import { cva } from 'class-variance-authority';
import styles from '@/styles/button.module.css';
import clsx from 'clsx';

const button = cva(styles.base, {
  variants: {
    variant: {
      base: styles.base,
      hero: styles.hero,
    },
  },
  defaultVariants: {
    variant: 'base',
  },
});



type ButtonProps = {
  children: React.ReactNode;
  variant?: 'base' | 'hero';
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, variant, className, onClick }: ButtonProps) {
  return (
    <button className={clsx(button({ variant }), className)} onClick={onClick}>
      {children}
    </button>
  );
}