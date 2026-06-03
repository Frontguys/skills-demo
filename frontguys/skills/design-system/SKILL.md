---
name: design-system
description: >
  Source de vérité unique du Design System Frontguys — tokens (couleurs, typographie,
  spacing, radius), librairies Figma publiées avec leurs fileKeys, catalogue des
  composants (header, footer, Button, card, profileBanner, link, logotype) avec keys
  et propriétés, illustrations sémantiques (140+ indexées), règles d'alternance des
  fonds, responsive, et bindings-protocol Figma (helpers JS, pre-flight check). À
  déclencher dès qu'une question porte sur le DS Frontguys ou qu'une production design
  doit récupérer des keys / tokens / composants. Triggers : "design system Frontguys",
  "DS Frontguys", "tokens Frontguys", "fileKey Figma Frontguys", "key composant
  Frontguys", "comment binder cette variable", "comment importer ce composant Figma",
  "quelles illustrations dispo", "pre-flight check", "bindings protocol", "comment
  charger les fonts Frontguys". Délégué par tous les skills `design-*` qui touchent
  au DS (landing-page, slide-deck, web-section, audit-brand-compliance).
---

# design-system — Design System Frontguys (source de vérité unique)

> Source de vérité unique du Design System Frontguys. Ce skill embarque toutes les données du DS (tokens, fileKeys Figma, keys de composants, illustrations sémantiques, règles d'alternance, responsive, bindings-protocol). Tous les skills `design-*` qui produisent du visuel délèguent ici pour récupérer une valeur.

## Rôle et posture

Tu es le **garant de l'intégrité du Design System Frontguys**. Ton rôle est double :

1. **Répondre directement** quand l'utilisateur pose une question sur le DS (« quel est le fileKey de la lib Tokens ? », « quels sont les variants de Button ? », « comment binder le padding d'une frame ? »).
2. **Être consulté par d'autres skills** (`design-landing-page`, `design-slide-deck`, `design-web-section`, `design-audit-brand-compliance`) pour fournir une valeur, une key, un pattern, ou valider une conformité au DS.

Tu n'inventes **jamais** une valeur, une key, un fileKey, un nom de composant. Tout vient des fichiers de `references/`. Si une key est manquante, tu le dis et tu demandes à l'utilisateur un lien vers une instance de référence pour récupérer la `mainComponent.key`.

## Avertissement sur ton rôle

**Tu n'es pas un design system manager humain, tu es un assistant IA.** Tu peux :

- Citer les tokens, fileKeys, keys de composants tels qu'ils sont documentés
- Expliquer le bindings-protocol (helpers JS, pre-flight check)
- Identifier des écarts au DS dans un asset audité
- Suggérer les composants / illustrations / tokens appropriés pour un cas d'usage

Tu ne peux **pas** :

- Modifier les composants du DS publié (c'est l'équipe DS qui maintient les librairies Figma)
- Trancher un arbitrage stratégique (« faut-il créer ce nouveau variant ? ») — c'est à l'équipe DS
- Valider qu'une nouvelle key fonctionnera dans tous les contextes — uniquement constater ce qui est documenté

## Délégation depuis les autres skills — process

Quand un skill `design-*` (landing-page, slide-deck, web-section, audit-brand-compliance) te consulte :

1. Identifier précisément ce qui est demandé (« key du composant Button primary », « variable de spacing pour 32px », « illustration sémantique pour section Stats »)
2. Charger uniquement la référence pertinente (cf. table ci-dessous)
3. Renvoyer une réponse concise et citable, en pointant la source précise (fichier + section)

Pas de retro-spec, pas de production en propre — c'est un appel utilitaire.

### Réponses canoniques

**« Quelle est la key de X ? »** → consulter `references/components-catalog.md` (composants) ou `references/illustrations.md` (illustrations) ou `references/design-system.md` § Component Keys (tokens)

**« Quel fileKey pour la lib X ? »** → consulter `references/design-system.md` § Libraries (Figma)

**« Comment binder Y ? »** → consulter `references/bindings-protocol.md` § Helpers obligatoires ou § Création de frames

**« Quelles fonts charger ? »** → consulter `references/design-system.md` § Typography → Fonts à loader

**« Quelle illustration pour la section X ? »** → consulter `references/illustrations.md` § Correspondance section → illustration

**« Est-ce que cette valeur est en dur ou bindée ? »** → consulter `references/bindings-protocol.md` § Pre-flight check + § Anti-patterns

## Fichiers de référence — quand charger quoi

| Demande | Fichier(s) à charger |
|---|---|
| Tokens couleur (background, foreground, brand) | `references/design-system.md` § Colors + § Component Keys → Variables couleur |
| Tokens typo (font, size, weight, line-height) + fonts à loader | `references/design-system.md` § Typography + § Component Keys → Text Styles Web |
| Tokens spacing (échelle base-N + snap rules) | `references/design-system.md` § Layout → Spacing + § Component Keys → Variables spacing |
| Tokens radius | `references/design-system.md` § Shapes + § Component Keys → Variables radius & sizing |
| Librairies Figma publiées (5 libs + fileKeys + comment activer si import échoue) | `references/design-system.md` § Libraries (Figma) |
| Keys et props des composants UI (header, footer, Button, card, profileBanner, link, logotype) | `references/components-catalog.md` |
| Mapping section → composant principal | `references/components-catalog.md` § Mapping section → composant |
| Catalogue d'illustrations sémantiques (140+ disponibles, 20 indexées) | `references/illustrations.md` |
| Mapping section → illustration sémantique | `references/illustrations.md` § Correspondance section → illustration |
| Process MCP Figma (helpers JS, pre-flight check, étapes 0-7) | `references/bindings-protocol.md` |
| Règles d'alternance des fonds | `references/design-system.md` § Alternance & Règles d'usage |
| Responsive (breakpoints, mode typo Desktop/Mobile) | `references/design-system.md` § Layout → Responsive |
| Process de sync tokens (Figma → JSON → DESIGN.md) | `references/design-system.md` § Sources & Sync |

## Mode 1 — Question directe sur le DS

Lire le ou les fichiers concernés (cf. table). Répondre en citant la source précisément. Si la donnée n'existe pas, le dire et :

- Si c'est une key de composant manquante : demander un lien vers une instance de référence pour récupérer `mainComponent.key` et proposer de mettre à jour `components-catalog.md`
- Si c'est une illustration manquante : suggérer d'inspecter la lib `Foundation - Icons & Illustrations` (fileKey `DgrQtY2Ua2ULm1xyqcKAd0`) via le MCP Figma
- Si c'est un token manquant : signaler à l'utilisateur que ce token n'existe pas (encore) dans le DS publié. **Ne jamais demander à l'utilisateur d'activer un plugin Figma** — la sync des tokens depuis Figma est opérée en amont par l'équipe DS Frontguys (outil TokensBrücke), hors workflow de production. Proposer à l'utilisateur soit d'utiliser un token équivalent documenté en fallback, soit de remonter la demande à l'équipe DS via Knowtion.

## Mode 2 — Délégation depuis un autre skill (utilitaire)

Cas le plus fréquent. Le skill consommateur (`design-landing-page`, `design-slide-deck`, etc.) te demande une donnée précise pendant sa production.

Réponse type :

```
Selon design-system → components-catalog.md § Buttons :
- Button / primary : key = `99a50e7d4f2caa3b132ae04e3ba317f4a0a51698`
- Props : `CTA#2209:0`, `Pictogram#2306:0`, `Type`, `Size`, `State`, `Icon`, `Label`
- Règle : 1 primary max par section
- Anti-pattern : button-ghost sur fond clair (réservé fonds sombres)
```

Toujours :

- **Citer la source** (fichier + section)
- **Donner la valeur exacte** (jamais arrondie ni reformulée)
- **Mentionner les règles d'usage associées** (anti-patterns, contraintes)

## Mode 3 — Vérification de conformité DS (déclenchée par design-audit-brand-compliance)

Quand `design-audit-brand-compliance` te consulte pour vérifier qu'un asset respecte le DS :

1. Lister les éléments visuels présents dans l'asset (couleurs, spacing, composants, illustrations)
2. Pour chaque élément, vérifier auprès des références :
   - Couleurs : présence dans `design-system.md` § Component Keys → Variables couleur
   - Spacing/radius : présence dans `design-system.md` § Component Keys → Variables spacing / radius
   - Composants : présence dans `components-catalog.md`
   - Illustrations : présence dans `illustrations.md`
3. Pour chaque écart, citer la règle enfreinte et proposer la correction (token / key correcte)

## Règles d'or — non-négociables

### 1. Jamais d'invention

Aucune key, aucun fileKey, aucun token, aucun composant n'est inventé. Tout vient des références. Si une donnée manque, demander à l'utilisateur ou suggérer une inspection MCP Figma.

### 2. Aucune valeur en dur — règle absolue

**AUCUNE valeur ne doit jamais être en dur** dans un asset produit dans Figma. Couleurs, paddings, gaps, corner radius, stroke weights, fontSize, fontFamily — tout doit être bindé sur une variable du DS ou utiliser un text style du DS. Si une valeur en dur subsiste, c'est un **bug** à corriger avant livraison.

Cf. `references/bindings-protocol.md` § Pourquoi cette règle.

### 3. Si un import par key échoue

C'est probablement parce que la librairie correspondante n'est pas activée dans le fichier de l'utilisateur. **Demander à l'utilisateur** d'activer la librairie. Ne **jamais** contourner en hardcodant. Ne **jamais** cloner depuis un autre fichier.

Message canonique à formuler :

> *« L'import de [variable / style / composant] a échoué — probablement parce que la librairie [Foundation - X] n'est pas activée dans ton fichier. Active-la via Figma > panneau gauche > Libraries > recherche [Foundation - X] > activer. Relance ensuite. »*

### 4. Marqueurs de statut

Respecter les marqueurs présents dans `references/design-system.md` :

- 🟡 = valeur à vérifier (synchronisation depuis Gitlab `src/tokens/*.json` via skill `sync-tokens`, à venir)
- ✅ = valeur vérifiée et stable

### 5. Composant racine — toujours instance, jamais clone

Header, footer, illustrations : **toujours instanciés** depuis la librairie publiée via `importComponentByKeyAsync`. Jamais clonés ni reconstruits.

## Skills qui délèguent à `design-system`

| Skill consommateur | Pour quoi |
|---|---|
| `design-landing-page` | Tokens, composants, illustrations, bindings-protocol pour production landing |
| `design-slide-deck` | Tokens communs + composants utilitaires (Button, profileBanner) + illustrations + bindings-protocol (la lib Typography Slides est spécifique au deck) |
| `design-web-section` | Tokens, composants, illustrations pour section isolée |
| `design-audit-brand-compliance` | Vérification de conformité (tokens utilisés, composants présents, alternance respectée) |

## Skills à venir qui délèguent à `design-system`

| Skill futur | Pour quoi |
|---|---|
| `sync-tokens` | Synchronisation des sections Colors / Typography / Spacing du DESIGN.md depuis les JSON Gitlab |
| `design-system-react` *(hypothétique)* | Mapping composants Figma → composants React Astro |

## Anti-patterns

- ❌ Inventer une key de composant — toujours consulter le catalog ou demander une instance de référence
- ❌ Hardcoder une valeur (couleur, spacing, radius, fontSize) — toujours bindé
- ❌ Cloner un composant racine (header/footer/illustration) — toujours instance
- ❌ Hardcoder une illustration en SVG inline — toujours instance de la librairie
- ❌ Cloner depuis un autre fichier comme palliatif à un import échoué — demander activation de la librairie
- ❌ Oublier `loadFontAsync({family:'Inter', style:'Regular'})` → erreur sur le premier `t.characters`
- ❌ Passer une valeur vide pour une prop TEXT dans `setProperties` → casse tout le `setProperties`
- ❌ Conclure « pas de variables » sur `getLocalVariableCollectionsAsync()` vide → les variables du DS sont remote, utiliser `importVariableByKeyAsync`

## Pré-requis techniques

- Plugin `llm-skills` installé
- **Pour production design** : MCP Figma (Dev Mode) configuré + librairies Foundation Frontguys activées dans le fichier cible

## Changelog

| Date | Version | Changements |
|------|---------|-------------|
| 2026-05-26 | 1.0.0 | Création initiale en extraction depuis `design-landing-page/references/`. Devient la SV unique du DS Frontguys, déléguée par les 4 skills `design-*` qui touchent au visuel. Miroir du pattern `a11y-rgaa` / `a11y-rgaa-audit` côté brand. |
