---
type: vocabulary
status: ✅ stable
citable_as_is: true
last_synced: 2026-05-26
source: knowtion/refonte/content-system/tone-of-voice + ux-writing-page-approche
---

# Vocabulaire Frontguys

> Verbes CTA canoniques, bascules anglicismes → FALC, termes à bannir.

## Verbes impératifs pour les CTA

Tous les CTA Frontguys utilisent un **verbe conjugué à l'impératif vouvoiement** (jamais d'infinitif).

### Verbes canoniques

| Verbe | Quand l'utiliser |
|-------|------------------|
| **Découvrez** | Action exploratoire — page, formation, guide, expertise |
| **Profitez** | Bénéfice / opportunité — offre, ressource gratuite |
| **Sécurisez** | Réassurance — conformité, légal, qualité |
| **Contactez-nous** | Demande de contact directe |
| **Téléchargez** | Téléchargement d'un livrable |
| **Planifiez** | Prise de rendez-vous, échange programmé |
| **Échangez** | Conversation, premier contact informel |
| **Demandez** | Devis, diagnostic, audit |
| **Visualisez** | Cas client, démonstration |
| **Initiez-vous** | Article, contenu pédagogique |
| **Parlez de votre projet** | CTA contact long format |

### Anti-patterns CTA

| ❌ À bannir | ✅ Remplacer par |
|------------|-----------------|
| « Voir nos formations » | « Découvrez nos formations » |
| « En savoir plus » | « Découvrez [le sujet] » |
| « Télécharger » | « Téléchargez le guide » |
| « Contact » | « Contactez-nous » |
| **« Label »** (valeur par défaut Figma laissée) | **Verbe impératif canonique selon contexte** |
| **« Bouton »** / « Cliquez ici » / « OK » | **Verbe impératif canonique avec objet** (« Planifiez un échange ») |

### Règle absolue — jamais de label CTA générique

> **Tout CTA Frontguys (primary ou secondary) doit afficher un verbe impératif vouvoiement canonique avec un objet sémantique.** Jamais de label par défaut Figma (« Label »), jamais de label générique (« Bouton », « OK », « Cliquez ici »), jamais de label coupé (« Voir »).

**Le test** : si le label peut être copié-collé dans un autre asset sans qu'on perde du sens, c'est qu'il est trop générique.

**Pièges techniques côté Figma** :

- Sur le composant Button Frontguys, la prop TEXT du label est `CTA#2209:0` — **pas** `Label` (qui est un VARIANT Yes/No qui affiche/masque le label).
- Si on fait `setProperties({ Label: '...' })` au lieu de `setProperties({ 'CTA#2209:0': '...' })`, le label reste « Label » par défaut. Erreur silencieuse possible.
- Cf. `design-system` → `components-catalog.md` § Recette Button pour la bonne syntaxe.
| « Parler de mon projet » | « Parlez de votre projet » |

## Bascules anglicismes → FALC

Frontguys préfère systématiquement l'équivalent français quand il existe.

| ❌ Anglicisme / jargon | ✅ FALC |
|-----------------------|--------|
| Vélocité | Rapidité |
| Process | Méthode |
| Delivery | Livraison(s) |
| Interdisciplinaire | Entre métiers |
| Dette d'interface / dette technique | Incohérences d'interface (selon contexte) |
| Gouvernance claire | Jalons clairs |
| Levier business | Levier de performance |
| Cadrage (conseil) | Définition |
| Industrialiser la cohérence | Accélérer les livraisons |
| Transformation digitale | (à éviter — formulation au cas par cas) |
| Impact (seul) | Résultat concret nommé |
| Inclusion (seul) | Égalité d'accès / inclusion numérique |
| Expérience (seul) | Expérience utilisateur / expérience client |

### Exceptions tolérées

Termes techniques acceptables **quand l'audience le justifie** (persona Alexis, contenu purement technique) :

- React, TypeScript, Storybook — termes propres à la stack
- Design System / DS — terme métier consacré, jamais traduit
- Tokens, components, props — vocabulaire DS standardisé
- WCAG, RGAA — référentiels officiels

## Termes signature Frontguys

Mots et tournures à **mobiliser** :

- **Design System** ou **DS** (majuscules, jamais traduit)
- **Design/Dev** ou **design ↔ dev** (collaboration centrale)
- **Senior / Séniorité** (revendiqué, à utiliser sans gêne)
- **Frontguys** (jamais « FrontGuys » ni « Front Guys »)
- **Mission délimitée**, **squad augmentée**, **handover propre** (modèles d'intervention)
- **Sans engagement**, **gratuit**, **premier échange** (réassurance commerciale)

## Termes à éviter

- « Agence » seul → préférer « agence design + dev » ou « partenaire »
- « Transformation digitale » — trop institutionnel
- « Excellence » en titre — c'est une valeur, pas un argument commercial
- « Expert » auto-attribué dans un CTA ou un body — préférer la preuve (cas, chiffre, livrable)
- « Solutions » générique — préférer le livrable nommé
- Adjectifs auto-valorisants : *innovant, unique, premium, visionnaire, disruptif*
- Termes esthétiques seuls : *beau, élégant, designé* (sans bénéfice)

## Règles spécifiques par persona

Voir les sections « Rapport à l'IA » et « Vocabulaire » dans chaque persona :

- **Claire** — vocabulaire design + produit
- **Marc-Antoine** — vocabulaire ROI + risque + business
- **Alexis** — vocabulaire composants + tests + architecture
