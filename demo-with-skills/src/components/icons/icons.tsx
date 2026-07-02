import type { SVGProps } from "react";

/** Shared props — icons are decorative by default (aria-hidden). */
const base = (props: SVGProps<SVGSVGElement>): SVGProps<SVGSVGElement> => ({
	width: 20,
	height: 20,
	viewBox: "0 0 20 20",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	"aria-hidden": true,
	focusable: false,
	...props,
});

/** Diagonal arrow used as a standalone-link indicator (↗). */
export const LinkArrow = (props: SVGProps<SVGSVGElement>) => (
	<svg {...base(props)}>
		<path
			d="M6 14L14 6M14 6H7M14 6V13"
			stroke="currentColor"
			strokeWidth="1.6"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

/** Calendar glyph for the "Planifiez un échange" action. */
export const Calendar = (props: SVGProps<SVGSVGElement>) => (
	<svg {...base(props)}>
		<rect
			x="3"
			y="4.5"
			width="14"
			height="12.5"
			rx="2"
			stroke="currentColor"
			strokeWidth="1.5"
		/>
		<path
			d="M3 8H17M7 3V6M13 3V6"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
		/>
	</svg>
);

/** Error / invalid state glyph. */
export const Invalid = (props: SVGProps<SVGSVGElement>) => (
	<svg {...base(props)}>
		<circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.5" />
		<path
			d="M10 6.5V10.5M10 13.5H10.01"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
		/>
	</svg>
);

export const LinkedIn = (props: SVGProps<SVGSVGElement>) => (
	<svg {...base(props)}>
		<path
			fill="currentColor"
			d="M5.4 7.2H2.9V17h2.5V7.2ZM4.15 3a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9ZM17.1 11.5c0-2.3-1.23-3.37-2.87-3.37-1.32 0-1.91.73-2.24 1.24V7.2H9.5c.03.7 0 9.8 0 9.8H12v-5.47c0-.22.02-.44.08-.6.18-.44.58-.9 1.26-.9.9 0 1.26.68 1.26 1.68V17h2.5v-5.5Z"
		/>
	</svg>
);

export const YouTube = (props: SVGProps<SVGSVGElement>) => (
	<svg {...base(props)}>
		<path
			fill="currentColor"
			d="M18.2 6.9a2.1 2.1 0 0 0-1.48-1.49C15.4 5.05 10 5.05 10 5.05s-5.4 0-6.72.36A2.1 2.1 0 0 0 1.8 6.9C1.45 8.23 1.45 10 1.45 10s0 1.77.35 3.1a2.1 2.1 0 0 0 1.48 1.49c1.32.36 6.72.36 6.72.36s5.4 0 6.72-.36a2.1 2.1 0 0 0 1.48-1.49c.35-1.33.35-3.1.35-3.1s0-1.77-.35-3.1ZM8.4 12.55v-5.1l4.42 2.55-4.42 2.55Z"
		/>
	</svg>
);
