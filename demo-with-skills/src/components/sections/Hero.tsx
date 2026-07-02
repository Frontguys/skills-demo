import { atom } from "../../atom";
import styles from "./Hero.module.css";

/**
 * Page hero: decorative eyebrow, the page's single `<h1>`, and an intro paragraph.
 */
export const Hero = () => (
  <Hero.Root aria-labelledby="hero-title">
    <Hero.Eyebrow>Contactez-nous</Hero.Eyebrow>
    <Hero.Title id="hero-title">Envoyez-nous un message.</Hero.Title>
    <Hero.Subtitle>
      Un projet, un audit, une question sur l’accessibilité ou vos design systems ? Dites-nous l’essentiel, nous
      revenons vers vous rapidement.
    </Hero.Subtitle>
  </Hero.Root>
);

/** `<section>` landmark wrapping the hero content. */
Hero.Root = atom("section", styles.root);
/** Decorative surtitle, not a heading (RGAA 9.1). */
Hero.Eyebrow = atom("p", styles.eyebrow);
/** The page's unique `<h1>`. */
Hero.Title = atom("h1", styles.title);
Hero.Subtitle = atom("p", styles.subtitle);
