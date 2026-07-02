import { useId } from "react";
import type { InputHTMLAttributes, Ref } from "react";
import { cva } from "class-variance-authority";
import { atom, omitVariants } from "../../atom";
import { AlertIcon } from "./Icons";
import styles from "./FormField.module.css";

const { root, label, invalidLabel, errorBadge, field, invalid, errorMessage } = styles;
const fieldVariants = cva(field, { variants: { invalid: { true: invalid } } });

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  label: string;
  error?: string;
  ref?: Ref<HTMLInputElement>;
}

/**
 * Labeled text input with inline validation error, associated via `aria-describedby`.
 */
export const Input = ({ label: labelText, error, required, ref, ...props }: InputProps) => {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <Input.Root>
      <Input.Label htmlFor={id} className={error ? invalidLabel : undefined}>
        {labelText}
      </Input.Label>
      {error && (
        <Input.ErrorBadge>
          <AlertIcon />
          Erreur
        </Input.ErrorBadge>
      )}
      <Input.Field
        ref={ref}
        id={id}
        invalid={!!error}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />
      {error && (
        <Input.ErrorMessage id={errorId} role="alert">
          {error}
        </Input.ErrorMessage>
      )}
    </Input.Root>
  );
};

/** Wrapper stacking the label, input and error message. */
Input.Root = atom("div", root);
/** Visible `<label>` associated to the field via `htmlFor`. */
Input.Label = atom("label", label);
/** "Erreur" badge shown above an invalid field. */
Input.ErrorBadge = atom("span", errorBadge);
/** The native `<input>` element, styled per its invalid state. */
Input.Field = atom("input", fieldVariants, omitVariants("invalid"));
/** `role="alert"` error message rendered below an invalid field. */
Input.ErrorMessage = atom("p", errorMessage);
