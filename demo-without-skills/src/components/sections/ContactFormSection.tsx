import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { Input, Textarea, Checkbox, Link, Button } from '../ui';
import styles from './ContactFormSection.module.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  message: string;
  consent: boolean;
}

const INITIAL_VALUES: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  role: '',
  message: '',
  consent: false,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = Partial<Record<keyof FormValues, string>>;

export function ContactFormSection() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);

  const fieldRefs = {
    firstName: firstNameRef,
    lastName: lastNameRef,
    email: emailRef,
    message: messageRef,
    consent: consentRef,
  } as const;

  function updateValue<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): FieldErrors {
    const nextErrors: FieldErrors = {};

    if (!values.firstName.trim()) nextErrors.firstName = 'Veuillez renseigner votre prénom.';
    if (!values.lastName.trim()) nextErrors.lastName = 'Veuillez renseigner votre nom.';
    if (!values.email.trim()) {
      nextErrors.email = 'Veuillez renseigner votre email.';
    } else if (!EMAIL_PATTERN.test(values.email.trim())) {
      nextErrors.email = 'Veuillez renseigner une adresse email valide.';
    }
    if (!values.message.trim()) nextErrors.message = 'Veuillez renseigner votre message.';
    if (!values.consent) nextErrors.consent = 'Veuillez accepter la politique de confidentialité.';

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(false);
    const nextErrors = validate();
    setErrors(nextErrors);

    const firstInvalidField = (Object.keys(fieldRefs) as (keyof typeof fieldRefs)[]).find(
      (field) => nextErrors[field],
    );

    if (firstInvalidField) {
      fieldRefs[firstInvalidField].current?.focus();
      return;
    }

    setSubmitted(true);
    setValues(INITIAL_VALUES);
  }

  return (
    <section className={styles.section} aria-labelledby="form-title">
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <h2 id="form-title" className={styles.title}>
          Nous envoyer un message
        </h2>

        <Input
          ref={firstNameRef}
          label="Prénom"
          placeholder="exemple : Camille"
          autoComplete="given-name"
          required
          value={values.firstName}
          onChange={(e) => updateValue('firstName', e.target.value)}
          error={errors.firstName}
        />

        <Input
          ref={lastNameRef}
          label="Nom"
          placeholder="exemple : Durand"
          autoComplete="family-name"
          required
          value={values.lastName}
          onChange={(e) => updateValue('lastName', e.target.value)}
          error={errors.lastName}
        />

        <Input
          ref={emailRef}
          label="Email"
          type="email"
          placeholder="exemple : camille.durand@email.fr"
          autoComplete="email"
          required
          value={values.email}
          onChange={(e) => updateValue('email', e.target.value)}
          error={errors.email}
        />

        <Input
          label="Téléphone (optionnel)"
          type="tel"
          placeholder="exemple : 01 23 45 67 89"
          autoComplete="tel"
          value={values.phone}
          onChange={(e) => updateValue('phone', e.target.value)}
        />

        <Input
          label="Entreprise (optionnel)"
          placeholder="exemple : Frontguys"
          autoComplete="organization"
          value={values.company}
          onChange={(e) => updateValue('company', e.target.value)}
        />

        <Input
          label="Rôle (optionnel)"
          placeholder="exemple : Responsable produit"
          autoComplete="organization-title"
          value={values.role}
          onChange={(e) => updateValue('role', e.target.value)}
        />

        <Textarea
          ref={messageRef}
          label="Message"
          placeholder="Parlez-nous de votre projet, vos objectifs, votre contexte…"
          required
          value={values.message}
          onChange={(e) => updateValue('message', e.target.value)}
          error={errors.message}
        />

        <Checkbox
          ref={consentRef}
          required
          checked={values.consent}
          onChange={(e) => updateValue('consent', e.target.checked)}
          label={
            <span className={styles.consentText}>
              J’accepte que Frontguys traite mes données pour répondre à ma demande. Vos données ne sont utilisées
              que pour cette prise de contact et ne sont jamais cédées à des tiers.
            </span>
          }
        />
        {errors.consent && (
          <p role="alert" style={{ color: 'var(--foreground-error)', fontSize: 'var(--font-size-caption2)', margin: 0 }}>
            {errors.consent}
          </p>
        )}

        <Link href="#" type="standalone">
          Lire notre politique de confidentialité
        </Link>

        <Button type="submit" variant="primary" fullWidth>
          Envoyez votre message
        </Button>

        {submitted && (
          <p className={styles.formStatus} role="status">
            Merci, votre message a bien été envoyé ! Nous revenons vers vous sous 48 h.
          </p>
        )}
      </form>
    </section>
  );
}
