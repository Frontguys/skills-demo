import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <p className={styles.eyebrow}>Contactez-nous</p>
      <h1 id="hero-title" className={styles.title}>
        Envoyez-nous un message.
      </h1>
      <p className={styles.subtitle}>
        Un projet, un audit, une question sur l’accessibilité ou vos design systems ? Dites-nous l’essentiel, nous
        revenons vers vous rapidement.
      </p>
    </section>
  );
}
