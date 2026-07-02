import { forwardRef, useId } from 'react';
import type { InputHTMLAttributes } from 'react';
import { AlertIcon } from './Icons';
import styles from './Input.module.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, required, className, ...rest },
  ref,
) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className={styles.field}>
      <label className={[styles.label, error && styles.invalidLabel].filter(Boolean).join(' ')} htmlFor={id}>
        {label}
      </label>
      {error && (
        <span className={styles.errorBadge}>
          <AlertIcon />
          Erreur
        </span>
      )}
      <input
        ref={ref}
        id={id}
        className={[styles.input, error && styles.invalid, className].filter(Boolean).join(' ')}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
      {error && (
        <p id={errorId} className={styles.errorMessage} role="alert">
          {error}
        </p>
      )}
    </div>
  );
});
