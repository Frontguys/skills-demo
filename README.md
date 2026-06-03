# Skills demo

Frontguys meetup demo: showing the difference between Claude Code **without** and **with** Frontguys skills, using the same design-to-dev exercise.

## Structure

```
.
├── frontguys/                  # The "frontguys" Claude plugin (skills)
│   ├── .claude-plugin/
│   │   └── plugin.json
│   ├── _shared/                # Shared Figma references across skills
│   └── skills/
│       ├── design-frontguys/   # Brand identity (voice, personas, positioning)
│       ├── design-system/      # Tokens, components, Figma bindings
│       ├── design-landing-page/# Landing page composition in Figma
│       ├── a11y-rgaa/          # RGAA / WCAG expert (source of truth)
│       ├── a11y-rgaa-audit/    # Compliance audits & reports
│       └── a11y-specs/         # Operational a11y specs (tickets, annotations)
│
├── .claude-plugin/
│   └── marketplace.json        # Local marketplace exposing the frontguys plugin
│
├── demo-without-skills/        # Demo 1 - design-to-dev WITHOUT skills (empty workspace)
└── demo-with-skills/           # Demo 2 - same exercise, frontguys plugin enabled
  └── .claude/settings.json   #   -> registers the marketplace + enables the plugin
```

## Run the demo

The plugin is enabled **per folder**: the `.claude/settings.json` file in a directory applies to the tree from which Claude is launched.

### Demo 1 - without skills

```bash
cd ./demo-without-skills/
direnv allow 
direnv exec . claude
```

No skill is loaded. Ask Claude to implement the mockup in code "from scratch".

### Demo 2 - with skills

```bash
cd ./demo-with-skills/
direnv allow
direnv exec . claude
```

At startup, Claude registers the local marketplace and enables the `frontguys` plugin.
Check with `/plugin` (the skills should appear). Run the same exercise again:
Claude then relies on brand identity, the design system, development practices, and accessibility rules.

> If the plugin does not load automatically, add it once via `/plugin` ->
> *Add marketplace* -> path `../.claude-plugin`, then enable `frontguys`.

## Resources

- **Figma mockup**: https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/Test_BrandOS

- **Design generation prompt**
  > Create a frame containing a contact form page for Frontguys website visitors in: https://www.figma.com/design/2k7RpjO26FVhFYDF7JmxXO/Test_BrandOS?node-id=398-1330
  > On this page, add a hero section, a block allowing visitors to contact an expert for discussion, and a block describing our response commitments and contact information.
  
  -> x2 without skills and with skills in parallel + Figma check design
- **A11y specs prompt**
  > Add accessibility specs to the Figma mockup.
- **Design-to-code prompt**
  > Implement the web page from this mockup https://www.figma.com/design/xxx, and create reusable React components matching those in Figma.