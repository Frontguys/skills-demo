import { Logotype } from '../ui/Logotype';
import { Link } from '../ui/Link';
import { IconButton } from '../ui/IconButton';
import './Footer.css';

const RESOURCE_LINKS = [
  'Guide complet de l’accessibilité numérique',
  'Nos audits d’accessibilité',
  'Pourquoi l’accessibilité numérique nous concerne-t-elle tous ?',
  'Les 4 grands principes de l’accessibilité numérique',
  'Obligations légales en accessibilité',
];

const LEGAL_LINKS = [
  'Mentions légales',
  'Politique de confidentialité',
  'Déclaration d’accessibilité',
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H21v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H13z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.4a2.5 2.5 0 0 0-1.8 1.8C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.4a2.5 2.5 0 0 0 1.8-1.8C23 15.2 23 12 23 12zM9.8 15.3V8.7l5.7 3.3z" />
    </svg>
  );
}

/**
 * Footer — maps to the Figma `footer` component.
 * Renders the <footer> region with logo, resource links, social icon buttons and
 * legal links. Social buttons expose accessible names via aria-label (RGAA 12.6, 6.1).
 */
export function Footer() {
  return (
    <footer className="fg-footer">
      <div className="fg-footer__inner">
        <div className="fg-footer__logo-section">
          <Logotype type="accessibility" viewport="desktop" />
          <p className="fg-footer__tagline">Nous rendons le numérique accessible à tous.</p>
        </div>

        <div className="fg-footer__main">
          <ul className="fg-footer__links">
            {RESOURCE_LINKS.map((label) => (
              <li key={label}>
                <Link href="#" type="standalone">
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#" type="standalone" indicator="right">
                Découvrir frontguys.fr
              </Link>
            </li>
          </ul>

          <div className="fg-footer__social">
            <IconButton variant="secondary" aria-label="Frontguys sur LinkedIn">
              <LinkedInIcon />
            </IconButton>
            <IconButton variant="secondary" aria-label="Frontguys sur YouTube">
              <YouTubeIcon />
            </IconButton>
          </div>
        </div>

        <div className="fg-footer__legal">
          <ul className="fg-footer__legal-links">
            {LEGAL_LINKS.map((label) => (
              <li key={label}>
                <Link href="#" type="standalone">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="fg-footer__copyright">© 2025 Frontguys. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
