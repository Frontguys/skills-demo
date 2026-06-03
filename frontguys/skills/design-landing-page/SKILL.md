---
name: design-landing-page
description: >
  Composition d'une landing page complète dans Figma (Hero + sections + footer).
  À déclencher dès qu'une demande porte sur une page web complète à produire dans
  Figma : "fais-moi une landing page", "fais-moi une landing", "construis une page dans Figma",
  "design une landing"
---

# design-landing-page — Landing page dans Figma

Compose une landing page complète (Hero + sections + footer) dans Figma. Sortie unique : **frame Figma** via MCP Figma + bindings-protocol.

## Posture

Assistant IA, pas product designer humain. Tu cadres, produis et auto-audites une frame respectant le DS et la voix. Tu **ne tranches pas** un arbitrage stratégique sauf demande explicite. Tu **ne garantis pas** l'accessibilité sans audit humain (cf. `a11y-rgaa-audit`).

## Délégation à `design-frontguys`

Source de vérité unique pour voix, personas, convictions, positionnement IA. Tu **appelles explicitement** et **cites la source** (« design-frontguys confirme que… »). Si indisponible : avertir et refuser de produire un asset éditorial. **Jamais** de règle de voix de mémoire.

## Workflow

**Phase 1 — Cadrage**  
Demander : nom de la page, persona dominant (Claire / Marc-Antoine / Alexis), objectif (réassurance / pédagogie / conversion / positionnement), sections attendues, URL Figma cible + node-id.

**Phase 2 — Architecture**  
Proposer la séquence des sections + la conviction à ancrer. **Demander validation avant de produire.** Patterns dans `references/architecture-patterns.md`.

**Phase 3 — Production Figma**  
Charger `_shared/figma-production-workflow.md` (squelette commun) + `references/figma-production-workflow.md` (spécificités landing : section par section libre, CTA final via profileBanner) + `references/anti-patterns.md`.

## Fichiers à charger — quand quoi

| Besoin | Fichier |
|---|---|
| Patterns d'architecture, sections types | `references/architecture-patterns.md` |
| Squelette workflow commun (setup, footer, pre-flight, CTA générique) | `_shared/figma-production-workflow.md` |
| Workflow Figma spécifique landing (section par section libre, CTA via profileBanner) | `references/figma-production-workflow.md` |
| Anti-patterns Figma techniques | `references/anti-patterns.md` |
| Tokens DS (couleurs, typo, spacing, alternance, responsive) | `design-system` → `design-system.md` |
| Helpers MCP, pre-flight check, bindings | `design-system` → `bindings-protocol.md` |
| Keys composants, props patterns | `design-system` → `components-catalog.md` |
| Choix d'illustration par section | `design-system` → `illustrations.md` |
| Voix, persona, conviction, IA | délégation à `design-frontguys` |

## Règles d'or — non-négociables

1. **Aucune valeur en dur** (couleur, spacing, radius, fontSize, key) — tout vient du DS documenté.
2. **Header & footer = instances** du composant DS racine. Jamais cloner ni reconstruire.
3. **Voix, persona, conviction** → toujours déléguer à `design-frontguys` et citer la source.
4. **1 H1, 1 CTA primary max par section**, ≥1 conviction ancrée explicitement.
5. **Illustrations** : toujours instances DS (jamais SVG hardcodé). Hero = 350×350.
6. **Pre-flight check** obligatoire avant livraison (`preflightCheck(parentFrame)`, objectif 0 issue).

## Livrable final

URL de la frame, composants DS utilisés (keys + librairie), illustrations utilisées (justification sémantique), tokens consommés, persona ciblé, conviction ancrée (citer `design-frontguys`).

## Pré-requis

- Skill `design-frontguys` disponible
- MCP Figma (Dev Mode) configuré
