import { useState } from 'react';
import type { FormEvent } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Banner } from '../components/ui/Banner';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Checkbox } from '../components/ui/Checkbox';
import { Link } from '../components/ui/Link';
import { Button } from '../components/ui/Button';
import './ContactPage.css';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  message: string;
  consent: boolean;
}

const EMPTY_FORM: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  role: '',
  message: '',
  consent: false,
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [emailError, setEmailError] = useState<string | undefined>(
    'Veuillez renseigner une adresse email valide.',
  );

  const update =
    <K extends keyof FormState>(key: K) =>
    (event: { target: { value: string; checked?: boolean } }) => {
      const { value, checked } = event.target;
      setForm((prev) => ({
        ...prev,
        [key]: typeof checked === 'boolean' && key === 'consent' ? checked : value,
      }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValidEmail(form.email)) {
      setEmailError('Veuillez renseigner une adresse email valide.');
      return;
    }
    setEmailError(undefined);
    // Submission handling would go here.
  };

  return (
    <div className="fg-page">
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="fg-section fg-section--hero">
          <div className="fg-section__inner fg-hero">
            <p className="text-surtitle">Contactez-nous</p>
            <h1 className="text-heading2">Envoyez-nous un message.</h1>
            <p className="text-subtitle fg-hero__lead">
              Un projet, un audit, une question sur l’accessibilité ou vos design systems ?
              Dites-nous l’essentiel, nous revenons vers vous rapidement.
            </p>
          </div>
        </section>

        {/* Contact direct */}
        <section className="fg-section fg-section--alt">
          <div className="fg-section__inner">
            <h2 className="text-heading3">Échangez avec l’un de nos experts</h2>
            <Banner
              state="contact"
              viewport="desktop"
              title="Parlons de votre prochaine étape."
              name="Nicolas Guy"
              jobTitle="Co-fondateur, Frontguys"
              avatarAlt="Nicolas Guy, co-fondateur de Frontguys"
              showAction
            />
          </div>
        </section>

        {/* Formulaire */}
        <section className="fg-section">
          <div className="fg-section__inner fg-form-wrapper">
            <form className="fg-form" onSubmit={handleSubmit} noValidate>
              <h2 className="text-heading3">Nous envoyer un message</h2>

              <Input
                label="Prénom"
                required
                autoComplete="given-name"
                placeholder="exemple : Camille"
                value={form.firstName}
                onChange={update('firstName')}
              />
              <Input
                label="Nom"
                required
                autoComplete="family-name"
                placeholder="exemple : Durand"
                value={form.lastName}
                onChange={update('lastName')}
              />
              <Input
                label="Email"
                type="email"
                required
                autoComplete="email"
                placeholder="nom.prenom@email"
                value={form.email}
                onChange={update('email')}
                error={emailError}
              />
              <Input
                label="Téléphone"
                type="tel"
                optional
                autoComplete="tel"
                placeholder="exemple : 01 23 45 67 89"
                value={form.phone}
                onChange={update('phone')}
              />
              <Input
                label="Entreprise"
                optional
                autoComplete="organization"
                placeholder="exemple : Frontguys"
                value={form.company}
                onChange={update('company')}
              />
              <Input
                label="Rôle"
                optional
                autoComplete="organization-title"
                placeholder="exemple : Responsable produit"
                value={form.role}
                onChange={update('role')}
              />
              <Textarea
                label="Message"
                required
                placeholder="Parlez-nous de votre projet, vos objectifs, votre contexte…"
                value={form.message}
                onChange={update('message')}
              />

              <Checkbox
                required
                checked={form.consent}
                onChange={update('consent')}
                label="J’accepte que Frontguys traite mes données pour répondre à ma demande. Vos données ne sont pas cédées à des tiers et ne servent qu’à traiter votre demande. Vous pouvez retirer votre consentement ou demander leur suppression à tout moment."
              />

              <Link href="#" type="standalone">
                Lire notre politique de confidentialité
              </Link>

              <Button type="submit" variant="primary" size="medium" className="fg-form__submit">
                Envoyez votre message
              </Button>
            </form>
          </div>
        </section>

        {/* Engagements & adresse */}
        <section className="fg-section fg-section--alt">
          <div className="fg-section__inner fg-cols">
            <div className="fg-col">
              <h2 className="text-heading3">Nos engagements pour vous répondre</h2>
              <ul className="fg-bullets">
                <li>Nous vous recontactons sous 48 h.</li>
                <li>Premier échange sans engagement.</li>
                <li>Vos données sont protégées.</li>
              </ul>
            </div>
            <div className="fg-col">
              <h2 className="text-heading3">Où nous trouver</h2>
              <address className="fg-address">
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
}
