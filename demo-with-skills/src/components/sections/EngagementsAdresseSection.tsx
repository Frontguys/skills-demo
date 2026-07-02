import { atom } from "../../atom";
import { Link } from "../ui";
import styles from "./EngagementsAdresseSection.module.css";

const { root, cols, col, title, bullets, address } = styles;

const ENGAGEMENTS = [
  "Nous vous recontactons sous 48 h.",
  "Premier échange sans engagement.",
  "Vos données sont protégées.",
];

/**
 * Two-column section: response commitments and office address, closing the contact page.
 */
export const EngagementsAdresseSection = () => (
  <EngagementsAdresseSection.Root>
    <EngagementsAdresseSection.Cols>
      <EngagementsAdresseSection.Col aria-labelledby="engagements-title">
        <EngagementsAdresseSection.Title id="engagements-title">
          Nos engagements pour vous répondre
        </EngagementsAdresseSection.Title>
        <EngagementsAdresseSection.Bullets>
          {ENGAGEMENTS.map((item) => (
            <li key={item}>→ {item}</li>
          ))}
        </EngagementsAdresseSection.Bullets>
      </EngagementsAdresseSection.Col>
      <EngagementsAdresseSection.Col aria-labelledby="adresse-title">
        <EngagementsAdresseSection.Title id="adresse-title">Où nous trouver</EngagementsAdresseSection.Title>
        <EngagementsAdresseSection.Address>
          <p>Frontguys</p>
          <p>24 rue du Sentier</p>
          <p>75002 Paris, France</p>
        </EngagementsAdresseSection.Address>
        <Link href="https://www.google.com/maps" indicator="right">
          Voir sur la carte
        </Link>
      </EngagementsAdresseSection.Col>
    </EngagementsAdresseSection.Cols>
  </EngagementsAdresseSection.Root>
);

EngagementsAdresseSection.Root = atom("section", root);
EngagementsAdresseSection.Cols = atom("div", cols);
EngagementsAdresseSection.Col = atom("div", col);
EngagementsAdresseSection.Title = atom("h2", title);
EngagementsAdresseSection.Bullets = atom("ul", bullets);
EngagementsAdresseSection.Address = atom("address", address);
