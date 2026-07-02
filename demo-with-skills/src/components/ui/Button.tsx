import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { atom, omitVariants } from "../../atom";
import styles from "./Button.module.css";

const { root, primary, secondary, fullWidth } = styles;
const buttonVariants = cva(root, {
  variants: {
    variant: { primary, secondary },
    fullWidth: { true: fullWidth },
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

/**
 * Primary interactive action. Use `variant="secondary"` for a lower-emphasis outlined style.
 */
export const Button = ({ variant = "primary", type = "button", ...props }: ButtonProps) => (
  <Button.Root variant={variant} type={type} {...props} />
);

/**
 * Root button element carrying the variant styles.
 */
Button.Root = atom("button", buttonVariants, omitVariants("variant", "fullWidth"));
