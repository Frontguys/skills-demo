import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

/**
 * Button — maps to the Figma `Button` component (variant / size props).
 */
export function Button({
  variant = 'primary',
  size = 'medium',
  className = '',
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`fg-button fg-button--${variant} fg-button--${size} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
}
