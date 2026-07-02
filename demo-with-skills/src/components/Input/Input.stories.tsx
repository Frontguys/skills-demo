import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { design } from "../../../.storybook/utils";
import { Input } from "./Input";

const meta = {
	title: "Molecules/Input",
	component: Input,
	tags: ["autodocs"],
	parameters: design(
		"https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=404-405",
	),
	args: { label: "Prénom", placeholder: "exemple : Camille" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Required text field. */
export const Default: Story = {};

/** Optional field — appends "(optionnel)" and drops `required`. */
export const Optional: Story = {
	args: { label: "Téléphone", optional: true, placeholder: "exemple : 01 23 45 67 89" },
};

/** Error state — wires aria-invalid, aria-describedby and role="alert". */
export const WithError: Story = {
	args: {
		label: "Email",
		type: "email",
		defaultValue: "nom.prenom@email",
		error: "Veuillez renseigner une adresse email valide.",
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const field = canvas.getByLabelText("Email");
		await expect(field).toHaveAttribute("aria-invalid", "true");
		await expect(canvas.getByRole("alert")).toBeVisible();
	},
};

/** Typing updates the field value. */
export const Typing: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const field = canvas.getByLabelText("Prénom");
		await userEvent.type(field, "Camille");
		await expect(field).toHaveValue("Camille");
	},
};
