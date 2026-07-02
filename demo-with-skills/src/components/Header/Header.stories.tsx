import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { design } from "../../../.storybook/utils";
import { Header } from "./Header";

const meta = {
	title: "Organisms/Header",
	component: Header,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
		...design(
			"https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=402-368",
		),
	},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default header with primary navigation and skip link. */
export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(
			canvas.getByRole("navigation", { name: "Navigation principale" }),
		).toBeVisible();
		await expect(canvas.getByRole("link", { name: "Aller au contenu" })).toBeInTheDocument();
	},
};
