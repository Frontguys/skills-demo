import type { Meta, StoryObj } from "@storybook/react";
import { design } from "../../../.storybook/utils";
import { Logotype } from "./Logotype";

const meta = {
	title: "Atoms/Logotype",
	component: Logotype,
	tags: ["autodocs"],
	parameters: design(
		"https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=402-368",
	),
} satisfies Meta<typeof Logotype>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Brand wordmark, rendered as a link home. */
export const Default: Story = {};
