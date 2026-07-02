# Contact — Frontguys

Implementation of the [Figma Contact page](https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/MeetUp_Skills?node-id=402-367) as a React + TypeScript app (Vite).

## Run

```bash
npm install
npm run dev
```

## Structure

Design tokens from Figma (`get_variable_defs`) are mirrored as CSS custom properties in
[`src/styles/tokens.css`](src/styles/tokens.css) and consumed by every component.

### Reusable components (`src/components/ui/`)

Each maps to a Figma component (via its Code Connect definition):

| Figma component | React component | Notable props |
| --- | --- | --- |
| `Button` | `Button` | `variant` (primary/secondary), `size` |
| `Button` (icon) | `IconButton` | `variant`, `aria-label` |
| `link` | `Link` | `type` (standalone/inline), `indicator` |
| `logotype` | `Logotype` | `type` (accessibility), `viewport` |
| `input` | `Input` | `label`, `optional`, `error` |
| `textArea` | `Textarea` | `label`, `optional`, `error` |
| `checkbox/default` | `Checkbox` | `label`, `required` |
| `profileBanner` | `Banner` | `title`, `name`, `jobTitle`, `showAction` |

### Layout (`src/components/layout/`)

- `Header` — `header` component: logo, primary `<nav>`, CTA + skip link.
- `Footer` — `footer` component: logo, resource/legal links, social `IconButton`s.

### Page

- [`src/pages/ContactPage.tsx`](src/pages/ContactPage.tsx) assembles the five sections
  (hero, contact-direct, form, engagements/adresse) and wires up form state + email validation.

## Accessibility

The Figma annotations (RGAA / WCAG) were followed: single `<h1>`, skip link, `<label for>` on
every field, `aria-required` / `aria-invalid` / `aria-describedby` + `role="alert"` on the error
state, visible focus rings, and `aria-label` on icon-only buttons.
