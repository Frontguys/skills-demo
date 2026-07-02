import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { atom, omitVariants } from "../../atom";
import { ArrowUpRightIcon } from "./Icons";
import styles from "./Link.module.css";

const { root, standalone, inline } = styles;
const linkVariants = cva(root, { variants: { variant: { standalone, inline } } });

export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  /** Shows a trailing external-link arrow. */
  indicator?: "right";
  children: ReactNode;
}

/**
 * Underlined hyperlink. Use `variant="inline"` for de-emphasized text-adjacent links
 * (e.g. legal mentions), and `indicator="right"` to signal an external destination.
 */
export const Link = ({ variant = "standalone", indicator, children, ...props }: LinkProps) => (
  <Link.Root variant={variant} {...props}>
    {children}
    {indicator === "right" && <ArrowUpRightIcon />}
  </Link.Root>
);

/**
 * Root anchor element for Link.
 */
Link.Root = atom("a", linkVariants, omitVariants("variant"));
