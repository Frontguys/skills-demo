import { forwardRef, useId } from 'react';
import type { TextareaHTMLAttributes } from 'react';
import inputStyles from './Input.module.css';

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, required, className, rows = 5, ...rest },
  ref,
) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className={inputStyles.field}>
      <label className={inputStyles.label} htmlFor={id}>
        {label}
      </label>
      <textarea
        ref={ref}
        id={id}
        rows={rows}
        className={[inputStyles.input, error && inputStyles.invalid, className].filter(Boolean).join(' ')}
        style={{ height: 'auto', paddingTop: 12, paddingBottom: 12, resize: 'vertical' }}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
      {error && (
        <p id={errorId} className={inputStyles.errorMessage} role="alert">
          {error}
        </p>
      )}
    </div>
  );
});
