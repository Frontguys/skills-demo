import { atom } from "../../atom";
import { IconButton, Link, LinkedInIcon, Logotype, YoutubeIcon } from "../ui";
import styles from "./Footer.module.css";

const { root, logoSection, tagline, linksRow, footerLinks, linksList, socialLinks, bottomRow, legalLinks } = styles;

const RESOURCE_LINKS = [
  "Guide complet de l’accessibilité numérique",
  "Nos audits d’accessibilité",
  "Pourquoi l’accessibilité numérique nous concerne-t-elle tous ?",
  "Les 4 grands principes de l’accessibilité numérique",
  "Obligations légales en accessibilité",
];

const LEGAL_LINKS = ["Mentions légales", "Politique de confidentialité", "Déclaration d’accessibilité"];

/**
 * Site footer: brand tagline, resource/legal link groups and social icon links.
 * Social icon links carry an explicit `aria-label` (RGAA 6.1, 6.2).
 */
export const Footer = () => (
  <Footer.Root>
    <Footer.LogoSection>
      <Logotype />
      <Footer.Tagline>Nous rendons le numérique accessible à tous.</Footer.Tagline>
    </Footer.LogoSection>

    <Footer.LinksRow>
      <Footer.FooterLinks>
        <Footer.LinksList>
          {RESOURCE_LINKS.map((label) => (
            <li key={label}>
              <Link href="#">
                {label}
              </Link>
            </li>
          ))}
        </Footer.LinksList>
        <Link href="https://frontguys.fr" indicator="right">
          Découvrez frontguys.fr
        </Link>
      </Footer.FooterLinks>

      <Footer.SocialLinks>
        <IconButton aria-label="LinkedIn (nouvelle fenêtre)">
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="YouTube (nouvelle fenêtre)">
          <YoutubeIcon />
        </IconButton>
      </Footer.SocialLinks>
    </Footer.LinksRow>

    <Footer.BottomRow>
      <Footer.LegalLinks>
        {LEGAL_LINKS.map((label) => (
          <Link key={label} href="#">
            {label}
          </Link>
        ))}
      </Footer.LegalLinks>
      <Link href="#" variant="inline">
        © 2025 Frontguys. Tous droits réservés.
      </Link>
    </Footer.BottomRow>
  </Footer.Root>
);

/** `<footer>` landmark wrapping the whole section. */
Footer.Root = atom("footer", root);
/** Row pairing the logo with the brand tagline. */
Footer.LogoSection = atom("div", logoSection);
Footer.Tagline = atom("p", tagline);
/** Row pairing the link columns with the social icon links. */
Footer.LinksRow = atom("div", linksRow);
Footer.FooterLinks = atom("div", footerLinks);
Footer.LinksList = atom("ul", linksList);
Footer.SocialLinks = atom("div", socialLinks);
/** Bottom row with legal links and copyright notice. */
Footer.BottomRow = atom("div", bottomRow);
Footer.LegalLinks = atom("div", legalLinks);
