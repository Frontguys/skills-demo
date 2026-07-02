import type { Meta, StoryObj } from '@storybook/react-vite';
import { design } from '../../../.storybook/utils';
import { EngagementsAdresseSection } from './EngagementsAdresseSection';

const meta = {
  title: 'Sections/EngagementsAdresseSection',
  component: EngagementsAdresseSection,
  tags: ['autodocs'],
  ...design('https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=409-436'),
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof EngagementsAdresseSection>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Response commitments and office address, closing the contact page. */
export const Default: Story = {};
