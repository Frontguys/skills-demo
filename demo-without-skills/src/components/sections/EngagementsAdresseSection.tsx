import { Link } from '../ui';
import styles from './EngagementsAdresseSection.module.css';

const ENGAGEMENTS = [
  'Nous vous recontactons sous 48 h.',
  'Premier échange sans engagement.',
  'Vos données sont protégées.',
];

export function EngagementsAdresseSection() {
  return (
    <section className={styles.section}>
      <div className={styles.cols}>
        <div className={styles.col} aria-labelledby="engagements-title">
          <h2 id="engagements-title" className={styles.title}>
            Nos engagements pour vous répondre
          </h2>
          <ul className={styles.bullets}>
            {ENGAGEMENTS.map((item) => (
              <li key={item}>→ {item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.col} aria-labelledby="adresse-title">
          <h2 id="adresse-title" className={styles.title}>
            Où nous trouver
          </h2>
          <address className={styles.address}>
            <p>Frontguys</p>
            <p>24 rue du Sentier</p>
            <p>75002 Paris, France</p>
          </address>
          <Link href="https://www.google.com/maps" type="standalone" indicator="right">
            Voir sur la carte
          </Link>
        </div>
      </div>
    </section>
  );
}
