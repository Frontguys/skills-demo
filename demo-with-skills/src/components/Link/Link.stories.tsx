import type { Meta, StoryObj } from "@storybook/react";
import { design } from "../../../.storybook/utils";
import { Link } from "./Link";

const meta = {
	title: "Atoms/Link",
	component: Link,
	tags: ["autodocs"],
	parameters: design(
		"https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=405-524",
	),
	args: { href: "#", children: "Lire notre politique de confidentialité" },
	argTypes: {
		type: { control: "inline-radio", options: ["standalone", "inline"] },
		indicator: { control: "inline-radio", options: [undefined, "right"] },
	},
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Standalone link on its own line. */
export const Standalone: Story = { args: { type: "standalone" } };

/** With a trailing directional arrow. */
export const WithIndicator: Story = {
	args: { type: "standalone", indicator: "right", children: "Voir sur la carte" },
};

/** Inline link that flows within text. */
export const Inline: Story = {
	args: { type: "inline", children: "© 2025 Frontguys. Tous droits réservés." },
};
