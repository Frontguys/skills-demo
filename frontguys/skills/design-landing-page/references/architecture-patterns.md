---
type: architecture-patterns
status: ✅ stable
last_synced: 2026-05-26
---

# Patterns d'architecture — Landing pages Frontguys

> Patterns canoniques de séquencement des sections. À adapter selon la page et le persona ciblé.

## Pattern par défaut — Landing complète

Structure de référence pour une homepage ou page expertise complète :

```
1. Hero                       (H1 + sous-titre + 1-2 CTAs + 1 visuel sémantique)
2. Value props / Approche     (2-4 items en grille)
3. Social proof / Preuves     (logos, métriques, témoignages, cas clients)
4. Expertise / Offre          (grille de cards détaillant les services)
5. Convictions                (1 conviction ancrée explicitement)
6. Chiffres clés              (métriques fortes — optionnel)
7. CTA final / Contact        (bannière conversion ou profileBanner)
8. Footer                     (instance composant racine)
```

## Variantes par type de page

### Page homepage (positionnement global)

```
Hero · Value props · Social proof · Expertise · Convictions · Chiffres clés · CTA final · Footer
```

- **Persona dominant** : à arbitrer (souvent Claire pour la cible produit/design)
- **Conviction recommandée** : conviction 1 (design = levier business) ou conviction 2 (collaboration interdisciplinaire)
- **CTA primary final** : « Planifiez un échange » ou « Parlez de votre projet »

### Page expertise (DS, accessibilité, IA, etc.)

```
Hero spécialisé · Value props (3 piliers) · Cas client emblématique · Méthode · Convictions · CTA expert
```

- **Persona dominant** : Claire (DS) / Alexis (refactoring) / Marc-Antoine (gouvernance IA)
- **CTA primary final** : « Demandez un audit » ou « Échangez avec un expert »

### Page formation

```
Hero formation · Programme · Format & modalités · Témoignages anciens · Convictions · CTA inscription
```

- **Persona dominant** : Claire ou Alexis (selon thème de la formation)
- **Visuels sémantiques** : `book`, `draw`
- **CTA primary final** : « Initiez-vous à [sujet] » ou « Téléchargez le programme »

### Page cas client

```
Hero cas · Contexte · Notre approche · [Si IA : pattern Ce que l'IA fait / Ce que l'humain garde] · Résultats chiffrés · Cadre de maîtrise · CTA contact
```

- **Conviction recommandée** : 4 (impact mesurable) — sauf si IA, alors 5
- **CTA primary final** : « Demandez à voir d'autres cas similaires »

## Règles d'alternance des fonds

Séquence canonique pour rythmer la page sans contraste brutal (cf. `design-system.md` § Alternance) :

```
default → subtle → default-alt → default → default-alt → default → default-alt → subtle → footer
```

**Jamais de dark/light brutal.** Subtil et toujours light-based.

## Règles d'écriture par section

### Hero

- **H1** : phrase active « Nous {verbe} votre {objet client}. » (max 12 mots, max 1 phrase)
- **Sous-titre** : bascule sur « Vous » ou impératif « {Verbe impératif} {bénéfice}. »
- **1 CTA primary** + optionnellement **1 CTA secondary** (link ou button-secondary)
- **1 illustration sémantique** alignée à droite (Desktop) ou en haut (Mobile)

### Value props / Approche

- **Surtitle** : « Notre approche » / « Notre méthode » (1-3 mots)
- **H2** : phrase active « Nous {verbe}… »
- **2 à 4 items max** (au-delà, segmenter en plusieurs sections)
- **Chaque item** : icône ou illustration + titre court + body 1-3 phrases max

### Social proof

- Logos clients (composant `card / photo` ou grille de logos)
- Métriques fortes (chiffres + caption — sans visuel illustratif lourd)
- Si témoignage : composant `card / simple` avec photo + citation + nom + jobTitle

### Expertise / Offre

- Grille de `card / simple` (3-4 items)
- Chaque card : titre + body 2-3 phrases + lien standalone vers détail
- **Ne jamais** mettre un `Button / primary` dans une card d'expertise (1 primary max par section)

### Convictions

- **1 seule conviction par section** (ne jamais lister les 5 de manière décorative)
- **Format** : Surtitle + H2 + body 2-3 phrases + (optionnel) 1 exemple chiffré
- Fond `subtle` pour différencier de la section précédente
- Citer la conviction depuis `agents/frontguys-brand-agent/references/brand-identity.md`

### Chiffres clés (optionnel)

- 3 ou 4 métriques max
- Format : nombre (Heading 2) + caption (Caption 1)
- 1 illustration sémantique (`chart`, `medal`, `trophy`) optionnelle

### CTA final / Contact

- Soit `profileBanner` (avec photo expert + nom + jobTitle + 2 CTAs)
- Soit section CTA centrée (Surtitle + H2 « Parlons de vos enjeux. » + body « Échangez avec un expert. Sans engagement. » + Button primary)
- Fond `subtle` ou `default-alt`
- **Toujours dans un container de section** (fond + padding `base-20`/`base-24`), au même titre qu'un bloc de cards. Le `profileBanner` est un **enfant de la section**, étiré à la largeur de contenu (1248 Desktop) — **jamais un enfant direct de la frame racine** (sinon pleine largeur 1440, désaligné). Cf. `design-system → components-catalog.md § Recette profileBanner`. Peut partager la section de la conviction.

### Footer

- **Toujours** instance du composant racine `footer` (cf. `components-catalog.md`)
- Jamais cloner, jamais reconstruire — le composant DS contient déjà logo + tagline + colonnes + accessibilité + réseaux + mentions légales

## Règles de cohérence cross-section

- **Exactement 1 `<h1>`** sur la page (dans le Hero)
- Hiérarchie descendante sans saut (`h1` → `h2` → `h3`, jamais `h1` → `h3`)
- **1 CTA primary max par section**
- **Au moins 1 conviction ancrée** dans une section dédiée (asset long format)
- **Vocabulaire cohérent** avec le persona dominant (cf. `voice-vocabulary.md` § Règles par persona)
- **Alternance Nous (titres) ↔ Vous (sous-titres / CTAs)** appliquée systématiquement

## Responsive

Toute production Figma Frontguys se fait en 2 versions séparées (cf. `design-system.md` § Layout) :

| Breakpoint | Frame | Mode typo |
|------------|-------|-----------|
| 1440px | Desktop | `Large` |
| 320px | Mobile | `Small` |

Sur Mobile : illustrations en haut de section (pas à droite), CTAs full-width, padding horizontal `base-4` (16px).
