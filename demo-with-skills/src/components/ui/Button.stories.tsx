import type { Meta, StoryObj } from '@storybook/react-vite';
import { design } from '../../../.storybook/utils';
import { Button } from './Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  ...design('https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=405-529'),
  args: {
    children: 'Envoyez votre message',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Solid, high-emphasis action — used for the main call-to-action on a page. */
export const Primary: Story = {
  args: { variant: 'primary' },
};

/** Outlined, low-emphasis action — used for secondary actions like "Contact" in the header. */
export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Contact' },
};

/** Stretches to fill its container, used for the contact form submit button. */
export const FullWidth: Story = {
  args: { variant: 'primary', fullWidth: true },
};

/** Disabled state, inherited from the native `<button disabled>` attribute. */
export const Disabled: Story = {
  args: { variant: 'primary', disabled: true },
};
