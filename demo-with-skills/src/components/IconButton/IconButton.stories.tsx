import type { Meta, StoryObj } from "@storybook/react";
import { design } from "../../../.storybook/utils";
import { LinkedIn } from "../icons/icons";
import { IconButton } from "./IconButton";

const meta = {
	title: "Atoms/IconButton",
	component: IconButton,
	tags: ["autodocs"],
	parameters: design(
		"https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=410-437",
	),
	args: { "aria-label": "LinkedIn", children: <LinkedIn /> },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Outlined icon button (as used for footer socials). */
export const Secondary: Story = { args: { variant: "secondary" } };

/** Borderless icon button. */
export const Ghost: Story = { args: { variant: "ghost" } };

/** Rendered as an anchor when `href` is provided. */
export const AsLink: Story = {
	args: { href: "#", "aria-label": "LinkedIn (nouvelle fenêtre)" },
};
