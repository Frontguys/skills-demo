import './Logotype.css';

export interface LogotypeProps {
  /** `accessibility` shows the A11Y suffix badge used across the site. */
  type?: 'default' | 'accessibility';
  viewport?: 'desktop' | 'mobile';
  href?: string;
}

/**
 * Logotype — maps to the Figma `logotype` component.
 * Renders the Frontguys wordmark, optionally with the "A11Y" accessibility badge.
 */
export function Logotype({
  type = 'accessibility',
  viewport = 'desktop',
  href = '/',
}: LogotypeProps) {
  return (
    <a className={`fg-logotype fg-logotype--${viewport}`} href={href} aria-label="Frontguys — Accueil">
      <span className="fg-logotype__word">frontguys</span>
      {type === 'accessibility' && <span className="fg-logotype__badge">.A11Y</span>}
    </a>
  );
}
