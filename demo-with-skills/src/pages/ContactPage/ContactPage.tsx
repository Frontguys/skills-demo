import { type FormEvent, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { Link } from "../../components/Link/Link";
import {
	ProfileBanner,
	ProfileBannerActionIcon,
} from "../../components/ProfileBanner/ProfileBanner";
import { Textarea } from "../../components/Textarea/Textarea";
import styles from "./ContactPage.module.css";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * ContactPage — "Contact — Frontguys" (Figma node 402:367).
 * Composes the design-system components into the full page.
 */
export const ContactPage = () => {
	const [emailError, setEmailError] = useState<string | undefined>(
		"Veuillez renseigner une adresse email valide.",
	);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget;
		const email = form.elements.namedItem("email") as HTMLInputElement | null;
		if (email && !emailPattern.test(email.value)) {
			setEmailError("Veuillez renseigner une adresse email valide.");
			email.focus();
			return;
		}
		setEmailError(undefined);
	};

	return (
		<div className={styles.page}>
			<Header />

			<main id="main">
				{/* Hero */}
				<section
					className={`${styles.section} ${styles.hero}`}
					aria-labelledby="hero-title"
				>
					<p className={styles.surtitle}>Contactez-nous</p>
					<h1 id="hero-title" className={styles.h1}>
						Envoyez-nous un message.
					</h1>
					<p className={styles.subtitle}>
						Un projet, un audit, une question sur l’accessibilité ou vos design
						systems ? Dites-nous l’essentiel, nous revenons vers vous
						rapidement.
					</p>
				</section>

				{/* Contact direct */}
				<section
					className={`${styles.section} ${styles.contactDirect}`}
					aria-labelledby="direct-title"
				>
					<h2 id="direct-title" className={styles.h2}>
						Échangez avec l’un de nos experts
					</h2>
					<ProfileBanner
						title="Parlons de votre prochaine étape."
						name="Nicolas Guy"
						jobTitle="Co-fondateur, Frontguys"
						avatarAlt="Nicolas Guy, co-fondateur de Frontguys"
						action={
							<Button variant="secondary" size="medium">
								<ProfileBannerActionIcon />
								Planifiez un échange
							</Button>
						}
					/>
				</section>

				{/* Formulaire */}
				<section
					className={`${styles.section} ${styles.form}`}
					aria-labelledby="form-title"
				>
					<form className={styles.formWrapper} onSubmit={handleSubmit} noValidate>
						<h2 id="form-title" className={styles.h2}>
							Nous envoyer un message
						</h2>

						<Input
							name="firstName"
							label="Prénom"
							autoComplete="given-name"
							placeholder="exemple : Camille"
						/>
						<Input
							name="lastName"
							label="Nom"
							autoComplete="family-name"
							placeholder="exemple : Durand"
						/>
						<Input
							name="email"
							type="email"
							label="Email"
							autoComplete="email"
							defaultValue="nom.prenom@email"
							error={emailError}
							onChange={() => emailError && setEmailError(undefined)}
						/>
						<Input
							name="phone"
							type="tel"
							label="Téléphone"
							optional
							autoComplete="tel"
							placeholder="exemple : 01 23 45 67 89"
						/>
						<Input
							name="company"
							label="Entreprise"
							optional
							autoComplete="organization"
							placeholder="exemple : Frontguys"
						/>
						<Input
							name="role"
							label="Rôle"
							optional
							autoComplete="organization-title"
							placeholder="exemple : Responsable produit"
						/>
						<Textarea
							name="message"
							label="Message"
							placeholder="Parlez-nous de votre projet, vos objectifs, votre contexte…"
						/>

						<Checkbox
							name="consent"
							required
							label="J’accepte que Frontguys traite mes données pour répondre à ma demande. Vos données ne sont utilisées que pour cet échange et ne sont jamais partagées."
						/>

						<Link href="#" type="standalone">
							Lire notre politique de confidentialité
						</Link>

						<Button type="submit" variant="primary" size="medium" block>
							Envoyez votre message
						</Button>
					</form>
				</section>

				{/* Engagements + adresse */}
				<section
					className={`${styles.section} ${styles.engagements}`}
					aria-label="Engagements et adresse"
				>
					<div className={styles.cols}>
						<div className={styles.col}>
							<h2 className={styles.h2}>Nos engagements pour vous répondre</h2>
							<ul className={styles.bullets}>
								<li>→&nbsp;&nbsp;Nous vous recontactons sous 48&nbsp;h.</li>
								<li>→&nbsp;&nbsp;Premier échange sans engagement.</li>
								<li>→&nbsp;&nbsp;Vos données sont protégées.</li>
							</ul>
						</div>
						<div className={styles.col}>
							<h2 className={styles.h2}>Où nous trouver</h2>
							<address className={styles.address}>
								Frontguys
								<br />
								24 rue du Sentier
								<br />
								75002 Paris, France
							</address>
							<Link href="#" type="standalone" indicator="right">
								Voir sur la carte
							</Link>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};
