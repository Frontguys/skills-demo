# Figma production workflow, design-landing-page

Spécificités de production pour une landing-page Frontguys. Charger ce fichier **en complément de** `_shared/figma-production-workflow.md` (squelette commun : pré-requis, setup, footer, pre-flight, screenshot, livraison, CTA final générique).

Particularité de la landing : pas d'arborescence de sections fixe. La page est composée **section par section** selon le brief, en s'appuyant sur le catalog de composants DS et la table « section → illustration ».

## Composants à mobiliser (en plus du header / footer racine)

Variable selon le brief. Cas les plus courants : `card / type=simple` ou `type=photo`, `Button / primary` + `secondary`, illustrations DS, `profileBanner` (CTA final). Récupérer les keys dans `design-system → components-catalog.md`.

## Visuel sémantique par section

Choisir une illustration parmi celles de `design-system → illustrations.md`. **La table « section → illustration » prime** (ne pas piocher au hasard).

**Sizing obligatoire** : l'instance importée a une taille native (≈100×100). Toujours `resize` selon le type de section. **Canon hero = 350 × 350.** Cf. `illustrations.md § Dimensions par type de section`.

## Section par section

Voir `_shared/figma-production-workflow.md § 4` pour le pattern d'appel MCP par section.

Particularités landing :
- L'alternance des fonds est plus libre que sur les autres pages (article a un body unique, case-study a une séquence fixe). Garder une cohérence light : `subtle` (hero) → `default` → `default-alt` → `fade` → `accent` éventuellement pour une section signature.
- Pas de dark, jamais. Cf. `_shared/figma-anti-patterns.md § Modes`.

## CTA final via profileBanner (spécificité landing)

Contrairement aux autres pages qui utilisent la recette `Button secondary + Button primary` du `_shared § 5`, la landing-page utilise le `profileBanner` comme CTA final. **Ne pas appliquer la recette CTA générique du squelette pour cette page.**

Le `profileBanner` est un **enfant d'une `Section`** (fond + padding `base-20`/`base-24`), jamais un enfant direct de la frame racine. Dans la section, `pb.layoutSizingHorizontal='FILL'` (après `appendChild`) le met à la largeur de contenu (1248 Desktop = 1440 − 2×96), aligné avec les `cards-grid`. Appendé à la racine (padding 0), il deviendrait pleine largeur 1440 et serait désaligné.

Recette complète : `design-system → components-catalog.md § Recette profileBanner`. Voir également `_shared/figma-production-workflow.md § 6`.

## Screenshot de contrôle (en plus de la checklist générique)

- Alternance des fonds visible et cohérente avec le rôle de chaque section
- Illustrations bien placées et dimensionnées selon `illustrations.md`
- **`profileBanner` / bannière CTA dans une section** (largeur de contenu 1248), pas en pleine largeur racine

## Livraison (en plus du § 10 générique)

- Justification sémantique des illustrations choisies (lien avec le rôle de la section)
- Si IA mentionnée, confirmer ancrage conviction 5 et pattern Human-in-the-loop
