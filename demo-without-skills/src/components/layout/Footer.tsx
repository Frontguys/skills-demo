import { Logotype, Link, IconButton, LinkedInIcon, YoutubeIcon } from '../ui';
import styles from './Footer.module.css';

const RESOURCE_LINKS = [
  'Guide complet de l’accessibilité numérique',
  'Nos audits d’accessibilité',
  'Pourquoi l’accessibilité numérique nous concerne-t-elle tous ?',
  'Les 4 grands principes de l’accessibilité numérique',
  'Obligations légales en accessibilité',
];

const LEGAL_LINKS = ['Mentions légales', 'Politique de confidentialité', 'Déclaration d’accessibilité'];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoSection}>
        <Logotype />
        <p className={styles.tagline}>Nous rendons le numérique accessible à tous.</p>
      </div>

      <div className={styles.linksRow}>
        <div className={styles.footerLinks}>
          <ul className={styles.linksList}>
            {RESOURCE_LINKS.map((label) => (
              <li key={label}>
                <Link href="#" type="standalone">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="https://frontguys.fr" type="standalone" indicator="right">
            Découvrez frontguys.fr
          </Link>
        </div>

        <div className={styles.socialLinks}>
          <IconButton aria-label="LinkedIn (nouvelle fenêtre)">
            <LinkedInIcon />
          </IconButton>
          <IconButton aria-label="YouTube (nouvelle fenêtre)">
            <YoutubeIcon />
          </IconButton>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.legalLinks}>
          {LEGAL_LINKS.map((label) => (
            <Link key={label} href="#" type="standalone">
              {label}
            </Link>
          ))}
        </div>
        <Link href="#" type="inline">
          © 2025 Frontguys. Tous droits réservés.
        </Link>
      </div>
    </footer>
  );
}
