import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { design } from '../../../.storybook/utils';
import { ContactFormSection } from './ContactFormSection';

const meta = {
  title: 'Sections/ContactFormSection',
  component: ContactFormSection,
  tags: ['autodocs'],
  ...design('https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=404-402'),
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ContactFormSection>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Identity, email, optional context fields, message, GDPR consent and submission. */
export const Default: Story = {};

/**
 * Submitting an empty form shows inline errors and moves focus to the first
 * invalid field (RGAA 11.11, 7.5), without submitting.
 */
export const SubmitWithErrors: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /envoyez votre message/i }));
    const firstNameInput = canvas.getByLabelText('Prénom');
    await expect(firstNameInput).toHaveFocus();
    await expect(canvas.getAllByRole('alert').length).toBeGreaterThan(0);
  },
};

/** Filling every required field and submitting shows the success confirmation. */
export const SubmitSuccessfully: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText('Prénom'), 'Camille');
    await userEvent.type(canvas.getByLabelText('Nom'), 'Durand');
    await userEvent.type(canvas.getByLabelText('Email'), 'camille.durand@email.fr');
    await userEvent.type(canvas.getByLabelText('Message'), 'Un message de test.');
    await userEvent.click(canvas.getByLabelText(/j.accepte/i));
    await userEvent.click(canvas.getByRole('button', { name: /envoyez votre message/i }));
    await expect(canvas.getByRole('status')).toHaveTextContent(/message a bien été envoyé/i);
  },
};
