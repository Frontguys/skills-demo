import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { design } from '../../../.storybook/utils';
import { Input } from './Input';

const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  ...design('https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=404-405'),
  args: {
    label: 'Prénom',
    placeholder: 'exemple : Camille',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Empty field ready for input. */
export const Default: Story = {};

/** Required field, announced via `aria-required` for assistive technology. */
export const Required: Story = {
  args: { required: true },
};

/**
 * Invalid state: red border + "Erreur" badge + `role="alert"` message, linked to the
 * field via `aria-describedby` (RGAA 11.11, 7.5).
 */
export const Invalid: Story = {
  args: {
    label: 'Email',
    required: true,
    value: 'nom.prenom@email',
    error: 'Veuillez renseigner une adresse email valide.',
  },
};

/** Typing into the field updates its value. */
export const FillsIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Prénom');
    await userEvent.type(input, 'Camille');
    await expect(input).toHaveValue('Camille');
  },
};
