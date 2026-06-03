---
version: "alpha"
name: "Frontguys"
description: "Design system Frontguys — source de vérité unique pour couleurs, typographie, spacing, composants, illustrations et keys Figma. Consommé par tous les skills de production web et design (create-landing-page, create-slide-deck, create-web-section, write-copy, etc.)."

colors:
  # Backgrounds (résolus)
  background-default:      "#FFFFFF"
  background-subtle:       "#E9F9F9"
  background-default-alt:  "#F9FAFB"
  # Foregrounds (HEX à compléter via sync-tokens depuis src/tokens/colors.json — voir Sources & Sync)
  foreground-default:      "#1A1A1A"   # 🟡 valeur probable, à vérifier (texte principal)
  foreground-subtle:       "#5C5C5C"   # 🟡 valeur probable (texte secondaire)
  foreground-interactive:  "#0066CC"   # 🟡 valeur probable (liens)
  foreground-alternative:  "#3B7B7A"   # 🟡 valeur probable (accents)
  foreground-default-invert: "#FFFFFF" # texte sur fond sombre
  # Brand
  brand-primary:           "#3B7B7A"   # 🟡 watery green — à vérifier

typography:
  surtitle:
    fontFamily: "Reddit Sans"
    fontSize: 16px
    fontWeight: 400
    description: "Eyebrows en MAJUSCULES, surtitle de section"
  heading-2:
    fontFamily: "Reddit Sans"
    fontSize: 40px
    fontWeight: 500
    description: "H1 hero, H2 sections principales"
  heading-3:
    fontFamily: "Reddit Sans"
    fontSize: 32px
    fontWeight: 500
    description: "Numéros 01-04, titres internes"
  subtitle:
    fontFamily: "Reddit Sans"
    fontSize: 20px
    fontWeight: 400
    description: "Notre lecture, Ce que cela implique"
  body-1:
    fontFamily: "Reddit Sans"
    fontSize: 18px
    fontWeight: 400
    description: "Nav, sous-titres section"
  body-2:
    fontFamily: "Reddit Sans"
    fontSize: 16px
    fontWeight: 400
    description: "Corps éditorial, implications"
  caption-1:
    fontFamily: "Reddit Sans"
    fontSize: 14px
    fontWeight: 500
    description: "Badges expertise, métadonnées"
  caption-2:
    fontFamily: "Reddit Sans"
    fontSize: 12px
    fontWeight: 400
    description: "Mentions légales, sources"

rounded:
  lg: 8px

spacing:
  base-1:  4px    # Tiny gap (icon + text)
  base-2:  8px    # Stat value → caption gap
  base-3:  12px   # Padding bouton
  base-4:  16px   # Gap titre ↔ sous-titre, gap entre CTAs
  base-6:  24px   # Gap dans une colonne (header → body)
  base-8:  32px   # Gap entre cards d'une grille
  base-10: 40px
  base-12: 48px   # Gap header ↔ grille d'une section
  base-14: 56px
  base-20: 80px   # Section padding vertical standard
  base-24: 96px   # Section padding horizontal standard

components:
  button-primary:
    backgroundColor: "{colors.brand-primary}"
    textColor: "{colors.foreground-default-invert}"
    rounded: "{rounded.lg}"
    padding: 12px
  button-secondary:
    backgroundColor: "{colors.background-default}"
    textColor: "{colors.foreground-default}"
    rounded: "{rounded.lg}"
    padding: 12px
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.foreground-default-invert}"
    rounded: "{rounded.lg}"
    padding: 12px
  card-simple:
    backgroundColor: "{colors.background-default}"
    textColor: "{colors.foreground-default}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-photo:
    backgroundColor: "{colors.background-default}"
    textColor: "{colors.foreground-default}"
    rounded: "{rounded.lg}"
    padding: 24px
  section-default:
    backgroundColor: "{colors.background-default}"
    padding: 80px
  section-subtle:
    backgroundColor: "{colors.background-subtle}"
    padding: 80px
  section-default-alt:
    backgroundColor: "{colors.background-default-alt}"
    padding: 80px
---

# DESIGN.md — Frontguys

> Source de vérité unique du design system Frontguys.
> Ce fichier suit le [format DESIGN.md de Google Labs](https://github.com/google-labs-code/design.md) (spec alpha) — il combine tokens machine-readable (YAML frontmatter) et prose human-readable (markdown body) avec des extensions custom pour intégrer les `fileKeys` Figma, les `keys` de composants et les illustrations sémantiques.

## Overview

Frontguys est une agence design + dev qui structure des design systems et livre des produits numériques cohérents. L'identité visuelle traduit ces valeurs : **simple, humble, authentique**.

L'UI s'appuie sur une palette de fonds clairs, doux et alternés (jamais de dark brutal), une typographie générous (Reddit Sans en headings + body, Inter Regular comme fond de secours) et une seule couleur d'accent (brand primary watery green). Les illustrations sont éditoriales, narratives, légèrement géométriques.

**Principes** :

- Cohérence absolue : aucune valeur en dur, tout passe par les tokens définis ici.
- Mode light prioritaire ; le dark mode est en cours d'harmonisation (🟡 — cf. Brand/Visual/Modes Light Dark).
- Alternance subtile de fonds plutôt que contrastes francs.
- Le brand primary (watery green) est rare et sémantique : eyebrows, badges, accent. Pas de fond plein primary.

## Colors

### Backgrounds

| Token | Valeur | Usage |
|-------|--------|-------|
| `background-default` | `#FFFFFF` | Sections « claires » (Enjeux, Expertises, Cas clients, conv01/03) |
| `background-subtle` | `#E9F9F9` | Hero, CTA Banner, _cta (mint accent) |
| `background-default-alt` | `#F9FAFB` | Stats, Expert, Parcours, conv02/04 (alt subtil) |

### Foregrounds

| Token | Valeur | Usage |
|-------|--------|-------|
| `foreground-default` | 🟡 `#1A1A1A` | Texte principal (H1, H2, body) |
| `foreground-subtle` | 🟡 `#5C5C5C` | Texte secondaire, captions |
| `foreground-interactive` | 🟡 `#0066CC` | Liens, éléments interactifs |
| `foreground-alternative` | 🟡 `#3B7B7A` | Numéros, accents visuels |
| `foreground-default-invert` | `#FFFFFF` | Texte sur fond sombre |

### Brand

| Token | Valeur | Usage |
|-------|--------|-------|
| `brand-primary` | 🟡 `#3B7B7A` | Eyebrows, badges, Surtitle, boutons primary |

> 🟡 Les valeurs résolues des `foreground-*` et `brand-primary` sont à vérifier (synchronisation depuis `src/tokens/colors.json` Gitlab via le skill `sync-tokens`). Tant que la sync n'a pas eu lieu, ces valeurs sont des estimations probables.

### Backgrounds, accent et états

Présents dans la lib Foundation - Tokens, à utiliser pour les CTA accentués et les états système.

| Token | Usage |
|-------|-------|
| `background/accent` | Fond accent fort (= `brand/primary` teal). CTA primary, hero accent zone |
| `background/accent-hover` / `accent-active` / `accent-disabled` | États interactifs du fond accent |
| `background/fade` | Fond pastel doux (lavande pâle en light mode). Section formulaire, value props closing |
| `background/fade-hover` | État hover du fade |
| `background/error` / `warning` / `success` / `info` | Fonds d'alerte / notification / banner d'état formulaire |

### Borders

Système complet de bordures sémantiques.

| Token | Usage |
|-------|-------|
| `border/default` | Bordure neutre par défaut (cards, conteneurs) |
| `border/subtle` | Bordure discrète (séparateurs, dividers) |
| `border/interactive` / `interactive-hover` / `interactive-active` / `interactive-disabled` | Bordures des éléments interactifs (boutons secondary, inputs focus) |
| `border/accent` | Bordure d'accent |
| `border/error` / `warning` / `success` / `info` | Bordures d'état (input en erreur, alert) |

### Foregrounds, états interactifs et système

Compléments à la palette foreground (au-delà de `default` / `subtle` / `interactive` / `alternative` / `default-invert`).

| Token | Usage |
|-------|-------|
| `foreground/interactive-hover` / `interactive-active` / `interactive-disabled` | États du foreground interactif (liens, labels actionnables) |
| `foreground/disabled` | Texte désactivé |
| `foreground/error` / `warning` / `success` / `info` | Couleur de message d'état |

### Brand, couleurs étendues

| Token | Usage |
|-------|-------|
| `brand/primary` | Watery green principal pour eyebrows, badges, boutons primary |
| `brand/secondary` | 🟡 Couleur secondaire de marque (à investiguer, usage spécifique) |
| `brand/complementary` | 🟡 Couleur complémentaire de marque (à investiguer) |

## Modes (light / dark)

La collection `Semantic` du DS expose deux modes : `light` et `dark`. C'est un fait technique : chaque variable sémantique (`background/default`, `foreground/default`, `border/default`, etc.) a une valeur différente selon le mode actif.

**Convention Frontguys actuelle : LIGHT mode partout, sur tous les templates** (landing, listing, article, case-study, formation-detail, contact). Aucune page produite aujourd'hui n'utilise le mode dark. Tous les skills `design-*-page` doivent rester en light par défaut.

Le mode dark reste disponible dans la lib pour un futur theme switcher mais n'est pas mobilisé en production. **Aucun appel à `setExplicitVariableModeForCollection(_, darkMode.modeId)` ne doit apparaître dans un skill de production.** Si on en voit un, c'est un bug à corriger.

### Différenciation visuelle entre sections (light only)

Pour rythmer une page sans bascule de mode, alterner uniquement les bg fills light du DS :

- `background/default` (blanc)
- `background/subtle` (mint pastel)
- `background/default-alt` (gris très clair)
- `background/fade` (lavande pâle)
- `background/accent` (teal, réservé à un hero accent occasionnel, texte en `foreground/default-invert`)

Toutes ces variables résolvent vers des couleurs claires en mode light. L'alternance visuelle suffit largement à structurer une page longue (article, cas client, etc.).

### Recette technique (pour usage futur uniquement)

Si un jour le besoin d'un theme switcher apparaît, le code de bascule existe :

```js
const v = await figma.variables.importVariableByKeyAsync('875d5c10feec64bb35c888f613c92408b04e5cec');
const collection = await figma.variables.getVariableCollectionByIdAsync(v.variableCollectionId);
const targetMode = collection.modes.find(m => m.name === 'dark');
frame.setExplicitVariableModeForCollection(collection, targetMode.modeId);
```

**Ne pas l'utiliser en production aujourd'hui.** Garder pour mémoire.

## Typography

### Fonts à loader avant toute production

```js
await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });       // défaut Figma — toujours en premier
await figma.loadFontAsync({ family: 'Reddit Sans', style: 'Regular' }); // body éditorial
await figma.loadFontAsync({ family: 'Reddit Sans', style: 'Medium' }); // headings, captions
```

### Rôles (Web)

| Rôle | Font | Style | Size | Cas d'usage |
|------|------|-------|------|-------------|
| `surtitle` | Reddit Sans | Regular | 16 | Eyebrows en MAJUSCULES |
| `heading-2` | Reddit Sans | Medium | 40 | H1 hero, H2 sections |
| `heading-3` | Reddit Sans | Medium | 32 | Numéros 01-04, titres internes |
| `subtitle` | Reddit Sans | Regular | 20 | "Notre lecture", "Ce que cela implique" |
| `body-1` | Reddit Sans | Regular | 18 | Nav, sous-titres section |
| `body-2` | Reddit Sans | Regular | 16 | Corps éditorial, implications |
| `caption-1` | Reddit Sans | Medium | 14 | Badges expertise, métadonnées |
| `caption-2` | Reddit Sans | Regular | 12 | Mentions légales, sources |

Le nommage canonique du repo (`heading-N`) prend précédence sur la nomenclature `Heading 2 / Heading 3` côté Figma.

### Slides

La typographie pour les présentations vit dans une librairie distincte (`Foundation - Typography Slides`, fileKey `zxUFGOje9V4PRX6SsPec6O`). Pas encore exportée en JSON — pour produire une slide Figma, requêter Figma MCP directement sur ce fileKey.

## Layout

### Spacing — échelle base-N (multiples de 4)

| Variable | Valeur | Cas d'usage |
|----------|--------|-------------|
| `base-1` | 4px | Tiny gap (icon + text) |
| `base-2` | 8px | Stat value → caption gap |
| `base-3` | 12px | Padding bouton |
| `base-4` | 16px | Gap titre ↔ sous-titre, gap entre CTAs |
| `base-6` | 24px | Gap dans une colonne (header → body) |
| `base-8` | 32px | Gap entre cards d'une grille |
| `base-10` | 40px | — |
| `base-12` | 48px | Gap header ↔ grille d'une section |
| `base-14` | 56px | — |
| `base-20` | 80px | **Section padding vertical standard** |
| `base-24` | 96px | **Section padding horizontal standard** |

> `spacing/none` (0) existe dans le DS Figma mais **n'est pas importable par key**. Pour une valeur 0, laisser le `0` natif (Figma considère 0 comme neutre).

### Mapping spacing → variable (snap rules)

Si la spec mentionne une valeur sans variable correspondante (ex: 120px), **snapper** à la variable la plus proche. **Jamais hardcoder**.

| Valeur cible | Variable |
|--------------|----------|
| 4 | `spacing.base-1` |
| 8 | `spacing.base-2` |
| 12 | `spacing.base-3` |
| 16 | `spacing.base-4` |
| 20–24 | `spacing.base-6` |
| 28–32 | `spacing.base-8` |
| 36–40 | `spacing.base-10` |
| 44–48 | `spacing.base-12` |
| 52–56 | `spacing.base-14` |
| 64–80 | `spacing.base-20` |
| 88–120 | `spacing.base-24` |

### Largeur max de contenu

- `--content-max-width` : `1200px` (décision 21-10-2025)
- `--content-prose-max-width` : utilisée par `Section` quand `condensed=true`

### Responsive — 4 breakpoints

Toute production Figma Frontguys se fait en 2 versions séparées : Desktop (1440px) et Mobile (320px).

| Breakpoint | padL/R | padT/B | gap |
|------------|--------|--------|-----|
| 1440 Max. | 96 | 72 | 56 |
| 1024 | 72 | 56 | 32 |
| 760 | 36 | 36 | 16 |
| 320 Min. | 16 | 36 | 32 |

### Mode typo selon le frame

- Frame **Desktop** (≥ 1024px) → mode `Large` sur la collection font/size
- Frame **Mobile** (< 1024px) → mode `Small` (à activer explicitement)

## Shapes

| Token | Valeur | Usage |
|-------|--------|-------|
| `rounded.lg` | 8px | Tous les corner radius custom (cards, boutons, frames) |

Un seul rayon — la marque est sobre, pas d'extravagance géométrique.

## Components

### Button

Trois variants :

| Variant | Background | Text | Cas d'usage |
|---------|------------|------|-------------|
| `button-primary` | `{colors.brand-primary}` | `{colors.foreground-default-invert}` | CTA principal |
| `button-secondary` | `{colors.background-default}` | `{colors.foreground-default}` | CTA secondaire (avec border) |
| `button-ghost` | transparent | `{colors.foreground-default-invert}` | **Réservé fonds sombres** (footer typiquement) |

### Card

| Variant | Description |
|---------|-------------|
| `card-simple` | Card éditoriale : titre + body |
| `card-photo` | Card avec image de couverture |
| `card-freeform` | Layout libre |
| `card-illustration` | Card avec illustration sémantique |

Toutes les cards utilisent `rounded.lg` (8px) et `padding: base-6` (24px) à l'intérieur.

### Section

| Variant `color` | Background |
|-----------------|------------|
| `semantic-background-default` | `{colors.background-default}` |
| `semantic-background-subtle` | `{colors.background-subtle}` |
| `semantic-background-default-alt` | `{colors.background-default-alt}` |

Padding vertical par défaut : `base-20` (80px). Horizontal : `base-24` (96px) sur Desktop.

### Header & Footer

Composants DS racine, **toujours instanciés** depuis la librairie Foundation - Web Components. Jamais clonés ni reconstruits.

### Autres composants

`profileBanner` (contact expert), `link` (inline/standalone/back), `logotype`. Cf. **Component Keys** ci-dessous pour les références Figma.

## Do's and Don'ts

### ✅ Do

- Utiliser systématiquement les tokens via leurs noms sémantiques (`{colors.brand-primary}`, jamais `#3B7B7A` en dur).
- Respecter l'alternance canonique de fonds (cf. **Alternance & Règles d'usage**).
- Instancier les composants DS racine (header, footer, illustrations) plutôt que les recréer.
- Charger les 3 fonts (Inter Regular + Reddit Sans Regular + Reddit Sans Medium) AVANT toute manipulation de texte.
- Tout texte custom doit avoir un `textStyleId` du DS.

### ❌ Don't

- Hardcoder une valeur de couleur, spacing, radius, font-size.
- Utiliser `button-ghost` sur fond clair (`default` / `subtle` / `default-alt`) — invisible, illisible.
- Cloner header, footer ou une illustration depuis un autre fichier.
- Hardcoder une illustration en SVG (toujours utiliser une instance de la librairie).
- Pousser un élément par un padding sur lui-même (utiliser `itemSpacing` du parent).
- Imbriquer un wrapper de section dans un autre.

---

# Extensions Frontguys

> Les sections ci-dessous étendent le format DESIGN.md alpha avec des données spécifiques à Frontguys (fileKeys Figma, keys de composants, illustrations indexées). Le linter `npx @google/design.md lint` les préserve sans erreur ("Unknown section heading: Preserve").

## Libraries (Figma)

5 librairies Foundation publiées. **Toutes sont normalement activées dans tous les fichiers Figma de l'organisation Frontguys** — donc importables par key depuis n'importe quel fichier de l'org.

| Librairie | fileKey | Contenu |
|-----------|---------|---------|
| Foundation - Web Components | `CxcxtE8sbs8ugVSkfZs1Wp` | Composants UI racine (header, footer, Button, card, profileBanner, link, logotype) |
| Foundation - Icons & Illustrations | `DgrQtY2Ua2ULm1xyqcKAd0` | 140+ illustrations standalone (target, idea, rocket, planning, etc.) et icônes |
| Foundation - Tokens (alias Design System — Colors) | `sudoHypKpnMktYVplKcTt2` | Variables couleur (background, foreground, brand) |
| Foundation - Typography Web (alias Design System — Typography Web) | `DARJub5ezZ8Kr4hr24KGYm` | Text styles Web (Surtitle, Heading 2/3, Subtitle, Body 1/2, Caption 1/2) |
| Foundation - Typography Slides | `zxUFGOje9V4PRX6SsPec6O` | Text styles dédiés aux présentations |

### Si un import par key échoue

Probablement parce que la librairie n'est pas activée dans le fichier de l'utilisateur. **Ne pas contourner.** Demander à l'utilisateur :

> *« L'import de [variable / style / composant] a échoué — probablement parce que la librairie [Foundation - X] n'est pas activée dans ton fichier. Tu peux l'activer via Figma > panneau gauche > Libraries > rechercher [Foundation - X] > activer. Une fois fait, relance la demande. »*

## Component Keys (Figma)

### Variables couleur

| Variable | Key | Valeur résolue |
|----------|-----|----------------|
| `background/default` | `875d5c10feec64bb35c888f613c92408b04e5cec` | `#FFFFFF` |
| `background/subtle` | `d5940ec1ed5c97a47a8d10d63a5fd5ba055b4614` | `#E9F9F9` |
| `background/default-alt` | `5571f04917cf5f4fbf4998dbf2af358f82848a56` | `#F9FAFB` |
| `foreground/default` | `52de607a23b80d81727ac7720c87894f5bac30b7` | 🟡 |
| `foreground/subtle` | `a1f446fbc7d4a54dc1142d5b8f007d0d36dfd21a` | 🟡 |
| `foreground/interactive` | `a0063e900becf176c6c40a73b15379f0329f780c` | 🟡 |
| `foreground/alternative` | `26182d88ca3bea92dc89365ecbc182adad2544d7` | 🟡 |
| `foreground/default-invert` | `3136f5f2ba0acf9b5a2b8cd02cf5dfb178e86b18` | 🟡 |
| `brand/primary` | `07ddcef942e241195e7e29b5561305d4366f41e7` | 🟡 |
| `brand/secondary` | `2781f522563b58642baae8d7c70e34583169b4d4` | 🟡 |
| `brand/complementary` | `264ce0c2596ae98186b06b1ab7890ba5dc08da19` | 🟡 |
| `background/accent` | `20a4026b99cae4e8a037867aae852a69023b0c8b` | = brand/primary |
| `background/accent-hover` | `262b0d2ad353c9b90240e335ac1460c298f71573` | 🟡 |
| `background/accent-active` | `c083b22d260d7608ddc9effc4dd001927a1c15ce` | 🟡 |
| `background/accent-disabled` | `46dc3d507905528609ea5aa437f3ad40233e73ac` | 🟡 |
| `background/fade` | `c8e1c5b73c9e8f518c10db72a65d9f35a1126fe1` | 🟡 (lavande pâle light mode) |
| `background/fade-hover` | `2e6847ed44c10c0110c873a2eab58dfc9ce0e6ca` | 🟡 |
| `background/error` | `ead3ccc2afb2bf9a6197f9701564e24dc2f659bb` | 🟡 |
| `background/warning` | `09d8f5ab3bec2063115155749c7dfc32fe935e7c` | 🟡 |
| `background/success` | `217bde87d719c5276ce0da04273229b7e87181b0` | 🟡 |
| `background/info` | `8f821e0b8bac800a0e3188f46383b72d612dbd4d` | 🟡 |
| `foreground/interactive-hover` | `fe505efc997badc0372f18fda1477723af44292e` | 🟡 |
| `foreground/interactive-active` | `fc1f01ac335312945a237dd9f9356c54ffa2da34` | 🟡 |
| `foreground/interactive-disabled` | `a55e020cd83436191ecdf54f9b75c16f2541964a` | 🟡 |
| `foreground/disabled` | `ab491670f6621511269ff5c072c7c8b2476157e8` | 🟡 |
| `foreground/error` | `d5067947261750b3032a2b5d531ef70e309a8691` | 🟡 |
| `foreground/warning` | `2a1ba34470c9c65063b3f7fa43cbeb3bb8abce3f` | 🟡 |
| `foreground/success` | `28d2efa2b4a6c43538339fc534076d95ca282a2a` | 🟡 |
| `foreground/info` | `5a1d6429fabba9c1b2f4606f264fb1f81224af98` | 🟡 |
| `border/default` | `f532f101560ae0c14c18078875e0323530175ddb` | 🟡 |
| `border/subtle` | `5838679fc6dd4b9fc9eed30fb6f3fbae6419c999` | 🟡 |
| `border/interactive` | `c993dfd35ebb18ffebba89e57d83d7630e851eec` | 🟡 |
| `border/interactive-hover` | `2ed9797539a30499ebbc6d9ed6c97f6c713de3ce` | 🟡 |
| `border/interactive-active` | `ae5061841518cd15416e99a848367ec040562c80` | 🟡 |
| `border/interactive-disabled` | `d238959e956505f551b3f963ffcccf729fce615c` | 🟡 |
| `border/accent` | `4accfc36b75ac4e4598f1a35fb0670c8768a0be0` | 🟡 |
| `border/error` | `e8719b4648e2a26e681b267eaf5b751045b36ed4` | 🟡 |
| `border/warning` | `893ba6e145250f83004587898c80d55372d70981` | 🟡 |
| `border/success` | `3391f5c238175da2010f10a91a581e8233a8f8a1` | 🟡 |
| `border/info` | `1cd372b06e0ae3fa4ce5f048e9ce4ad3cc20c713` | 🟡 |

### Variables spacing

| Variable | Key | Valeur |
|----------|-----|--------|
| `spacing/base-1` | `03e3e56e0bd2e627c899d009007c3e77465b437e` | 4px |
| `spacing/base-2` | `dfbc5a7e5aa47a69f116c88db98258c6a09592dc` | 8px |
| `spacing/base-3` | `245b81c861484531df8d4230a35f0db721835b44` | 12px |
| `spacing/base-4` | `78e47e0c4e8bf09fafdf458c32f9f1e3824be33b` | 16px |
| `spacing/base-6` | `08dc7a6096ed004598e6ccbf63430a7334b05b27` | 24px |
| `spacing/base-8` | `0d77cdd1980adcdcedb5990f71606617f4ecbb1a` | 32px |
| `spacing/base-10` | `cef07181342c851e9530d0cb32f4ccdef20c6416` | 40px |
| `spacing/base-12` | `4621dc65836c8f7c31d7c36e74b74734177ce161` | 48px |
| `spacing/base-14` | `08a259d9c786e0d5f5f03724d0e4824d85bd52e1` | 56px |
| `spacing/base-20` | `bb31cf8d18ffd5fdbbed401ea1eb02de59993d4d` | 80px |
| `spacing/base-24` | `0761cd56f7b8071a2320414efe95692e0899cada` | 96px |

### Variables radius & sizing

| Variable | Key | Valeur |
|----------|-----|--------|
| `radius/lg` | `4e95e610fb3a025d80429d61a40c8a63d7e5f7c5` | 8px |
| `size/icon/small` | `22c5f7f29a8b8dfb7499cd2d10d77fdd071163fd` | (petit icon) |
| `size/icon/medium` | `01cee75092b6c3b62bad169e1f105653ff758ad5` | (default) |

### Text Styles Web

| Style | Key | Font + size |
|-------|-----|-------------|
| `Surtitle` | `3108baef9393e1b2654f1bc37fe18ec5cbe9803b` | Reddit Sans Regular 16 |
| `Heading 2` | `5339b4ee105e95efb1a5f7e0ba45d4a585c8cdac` | Reddit Sans Medium 40 |
| `Heading 3` | `b2488260f9b94725bbaa8e1d0d84e80a81392880` | Reddit Sans Medium 32 |
| `Subtitle` | `e14816f4b50251ce15e2b7835a77017d3fe5e238` | Reddit Sans Regular 20 |
| `Body 1` | `d2d29d67769ccca103e6d01691e3bf4a0924497c` | Reddit Sans Regular 18 |
| `Body 2` | `e151362051bdb467351d624e2ef56ff168e37a5a` | Reddit Sans Regular 16 |
| `Caption 1` | `9ef38e0a60d423b0333c70eb9780b75158da0921` | Reddit Sans Medium 14 |
| `Caption 2` | `ccda440d10c95a96d7a3c77b32edde1b088e7e6e` | Reddit Sans Regular 12 |

### Composants UI

| Composant | Key (variant ou set) | Type Figma | Property pattern |
|-----------|----------------------|------------|------------------|
| `header` (set) | `acd1461008e80aae31f30c1e6706467afbf41ef1` | COMPONENT_SET | `device`, `State` |
| `header / device=desktop, State=default` | `aed1fa53594ae22bd0c4cfe77275342c64bc3888` | COMPONENT (variant) | — |
| `footer` (set) | `f7c5672fbf3bb0c19ec79c543564f1e4ab12ac29` | COMPONENT_SET | `device` |
| `footer / device=desktop` | `11685218c229bf367fd4fa4c2634054768b66e3f` | COMPONENT (variant) | — |
| `footer / device=mobile` | `c6b697dafa8f425b785a0a32c3be98b8c19bff02` | COMPONENT (variant) | — |
| `Button / primary` | `99a50e7d4f2caa3b132ae04e3ba317f4a0a51698` | COMPONENT (variant) | `CTA#2209:0`, `Pictogram#2306:0`, `Type`, `Size`, `State`, `Icon`, `Label` |
| `Button / secondary` | `93b3a4d9ee2c7e2b6edecd0c995de566689446f7` | COMPONENT (variant) | idem Button primary |
| `card / type=simple, state=default` | `53179c715dcb1d5b829023730966d8c2f080f6b4` | COMPONENT (variant) | `Title#2524:14`, `Text#2524:19`, `subTitle#2995:3`, `Show badge 1/2/3`, `Icon#2524:29`, `Illustration#3452:0`, `bulletList#2995:11` |
| `card / type=photo, state=default` | `67f0838a158d42a14b55bde141bd3975ff083e51` | COMPONENT (variant) | idem card simple |
| `profileBanner / State=contact, Viewport=desktop` | `dddf62e8ccde55b774e31f85635fc21b60a01ecf` | COMPONENT (variant) | `Title#3509:0`, `Name#3509:3`, `jobTitle#3509:6`, `Show Button#3509:9`, `Show Button 2#3509:12` |
| `logotype / type=default, Viewport=Desktop` | `fdcb4fe8a2dd8514542b802c4953e1b6dd8e7560` | COMPONENT (variant) | — |
| `link / standalone` | `dfc86271583c7664d84e536d4e0cdc2b08715be7` | COMPONENT (variant) | `Inline Text#2764:0`, `Standalone Text#2764:7`, `Icon#2519:7`, `state`, `type`, `Indicator` |

> Les suffixes de property pattern (`Title#2524:14`) peuvent changer entre versions du composant. **Ne pas les hardcoder dans le code applicatif** : lister dynamiquement via `Object.keys(inst.componentProperties)` à l'exécution.

## Illustrations (Figma — sémantique)

La librairie `Foundation - Icons & Illustrations` (`DgrQtY2Ua2ULm1xyqcKAd0`) contient **140+ illustrations standalone**. Sélection des plus utilisées dans les contextes Frontguys, par sémantique :

| Illustration | Key | Cas d'usage typique |
|--------------|-----|---------------------|
| `target` | `949b830257738613000392a93944cacfa07536d2` | Objectifs, focalisation |
| `idea` | `30ebb69b4565329791c4a07e570177c90d976c88` | Insights, propositions de valeur |
| `planning` | `056d6a9c706052a8a1c8241919420fc31b9334d8` | Cadrage, roadmap |
| `desktop-chart` | `84b40592375b0695dcc7d668ee632311a0f054b1` | Stats, mesure, performance |
| `thumb-up` | `02fea49e7b26524270fe85bcdb47e151323e41ff` | Validation, satisfaction |
| `megaphone` | `d52cb7853b7ba390469344a7fc3476c3c39ee1aa` | Communication, marketing |
| `rocket` | `56c7bb7e5d3f6b290859bcf116b1523731203d45` | Lancement, accélération |
| `flash` | `f1ffcb0ac65edd25a20e487ed41abdfff6eb5974` | Rapidité, impact |
| `puzzle` | `9477581de7d280013b962dd0097b78733a886ebe` | Modularité, assemblage |
| `chart` | `094fbc7b5ef23df2d65917f83377100068caed53` | Données, croissance |
| `medal` | `54115adfb5d163dc75d22f2e91c45eac3e87d10c` | Excellence, distinction |
| `trophy` | `930efab017dd1f233a9a8d7fe1d50b8cd117770b` | Réussite, performance |
| `Calendar` | `4529a7eb06b008b78d8a9fc55871649d7a1523f0` | Planification, événement |
| `search` | `c4e8e6ce9b6ab7da3ccc0bcfb3d7f8d48c901ded` | Audit, diagnostic |
| `Arborescence` | `2847e43461116b5277d840f3749ca22a6223b95b` | Structure, design system |
| `dev` | `5c26d390db84bccb768468d624c13b298e011ef3` | Développement, code |
| `draw` | `373990d68c115f0a61cb1f4b86930eb3fb9034f8` | Design, création |
| `book` | `0ad66c9ed87d7bad7faa80685315e8a4f738e7bf` | Formation, ressource |
| `wheelchair` | `1b2b643439c7b1926e5750d27670a918a15598c5` | Accessibilité |
| `globe-heart` | `8ee1ba5652dee34a346c7e0e1995ffd1d1d94718` | Inclusion, web pour tous |

### Correspondance section → illustration

| Section / contenu | Illustrations pertinentes |
|-------------------|---------------------------|
| Hero (page d'accueil, accroche métier) | `target`, `idea`, `rocket`, `flash` |
| Hero (page formation) | `book`, `draw` |
| Stats / mesure de performance | `desktop-chart`, `chart`, `medal`, `trophy` |
| Expertises (design system) | `Arborescence`, `puzzle`, `dev`, `draw` |
| Expertises (transformation) | `planning` |
| Section contact / RDV | `Calendar` |
| Accessibilité | `wheelchair`, `globe-heart` |

### Si une illustration nécessaire n'est pas indexée

Inspecter la librairie via `Figma:use_figma` sur le fileKey `DgrQtY2Ua2ULm1xyqcKAd0` (page `Illustrations`, id `0:1`) pour récupérer la key, puis **mettre à jour ce DESIGN.md** pour les prochaines productions.

## Alternance & Règles d'usage

### Séquence canonique d'alternance des fonds

Sur toute page longue Frontguys, suivre cette séquence pour rythmer subtilement sans contraste brutal :

```
default → subtle → default-alt → default → default-alt → default → default-alt → subtle → footer
```

Pas de dark/light brutal. Subtil et toujours light-based.

### Règles d'usage des boutons selon le fond

| Fond de section | Primary | Secondary | Ghost |
|-----------------|---------|-----------|-------|
| `background-default` (#FFFFFF) | ✅ | ✅ | ❌ |
| `background-subtle` (#E9F9F9) | ✅ | ✅ | ❌ |
| `background-default-alt` (#F9FAFB) | ✅ | ✅ | ❌ |
| Fond sombre (rare, footer) | ✅ | ❌ | ✅ |

**Règle absolue** : `button-ghost` (bouton avec border seule, sans fond) est conçu pour les fonds sombres uniquement. **Jamais sur fond clair** — il devient invisible / illisible.

### Règle d'espacement — itemSpacing du parent, jamais padding sur l'enfant

L'espacement entre éléments d'un auto-layout est géré **par le parent via `itemSpacing`**, jamais par des paddings/marges sur les enfants.

Un padding sur un frame est légitime uniquement pour **l'espace intérieur du frame lui-même** (entre son bord et son contenu) — pas pour pousser le frame par rapport à ses frères.

## Sources & Sync

> **Important pour les LLM consommateurs** : TokensBrücke est un outil **upstream** (amont du pipeline), **opéré uniquement par l'équipe DS Frontguys**. Il ne fait **pas** partie du workflow de production d'assets (landing, slide, section). **Ne jamais demander à un utilisateur d'activer, lancer ou invoquer TokensBrücke** — c'est une information d'architecture, pas une action côté production. Si un token manque, voir `SKILL.md § Mode 1` pour la procédure correcte (fallback ou demande à l'équipe DS).

### Chaîne de fraîcheur

```
Figma (source canonique)
   ↓ TokensBrücke (outil upstream — opéré par l'équipe DS uniquement, hors workflow de prod)
src/tokens/*.json (Gitlab repo frontguys/accessibility-website, format DTCG)
   ↓ Terrazzo CLI (pnpm build-tokens)
CSS variables (build) + skill sync-tokens
   ↓
DESIGN.md (ce fichier — source de vérité opérationnelle pour LLM)
```

### Fichiers JSON sources (Gitlab)

- `src/tokens/colors.json` — 1467 lignes, format DTCG, sortie TokensBrücke
- `src/tokens/text-styles.json` — 271 lignes
- `src/tokens/github-primer-tokens.json` — référence externe (Primer), à utiliser avec parcimonie

### Cadence de re-sync

90 jours. Le skill `sync-tokens` (`186cb4ea-770b-4a05-b423-5d06c9ebd6aa`) re-génère les sections Colors / Typography / Spacing de ce DESIGN.md depuis les JSON Gitlab.

### Métadonnées

- **last_synced** : 2026-05-20 (initial)
- **next_sync_due** : 2026-08-18
- **figma_canonical_sources** : `sudoHypKpnMktYVplKcTt2` (colors) · `DARJub5ezZ8Kr4hr24KGYm` (typography web) · `zxUFGOje9V4PRX6SsPec6O` (typography slides)
- **operator** : Nicolas Guy
- **format** : DESIGN.md alpha (https://github.com/google-labs-code/design.md)

## Outillage

Ce DESIGN.md peut être consommé par la CLI Google Labs :

```bash
# Lint (WCAG contrast, broken refs, structure)
npx @google/design.md lint DESIGN.md

# Export Tailwind v4 (CSS)
npx @google/design.md export --format css-tailwind DESIGN.md > theme.css

# Export DTCG (W3C Design Tokens)
npx @google/design.md export --format dtcg DESIGN.md > tokens.json
```

## Changelog

| Date | Version | Changements |
|------|---------|-------------|
| 2026-05-20 | 1.0.0 | Création initiale. Format DESIGN.md alpha. Tokens issus du frontguys-bindings-protocol-KJ0gCGFho0 (v1.4) + Tokens Snapshot (archivé). Extensions custom : Libraries, Component Keys, Illustrations, Alternance & Règles d'usage, Sources & Sync. |
