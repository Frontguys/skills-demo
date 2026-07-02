import { useId } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import './Checkbox.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'type'> {
  label: ReactNode;
}

/**
 * Checkbox — maps to the Figma `checkbox/default` component.
 * Uses a real <input type="checkbox"> associated with its <label> (RGAA 11.1).
 */
export function Checkbox({ label, className = '', required, ...rest }: CheckboxProps) {
  const id = useId();
  return (
    <div className={`fg-checkbox ${className}`.trim()}>
      <input
        id={id}
        type="checkbox"
        className="fg-checkbox__control"
        required={required}
        aria-required={required || undefined}
        {...rest}
      />
      <label className="fg-checkbox__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
