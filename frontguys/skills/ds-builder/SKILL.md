---
name: ds-builder
description: >
  Implements UI components following design system patterns from Figma designs, ensuring 1:1 fidelity and accessibility.
  Use when creating Design System components, interactive elements, or implementing complex UI components. Triggers on:
  "Design System", "component", "figma implementation", "storybook stories".
allowed-tools: Bash Read Write Edit Glob Grep figma_get_design_context figma_get_screenshot figma_search_design_system figma_add_code_connect_map figma_use_figma figma_get_code_connect_suggestions figma_send_code_connect_mappings figma_get_variable_defs figma_create_design_system_rules figma_whoami figma_get_metadata
metadata:
  tags: design-system, components, patterns, web-standards, accessibility, figma
  version: "2.0"
---

# Design System Builder - Implementation Guide

## Figma MCP Workflow
Always follow this sequence when implementing from Figma:
1. `figma_get_design_context` - Fetch structured representation
2. `figma_get_screenshot` - Get visual reference
3. `figma_get_variable_defs` - Get design tokens
4. Implement using conventions from below guide (atomic design, CVA, accessibility)
5. Validate against Figma for 1:1 look and behavior

## Core Principles
1. **Figma Fidelity** - Match designs exactly from Figma specifications
2. **Native Elements** - Adopt native HTML element structure and behavior
3. **Accessibility** - WCAG 2.1 AA compliance
4. **Design Tokens** - Use CSS custom properties for all values
5. **Reusability** - Prioritize existing components
6. **Type Safety** - Full TypeScript support with strict mode
7. **Minimalism** - Avoid unnecessary abstractions

## Implementation Rules

### Adopt atomic design approach

Design system is using Atomic design principle: Small components are Atoms, Compound components are molecules, Complex components are organisms:
- Every part of a component should be implemented as an atom.
- Molecules are composed of atoms and must expose  all sub-elements for composition as compound components (see template below).
- Atoms should always extend a simple native tag, use the `atom` from `./references/atom.tsx` utility to define small components and sub elements
 (copy in src/atom.tsx if not present in your project)
- Molecules allows to compose contents with childrens (prefered) & slot props when necessary.
- Components must use cva for variants, allows composition and expose internals sub-elements.
- Reuse existing components whenever possible, avoid creating new ones if a similar component already exists in the design system.
- Molecules should usually have a closed API.

## Component Template Example

Replace "molecule" with the component name, and "molecule.Sub" with the sub-element name, keep "Root" as a convention for wrapper element. 

### Always use `cva` for variants and `atom` utility for sub-elements.

```ts
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./Molecule.module.css";

const { root, sub, variant1 } = styles;
const moleculeVariants = cva(root, { variants: { variant: { variant1, ...} } });

interface MoleculeProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof moleculeVariants> {
	...
}
/**
 * Molecule component exemple
 */
export const Molecule = ({ variant, className,...props }: MoleculeProps) => (
  <Molecule.Root {...props}>
    <Molecule.Sub className={sub} />
    {children}
  </Molecule.Root>
);

/**
 * Root of Molecule.
 */
Molecule.Root = atom("section", moleculeVariants)

/**
 * Sub-element used within Molecule.
 */
Molecule.Sub = atom("p", styles.sub)
```

### Structure & HTML
- **Use native HTML semantic** - label, ul, section, dialog, etc. & style native elements with CSS
- **Always extend native element types** (e.g. `import { InputHTMLAttributes } from "react";`)
- **Allow to pass through all valid props** to main components (e.g., `interface MyComponentProps extends InputHTMLAttributes<HTMLInputElement> {...};`)
- **Always allows slot content to be ReactNode**: allows composition with text formating and icons over just text content
- **Use minimalist markup** avoid unnecessary wrapper, keep DOM structure super simple

### Styling Approach
- **Style with CSS Modules** for scoped styling
- **Use terse and semantic class names** aligned with atom & sub-element naming, each class should be a independent CSS block
- **Use Nested CSS** states should be defined with pseudo selector whenever possible
- **Avoid silblings selectors** or any selector that depends of internal DOM structure (selectors based on root component like `&:is(.root:has(:state))` are allowed)
- **Use Class Variance Authority (CVA)** for variants and custom styles (states like hover / visible-focus / user-invalid should not be defined by props, but depends on internal element state)
- **Use CSS Custom Properties** for design tokens (in `src/styles/tokens.css`), keep naming consistent with Figma variable names, use `figma_get_variable_defs` to get the list of tokens and their values

### CVA Usage Guidelines
- **Only apply CVA to the root element** atom component or a parent wrapper
- **Avoid compoundVariants** when simple variants suffice
- **Avoid define falsy default Variants** define default values in component signature and not with CVA defaultVariants
- **Extends Component props with VariantProps** typings should adopt DRY

### Storybook Requirements
- Create a Story file for each component: `[ComponentName].stories.tsx`
- Define Stories for all states & variants
- Use `autodocs` tag
- Comment components & properties with jsDoc to generate usefull documentation
- Link stories to according Figma node with `design` from ./references/utils.ts, use full URL to the right design file with specified node-id
  (copy in .storybook/utils.ts if not present in your project)
- Add a simple user interaction test for molecules & organisms components

### Figma Code Connect

- Create a Figma Code Connect file for each component: `[ComponentName].figma.ts`
- Install `@figma/code-connect` as development dependency, create `figma.config.json` & add `@figma/code-connect/figma-types` in `tsconfig.json`,
  if not present in your project
- Use `figma-code-connect` skill and Figma MCP to generate code-connect mapping for each component,
  `figma_get_code_connect_suggestions` gets suggestions and `figma_send_code_connect_mappings` sends the mapping to Figma

## Best practices
- Native First - Always use native HTML features (form validation, input types, popovers, backdrop, etc) before adding custom logic
- Semantic HTML - Use tags with roles to improve accessibility, ex: `<label>`, `<input>`, with proper nesting or link with htmlFor & id
- ARIA Attributes - add `aria-invalid`, `aria-describedby` and proper aria attribute only when necessary
- Type Safety - Full TypeScript with strict mode
- Story Coverage - Document every components, state variant & properties, using docJs comments

## References
- [MDN HTML Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [CVA doc](https://cva.style/docs/getting-started/typescript)
- [Storybook doc](https://storybook.js.org/docs/writing-stories)
- [Figma Code connect](https://developers.figma.com/docs/code-connect/quickstart-guide/)
