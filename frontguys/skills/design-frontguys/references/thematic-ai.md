---
type: positioning-ai
status: ✅ stable
citable_as_is: true
last_synced: 2026-05-26
source: knowtion + RAO BPI DD 2026
---

# Positionnement Frontguys sur l'IA

> Référence à mobiliser dans **toute production qui touche à l'IA** — RAO, landing, slide, post, article, formation.

## Conviction fondatrice

> **L'intelligence artificielle est un moyen, un accélérateur, une opportunité de transformer. Pour être toujours pertinente et efficace, elle doit être cadrée et gouvernée stratégiquement.**

Voir `brand-identity.md` § Convictions — conviction 5, citable telle quelle.

## Les 3 principes canoniques

### Cadrée — Human-in-the-loop systématique

L'IA est utilisée selon le principe du **Human-in-the-loop** :

- Frontguys définit le **périmètre d'intervention de l'IA** et celui de l'humain
- À chaque étape, **qui fait quoi est clarifié**
- **L'IA assiste, analyse, propose** — l'humain reste **décisionnaire**, responsable des choix et en contrôle permanent des résultats

### Pertinente — IA quand elle apporte une vraie valeur

L'IA est mobilisée **uniquement lorsqu'elle apporte une réelle valeur** :

- Accélérer certains processus
- Automatiser des tâches ciblées
- Soutenir l'efficacité opérationnelle

Frontguys est conscient du **caractère non déterministe de l'IA** et **ne la considère jamais comme une solution universelle**. Son usage est choisi **avec discernement**, en complément de l'expertise humaine.

### Raisonné — Modèles légers, souverains, économes

- **Modèles adaptés aux besoins réels** (pas le plus gros disponible)
- **Solutions légères, économes en ressources** et financièrement maîtrisées
- **Limitation des dépendances technologiques fortes** (éviter le vendor lock-in)
- **Souveraineté quand possible** — solutions on-premise, open-source, cloud européen (Scaleway, OVH, HuggingFace, Mistral)

## Les 4 axes opérationnels — Maîtriser les usages IA

| Axe | Contenu |
|-----|---------|
| **Gouvernance** | Étude/benchmark des gateways IA · Déploiement maîtrisé · Visibilité et reporting des usages |
| **Coûts** | Éviter la dépendance à un fournisseur unique · Tester les LLM alternatifs (open-weight) · Privilégier API serverless économiques |
| **Adoption** | Solutions adaptées aux profils utilisateurs · Faciles à prendre en main · Exemple : agent personnalisé pour consultants |
| **Sécurisation** | Éviter la multiplication des installations et clés API · Expertise sur la sécurisation des serveurs MCP · MCP couplé au SSO Azure Microsoft |

## Le pattern universel — « Ce que l'IA fait / Ce que l'humain garde »

**Pattern narratif central** du positionnement IA Frontguys. À utiliser **systématiquement** dans toute description d'un cas d'usage IA.

```
Ce que l'IA fait                          Ce que l'humain garde
─────────────────                         ───────────────────
- Action automatisable                    - Décision et arbitrage
- Analyse, structuration                  - Sens, nuance, interprétation
- Génération, proposition                 - Responsabilité, validation
- Accélération mécanique                  - Vision, stratégie, qualité finale
```

### Exemples observés

| Cas | Ce que l'IA fait | Ce que l'humain garde |
|-----|------------------|-----------------------|
| **France TV — DS Assistant** | Suggère composants, reformule guidelines, répond aux questions techniques | Choix UX (native/custom), choix d'implémentation, autonomie de développer l'expertise |
| **Lefebvre Dalloz — DS IA native** | Échafaude composants React, assemble vues, branche API | Conception, code review, conventions, qualité finale, edge cases |
| **LFP — Refactoring agents IA** | Documente code legacy, détecte règles métier altérées, automatise tâches répétitives | Choix patterns, contrôle qualité, attention UX, connaissance règles métier |
| **Lefebvre Dalloz — Vibe coding** | Accélère création protocoles tests, produit prototypes, accélère analyse résultats | Vision/stratégie produit, priorisation, cohérence DS, alignement équipes |
| **BPI SVI — IA sparring partner** | Se projette dans usages investisseurs, challenge parcours | Cadre/objectifs/contexte, conception solutions, décisions et arbitrages UX |
| **UXR — Analyse entretiens** | Structuration verbatims, premiers codages, synthèses traçables | Interprétation/nuance, validation insights, recommandations produit |
| **Content System** | Analyse et réécrit, aligne sur la charte, automatise production textuelle | Contrôle hallucinations, sens de la nuance, responsabilité de la décision design |

## Les 9 cas IA Frontguys mobilisables

| Cas | Contexte | Résultat clé |
|-----|----------|--------------|
| **France TV — Design System Assistant** | UX multi-plateforme (web/iOS/Android/SmartTV) | GPT custom expert des guidelines, disponible 24/7 |
| **Lefebvre Dalloz — DS IA Native** | DS vieillissant, peu compatible IA générative | Reboot DS en 5 jours (avant : 2 semaines), composants Open Source + Copilot |
| **LFP — Agents IA Refactoring** | Outil critique, dette technique bloquant DS interne | Migration Angular + adoption DS, refonte inenvisageable rendue possible |
| **Lefebvre Dalloz — Vibe Coding** | LegalTech à accélérer | Prototype en 2 jours (avant : 10) cohérent avec DS |
| **BPI SVI — IA Sparring Partner** | Outil financier complexe, investisseurs peu disponibles | Parcours mieux adaptés, compréhension métier vulgarisée |
| **UXR — Analyse entretiens UX** | 16h de traitement pour 20 interviews | 16h → 2h, scalabilité, plus d'itérations |
| **POC IA Lab — Agent DS semi-autonome** | Besoin solutions souveraines, on-premise | Agent IA on-premise (Scaleway/OVH/Mistral) |
| **Content System accéléré** | Maintien voix unique à l'échelle | Drafting réduit ~30% temps |
| **IA to Design to Dev to IA — Frontguys** | Production du lot 2 du site Frontguys | 10 pages basées sur 4 templates, temps Figma + dev divisés par 10 |

> Chaque cas suit le **même pattern de slide** (template T09) : Contexte → Notre approche → Ce que l'IA fait / Ce que l'humain garde → Résultat → Cadre de maîtrise.

## Vocabulaire à mobiliser

- **Cadrée · Pertinente · Raisonnée** — la trilogie canonique
- **Human-in-the-loop** — le pattern d'encadrement central
- **Gouvernance IA · Gateway IA · MCP sécurisé · SSO Azure**
- **LLM open-weight · API serverless · cloud européen** (vs cloud propriétaire hors Europe)
- **POC** — Frontguys assume ses POC (5 en 2025) et les revendique
- **Cadre de maîtrise** — section systématique dans tout cas IA
- **Skills, MCP, agents IA, vibe coding** — vocabulaire technique assumé quand l'audience le permet
- **Sparring partner** — métaphore IA challenge / aide la réflexion

## Vocabulaire à éviter

| ❌ À éviter | Pourquoi |
|------------|----------|
| « Révolutionnaire », « disruptif », « magique » | Vocabulaire de hype incompatible avec Cadrée/Raisonnée |
| « L'IA va remplacer... » | Discours anxiogène ; l'IA est complément à l'expertise humaine |
| « Solution IA universelle » | Contredit le principe Pertinente |
| « L'IA gagne du temps tout court » | Trop générique ; toujours nommer **où** elle gagne du temps (16h→2h, 10j→2j…) |
| « Black box », « boîte noire » | Frontguys revendique le contrôle et la traçabilité |

## Anti-patterns

1. **La conviction IA décorative** — ❌ Lister « IA cadrée et gouvernée » sans démontrer **comment**. ✅ Toujours accompagner d'un cas concret + cadre de maîtrise + Human-in-the-loop explicité.
2. **Le POC qui impressionne sans transformer** — ❌ Démo IA spectaculaire sans changer le delivery. ✅ Toujours nommer le résultat opérationnel.
3. **L'IA sans cadre de maîtrise** — ❌ Décrire un cas IA sans les conditions du succès. ✅ **Toujours inclure une section « Cadre de maîtrise »**.
4. **L'IA universelle** — ❌ « L'IA peut faire X, Y, Z, A, B... ». ✅ Mobilisée **uniquement où elle a une valeur démontrable**.
5. **Vendor lock-in masqué** — ❌ Évangéliser OpenAI/Anthropic/Google sans alternative. ✅ Frontguys teste LLM alternatifs et conseille selon le contexte.
6. **IA présentée comme menace** — ❌ « L'IA va prendre le travail des designers/devs ». ✅ Levier qui libère du temps pour des activités à plus haute valeur.

## Règles d'usage pour LLM

### Quand un asset touche à l'IA, charger en priorité

1. **Ce document** (`thematic-ai.md`)
2. **`brand-identity.md`** (au moins conviction 5)
3. Le persona ciblé (section « Rapport à l'IA » 🔵 hypothèse)

### Lors de la rédaction

- Toujours ancrer **explicitement** la conviction 5 (citation directe possible)
- Toujours appliquer le pattern « Ce que l'IA fait / Ce que l'humain garde » si un cas IA est décrit
- Toujours nommer un **résultat opérationnel chiffré ou tangible** (jamais un bénéfice vague)
- Toujours mentionner un **cadre de maîtrise** quand le format le permet (slide > 1 paragraphe)

### Lors de l'auto-audit

- [ ] Conviction 5 ancrée (au moins implicitement)
- [ ] Trilogie Cadrée/Pertinente/Raisonnée respectée (jamais d'évangélisation universelle)
- [ ] Si cas IA présenté : pattern Human-in-the-loop visible
- [ ] Si cas IA présenté : cadre de maîtrise explicité
- [ ] Vocabulaire de hype absent
- [ ] Résultats chiffrés ou tangibles
- [ ] Pas de promesse de solution universelle
- [ ] Adapté à l'audience (vocabulaire technique seulement si persona Alexis/Claire ; vulgarisé pour Marc-Antoine)
