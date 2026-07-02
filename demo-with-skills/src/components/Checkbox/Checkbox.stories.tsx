import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { design } from "../../../.storybook/utils";
import { Checkbox } from "./Checkbox";

const meta = {
	title: "Molecules/Checkbox",
	component: Checkbox,
	tags: ["autodocs"],
	parameters: design(
		"https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=405-519",
	),
	args: {
		label:
			"J’accepte que Frontguys traite mes données pour répondre à ma demande.",
	},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default, unchecked. */
export const Default: Story = {};

/** Checked state. */
export const Checked: Story = { args: { defaultChecked: true } };

/** Clicking the label toggles the native checkbox. */
export const Toggles: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const box = canvas.getByRole("checkbox");
		await expect(box).not.toBeChecked();
		await userEvent.click(box);
		await expect(box).toBeChecked();
	},
};
