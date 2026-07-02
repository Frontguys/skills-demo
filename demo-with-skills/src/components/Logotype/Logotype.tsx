import type { AnchorHTMLAttributes } from "react";
import { atom } from "../../atom";
import styles from "./Logotype.module.css";

interface LogotypeProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	/** Accessible name for the brand link. */
	label?: string;
}

/**
 * Logotype — Frontguys brand wordmark, rendered as a home link.
 */
export const Logotype = ({
	href = "#",
	label = "Frontguys — accueil",
	...props
}: LogotypeProps) => (
	<Logotype.Root href={href} aria-label={label} {...props}>
		<Logotype.Word>frontguys</Logotype.Word>
		<Logotype.Suffix>.A11Y</Logotype.Suffix>
	</Logotype.Root>
);

/**
 * Root of Logotype.
 */
Logotype.Root = atom("a", styles.root);

/**
 * Brand word.
 */
Logotype.Word = atom("span", styles.word);

/**
 * Brand suffix (accessibility mark).
 */
Logotype.Suffix = atom("span", styles.suffix);
