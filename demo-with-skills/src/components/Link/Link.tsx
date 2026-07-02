import { cva, cx, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { atom } from "../../atom";
import { LinkArrow } from "../icons/icons";
import styles from "./Link.module.css";

const { root, standalone, inline, indicator } = styles;

const linkVariants = cva(root, {
	variants: {
		type: { standalone, inline },
	},
});

interface LinkProps
	extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "type">,
		VariantProps<typeof linkVariants> {
	/** Show a trailing directional arrow (↗). */
	indicator?: "right";
	children: ReactNode;
}

/**
 * Link — themed anchor. `standalone` sits on its own line,
 * `inline` flows within text. Extends the native `<a>`.
 */
export const Link = ({
	type = "standalone",
	indicator: showIndicator,
	className,
	children,
	...props
}: LinkProps) => (
	<Link.Root className={cx(linkVariants({ type }), className)} {...props}>
		{children}
		{showIndicator === "right" && <LinkArrow className={indicator} />}
	</Link.Root>
);

/**
 * Root of Link.
 */
Link.Root = atom("a");
