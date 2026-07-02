import styles from './Logotype.module.css';

export function Logotype() {
  return (
    <a className={styles.logotype} href="/" aria-label="Frontguys, accueil">
      <span className={styles.mark} aria-hidden="true">
        frontguys
      </span>
      <span className={styles.suffix}>.A11Y</span>
    </a>
  );
}
