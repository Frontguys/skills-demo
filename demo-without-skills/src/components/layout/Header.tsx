import { Logotype } from '../ui/Logotype';
import { Button } from '../ui/Button';
import { Link } from '../ui/Link';
import './Header.css';

export interface HeaderNavItem {
  label: string;
  href: string;
}

export interface HeaderProps {
  navItems?: HeaderNavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

const DEFAULT_NAV: HeaderNavItem[] = [
  { label: 'Accueil', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Réalisations', href: '#' },
  { label: 'Ressources', href: '#' },
  { label: 'À propos', href: '#' },
];

/**
 * Header — maps to the Figma `header` component.
 * Renders the site region <header> with the logo, primary <nav> and a CTA.
 * Includes a skip link as required by the accessibility annotations (RGAA 12.x).
 */
export function Header({ navItems = DEFAULT_NAV, ctaLabel = 'Contact', ctaHref = '#' }: HeaderProps) {
  return (
    <header className="fg-header">
      <a className="fg-header__skip-link" href="#main-content">
        Aller au contenu
      </a>
      <div className="fg-header__inner">
        <Logotype type="accessibility" viewport="desktop" />
        <nav className="fg-header__nav" aria-label="Navigation principale">
          <ul className="fg-header__nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} type="standalone" className="fg-header__nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button variant="secondary" size="small" onClick={() => (window.location.href = ctaHref)}>
            {ctaLabel}
          </Button>
        </nav>
      </div>
    </header>
  );
}
