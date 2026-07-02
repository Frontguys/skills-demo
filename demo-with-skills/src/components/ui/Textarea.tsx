import { useId } from "react";
import type { Ref, TextareaHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { atom, omitVariants } from "../../atom";
import styles from "./FormField.module.css";

const { root, label, field, invalid, textareaField, errorMessage } = styles;
const textareaVariants = cva([field, textareaField], { variants: { invalid: { true: invalid } } });

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> {
  label: string;
  error?: string;
  ref?: Ref<HTMLTextAreaElement>;
}

/**
 * Labeled multiline text field with inline validation error.
 */
export const Textarea = ({ label: labelText, error, required, rows = 5, ref, ...props }: TextareaProps) => {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <Textarea.Root>
      <Textarea.Label htmlFor={id}>{labelText}</Textarea.Label>
      <Textarea.Field
        ref={ref}
        id={id}
        rows={rows}
        invalid={!!error}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />
      {error && (
        <Textarea.ErrorMessage id={errorId} role="alert">
          {error}
        </Textarea.ErrorMessage>
      )}
    </Textarea.Root>
  );
};

/** Wrapper stacking the label, textarea and error message. */
Textarea.Root = atom("div", root);
/** Visible `<label>` associated to the field via `htmlFor`. */
Textarea.Label = atom("label", label);
/** The native `<textarea>` element, styled per its invalid state. */
Textarea.Field = atom("textarea", textareaVariants, omitVariants("invalid"));
/** `role="alert"` error message rendered below an invalid field. */
Textarea.ErrorMessage = atom("p", errorMessage);
