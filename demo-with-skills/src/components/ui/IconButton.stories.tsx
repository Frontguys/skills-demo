import type { Meta, StoryObj } from '@storybook/react-vite';
import { design } from '../../../.storybook/utils';
import { IconButton } from './IconButton';
import { LinkedInIcon } from './Icons';

const meta = {
  title: 'UI/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  ...design('https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=2434-357'),
  args: {
    'aria-label': 'LinkedIn (nouvelle fenêtre)',
    children: <LinkedInIcon />,
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Square icon-only button, requires an explicit `aria-label` (RGAA 6.1). */
export const Default: Story = {};
