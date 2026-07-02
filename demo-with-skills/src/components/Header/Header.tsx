import type { HTMLAttributes } from "react";
import { atom } from "../../atom";
import { Button } from "../Button/Button";
import { Logotype } from "../Logotype/Logotype";
import styles from "./Header.module.css";

interface NavItem {
	label: string;
	href: string;
	current?: boolean;
}

interface HeaderProps extends HTMLAttributes<HTMLElement> {
	/** Primary navigation entries. */
	items?: NavItem[];
	/** Label of the trailing call-to-action button. */
	ctaLabel?: string;
	/** id of the main content target for the skip link. */
	mainId?: string;
}

const defaultItems: NavItem[] = [
	{ label: "Expertise", href: "#" },
	{ label: "Design System", href: "#" },
	{ label: "Accessibilité", href: "#" },
	{ label: "Ressources", href: "#" },
	{ label: "À propos", href: "#" },
	{ label: "Contact", href: "#", current: true },
];

/**
 * Header — site region with brand, primary navigation and a skip link.
 * Identical across pages (RGAA 12.2, 12.6).
 */
export const Header = ({
	items = defaultItems,
	ctaLabel = "Prendre rendez-vous",
	mainId = "main",
	...props
}: HeaderProps) => (
	<Header.Root {...props}>
		<a className={styles.skipLink} href={`#${mainId}`}>
			Aller au contenu
		</a>
		<Logotype />
		<nav className={styles.nav} aria-label="Navigation principale">
			<ul className={styles.list}>
				{items.map((item) => (
					<li key={item.label}>
						<a
							className={styles.item}
							href={item.href}
							aria-current={item.current ? "page" : undefined}
						>
							{item.label}
						</a>
					</li>
				))}
			</ul>
			<Button variant="secondary" size="small">
				{ctaLabel}
			</Button>
		</nav>
	</Header.Root>
);

/**
 * Root of Header.
 */
Header.Root = atom("header", styles.root);
