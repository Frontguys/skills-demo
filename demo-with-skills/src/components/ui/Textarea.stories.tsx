import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { design } from '../../../.storybook/utils';
import { Textarea } from './Textarea';

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  ...design('https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=405-507'),
  args: {
    label: 'Message',
    placeholder: 'Parlez-nous de votre projet, vos objectifs, votre contexte…',
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {
  args: { required: true },
};

export const Invalid: Story = {
  args: { required: true, error: 'Veuillez renseigner votre message.' },
};

/** Typing into the field updates its value. */
export const FillsIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByLabelText('Message');
    await userEvent.type(textarea, 'Un message de test.');
    await expect(textarea).toHaveValue('Un message de test.');
  },
};
