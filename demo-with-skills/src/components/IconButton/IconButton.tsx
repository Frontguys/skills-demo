import { cva, cx, type VariantProps } from "class-variance-authority";
import type {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	ReactNode,
} from "react";
import { atom } from "../../atom";
import styles from "./IconButton.module.css";

const { root, secondary, ghost } = styles;

const iconButtonVariants = cva(root, {
	variants: {
		variant: { secondary, ghost },
	},
});

type Variant = VariantProps<typeof iconButtonVariants>;

type IconButtonProps = Variant & {
	/** Accessible name — required since there is no visible text. */
	"aria-label": string;
	/** Icon node (decorative — the accessible name comes from aria-label). */
	children: ReactNode;
} & (
		| ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
		| ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
	);

/**
 * IconButton — icon-only action. Renders an `<a>` when `href` is set,
 * otherwise a `<button>`. Always requires `aria-label`.
 */
export const IconButton = ({
	variant = "secondary",
	className,
	...props
}: IconButtonProps) => {
	const classes = cx(iconButtonVariants({ variant }), className);
	return "href" in props && props.href !== undefined ? (
		<IconButton.Anchor className={classes} {...props} />
	) : (
		<IconButton.Button className={classes} type="button" {...props} />
	);
};

/**
 * Button root of IconButton.
 */
IconButton.Button = atom("button");

/**
 * Anchor root of IconButton (used when `href` is provided).
 */
IconButton.Anchor = atom("a");
