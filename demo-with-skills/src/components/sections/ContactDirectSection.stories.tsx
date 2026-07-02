import type { Meta, StoryObj } from '@storybook/react-vite';
import { design } from '../../../.storybook/utils';
import { ContactDirectSection } from './ContactDirectSection';

const meta = {
  title: 'Sections/ContactDirectSection',
  component: ContactDirectSection,
  tags: ['autodocs'],
  ...design('https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=403-389'),
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ContactDirectSection>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Introduces a Frontguys expert with a direct booking call-to-action. */
export const Default: Story = {};
