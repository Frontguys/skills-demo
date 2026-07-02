import type { AnchorHTMLAttributes } from "react";
import { atom } from "../../atom";
import styles from "./Logotype.module.css";

export interface LogotypeProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href?: string;
}

/**
 * Frontguys brand mark, linking back to the homepage.
 */
export const Logotype = ({ href = "/", ...props }: LogotypeProps) => (
  <Logotype.Root href={href} aria-label="Frontguys, accueil" {...props}>
    <Logotype.Mark aria-hidden="true">frontguys</Logotype.Mark>
    <Logotype.Suffix>.A11Y</Logotype.Suffix>
  </Logotype.Root>
);

/**
 * Root anchor wrapping the logo mark and suffix.
 */
Logotype.Root = atom("a", styles.root);

/**
 * Script wordmark part of the logo.
 */
Logotype.Mark = atom("span", styles.mark);

/**
 * ".A11Y" suffix part of the logo.
 */
Logotype.Suffix = atom("span", styles.suffix);
