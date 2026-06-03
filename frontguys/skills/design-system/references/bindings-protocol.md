---
type: protocol
name: design-system-bindings
description: |
  Protocole OBLIGATOIRE de binding des variables d'un Design System lors
  de la production d'assets dans l'outil de design source (Figma par défaut).
  Ce protocole est UNIVERSEL — il consomme un design-system-pack (par marque)
  qui contient les tables de keys spécifiques.
status: critical
applies_to: tout asset Figma produit dans un fichier de la marque
manifest_version: ">=1.0.0"
consumed_by:
  - create-landing-page (sortie DS)
  - create-web-section (sortie DS)
  - create-slide-deck (sortie DS)
---

# Protocole de bindings DS — RÈGLE ABSOLUE

> **AUCUNE valeur ne doit jamais être en dur dans un asset produit dans l'outil de design.** Couleurs, paddings, gaps, corner radius, stroke weights, fontSize, fontFamily — tout doit être bindé sur une variable du DS ou utiliser un text style du DS. Si une valeur en dur subsiste, c'est un **bug** à corriger avant livraison.

Cette règle est **non-négociable**. L'utilisateur ne doit pas avoir à repasser derrière la production pour vérifier qu'aucune valeur n'est en dur.

## Contexte d'exécution

Ce protocole est rédigé pour un **plugin Figma** ou l'outil MCP `{{ manifest.mcp_tools.design_system }}` qui exécute du JS via la Plugin API. Toutes les fonctions `figma.*` référencées ici font partie de la Plugin API.

**Si vous opérez via MCP** : le code passé est exécuté **dans le fichier dont l'URL a été fournie par l'utilisateur**. L'état (variables importées, IDs créés) ne persiste pas entre deux appels MCP — utilisez `setSharedPluginData` / `getSharedPluginData` sur un node stable (la page, par exemple) pour cascader des informations entre phases. Pensez à `return JSON.stringify(...)` à la fin pour récupérer les résultats.

## Pré-requis : DESIGN.md de la marque

Avant d'exécuter ce protocole, **charger le DESIGN.md** de la marque référencé par `{{ manifest.design_system.design_md_doc }}`.

Le DESIGN.md (format [Google Labs alpha](https://github.com/google-labs-code/design.md)) est la **source de vérité unique** des données du design system. Il contient, sous forme de tokens YAML + tables Markdown :

- **Librairies publiées** (section *Libraries*) : nom + `fileKey` de chaque librairie
- **Fonts** (section *Typography*) : familles + styles à `loadFontAsync` avant toute production de texte
- **Variables couleur** (frontmatter `colors` + section *Component Keys*) : nom sémantique + valeur + key
- **Variables spacing** (frontmatter `spacing` + section *Component Keys*) : échelle complète + valeurs cibles + keys
- **Variables radius** (frontmatter `rounded` + section *Component Keys*) : nom + key + valeur
- **Text styles** (frontmatter `typography` + section *Component Keys*) : nom + key + cas d'usage
- **Composants UI** (frontmatter `components` + section *Component Keys*) : variants + key + property pattern
- **Illustrations / icônes** (section *Illustrations*) : nom sémantique + key + cas d'usage
- **Mapping spacing→valeur** (section *Layout*) : table de snap
- **Règles d'alternance** (section *Alternance & Règles d'usage*) : séquence canonique de fonds si la marque en a une
- **Règles d'usage composant ↔ fond** : contraintes (ex: pas tel variant sur tel fond)
- **Responsive** (section *Layout*) : valeurs par breakpoint

Ce protocole **ne contient aucune valeur**. Il décrit uniquement le **process de production** et consomme le DESIGN.md pour toutes les keys et valeurs.

Si le DESIGN.md est absent du manifest ou incomplet, **stopper et demander à l'utilisateur** — ne jamais inventer une key.

## Si un import par key échoue

C'est probablement parce que la librairie correspondante n'est pas activée dans le fichier de l'utilisateur. **Demander à l'utilisateur** d'activer la librairie :

> *« L'import de [variable / style / composant] a échoué — probablement parce que la librairie [Nom de la librairie] n'est pas activée dans ton fichier. Tu peux l'activer via {{ manifest.design_system.source }} > panneau gauche > Libraries > rechercher [Nom] > activer. Une fois fait, relance la demande. »*

Ne JAMAIS contourner en hardcodant. Ne JAMAIS cloner depuis un autre fichier comme palliatif — c'est la librairie qui doit être activée.

## Pourquoi cette règle

1. **Cohérence DS** : si le DS change un token, l'asset suit automatiquement.
2. **Mode switching** : light/dark dépend du binding.
3. **Maintenance** : pas de divergence entre asset et DS.
4. **Reproductibilité** : une spec basée tokens produit toujours le même rendu.

## Protocole — production from scratch

**À exécuter dans cet ordre exact**, AVANT toute création de frame custom.

### Étape 0 — URL cible + composants à mobiliser

- L'utilisateur fournit l'URL du fichier cible (et idéalement le node-id de la page où poser la frame).
- Lister les composants nécessaires à partir de la demande / spec éditoriale.
- Pour chaque composant, prendre la key depuis le **design-system-pack** référencé.

### Étape 1 — Charger les fonts

Au début de tout script qui crée du texte :

```js
// Charger TOUTES les fonts déclarées dans le design-system-pack.
// Y compris Inter Regular (font par défaut de Figma sur tout nouveau TextNode).
for (const { family, style } of DESIGN_SYSTEM_PACK.fonts) {
  await figma.loadFontAsync({ family, style });
}
```

> Ne jamais oublier la font par défaut de l'outil de design (typiquement Inter Regular pour Figma). Tout `TextNode` fraîchement créé l'utilise avant qu'on lui applique un text style. Sans ce chargement : `Cannot write to node with unloaded font`.

### Étape 2 — Imports en bloc (variables, styles, composants)

Importer **tout** ce dont le script aura besoin, en un seul bloc, **en try/catch** :

```js
const vars = {};
for (const [name, key] of Object.entries(VAR_KEYS)) {
  try {
    vars[name] = await figma.variables.importVariableByKeyAsync(key);
  } catch (e) {
    throw new Error(`Variable ${name} non importable. Demander à l'utilisateur d'activer la librairie [Nom-de-la-lib-tokens] dans son fichier.`);
  }
}

const styles = {};
for (const [name, key] of Object.entries(STYLE_KEYS)) {
  try {
    styles[name] = await figma.importStyleByKeyAsync(key);
  } catch (e) {
    throw new Error(`Style ${name} non importable. Demander à l'utilisateur d'activer la librairie [Nom-de-la-lib-typo] dans son fichier.`);
  }
}

const comps = {};
for (const [name, key] of Object.entries(COMP_KEYS)) {
  try {
    comps[name] = await figma.importComponentByKeyAsync(key);
  } catch (e) {
    throw new Error(`Composant ${name} non importable. Demander à l'utilisateur d'activer la librairie correspondante dans son fichier.`);
  }
}
```

Pour les ComponentSets : `figma.importComponentSetByKeyAsync(key)`.

### Étape 3 — Helpers obligatoires

Utiliser **systématiquement** ces helpers plutôt que les API natives directes :

```js
function bindFill(node, varName) {
  const v = vars[varName];
  if (!v) throw new Error(`Variable ${varName} non importée`);
  const paint = { type: 'SOLID', color: { r: 0, g: 0, b: 0 } };
  node.fills = [figma.variables.setBoundVariableForPaint(paint, 'color', v)];
}

function bindSpacing(node, prop, varName) {
  const v = vars[varName];
  if (!v) throw new Error(`Variable ${varName} non importée`);
  node.setBoundVariable(prop, v);
}

function bindRadius(node, varName) {
  const v = vars[varName];
  if (!v) throw new Error(`Variable ${varName} non importée`);
  for (const p of ['topLeftRadius','topRightRadius','bottomLeftRadius','bottomRightRadius']) {
    node.setBoundVariable(p, v);
  }
}

async function createText(content, styleName, fillVarName, align) {
  const t = figma.createText();
  t.characters = content;
  if (styles[styleName]) await t.setTextStyleIdAsync(styles[styleName].id);
  bindFill(t, fillVarName);
  if (align) t.textAlignHorizontal = align;
  return t;
}
```

### Étape 4 — Création de frames avec bindings INTÉGRÉS

```js
// ❌ MAUVAIS — valeur en dur
const section = figma.createFrame();
section.paddingTop = 96;
section.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];

// ✅ BON — tout bindé
const section = figma.createFrame();
section.layoutMode = 'VERTICAL';
bindSpacing(section, 'paddingTop',    'spacing/base-X');   // X depuis le design-system-pack
bindSpacing(section, 'paddingBottom', 'spacing/base-X');
bindSpacing(section, 'paddingLeft',   'spacing/base-Y');
bindSpacing(section, 'paddingRight',  'spacing/base-Y');
bindSpacing(section, 'itemSpacing',   'spacing/base-Z');
bindFill(section, 'background/default');                   // nom sémantique du pack
```

### Étape 5 — `setProperties` sur les instances de composant

Quand vous configurez une instance via `inst.setProperties({...})` :

1. **Inspecter d'abord les `componentProperties` réelles** de l'instance fraîchement créée — les noms incluent un suffixe d'ID type `Title#2524:14`. **Ces suffixes peuvent changer entre versions du composant** : ne les hardcodez pas dans le code applicatif, lisez-les dynamiquement via `Object.keys(inst.componentProperties)`.
2. **Ne passez QUE les props que vous modifiez.** Passer une valeur vide pour une prop TEXT (`'subTitle#xxx': ''`) peut faire échouer tout le `setProperties`.
3. Pour les props BOOLEAN, passez explicitement `false` (sans guillemets) si vous voulez masquer un élément.
4. **Ne pas combiner inutilement** : en cas d'erreur `Property value is incompatible with component property type`, isoler les props une par une.

### Étape 6 — Stretching auto-layout

Quand vous créez un frame custom dans un parent auto-layout, anticipez son comportement de taille :

| Parent | Enfant | Réglages |
|--------|--------|----------|
| `VERTICAL` | Frame qui doit prendre toute la largeur | `child.layoutAlign = 'STRETCH'` |
| `VERTICAL` | Frame qui doit prendre la hauteur restante (rare) | `child.layoutGrow = 1` |
| `HORIZONTAL` | Frame qui doit prendre la largeur restante | `child.layoutGrow = 1` |
| `HORIZONTAL` | Card/instance qui doit faire 1/N de la largeur | `child.layoutGrow = 1` sur **toutes** les cards |
| `HORIZONTAL` | **Cards alignées qui doivent toutes avoir la même hauteur** (cf. règle ci-dessous) | `parent.counterAxisAlignItems = 'STRETCH'` + `child.layoutAlign = 'STRETCH'` sur chaque card |

**Erreur fréquente** : row horizontale en `primaryAxisSizingMode='AUTO'` → la row hug son contenu (cards collées à gauche). Corriger en `'FIXED'` + `layoutAlign='STRETCH'` (si parent VERTICAL) ou `layoutGrow=1` (si parent HORIZONTAL).

#### Règle d'or — cards alignées horizontalement = même hauteur obligatoire

> **Dans une row HORIZONTAL qui contient plusieurs cards (3 principes, 4 axes opérationnels, 3 expertises, grille de logos clients, etc.), toutes les cards doivent avoir la même hauteur — celle du contenu le plus long.**

Sans cette règle, la card qui contient le texte le plus long est plus haute que ses voisines → mauvais alignement vertical, visuel cassé. La règle est **non-négociable** sur tout asset Frontguys avec plusieurs cards alignées.

##### Configuration robuste

```js
// PARENT (la row horizontale qui contient les cards)
const grid = figma.createFrame();
grid.layoutMode = 'HORIZONTAL';
grid.primaryAxisSizingMode = 'FIXED';      // largeur fixe (la row remplit son parent)
grid.counterAxisSizingMode = 'AUTO';       // hauteur hug le plus grand enfant
grid.counterAxisAlignItems = 'STRETCH';    // ⭐ FORCE tous les enfants à stretch en hauteur
grid.layoutAlign = 'STRETCH';              // la row remplit la largeur de son parent VERTICAL
bindSpacing(grid, 'itemSpacing', 'spacing/base-8');

// ENFANTS (chaque card)
for (const data of cardsData) {
  const card = comps['card-simple'].createInstance();
  card.layoutGrow = 1;             // ⭐ 1/N de la largeur — réparti équitablement
  card.layoutAlign = 'STRETCH';    // ⭐ stretch en hauteur (redondant si counterAxisAlignItems STRETCH, mais explicite = robuste)
  // setProperties...
  grid.appendChild(card);
}
```

**Les trois lignes en ⭐ sont obligatoires.** Omettre une seule → comportement aléatoire selon les défauts Figma et le contenu.

##### Pourquoi ce pattern combiné

| Réglage | Sans ce réglage |
|---------|-----------------|
| `parent.counterAxisAlignItems = 'STRETCH'` | Le parent ne force pas les enfants à stretch — chaque card hug son propre contenu → **hauteurs différentes** |
| `parent.counterAxisSizingMode = 'AUTO'` | Si la hauteur est `FIXED` à une valeur inférieure au contenu d'une card, le texte sera coupé ; si supérieure, espaces vides |
| `child.layoutGrow = 1` (sur **toutes** les cards) | Les cards font leur largeur native — collées à gauche, espace vide à droite |
| `child.layoutAlign = 'STRETCH'` | Sécurité explicite : même si le parent change de `counterAxisAlignItems`, l'enfant reste stretché |

##### Si l'enfant est une INSTANCE de composant DS

Les overrides de layout sont en général appliquables sur les instances : `layoutGrow`, `layoutAlign` se settent normalement. Si un override est refusé (rare), le composant DS lui-même est probablement mal configuré côté librairie — alerter l'équipe DS plutôt que contourner.

##### Anti-pattern à proscrire

```js
// ❌ MAUVAIS — pas de counterAxisAlignItems STRETCH sur le parent
// Comportement aléatoire selon Figma : les 3 cards peuvent avoir des hauteurs
// différentes si le contenu varie.
grid.layoutMode = 'HORIZONTAL';
grid.counterAxisSizingMode = 'AUTO';
// (manque counterAxisAlignItems = 'STRETCH')
card.layoutGrow = 1;
card.layoutAlign = 'STRETCH';  // peut ou peut ne pas suffire selon les défauts
```

```js
// ❌ ENCORE PLUS MAUVAIS — counterAxisSizingMode FIXED avec hauteur arbitraire
// Si une card a un contenu long, son texte est tronqué.
grid.counterAxisSizingMode = 'FIXED';
grid.resize(1248, 200);  // hauteur en dur → contenu coupé
```

### Étape 7 — Pre-flight check OBLIGATOIRE

```js
function preflightCheck(rootNode) {
  const issues = [];
  function walk(node) {
    if (node.type === 'INSTANCE') return;  // ne pas descendre dans les instances DS
    if ('fills' in node && Array.isArray(node.fills)) {
      for (const f of node.fills) {
        if (f.type === 'SOLID' && (!f.boundVariables || !f.boundVariables.color)) {
          if (f.opacity === 0 || f.visible === false) continue;
          issues.push({ nodeId: node.id, name: node.name, issue: 'fill SOLID sans boundVariable' });
        }
      }
    }
    if (node.type === 'FRAME' || node.type === 'COMPONENT' || node.type === 'COMPONENT_SET') {
      const bv = node.boundVariables || {};
      const props = ['paddingTop','paddingBottom','paddingLeft','paddingRight','itemSpacing',
                     'topLeftRadius','topRightRadius','bottomLeftRadius','bottomRightRadius'];
      for (const prop of props) {
        const val = node[prop];
        if (typeof val === 'number' && val !== 0 && !bv[prop]) {
          issues.push({ nodeId: node.id, name: node.name, issue: `${prop}=${val} en dur` });
        }
      }
    }
    if (node.type === 'TEXT') {
      if (!node.textStyleId || node.textStyleId === '' || typeof node.textStyleId === 'symbol') {
        issues.push({ nodeId: node.id, name: node.name, issue: 'TEXT sans textStyleId' });
      }
    }
    if ('children' in node) for (const c of node.children) walk(c);
  }
  walk(rootNode);
  return issues;
}

const issues = preflightCheck(wrapper);
if (issues.length > 0) {
  throw new Error(`Pre-flight check failed: ${issues.length} valeurs en dur détectées.`);
}
```

> Objectif : **0 issue**. Le check ne descend pas dans les INSTANCES, donc les dettes internes du DS publié ne remontent pas. Si la production utilise correctement les composants DS, 0 issue est atteignable.

## Règle d'espacement — itemSpacing du parent, jamais padding sur l'enfant

> **L'espacement entre éléments d'un auto-layout est géré PAR LE PARENT via `itemSpacing`, jamais par des paddings/marges sur les enfants.**

### Pattern correct

Un padding sur un frame n'est légitime que pour **l'espace intérieur du frame lui-même** (entre le bord du frame et son contenu) — pas pour pousser le frame par rapport à ses frères.

| Cas | Légitime ? |
|-----|------------|
| `section.paddingTop = spacing/base-X` (espace intérieur de la section) | ✅ Oui |
| `card.paddingLeft = spacing/base-Y` (espace intérieur de la card) | ✅ Oui |
| `btnRow.paddingTop = spacing/base-Z` (pousser btn-row par rapport au body au-dessus) | ❌ Non — utiliser itemSpacing du parent |
| `secondColumn.paddingLeft = spacing/base-Z` (éloigner la 2e col de la 1ère) | ❌ Non — utiliser itemSpacing du parent horizontal |

## Anti-patterns universels

| ❌ Anti-pattern | ✅ Correct |
|-----------------|-----------|
| `frame.fills = [{ type: 'SOLID', color: ... }]` | `bindFill(frame, '<var-sémantique>')` |
| `frame.paddingTop = 96` | `bindSpacing(frame, 'paddingTop', '<spacing/base-X>')` |
| `text.fontSize = 36; text.fontName = ...` | `text.textStyleId = styles['<text-style>'].id` (puis `bindFill` pour la couleur) |
| `frame.cornerRadius = 8` | `bindRadius(frame, '<radius/...>')` |
| Conclure « pas de variables » sur `getLocalVariableCollectionsAsync()` vide | Les variables du DS sont remote — utiliser `importVariableByKeyAsync` |
| Hardcoder des valeurs hex venant de la spec | Privilégier les noms de tokens sémantiques de la spec, ignorer les valeurs hex |
| Inventer ou deviner une key de composant | Consulter le design-system-pack. Si absent, demander une instance de référence à l'utilisateur. |
| Cloner header / footer / illustration racine | Importer comme instances via `importComponentByKeyAsync` |
| **Reconstruire from scratch un composant qui existe dans le catalog** (card, button, profileBanner…) | **Toujours instancier** le composant DS via `importComponentByKeyAsync` puis `setProperties` |
| **Frame vide `_spacer` pour créer de l'espace** entre deux nodes d'un auto-layout | **Augmenter `itemSpacing` du parent** ou ajouter un `paddingTop` bindé sur le node concerné |
| Cloner depuis un autre fichier comme fallback à un import échoué | Demander à l'utilisateur d'activer la librairie correspondante |
| Créer un text node sans avoir chargé Inter Regular (Figma) | `await figma.loadFontAsync({ family: 'Inter', style: 'Regular' })` AVANT toute création de texte |
| Row horizontal en `primaryAxisSizingMode='AUTO'` qui devrait remplir la largeur | `'FIXED'` + `layoutAlign='STRETCH'` (parent VERTICAL) ou `layoutGrow=1` (parent HORIZONTAL) |
| Frame parent avec `resize(W, H)` initial + `primaryAxisSizingMode='AUTO'` | La hauteur peut être **lockée** par le resize initial. Ne pas resize la dimension AUTO, ou faire un `resizeWithoutConstraints` après ajout du contenu si nécessaire |

## Anti-pattern majeur — Frame `_spacer` vide

> **Ne jamais créer une frame vide nommée `_spacer` (ou équivalent) pour créer un écart visuel entre deux nodes d'un auto-layout.**

C'est un anti-pattern parce que :

- Le frame `_spacer` n'a aucune valeur sémantique (juste un blanc)
- Il pollue l'arborescence Figma (un noeud en plus à parcourir)
- Il rend l'asset moins maintenable (l'écart est invisible dans les tokens, on ne sait pas pourquoi il existe)
- Il échappe au pre-flight check (frame avec padding bindé "passe", mais sans contenu c'est inutile)

### Solutions correctes

| Cas | ✅ Solution |
|-----|-------------|
| Écart régulier entre tous les enfants d'un VERTICAL | `bindSpacing(parent, 'itemSpacing', 'spacing/base-X')` |
| Écart spécifique avant **un seul node** (ex: CTA décollé du sous-titre) | `bindSpacing(monNode, 'paddingTop', 'spacing/base-Y')` directement sur le node concerné |
| Écart à 2 endroits différents dans le même VERTICAL | Repenser : grouper les éléments avec écart serré dans un sous-frame VERTICAL avec son propre `itemSpacing`, puis itemSpacing du parent pour la séparation entre les 2 groupes |
| « Pousser » un élément vers le bas (ex: CTA en bas d'une colonne) | Insérer un node avec `layoutGrow = 1` qui absorbe l'espace restant — **et qui a un nom sémantique** comme `_flex-grow` ou intégré à un wrapper |

### Exemple correct

```js
// ❌ MAUVAIS — frame _spacer vide
const spacer = figma.createFrame();
spacer.name = '_spacer';
bindSpacing(spacer, 'paddingTop', 'spacing/base-2');
heroLeft.appendChild(spacer);
heroLeft.appendChild(cta);

// ✅ BON — padding sur le CTA lui-même (ou wrapper sémantique)
// Si le CTA est une instance et qu'on ne peut pas lui mettre un padding,
// l'envelopper dans un frame "cta-wrapper" avec padding bindé.
const ctaWrapper = figma.createFrame();
ctaWrapper.name = 'cta-wrapper';
ctaWrapper.layoutMode = 'VERTICAL';
ctaWrapper.primaryAxisSizingMode = 'AUTO';
ctaWrapper.counterAxisSizingMode = 'AUTO';
ctaWrapper.fills = [];
bindSpacing(ctaWrapper, 'paddingTop', 'spacing/base-2');
ctaWrapper.appendChild(cta);
heroLeft.appendChild(ctaWrapper);

// ✅ ENCORE MIEUX — ajuster itemSpacing du parent
bindSpacing(heroLeft, 'itemSpacing', 'spacing/base-6');
// Tous les enfants ont alors le même écart, cohérent et lisible.
```

## Anti-pattern majeur — Reconstruire un composant qui existe

> **Ne jamais reconstruire from scratch un composant qui existe dans le catalog du DS.**

Si le catalog déclare `card / type=simple` avec des props `Title`, `Text`, `subTitle`, `Show badge 1/2/3`, il faut **toujours** instancier ce composant et configurer ses props via `setProperties()` — jamais créer un frame custom avec des textes et des paddings.

### Pourquoi cette règle

1. **Cohérence visuelle** : le composant DS est identique partout (mêmes radius, paddings internes, comportements responsive, hover states, etc.)
2. **Maintenance** : si le DS change le composant, tous les assets suivent automatiquement
3. **Évolutivité** : les variants futurs (state=hover, type=photo, etc.) sont immédiatement disponibles
4. **Auditabilité** : le pre-flight check ne descend pas dans les instances — un asset full instances passe le check même si le composant a des dettes internes
5. **Crédibilité** : un asset qui « ressemble » au DS mais ne l'utilise pas est repéré immédiatement par un designer expérimenté

### Exemple correct

```js
// ❌ MAUVAIS — card reconstruite from scratch
const card = figma.createFrame();
card.layoutMode = 'VERTICAL';
bindFill(card, 'background/subtle');
bindRadius(card, 'radius/lg');
bindSpacing(card, 'paddingTop', 'spacing/base-8');
// ... 30 lignes pour reconstruire ce qui existe déjà

// ✅ BON — instance du composant card / simple
const cardComp = await figma.importComponentByKeyAsync('<card-simple-key-from-catalog>');
const card = cardComp.createInstance();
card.setProperties({
  'Title#2524:14': 'Human-in-the-loop systématique.',
  'Text#2524:19': 'Nous définissons le périmètre...',
  'Show badge 1#2995:22': false,  // masquer si non voulu
  'Show badge 2#2995:32': false,
  'Show badge 3#2995:42': false,
});
card.layoutAlign = 'STRETCH';
card.layoutGrow = 1;  // si dans grille horizontale
```

### Avant de reconstruire, toujours vérifier dans le catalog

| Section | Composant DS à mobiliser AVANT toute reconstruction |
|---------|---------------------------------------------------|
| Section de contenu avec titre + body | `card / type=simple` |
| Card avec photo en arrière-plan | `card / type=photo` |
| Card avec illustration sémantique | `card / type=illustration` |
| Bannière contact / expert | `profileBanner` |
| Bouton d'action | `Button` (variants primary/secondary/ghost) |
| Lien éditorial | `link / standalone` |
| Header de page | `header` (instance racine) |
| Footer de page | `footer` (instance racine) |
| Logotype | `logotype` |

Si la section visée ne correspond à aucun de ces composants, **alors seulement** on construit un frame custom — et on le fait conformément au bindings-protocol.

## Check-list de livraison (pre-flight passe en plus)

Avant de retourner un asset à l'utilisateur :

- Étape 0 effectuée : URL du fichier cible confirmée, composants identifiés depuis le pack
- Toutes les fonts du pack chargées AVANT toute manipulation de texte
- Composants racine (header / footer / illustrations) : **instances**, jamais clones
- Si un import a échoué : utilisateur invité à activer la librairie correspondante
- Tous les fills bindés sur une variable couleur
- Tous les paddings non-zéro bindés sur une variable spacing
- Tous les itemSpacing non-zéro bindés sur une variable spacing
- Tous les corner radius non-zéro bindés sur une variable radius
- Tous les textes custom ont un `textStyleId` du DS
- **Pre-flight check exécuté : 0 issue**
- Règles spécifiques du design-system-pack respectées (alternance, contraintes composant↔fond, responsive, etc.)
- Pas de padding sur enfants d'auto-layout pour gérer l'écart entre frères
- Stretching auto-layout correct (vérification visuelle au screenshot)
- **Cards alignées horizontalement = même hauteur** : parent avec `counterAxisAlignItems='STRETCH'` + enfants avec `layoutGrow=1` et `layoutAlign='STRETCH'` (cf. § Étape 6 — Règle d'or)
- Screenshot de contrôle visuel pris et validé

Si une case n'est pas cochée : **corriger avant de livrer**.

## Changelog

| Date | Version | Changements |
|------|---------|-------------|
| 2026-05-19 | 1.0.0 | Version universelle initiale, brand-agnostic. Toutes les valeurs sont déléguées au design-system-pack référencé dans le manifest. |
| 2026-05-26 | 1.1.0 | Ajout de 2 anti-patterns majeurs détectés en production : (1) Frame `_spacer` vide pour créer de l'espace → utiliser `itemSpacing` du parent ou padding bindé sur node sémantique. (2) Reconstruction from scratch d'un composant qui existe dans le catalog → toujours instance + `setProperties`. Ajout de l'anti-pattern resize initial qui lock une dimension AUTO. |
| 2026-05-26 | 1.2.0 | Ajout de la règle d'or « cards alignées horizontalement = même hauteur obligatoire » (§ Étape 6). Pattern combiné : `parent.counterAxisAlignItems = 'STRETCH'` + `parent.counterAxisSizingMode = 'AUTO'` + `child.layoutGrow = 1` + `child.layoutAlign = 'STRETCH'`. Ajoutée dans la check-list de livraison. |
