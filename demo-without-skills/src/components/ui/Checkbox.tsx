import { forwardRef, useId } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'type' | 'label'> {
  label: ReactNode;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, required, className, ...rest },
  ref,
) {
  const id = useId();
  return (
    <div className={styles.wrapper}>
      <input
        ref={ref}
        id={id}
        type="checkbox"
        className={[styles.input, className].filter(Boolean).join(' ')}
        required={required}
        aria-required={required || undefined}
        {...rest}
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
});
