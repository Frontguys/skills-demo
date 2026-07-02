import { Logotype, Button } from '../ui';
import styles from './Header.module.css';

const NAV_ITEMS = [
  { label: 'Accueil', href: '#', active: true },
  { label: 'Services', href: '#' },
  { label: 'Audits', href: '#' },
  { label: 'Ressources', href: '#' },
  { label: 'À propos', href: '#' },
];

export function Header() {
  return (
    <>
      <a className={styles.skipLink} href="#main-content">
        Aller au contenu
      </a>
      <header className={styles.header}>
        <Logotype />
        <nav className={styles.nav} aria-label="Navigation principale">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              className={[styles.navLink, item.active && styles.navLinkActive].filter(Boolean).join(' ')}
              href={item.href}
              aria-current={item.active ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
          <Button variant="secondary">Contact</Button>
        </nav>
      </header>
    </>
  );
}
