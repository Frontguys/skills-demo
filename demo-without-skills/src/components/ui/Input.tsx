import { useId } from 'react';
import type { InputHTMLAttributes } from 'react';
import './Input.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  label: string;
  /** Marks the field visually and via aria as optional. */
  optional?: boolean;
  /** Error message; when set the field renders its invalid state. */
  error?: string;
}

/**
 * Input — maps to the Figma `input` component, including the error state.
 * Wires up label/for, aria-required, aria-invalid and aria-describedby per the
 * accessibility annotations (RGAA 11.x / WCAG 3.3.1).
 */
export function Input({
  label,
  optional = false,
  error,
  required,
  className = '',
  ...rest
}: InputProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const hasError = Boolean(error);

  return (
    <div className={`fg-input ${hasError ? 'fg-input--error' : ''} ${className}`.trim()}>
      <label className="fg-input__label" htmlFor={id}>
        {label}
        {optional && <span className="fg-input__optional"> (optionnel)</span>}
      </label>
      <input
        id={id}
        className="fg-input__control"
        required={required}
        aria-required={required || undefined}
        aria-invalid={hasError || undefined}
        aria-describedby={hasError ? errorId : undefined}
        {...rest}
      />
      {hasError && (
        <p className="fg-input__error" id={errorId} role="alert">
          <span className="fg-input__error-icon" aria-hidden="true">
            ⊘
          </span>
          {error}
        </p>
      )}
    </div>
  );
}
