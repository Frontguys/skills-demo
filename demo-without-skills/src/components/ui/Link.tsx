import type { AnchorHTMLAttributes, ReactNode } from 'react';
import './Link.css';

export type LinkType = 'standalone' | 'inline';
export type LinkIndicator = 'none' | 'right';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** `standalone` = block link, `inline` = link inside running text. */
  type?: LinkType;
  /** Trailing arrow indicator (e.g. "Voir sur la carte →"). */
  indicator?: LinkIndicator;
  children: ReactNode;
}

/**
 * Link — maps to the Figma `link` component (type + indicator props).
 * The arrow indicator is decorative and hidden from assistive tech.
 */
export function Link({
  type = 'standalone',
  indicator = 'none',
  className = '',
  children,
  ...rest
}: LinkProps) {
  return (
    <a
      className={`fg-link fg-link--${type} ${className}`.trim()}
      {...rest}
    >
      <span className="fg-link__label">{children}</span>
      {indicator === 'right' && (
        <span className="fg-link__indicator" aria-hidden="true">
          ↗
        </span>
      )}
    </a>
  );
}
