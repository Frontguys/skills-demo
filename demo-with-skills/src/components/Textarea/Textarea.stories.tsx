import type { Meta, StoryObj } from "@storybook/react";
import { design } from "../../../.storybook/utils";
import { Textarea } from "./Textarea";

const meta = {
	title: "Molecules/Textarea",
	component: Textarea,
	tags: ["autodocs"],
	parameters: design(
		"https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=405-507",
	),
	args: {
		label: "Message",
		placeholder: "Parlez-nous de votre projet, vos objectifs, votre contexte…",
	},
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Required multi-line field. */
export const Default: Story = {};

/** Optional multi-line field. */
export const Optional: Story = { args: { optional: true } };
