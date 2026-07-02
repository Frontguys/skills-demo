import type { InputHTMLAttributes, ReactNode } from "react";
import { useId } from "react";
import { atom } from "../../atom";
import styles from "./Checkbox.module.css";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	/** Label content — accepts text and inline links for composition. */
	label: ReactNode;
}

/**
 * Checkbox — a real `<input type="checkbox">` wrapped in its `<label>`.
 */
export const Checkbox = ({ label, id, className, ...props }: CheckboxProps) => {
	const autoId = useId();
	const inputId = id ?? autoId;

	return (
		<Checkbox.Root htmlFor={inputId} className={className}>
			<Checkbox.Control id={inputId} {...props} />
			<Checkbox.Label>{label}</Checkbox.Label>
		</Checkbox.Root>
	);
};

/**
 * Root of Checkbox — the wrapping label.
 */
Checkbox.Root = atom("label", styles.root);

/**
 * Native checkbox control.
 */
Checkbox.Control = atom("input", styles.control, { type: "checkbox" });

/**
 * Label text.
 */
Checkbox.Label = atom("span", styles.label);
