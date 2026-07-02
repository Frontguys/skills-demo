import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { design } from "../../../.storybook/utils";
import { Button } from "../Button/Button";
import {
	ProfileBanner,
	ProfileBannerActionIcon,
} from "./ProfileBanner";

const meta = {
	title: "Organisms/ProfileBanner",
	component: ProfileBanner,
	tags: ["autodocs"],
	parameters: design(
		"https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=403-391",
	),
	args: {
		title: "Parlons de votre prochaine étape.",
		name: "Nicolas Guy",
		jobTitle: "Co-fondateur, Frontguys",
		avatarAlt: "Nicolas Guy, co-fondateur de Frontguys",
	},
} satisfies Meta<typeof ProfileBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

/** With a call-to-action, as used on the contact page. */
export const WithAction: Story = {
	args: {
		action: (
			<Button variant="secondary" size="medium">
				<ProfileBannerActionIcon />
				Planifiez un échange
			</Button>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByText("Nicolas Guy")).toBeVisible();
		await expect(
			canvas.getByRole("button", { name: /Planifiez un échange/ }),
		).toBeVisible();
	},
};

/** Without a call-to-action. */
export const WithoutAction: Story = {};
