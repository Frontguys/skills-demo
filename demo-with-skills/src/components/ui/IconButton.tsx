import type { ButtonHTMLAttributes, ReactNode } from "react";
import { atom } from "../../atom";
import styles from "./IconButton.module.css";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-label": string;
  children: ReactNode;
}

/**
 * Square icon-only button, outlined in the interactive brand color.
 */
export const IconButton = ({ type = "button", ...props }: IconButtonProps) => (
  <IconButton.Root type={type} {...props} />
);

/**
 * Root button element for IconButton.
 */
IconButton.Root = atom("button", styles.root);
