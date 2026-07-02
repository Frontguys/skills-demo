import type { InputHTMLAttributes, ReactNode } from "react";
import { useId } from "react";
import { atom } from "../../atom";
import { Invalid } from "../icons/icons";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	/** Visible label text (associated via htmlFor/id). */
	label: ReactNode;
	/** Marks the field as optional — appends "(optionnel)" and drops `required`. */
	optional?: boolean;
	/** Error message; when set, wires aria-invalid + aria-describedby + role="alert". */
	error?: ReactNode;
}

/**
 * Input — labelled text field with native validation and an accessible error.
 * Extends the native `<input>`; all valid input props pass through.
 */
export const Input = ({
	label,
	optional = false,
	error,
	id,
	required,
	className,
	...props
}: InputProps) => {
	const autoId = useId();
	const inputId = id ?? autoId;
	const errorId = `${inputId}-error`;
	const isRequired = required ?? !optional;

	return (
		<Input.Root className={className}>
			<Input.Label htmlFor={inputId}>
				{label}
				{optional && <span className={styles.optional}> (optionnel)</span>}
			</Input.Label>
			<Input.Field
				id={inputId}
				required={isRequired}
				aria-required={isRequired || undefined}
				aria-invalid={error ? true : undefined}
				aria-describedby={error ? errorId : undefined}
				{...props}
			/>
			{error && (
				<Input.Error id={errorId} role="alert">
					<Invalid />
					{error}
				</Input.Error>
			)}
		</Input.Root>
	);
};

/**
 * Root of Input.
 */
Input.Root = atom("div", styles.root);

/**
 * Field label.
 */
Input.Label = atom("label", styles.label);

/**
 * Native input control.
 */
Input.Field = atom("input", styles.field);

/**
 * Live error message.
 */
Input.Error = atom("p", styles.error);
