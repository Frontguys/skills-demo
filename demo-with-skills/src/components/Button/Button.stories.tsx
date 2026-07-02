import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
import { design } from "../../../.storybook/utils";
import { Button } from "./Button";

const meta = {
	title: "Atoms/Button",
	component: Button,
	tags: ["autodocs"],
	parameters: design(
		"https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=405-529",
	),
	args: { children: "Envoyez votre message", onClick: fn() },
	argTypes: {
		variant: { control: "inline-radio", options: ["primary", "secondary"] },
		size: { control: "inline-radio", options: ["small", "medium"] },
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Primary call-to-action. */
export const Primary: Story = { args: { variant: "primary" } };

/** Secondary, outlined variant. */
export const Secondary: Story = {
	args: { variant: "secondary", children: "Planifiez un échange" },
};

/** Small size used in the header. */
export const Small: Story = {
	args: { variant: "secondary", size: "small", children: "Prendre rendez-vous" },
};

/** Full-width, as used at the bottom of the form. */
export const Block: Story = { args: { block: true } };

/** Disabled state. */
export const Disabled: Story = { args: { disabled: true } };

/** Clicking fires the handler. */
export const Clickable: Story = {
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getByRole("button"));
		await expect(args.onClick).toHaveBeenCalled();
	},
};
