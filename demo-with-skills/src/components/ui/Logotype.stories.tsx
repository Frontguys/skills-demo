import type { Meta, StoryObj } from '@storybook/react-vite';
import { design } from '../../../.storybook/utils';
import { Logotype } from './Logotype';

const meta = {
  title: 'UI/Logotype',
  component: Logotype,
  tags: ['autodocs'],
  ...design('https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=2069-197'),
} satisfies Meta<typeof Logotype>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Frontguys brand mark, linking back to the homepage. */
export const Default: Story = {};
