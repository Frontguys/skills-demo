import type { Meta, StoryObj } from '@storybook/react-vite';
import { design } from '../../../.storybook/utils';
import { Hero } from './Hero';

const meta = {
  title: 'Sections/Hero',
  component: Hero,
  tags: ['autodocs'],
  ...design('https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=402-389'),
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Decorative eyebrow, the page's single `<h1>`, and an intro paragraph. */
export const Default: Story = {};
