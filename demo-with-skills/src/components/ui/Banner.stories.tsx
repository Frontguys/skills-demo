import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import { design } from '../../../.storybook/utils';
import { Banner } from './Banner';
import nicolasGuy from '../../assets/nicolas-guy.jpg';

const meta = {
  title: 'UI/Banner',
  component: Banner,
  tags: ['autodocs'],
  ...design('https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=403-391'),
  args: {
    avatarSrc: nicolasGuy,
    avatarAlt: 'Nicolas Guy, co-fondateur de Frontguys',
    title: 'Parlons de votre prochaine étape.',
    name: 'Nicolas Guy',
    jobTitle: 'Co-fondateur, Frontguys',
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Profile only, no call-to-action. */
export const Default: Story = {};

/** With the booking call-to-action shown on the right. */
export const WithAction: Story = {
  args: { showAction: true },
};

/** Clicking the call-to-action invokes `onAction`. */
export const ActionClick: Story = {
  args: { showAction: true, onAction: fn() },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /planifiez un échange/i }));
    await expect(args.onAction).toHaveBeenCalledOnce();
  },
};
