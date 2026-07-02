import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { ArrowUpRightIcon } from './Icons';
import styles from './Link.module.css';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  type?: 'standalone' | 'inline';
  indicator?: 'right';
  children: ReactNode;
}

export function Link({ type = 'standalone', indicator, className, children, ...rest }: LinkProps) {
  const classes = [styles.link, styles[type], className].filter(Boolean).join(' ');
  return (
    <a className={classes} {...rest}>
      {children}
      {indicator === 'right' && <ArrowUpRightIcon />}
    </a>
  );
}
