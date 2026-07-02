import { atom } from "../../atom";
import { Banner } from "../ui";
import nicolasGuy from "../../assets/nicolas-guy.jpg";
import styles from "./ContactDirectSection.module.css";

/**
 * Direct-contact section introducing a Frontguys expert, with a booking call-to-action.
 */
export const ContactDirectSection = () => (
  <ContactDirectSection.Root aria-labelledby="contact-direct-title">
    <ContactDirectSection.Title id="contact-direct-title">
      Échangez avec l’un de nos experts
    </ContactDirectSection.Title>
    <Banner
      avatarSrc={nicolasGuy}
      avatarAlt="Nicolas Guy, co-fondateur de Frontguys"
      title="Parlons de votre prochaine étape."
      name="Nicolas Guy"
      jobTitle="Co-fondateur, Frontguys"
      showAction
    />
  </ContactDirectSection.Root>
);

ContactDirectSection.Root = atom("section", styles.root);
ContactDirectSection.Title = atom("h2", styles.title);
