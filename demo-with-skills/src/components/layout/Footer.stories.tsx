import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { design } from '../../../.storybook/utils';
import { Footer } from './Footer';

const meta = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
  ...design('https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=410-437'),
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Brand tagline, resource/legal link groups and social icon links. */
export const Default: Story = {};

/** Social icon links carry an explicit, non-visual `aria-label` (RGAA 6.1, 6.2). */
export const SocialLinksHaveLabels: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', { name: /linkedin/i })).toBeInTheDocument();
    await expect(canvas.getByRole('button', { name: /youtube/i })).toBeInTheDocument();
  },
};
