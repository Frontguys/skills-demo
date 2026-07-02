import { cva, cx, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { atom } from "../../atom";
import styles from "./Button.module.css";

const { root, primary, secondary, small, medium, block } = styles;

const buttonVariants = cva(root, {
	variants: {
		variant: { primary, secondary },
		size: { small, medium },
		block: { true: block },
	},
});

interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	/** Content — accepts text and/or icons for composition. */
	children: ReactNode;
}

/**
 * Button — primary call-to-action atom.
 * Extends the native `<button>`; pass `type="submit"` inside forms.
 */
export const Button = ({
	variant = "primary",
	size = "medium",
	block: isBlock,
	type = "button",
	className,
	...props
}: ButtonProps) => (
	<Button.Root
		className={cx(buttonVariants({ variant, size, block: isBlock }), className)}
		type={type}
		{...props}
	/>
);

/**
 * Root of Button.
 */
Button.Root = atom("button");
