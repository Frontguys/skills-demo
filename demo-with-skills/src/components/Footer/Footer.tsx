import type { HTMLAttributes } from "react";
import { atom } from "../../atom";
import { IconButton } from "../IconButton/IconButton";
import { Link } from "../Link/Link";
import { Logotype } from "../Logotype/Logotype";
import { LinkedIn, YouTube } from "../icons/icons";
import styles from "./Footer.module.css";

const resourceLinks = [
	"Guide complet de l’accessibilité numérique",
	"Nos audits d’accessibilité",
	"Pourquoi l’accessibilité numérique nous concerne-t-elle tous ?",
	"Les 4 grands principes de l’accessibilité numérique",
	"Obligations légales en accessibilité",
];

const legalLinks = [
	"Mentions légales",
	"Politique de confidentialité",
	"Déclaration d’accessibilité",
];

/**
 * Footer — site region with brand, resource links, socials and legal notice.
 */
export const Footer = (props: HTMLAttributes<HTMLElement>) => (
	<Footer.Root {...props}>
		<div className={styles.logoSection}>
			<Logotype />
			<p className={styles.tagline}>
				Nous rendons le numérique accessible à tous.
			</p>
		</div>

		<div className={styles.main}>
			<ul className={styles.links}>
				{resourceLinks.map((label) => (
					<li key={label}>
						<Link href="#" type="standalone">
							{label}
						</Link>
					</li>
				))}
				<li>
					<Link href="#" type="standalone" indicator="right">
						Découvrir frontguys.fr
					</Link>
				</li>
			</ul>

			<div className={styles.social}>
				<IconButton
					href="#"
					variant="secondary"
					aria-label="LinkedIn (nouvelle fenêtre)"
				>
					<LinkedIn />
				</IconButton>
				<IconButton
					href="#"
					variant="secondary"
					aria-label="YouTube (nouvelle fenêtre)"
				>
					<YouTube />
				</IconButton>
			</div>
		</div>

		<div className={styles.legal}>
			<div className={styles.legalLinks}>
				{legalLinks.map((label) => (
					<Link key={label} href="#" type="standalone">
						{label}
					</Link>
				))}
			</div>
			<span className={styles.copyright}>
				© 2025 Frontguys. Tous droits réservés.
			</span>
		</div>
	</Footer.Root>
);

/**
 * Root of Footer.
 */
Footer.Root = atom("footer", styles.root);
