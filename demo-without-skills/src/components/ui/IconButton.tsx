import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './IconButton.css';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  /** Accessible name for the icon-only control (required for a11y). */
  'aria-label': string;
  children: ReactNode;
}

/**
 * IconButton — maps to the Figma `Button` used for social/icon actions in the footer.
 */
export function IconButton({
  variant = 'secondary',
  className = '',
  children,
  type = 'button',
  ...rest
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={`fg-icon-button fg-icon-button--${variant} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
}
