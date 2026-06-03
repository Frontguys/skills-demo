---
type: illustrations-catalog
status: ✅ stable
last_synced: 2026-05-26
source_of_truth: design-system.md
---

# Catalogue d'illustrations sémantiques — Frontguys

> Index ciblé des 20 illustrations les plus utilisées dans les landings Frontguys. La librairie complète contient 140+ illustrations.

## Librairie source

- **Nom** : `Foundation - Icons & Illustrations`
- **fileKey** : `DgrQtY2Ua2ULm1xyqcKAd0`
- **Page d'inspection** : `Illustrations`, node-id `0:1`

## Illustrations indexées

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

## Correspondance section → illustration

| Section / contenu | Illustrations pertinentes |
|-------------------|---------------------------|
| Hero (page d'accueil, accroche métier) | `target`, `idea`, `rocket`, `flash` |
| Hero (page formation) | `book`, `draw` |
| Stats / mesure de performance | `desktop-chart`, `chart`, `medal`, `trophy` |
| Expertises (design system) | `Arborescence`, `puzzle`, `dev`, `draw` |
| Expertises (transformation) | `planning` |
| Section contact / RDV | `Calendar` |
| Accessibilité | `wheelchair`, `globe-heart` |
| Section audit / diagnostic | `search` |
| Section communication / marketing | `megaphone` |
| Section satisfaction / témoignage | `thumb-up` |

## Si une illustration nécessaire n'est pas indexée

1. Inspecter la librairie via le MCP Figma sur le fileKey `DgrQtY2Ua2ULm1xyqcKAd0` (page `Illustrations`, node-id `0:1`)
2. Récupérer la key
3. **Mettre à jour ce fichier** pour les prochaines productions

## Règles d'usage

- ❌ **Jamais cloner** une illustration depuis un autre fichier (toujours instance de la librairie via key)
- ❌ **Jamais hardcoder** une illustration en SVG inline
- ✅ Pour chaque section visuelle de la landing, **choisir 1 illustration sémantique** (cf. table de correspondance)
- ✅ Si import par key échoue → demander activation de la librairie `Foundation - Icons & Illustrations` dans le fichier de l'utilisateur

## Dimensions par type de section

L'instance d'illustration importée a une taille native (typiquement 100×100). **Toujours redimensionner** via `inst.resize(W, H)` selon le type de section où elle est posée.

| Type de section | Dimensions (W × H) | Notes |
|-----------------|---------------------|-------|
| **Hero** (page d'accueil, expertise, formation, 404, etc.) | **350 × 350 px** | Taille canonique pour tout visuel principal de hero — assure une présence visuelle suffisante face au bloc titre + sous-titre + CTAs |
| Card avec illustration (`card / type=illustration`) | géré par le composant DS | Ne pas resize l'instance manuellement — la prop `Illustration#3452:0` du composant `card / simple` ou `card / illustration` gère le sizing |
| Section accent (CTA banner, conviction visuelle) | 240 × 240 px | Présence forte sans dominer le copy |
| Icon inline (eyebrow, bullet, badge) | utiliser les icônes du DS, pas une illustration | Voir `size/icon/small` et `size/icon/medium` (variables radius & sizing) |

> ⚠️ Les illustrations Frontguys sont **carrées** par convention (ratio 1:1). Toujours appliquer la même valeur en W et H. Pas de stretch.

### Pattern de code — illustration de hero

```js
const illuComp = await figma.importComponentByKeyAsync('<illu-key-from-catalog>');
const illu = illuComp.createInstance();
illu.resize(350, 350); // ⭐ Taille canonique hero
heroVisual.appendChild(illu);
```

### Pourquoi 350×350 en hero

- Équilibre visuel face au bloc texte (H2 40px + Subtitle 20px + 2 CTAs)
- Compatible avec le `spacing/base-12` (48px) entre colonnes sans déborder de la frame 1440 Desktop
- Cohérent avec les compositions hero existantes du DS (homepage, expertises, formation)

## Pré-requis technique

Librairie `Foundation - Icons & Illustrations` activée dans le fichier Figma de l'utilisateur. Activation : Figma > panneau gauche > Libraries > recherche `Foundation - Icons & Illustrations` > activer.
