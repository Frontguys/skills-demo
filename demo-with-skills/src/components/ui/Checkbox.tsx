import { useId } from "react";
import type { InputHTMLAttributes, ReactNode, Ref } from "react";
import { atom } from "../../atom";
import styles from "./Checkbox.module.css";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "type" | "label"> {
  label: ReactNode;
  ref?: Ref<HTMLInputElement>;
}

/**
 * Native checkbox with an associated label, used for consent/opt-in fields.
 */
export const Checkbox = ({ label, required, ref, ...props }: CheckboxProps) => {
  const id = useId();
  return (
    <Checkbox.Root>
      <Checkbox.Field
        ref={ref}
        id={id}
        type="checkbox"
        required={required}
        aria-required={required || undefined}
        {...props}
      />
      <Checkbox.Label htmlFor={id}>{label}</Checkbox.Label>
    </Checkbox.Root>
  );
};

/** Wrapper laying out the checkbox next to its label. */
Checkbox.Root = atom("div", styles.root);
/** The native `<input type="checkbox">` element. */
Checkbox.Field = atom("input", styles.field);
/** Visible `<label>` associated to the field via `htmlFor`. */
Checkbox.Label = atom("label", styles.label);
