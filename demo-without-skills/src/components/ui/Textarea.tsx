import { useId } from 'react';
import type { TextareaHTMLAttributes } from 'react';
import './Textarea.css';

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> {
  label: string;
  optional?: boolean;
  error?: string;
}

/**
 * Textarea — maps to the Figma `textArea` component.
 */
export function Textarea({
  label,
  optional = false,
  error,
  required,
  rows = 4,
  className = '',
  ...rest
}: TextareaProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const hasError = Boolean(error);

  return (
    <div className={`fg-textarea ${hasError ? 'fg-textarea--error' : ''} ${className}`.trim()}>
      <label className="fg-textarea__label" htmlFor={id}>
        {label}
        {optional && <span className="fg-textarea__optional"> (optionnel)</span>}
      </label>
      <textarea
        id={id}
        className="fg-textarea__control"
        rows={rows}
        required={required}
        aria-required={required || undefined}
        aria-invalid={hasError || undefined}
        aria-describedby={hasError ? errorId : undefined}
        {...rest}
      />
      {hasError && (
        <p className="fg-textarea__error" id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
