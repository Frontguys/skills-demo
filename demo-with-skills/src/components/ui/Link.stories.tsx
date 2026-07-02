import type { Meta, StoryObj } from '@storybook/react-vite';
import { design } from '../../../.storybook/utils';
import { Link } from './Link';

const meta = {
  title: 'UI/Link',
  component: Link,
  tags: ['autodocs'],
  ...design('https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=405-524'),
  args: {
    href: '#',
    children: 'Lire notre politique de confidentialité',
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default underlined hyperlink. */
export const Standalone: Story = {
  args: { variant: 'standalone' },
};

/** Trailing arrow indicating an external destination. */
export const WithIndicator: Story = {
  args: { variant: 'standalone', indicator: 'right', children: 'Voir sur la carte' },
};

/** Smaller, muted style used for de-emphasized text-adjacent links (e.g. legal mentions). */
export const Inline: Story = {
  args: { variant: 'inline', children: '© 2025 Frontguys. Tous droits réservés.' },
};
