---
type: components-catalog
status: ✅ stable
last_synced: 2026-05-26
source_of_truth: design-system.md
---

# Catalogue de composants — Frontguys

> Catalogue ciblé pour la production. La source de vérité complète vit dans `design-system.md` (§ Component Keys). Ce fichier répète les keys et property patterns pour usage rapide.

## Composants UI (librairie `Foundation - Web Components`)

**fileKey** : `CxcxtE8sbs8ugVSkfZs1Wp`

### Header & Footer (racine — toujours instances, jamais clones)

| Composant | Key | Type | Property pattern |
|-----------|-----|------|------------------|
| `header` (set) | `acd1461008e80aae31f30c1e6706467afbf41ef1` | COMPONENT_SET | `device`, `State` |
| `header / device=desktop, State=default` | `aed1fa53594ae22bd0c4cfe77275342c64bc3888` | COMPONENT | — |
| `footer` (set) | `f7c5672fbf3bb0c19ec79c543564f1e4ab12ac29` | COMPONENT_SET | `device` |
| `footer / device=desktop` | `11685218c229bf367fd4fa4c2634054768b66e3f` | COMPONENT | — |
| `footer / device=mobile` | `c6b697dafa8f425b785a0a32c3be98b8c19bff02` | COMPONENT | — |

### Buttons

| Variant | Key | Property pattern |
|---------|-----|------------------|
| `Button / primary` | `99a50e7d4f2caa3b132ae04e3ba317f4a0a51698` | `CTA#2209:0`, `Pictogram#2306:0`, `Type`, `Size`, `State`, `Icon`, `Label` |
| `Button / secondary` | `93b3a4d9ee2c7e2b6edecd0c995de566689446f7` | idem Button primary |

**Règle CTA** : 1 primary max par section. Verbes impératifs uniquement (`Découvrez`, `Profitez`, etc. — cf. `agents/frontguys-brand-agent/references/voice-vocabulary.md`).

**Règle bouton ghost** : `button-ghost` est interdit sur fonds clairs (`default`, `subtle`, `default-alt`). Réservé fonds sombres (footer).

### Cards

| Variant | Key | Property pattern |
|---------|-----|------------------|
| `card / type=simple, state=default` | `53179c715dcb1d5b829023730966d8c2f080f6b4` | `Title#2524:14`, `Text#2524:19`, `subTitle#2995:3`, `Show badge 1/2/3`, `Icon#2524:29`, `Illustration#3452:0`, `bulletList#2995:11` |
| `card / type=photo, state=default` | `67f0838a158d42a14b55bde141bd3975ff083e51` | idem card simple |
| `card / type=freeform, state=default` | `ce86c725d73e7f41ce473b1d153ae7ae037b0e72` | idem card simple. **⭐ Variant enrichi : toutes les props cohabitent visuellement** (Title, Text, subTitle, bulletList, 3 badges, Icon, Illustration). Cas d'usage canonique : listings formations (titre + description longue + « Ce que vous apprendrez : » + bulletList 4-5 items + badges niveau/durée/prix). |

ComponentSet parent (les 3 cards partagent le set) : `07db2ac2aff0e7df8eb6d1ddbf67acd703debb36`.

Tous les cards utilisent `rounded.lg` (8px) et `padding: base-6` (24px) à l'intérieur.

### Autres composants

| Composant | Key | Property pattern |
|-----------|-----|------------------|
| `profileBanner / State=contact, Viewport=desktop` | `dddf62e8ccde55b774e31f85635fc21b60a01ecf` | `Title#3509:0`, `Name#3509:3`, `jobTitle#3509:6`, `Show Button#3509:9`, `Show Button 2#3509:12` |
| `logotype / type=default, Viewport=Desktop` | `fdcb4fe8a2dd8514542b802c4953e1b6dd8e7560` | — |
| `link / standalone` | `dfc86271583c7664d84e536d4e0cdc2b08715be7` | `Inline Text#2764:0`, `Standalone Text#2764:7`, `Icon#2519:7`, `state`, `type`, `Indicator` |

### Composants étendus (formulaires, long-form, utilitaires)

Découverts lors de la retro-spec des templates de pages (article, formation detail, cas client, contact). 🟡 Les `property pattern` ne sont pas listés ici — inspecter dynamiquement via `Object.keys(inst.componentProperties)` à la première utilisation et mettre à jour ce tableau.

| Composant | Key | Type | Usage typique |
|-----------|-----|------|--------------|
| `input` (set) | `5a3d42b43cafc14e844275604249e5c896db889a` | COMPONENT_SET | Champ texte (Prénom, Nom, Email, Téléphone…) — formulaire contact |
| `textArea` (set) | `7477b7fcc092adf231b9df93f8b249abbae194f2` | COMPONENT_SET | Zone de texte multi-ligne (Message) — formulaire contact |
| `checkbox / default` | `e415cd360ff4dc64091fc6e2fef52b9c3413cfbe` | COMPONENT (variant) | Case à cocher (consentement RGPD). Autres states : `hover` `4...8a1a`, `checked` `6...2b18`, `error` `7...9292`, `disabled` `b...cfa4` |
| `label` (set) | `acc23ef0f129efa8e3cedd3cfc2668d0d82190eb` | COMPONENT_SET | Label de champ formulaire (au-dessus de l'input) |
| `alert` (set) | `479b5e2262b1851141e8268ac88128489db9144c` | COMPONENT_SET | Notification / état d'erreur de formulaire / message système |
| `badge` (set) | `1fa3f08b2e2a9c8c4d235bc3cf6fbe9400a9d4e6` | COMPONENT_SET | Petit badge (tag, status, level) pour meta-row formation, niveau d'expertise. Prop overridable côté instance : `Label#2995:19` (TEXT). Utilisé typiquement dans les `card / type=freeform` via override des badges nested (`Show badge 1/2/3 = true` + override de chaque `Label`). |
| `blockQuote` | `e0afcf883ff10505c58029d6d4a79f5bd6328921` | COMPONENT | ⭐ Pull-quote / citation longue dans un article éditorial |
| `List` | `4a8f833c03397a5bc19a0f24622c922abc4eaa4f` | COMPONENT | Liste à puces ou numérotée — corps d'article, programme formation, modalités |
| `aspectRatio` (set) | `1dbcac74a285c6182b8a8839221970d2359137eb` | COMPONENT_SET | Container ratio fixe (16:9, 4:3, 1:1) pour photo dans `card / type=photo` ou hero |
| `accordion / Collapsed/Default` | `3cf1cf1ff4707cc282980230074bd255a0b77a94` | COMPONENT (variant) | FAQ, programme formation déroulable. Autres états : `Expanded/Default` `c...a7de`, `Collapsed/Hover` `7...f8c0`, etc. (6 variants) |
| `mediaObject` (set) | `1f0215a8bdc99678bdc00009e1db6c4a024a4328` | COMPONENT_SET | Combo image + texte aligné (ligne de cas, témoignage) |

**Règle d'usage** : avant d'utiliser un de ces composants pour la première fois, exécuter un `use_figma` léger qui crée une instance jetable et retourne `Object.keys(inst.componentProperties)` + le `type` de chaque prop, puis renseigner le pattern dans ce tableau pour la suite.

## Note importante sur les `componentProperties`

Les suffixes de property pattern (`Title#2524:14`) peuvent changer entre versions du composant. **Ne pas les hardcoder dans le code applicatif** : lister dynamiquement via `Object.keys(inst.componentProperties)` à l'exécution.

### Types de props — distinction critique

Inspecter `inst.componentProperties` retourne pour chaque prop : `{ type, value }`. Les types sont :

| Type | Sémantique | Exemple Button |
|------|------------|----------------|
| `TEXT` | Contenu textuel d'un node TextNode dans le composant | `CTA#2209:0` = label du bouton |
| `VARIANT` | Choix dans une liste fermée (variantOptions) | `Type` = primary/secondary/ghost, `Label` = Yes/No |
| `BOOLEAN` | Affiche / masque un node | `Show badge 1#2995:22` = true/false |
| `INSTANCE_SWAP` | Échange une instance de composant imbriqué | `Pictogram#2306:0` = key d'icône |

⚠️ **Piège fréquent — confusion `Label` (VARIANT) vs `CTA` (TEXT)** :

Sur le Button Frontguys, `Label` est un VARIANT `Yes/No` (affiche ou masque le label) — **pas** le contenu texte. Le vrai contenu texte est `CTA#2209:0`. Donc :

```js
// ❌ MAUVAIS — Label est un VARIANT Yes/No, pas un TEXT
btn.setProperties({ Label: 'Planifiez un échange' });
// Résultat : le label reste « Label » par défaut, et VARIANT Yes/No reçoit
// une valeur invalide → erreur silencieuse possible.

// ✅ BON — CTA#2209:0 est la vraie prop TEXT
btn.setProperties({ 'CTA#2209:0': 'Planifiez un échange' });
```

**Toujours inspecter `Object.keys(inst.componentProperties)` ET les `type` avant le premier `setProperties()` sur un composant nouveau.**

## Règle d'or — composant DS toujours préféré à la reconstruction

> **Avant de construire un frame custom, vérifier toujours si un composant existe dans le catalog.**

Si la section visée correspond à un composant déclaré (`card / simple`, `card / photo`, `profileBanner`, `Button`, etc.), **instancier ce composant** plutôt que reconstruire from scratch. Cf. `bindings-protocol.md` § Anti-pattern majeur — Reconstruire un composant qui existe.

### Décision rapide

| Demande | Composant à mobiliser |
|---------|----------------------|
| Card de section (titre + body, optionnel : icône, illustration, sous-titre, badges) | **`card / type=simple`** |
| Card avec photo de couverture | **`card / type=photo`** |
| Card avec illustration centrale | **`card / type=illustration`** |
| Bannière de contact (photo + nom + jobTitle + 2 CTAs) | **`profileBanner`** |
| Bouton d'action | **`Button`** (variants primary/secondary/ghost) |
| Lien éditorial (inline ou standalone, avec ou sans icône) | **`link / standalone`** |
| Logo Frontguys | **`logotype`** |
| Header de page | **`header`** (instance racine, jamais reconstruit) |
| Footer de page | **`footer`** (instance racine, jamais reconstruit) |

**Si aucun composant ne correspond** → construire un frame custom conforme au bindings-protocol (tokens, helpers, pre-flight).

### Recette `card / simple` pour section value-props / axes / principes

**Pattern complet pour une grille horizontale de cards de même hauteur :**

```js
const cardComp = await figma.importComponentByKeyAsync('53179c715dcb1d5b829023730966d8c2f080f6b4');

// 1. PARENT — la row horizontale qui contient les cards
//    Configuration obligatoire pour cards de même hauteur (cf. bindings-protocol § Étape 6).
const grid = figma.createFrame();
grid.name = 'cards-grid';
grid.layoutMode = 'HORIZONTAL';
grid.primaryAxisSizingMode = 'FIXED';        // largeur fixe (stretchée par son parent VERTICAL)
grid.counterAxisSizingMode = 'AUTO';         // hauteur hug le plus grand enfant
grid.counterAxisAlignItems = 'STRETCH';      // ⭐ force tous les enfants à stretch en hauteur
grid.layoutAlign = 'STRETCH';                // la row remplit la largeur de son parent VERTICAL
grid.fills = [];
bindSpacing(grid, 'itemSpacing', 'spacing/base-8');

// 2. ENFANTS — chaque card du DS
function newCard({ title, text, subtitle }) {
  const inst = cardComp.createInstance();
  // ⚠️ Ne JAMAIS passer une valeur vide à une prop TEXT — sinon setProperties échoue
  const props = {
    'Title#2524:14': title,
    'Text#2524:19': text,
    'Show badge 1#2995:22': false,
    'Show badge 2#2995:32': false,
    'Show badge 3#2995:42': false,
  };
  if (subtitle) props['subTitle#2995:3'] = subtitle;
  inst.setProperties(props);
  inst.layoutGrow = 1;                       // ⭐ 1/N de la largeur (réparti équitablement)
  inst.layoutAlign = 'STRETCH';              // ⭐ stretch en hauteur (sécurité explicite)
  return inst;
}

// 3. Composition
for (const data of cardsData) grid.appendChild(newCard(data));
```

**Les trois lignes en ⭐ sont obligatoires** pour garantir que toutes les cards ont :

- la même largeur (1/N de la row, peu importe le nombre de cards)
- **la même hauteur** (celle de la card avec le contenu le plus long)

Omettre `counterAxisAlignItems='STRETCH'` sur le parent → les cards peuvent avoir des hauteurs différentes selon les défauts Figma et le contenu → visuel cassé.

Cf. `bindings-protocol.md` § Étape 6 — Règle d'or — cards alignées horizontalement = même hauteur obligatoire.

### Recette `card / type=freeform` (card enrichie listing formations)

**Pattern visuel** : titre + description longue + sub-titre intro + bulletList + 3 badges (niveau, durée, prix) + icône flèche oblique en haut à droite. Toutes les props du composant card sont activées simultanément. C'est la card « riche » pour catalogues de formations.

**Layout canonique** : grille 2×2 dans une section listing, cards de 616 px de large, hauteur autoadaptative selon le contenu.

```js
const cardComp = await figma.importComponentByKeyAsync('ce86c725d73e7f41ce473b1d153ae7ae037b0e72');

function makeFreeformCard(d) {
  const card = cardComp.createInstance();
  const props = card.componentProperties;
  const titleKey = Object.keys(props).find(k => /^Title/i.test(k) && props[k].type === 'TEXT');
  const textKey  = Object.keys(props).find(k => /^Text/i.test(k)  && props[k].type === 'TEXT');
  const subKey   = Object.keys(props).find(k => /^subTitle/i.test(k) && props[k].type === 'TEXT');
  const bullKey  = Object.keys(props).find(k => /^bulletList/i.test(k) && props[k].type === 'TEXT');
  const set = {};
  if (titleKey) set[titleKey] = d.title;
  if (textKey)  set[textKey]  = d.text;
  if (subKey)   set[subKey]   = d.subTitle;     // ex. "Ce que vous apprendrez :"
  if (bullKey)  set[bullKey]  = d.bullets.join('\n');
  // activer les 3 badges
  for (const k of Object.keys(props)) {
    if (props[k].type === 'BOOLEAN' && /^Show badge/i.test(k)) set[k] = true;
  }
  card.setProperties(set);

  // override du texte de chaque badge nested
  const badgeTexts = d.badges || [];
  const nestedBadges = card.findAll(n => n.type === 'INSTANCE' && /^badge \d/i.test(n.name));
  nestedBadges.forEach((b, i) => {
    if (i >= badgeTexts.length) return;
    const lk = Object.keys(b.componentProperties).find(k => /^Label/i.test(k) && b.componentProperties[k].type === 'TEXT');
    if (lk) { try { b.setProperties({ [lk]: badgeTexts[i] }); } catch(e) {} }
  });
  return card;
}

// Exemple d'usage : 4 formations
const formations = [
  {
    title: 'Cadrer l\'IA dans votre design system',
    text: 'Pour Head of Product & Design...',
    subTitle: 'Ce que vous apprendrez :',
    bullets: [
      'Diagnostiquer la dette IA-readiness de votre DS.',
      'Exporter des design tokens compatibles Copilot.',
      'Cadrer le workflow designer + IA générative.',
      'Garder la cohérence visuelle malgré la génération automatique.',
    ],
    badges: ['Niveau intermédiaire', '2 jours', '1 800 €'],
  },
  // ... 3 autres
];
```

**Règles d'or pour card freeform** :

- **Title** : nom de la formation, sans ponctuation finale, ≤ 8 mots
- **Text** : description longue, 2 à 4 phrases (≤ 20 mots / phrase), bénéfice côté lecteur
- **subTitle** : intro de la liste (« Ce que vous apprendrez : », « Quelques modules activables : »)
- **bulletList** : 4 à 5 items séparés par `\n`, chacun une phrase action
- **Badges** : exactement 3 (Niveau, Durée, Prix) ou 2 (selon contexte, mettre `Show badge 3` à false)
- **Icon par défaut** : `arrowOblique` (↗) en haut à droite, ne pas changer sauf demande
- **Largeur** : 616 px en grille 2×2 (sur 1248 px de contenu, base-8 = 32 entre cards)

⚠️ **Ne pas confondre avec `card / type=simple`**. Le variant `simple` rend bien aussi toutes les props mais la mise en forme est différente (plus compacte). Le `freeform` est conçu pour les listings enrichis comme celui des formations.

### Recette `Button` (label CTA correct)

```js
const btnComp = await figma.importComponentByKeyAsync('99a50e7d4f2caa3b132ae04e3ba317f4a0a51698');
const btn = btnComp.createInstance();
btn.setProperties({
  'CTA#2209:0': 'Planifiez un échange',  // le LABEL TEXT
  // 'Label': 'Yes',  // VARIANT — laissé à la valeur par défaut
  // 'Type': 'primary',  // VARIANT — laissé à la valeur par défaut
});
```

⚠️ **Jamais de label CTA générique** (« Label », « Bouton », « Cliquez ici »). Toujours un verbe impératif vouvoiement canonique — voir `agents/.../voice-vocabulary.md` (déléguer à `design-frontguys`).

### Recette `profileBanner` — TOUJOURS dans un container de section

> **Règle d'or : `profileBanner` (comme toute bannière / contenu de section) est un enfant d'une `Section`, jamais un enfant direct de la frame racine.** La frame racine a un padding de 0 → une bannière étirée (`FILL`) y devient pleine largeur (1440) et se désaligne des autres sections. Posée dans une section (padding horizontal `base-24` = 96), la même bannière étirée fait la **largeur de contenu (1248 px Desktop = 1440 − 2×96)**, alignée avec les `section-header` et les `cards-grid`.

Seuls le **header** et le **footer** sont des enfants directs de la frame racine en pleine largeur. Tout le reste — y compris le `profileBanner` — vit dans une section.

```js
// 1. SECTION container — porte le fond (alternance) + le padding standard,
//    exactement comme une section de cards. JAMAIS appendre la bannière à la racine.
const section = figma.createFrame();
section.name = 'section-cta';
section.layoutMode = 'VERTICAL';
section.primaryAxisSizingMode = 'AUTO';
section.counterAxisSizingMode = 'FIXED';
bindFill(section, 'background/subtle');                 // ou 'background/default-alt' selon l'alternance
bindSpacing(section, 'paddingTop',    'spacing/base-20');
bindSpacing(section, 'paddingBottom', 'spacing/base-20');
bindSpacing(section, 'paddingLeft',   'spacing/base-24');
bindSpacing(section, 'paddingRight',  'spacing/base-24');
bindSpacing(section, 'itemSpacing',   'spacing/base-12');
root.appendChild(section);
section.layoutSizingHorizontal = 'FILL';                // section pleine largeur (1440)

// 2. profileBanner — enfant de la SECTION, étiré à la largeur de CONTENU (1248)
const pbComp = await figma.importComponentByKeyAsync('dddf62e8ccde55b774e31f85635fc21b60a01ecf');
const pb = pbComp.createInstance();
const props = pb.componentProperties;
const set = {};
for (const k of Object.keys(props)) {
  if (/^Title/i.test(k)    && props[k].type === 'TEXT') set[k] = 'Parlons de votre prochaine étape.';
  if (/^Name/i.test(k)     && props[k].type === 'TEXT') set[k] = 'Nicolas Guy';
  if (/jobTitle/i.test(k)  && props[k].type === 'TEXT') set[k] = 'Co-fondateur, Frontguys';
  if (/^Show Button#/i.test(k) && props[k].type === 'BOOLEAN') set[k] = true;  // bouton principal
  // laisser 'Show Button 2#…' par défaut → 1 CTA primary max par section
}
pb.setProperties(set);
section.appendChild(pb);
pb.layoutSizingHorizontal = 'FILL';   // ⭐ APRÈS appendChild → 1248 px (largeur de contenu), pas 1440
```

**Props top-level du `profileBanner`** : `Title#3509:0` (TEXT), `Name#3509:3` (TEXT), `jobTitle#3509:6` (TEXT), `Show Button#3509:9` (BOOLEAN, bouton principal), `Show Button 2#3509:12` (BOOLEAN, bouton secondaire). Le **label du bouton n'est pas exposé au niveau de la bannière** : c'est la prop `CTA#2209:0` de l'instance `Button` imbriquée (souvent déjà « Planifiez un échange »). Pour le changer, traverser et l'overrider :

```js
const nestedBtn = pb.findAll(n => n.type === 'INSTANCE' && n.componentProperties &&
  Object.keys(n.componentProperties).some(k => /CTA/i.test(k) && n.componentProperties[k].type === 'TEXT'))[0];
if (nestedBtn) {
  const ck = Object.keys(nestedBtn.componentProperties).find(k => /CTA/i.test(k) && nestedBtn.componentProperties[k].type === 'TEXT');
  nestedBtn.setProperties({ [ck]: 'Planifiez un échange' });
}
```

> Peut partager une section avec la conviction (conviction + bannière CTA dans un seul bloc) ou occuper sa propre `section-cta`. Dans les deux cas, **container de section obligatoire**.

## Si un composant manque

1. Demander à l'utilisateur un lien vers une instance de référence (n'importe où dans n'importe quel fichier accessible)
2. Inspecter `mainComponent.key` (et `mainComponent.parent.key` si ComponentSet)
3. **Mettre à jour ce fichier** avec la nouvelle key pour les prochaines demandes

## Mapping section de landing → composant

| Section type | Composant principal | Composants secondaires |
|--------------|---------------------|------------------------|
| Hero | `Section` (variant DS) | `Button / primary`, illustration sémantique |
| Value props | `Section` + grille de `card / simple` | `Button / secondary` |
| Social proof | `Section` + grille de `card / photo` (logos clients) | — |
| Expertise | `Section` + grille de `card / simple` | `Icon`, `link / standalone` |
| Convictions | `Section` (1 colonne, fond `subtle`) | — |
| Chiffres clés | `Section` + grille custom | `Icon` |
| CTA final | `Section` (fond `subtle`/`default-alt`) **contenant** un `profileBanner` (jamais à la racine — cf. § Recette `profileBanner`) | `Button / primary` |
| Footer | `footer` (instance racine) | — |

## Conventions code (Astro)

- **Jamais** `<p>` brut : utiliser le composant texte du DS
- **Jamais** `<h2>` brut : composant texte avec variant `heading-2`
- **Jamais** `<div class="container">` ad-hoc : composant Section du DS
- Layout via les composants de mise en page du DS (`Stack`, `Grid`, `Cluster` selon convention Astro)
- Tous les textes via le composant texte atomique
- Aucune couleur / spacing / radius / fontSize en dur

Référence repo Astro : `https://gitlab.com/frontguys/accessibility-website`
