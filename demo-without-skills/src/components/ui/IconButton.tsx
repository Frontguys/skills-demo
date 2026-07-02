import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './IconButton.module.css';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'secondary';
  'aria-label': string;
  children: ReactNode;
}

export function IconButton({ className, type = 'button', children, ...rest }: IconButtonProps) {
  const classes = [styles.iconButton, className].filter(Boolean).join(' ');
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
