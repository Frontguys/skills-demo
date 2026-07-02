import { Banner } from '../ui';
import nicolasGuy from '../../assets/nicolas-guy.jpg';
import styles from './ContactDirectSection.module.css';

export function ContactDirectSection() {
  return (
    <section className={styles.section} aria-labelledby="contact-direct-title">
      <h2 id="contact-direct-title" className={styles.title}>
        Échangez avec l’un de nos experts
      </h2>
      <Banner
        avatarSrc={nicolasGuy}
        avatarAlt="Nicolas Guy, co-fondateur de Frontguys"
        title="Parlons de votre prochaine étape."
        name="Nicolas Guy"
        jobTitle="Co-fondateur, Frontguys"
        showAction
      />
    </section>
  );
}
