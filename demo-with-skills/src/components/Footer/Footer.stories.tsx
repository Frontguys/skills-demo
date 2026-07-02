import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { design } from "../../../.storybook/utils";
import { Footer } from "./Footer";

const meta = {
	title: "Organisms/Footer",
	component: Footer,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
		...design(
			"https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=410-437",
		),
	},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default footer with resource links, socials and legal notice. */
export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(
			canvas.getByText("Nous rendons le numérique accessible à tous."),
		).toBeVisible();
		await expect(
			canvas.getByRole("link", { name: "LinkedIn (nouvelle fenêtre)" }),
		).toBeVisible();
	},
};
