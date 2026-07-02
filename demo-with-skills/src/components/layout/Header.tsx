import { cva } from "class-variance-authority";
import { atom, omitVariants } from "../../atom";
import { Button, Logotype } from "../ui";
import styles from "./Header.module.css";

const { root, nav, navLink, navLinkActive, skipLink } = styles;
const navLinkVariants = cva(navLink, { variants: { active: { true: navLinkActive } } });

const NAV_ITEMS = [
  { label: "Accueil", href: "#", active: true },
  { label: "Services", href: "#" },
  { label: "Audits", href: "#" },
  { label: "Ressources", href: "#" },
  { label: "À propos", href: "#" },
];

/**
 * Site header: skip link, brand logo, primary navigation and a contact CTA.
 * Identical position and content across every page (RGAA 12.2, 12.6).
 */
export const Header = () => (
  <>
    <Header.SkipLink href="#main-content">Aller au contenu</Header.SkipLink>
    <Header.Root>
      <Logotype />
      <Header.Nav aria-label="Navigation principale">
        {NAV_ITEMS.map((item) => (
          <Header.NavLink
            key={item.label}
            href={item.href}
            active={item.active}
            aria-current={item.active ? "page" : undefined}
          >
            {item.label}
          </Header.NavLink>
        ))}
        <Button variant="secondary">Contact</Button>
      </Header.Nav>
    </Header.Root>
  </>
);

/** `<header>` landmark wrapping the logo and navigation. */
Header.Root = atom("header", root);
/** `<nav>` landmark for the primary navigation links. */
Header.Nav = atom("nav", nav);
/** Individual navigation link, `active` underlines the current page. */
Header.NavLink = atom("a", navLinkVariants, omitVariants("active"));
/** Visually-hidden-until-focused "skip to content" link. */
Header.SkipLink = atom("a", skipLink);
