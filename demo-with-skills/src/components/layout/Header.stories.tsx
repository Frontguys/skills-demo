import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { design } from '../../../.storybook/utils';
import { Header } from './Header';

const meta = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
  ...design('https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=402-368'),
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Skip link, brand logo, navigation and contact CTA — identical on every page. */
export const Default: Story = {};

/** The skip link and navigation landmark are reachable by assistive technology. */
export const HasLandmarks: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('link', { name: /aller au contenu/i })).toBeInTheDocument();
    await expect(canvas.getByRole('navigation', { name: /navigation principale/i })).toBeInTheDocument();
  },
};
