import type { ReactNode, TextareaHTMLAttributes } from "react";
import { useId } from "react";
import { atom } from "../../atom";
import styles from "./Textarea.module.css";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	/** Visible label text (associated via htmlFor/id). */
	label: ReactNode;
	/** Marks the field as optional — appends "(optionnel)" and drops `required`. */
	optional?: boolean;
}

/**
 * Textarea — labelled multi-line field. Extends the native `<textarea>`.
 */
export const Textarea = ({
	label,
	optional = false,
	id,
	required,
	className,
	...props
}: TextareaProps) => {
	const autoId = useId();
	const fieldId = id ?? autoId;
	const isRequired = required ?? !optional;

	return (
		<Textarea.Root className={className}>
			<Textarea.Label htmlFor={fieldId}>
				{label}
				{optional && <span className={styles.optional}> (optionnel)</span>}
			</Textarea.Label>
			<Textarea.Field
				id={fieldId}
				required={isRequired}
				aria-required={isRequired || undefined}
				{...props}
			/>
		</Textarea.Root>
	);
};

/**
 * Root of Textarea.
 */
Textarea.Root = atom("div", styles.root);

/**
 * Field label.
 */
Textarea.Label = atom("label", styles.label);

/**
 * Native textarea control.
 */
Textarea.Field = atom("textarea", styles.field);
