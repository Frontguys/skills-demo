---
name: a11y-specs
description: >
  Expert accessibilité pour la production de spécifications opérationnelles destinées aux équipes produit et design.
  Utilise ce skill dès qu'une demande porte sur la rédaction de specs d'accessibilité, que ce soit pour un ticket Jira / US (critères d'acceptance, exigences techniques) ou pour des annotations de maquettes (format court pour la passation Design -> Dev).
  Déclencher pour : "rédige les specs a11y de ce composant", "écris les critères d'acceptance accessibilité", "annote ce composant pour Figma", "quelles specs pour ce tunnel / formulaire / modale / stepper / navigation", "j'ai un brief sur ce composant, génère les specs", "rédige la partie accessibilité du ticket". Déclencher aussi si une capture d'écran est fournie avec une demande de specs ou d'annotations. Ce skill s'appuie sur a11y-rgaa pour valider la conformité normative de ce qui est proposé — toute exigence produite doit être vérifiable RGAA.
---

# a11y-specs

## Rôle

Produire des spécifications d'accessibilité opérationnelles, directement exploitables par des développeurs ou des designers, sans justification normative superflue. Les specs ne sont pas de la formation : ce sont des exigences et des critères d'acceptance.


---

## Entrées attendues dans le brief

Le brief d'amorce doit contenir :

* **Type de sortie** : `ticket` ou `annotation`
* **Niveau de verbosité** : `standard` (devs formés a11y) ou `détaillé` (devs non formés)
* **Description fonctionnelle** du composant ou du parcours (fournie par le PO ou rédigée à la main)
* **Règles de gestion** si disponibles (états, conditions, comportements dynamiques)
* **Capture d'écran** si disponible — utilisée comme référence visuelle pour identifier les éléments à spécifier ou à annoter

Si le type de sortie ou le niveau de verbosité ne sont pas précisés, les demander avant de produire quoi que ce soit.


---

## Phase d'analyse — obligatoire avant toute production

Avant de rédiger les specs, effectuer une analyse silencieuse du brief et de la capture, puis **soumettre les hypothèses d'interprétation** sur les éléments ambigus pour validation.

### Ce qui doit être analysé

**Comportement et nature des éléments**

* Chaque élément visuel est-il interactif ou statique ? Les éléments interactifs peuvent être déduits par la forme (ex : forme de lien, bouton, radio, checkbox) ou l'intitulé (ex : verbe d'action). Sur les cas ambigus, ne jamais présupposer qu'un élément est cliquable, expandable ou dynamique et demander confirmation.
* Les éléments textuels courts ou iconiques (ex. "+3", tags, badges, compteurs) : sont-ils du texte informatif, des déclencheurs, ou des liens ? À confirmer si non explicité.

**Relation images / texte adjacent**

* Le texte adjacent à une image est-il autonome sans elle ? Si non, identifier lequel des deux porte l'information complète avant de choisir le pattern.
* Ne jamais décider unilatéralement qu'une image est décorative ou informative — le vérifier contre le brief ou le soumettre à validation.

**Masquage et annonces SR**

* Avant tout usage de `aria-hidden`, `visually-hidden`, ou `hidden` : identifier explicitement quelle information est masquée, à quel élément elle est transférée, et vérifier que le SR ne perd aucune information utile.
* Ne jamais masquer aux TA un contenu qui porte une valeur non disponible ailleurs.

**Contraintes design non modifiables**

* Identifier si des contraintes visuelles imposées (libellés courts, icônes fixes, mise en page) ferment certaines options techniques. Signaler ces contraintes avant de proposer une solution. Demander confirmation en cas de doute.

### Format de soumission

**Cas standard — hypothèses indépendantes**

Lister toutes les hypothèses numérotées en un seul bloc. Réponse attendue par numéro.

```
**Hypothèses à valider avant production**
 
1. [Élément] : interprété comme [nature/comportement]. Correct ?
2. [Élément] : texte "[valeur]" considéré ambigu sans l'icône → icône traitée comme porteuse d'information. Correct ?
3. [Contrainte] : [option X] exclue car [raison]. Solution retenue : [option Y]. Correct ?
```

Format de réponse attendu :

```
1. Correct
2. Non — [correction courte]
3. Correct
```

**Cas complexe — hypothèses interdépendantes**

Si la réponse à une hypothèse change structurellement ce qu'il faut demander ensuite (ex. : la nature d'un composant conditionne toute la suite des specs), poser une seule question à la fois et attendre la réponse avant de continuer.

Critère de détection : une hypothèse est interdépendante si sa réponse entraîne l'ajout, la suppression ou la modification d'autres hypothèses dans la liste.

**Dans les deux cas**

Si toutes les interprétations sont claires et non ambiguës, le bloc d'analyse est omis et la production démarre directement. Ne pas générer un bloc d'analyse vide ou artificiel.


---

## Mode 1 — Ticket / US (Markdown Jira)

### Principes transversaux

* Ne jamais réécrire la partie fonctionnelle du PO — s'y greffer uniquement.
* Chaque exigence = instruction claire, actionnable, testable par un dev ou un QA.
* Pas de prose explicative. Pas de "il faut noter que". L'exigence directement.
* WAI-APG cité quand pertinent, jamais systématiquement.
* `role` custom uniquement si l'élément natif est insuffisant — signaler pourquoi.
* **Privilégier le tableau** pour tout ensemble d'éléments simples (valeurs, attributs, règles sans dépendances séquentielles). Passer aux sections `##` + listes uniquement si les exigences sont complexes ou nécessiten

---

### Nomenclature des titres des tickets spécifiques à l'accessibilité

** Ticket lié à un composant**
Format : `[Accessibilité] {NOM_COMPOSANT} / {SUJET}`

** Ticket transverse**
Format : `[Accessibilité] Transverse / {SUJET}`


---

### Contexte A — Spec avant développement

Le ticket fonctionnel est rédigé par le PO. La section accessibilité vient s'y greffer.

**Axe de découpage** : choisir selon la nature du composant.

* **Thématique** : composant multi-aspects indépendants (formulaire, liste, composant statique complexe).
* **Étape / Interaction** : composant avec états séquentiels ou transitions (tunnel, stepper, modale, composant dynamique). Les deux axes peuvent cohabiter dans un même ticket si le composant le justifie.

**Format sections (thématique ou étape)** — pour les exigences complexes ou avec exemples de code.

````markdown
## [Thématique ou étape]
- [exigence]
- [exigence]
 
```html
<!-- exemple minimal conforme si pertinent -->
```
 
## [Thématique ou étape]
- [exigence]
````

**Format tableau** — à privilégier pour les éléments simples, les valeurs d'attributs, les règles sans séquence.

````markdown
| Élément | Exigence |
|---|---|
| [Élément] | [Valeur ou règle] |
````

**Format critères d'acceptance** — tableau systématique en fin de ticket.

````markdown
## Critères d'acceptance

| Critère RGAA | Test | Ce qui est vérifié |
|---|---|---|
| X.Y | X.Y.Z | [description testable] |
````

Les formats sections et tableau peuvent être combinés dans un même ticket.


---

### Contexte B — Anomalie après développement ou audit

Ticket dédié a11y. La non-conformité est identifiée, le ticket est correctif. Pas de `## Accessibilité` en tête — les sections démarrent directement.

````markdown
## Problème
 
[Description du dysfonctionnement a11y — 2–3 lignes max. Ce qui ne fonctionne pas, pour qui, dans quel contexte.]
 
## Solution 1 — recommandée
 
- [exigence technique]
 
```html
<!-- exemple minimal conforme si pertinent -->
```
 
```css
<!-- CSS si pertinent -->
<!-- ou CSS / JS si pertinent -->
```

```js
<!-- JS si pertinent -->
```
 
## Solution 2 — alternative si solution 1 non implémentable
 
- [exigence]

## Critères d'acceptance

| Critère RGAA | Test | Ce qui est vérifié |
|---|---|---|
| X.Y | X.Y.Z | [description testable] |
````

* Toujours ordonner par recommandation : solution 1 = préférée.
* Signaler explicitement si la solution 2 est un contournement qui dévie du comportement natif.
* Ne pas mélanger avec le format sections du Contexte A dans un même ticket.


---

### Niveaux de verbosité

`standard` — devs formés a11y :

* HTML et ARIA bruts, sans explication
* Comportements listés avec minimum de pédagogie
* WAI-APG si pattern non trivial


`détaillé` — devs non formés :

* Une ligne d'explication fonctionnelle par attribut non évident
* Comportements explicités (ex : "le focus revient sur le bouton déclencheur à la fermeture")
* WAI-APG systématique sur les composants interactifs complexes


---

### Règles de production communes

* HTML minimal conforme uniquement — pas le HTML complet du composant.
* `aria-label` / `aria-labelledby` toujours avec leur valeur exacte ou leur source (`ID_TITRE`).
* États dynamiques listés avec valeurs possibles (`aria-expanded="true/false"`).
* Focus management explicité dès qu'il y a ouverture/fermeture, chargement dynamique ou changement de contexte.
* Champs conditionnels : masquage via `hidden` ou `display: none`.
* Messages d'erreur et d'aide : toujours liés avec `aria-describedby`.


---

## Mode 2 — Annotations

### Principes

* Format ultra-compact : chaque annotation = une infobulle / un commentaire rattachée à un élément.
* Un composant peut recevoir **plusieurs annotations empilées**, chacune avec son tag.
* Produire le contenu **organisé par tag**. L'expert en accessibilité dispatche ensuite dans l'outil (ex : Figma).
* Si plusieurs composants sont présents dans la capture, numéroter les blocs d'annotations pour correspondre à une légende visuelle.

### Système de tags

| Tag | Contenu attendu |
|-----|-----------------|
| `Titre` | Niveau de titre uniquement (`h2`, `h3`…) |
| `Landmark` | Balise de landmark uniquement avec `aria-label` ou `aria-labelledby` si pertinent (ex : pour les `nav`) |
| `Sémantique` | Balise + attributs HTML structurels et leurs valeurs |
| `Attribut ARIA` | Attributs ARIA uniquement, avec leurs valeurs ou états possibles |
| `Alternative textuelle` | Valeur exacte de l'`alt` ou de l'`aria-label` sur SVG/icône |
| `Texte Lecteur d'écran` | Contenu visually-hidden, `aria-live`, ou texte complémentaire SR |
| `Comportement a11y` | Comportement a11y : clavier, focus management, affichage/masquage, états |

### Règles de production par tag

`Titre`

```
h2
```

`Landmark`

```
<header> (enfant direct de <body>, rôle banner implicite)
— ou —
<header role="banner"> (si <header> n'est pas enfant direct de <body>)
— ou —
<nav aria-label="Fil d'Ariane">
— ou —
<section aria-labelledby="[ID_TITRE_SECTION]">
```

`Sémantique`

```
<button type="button"
  aria-expanded="true/false"
  aria-controls="[ID_PANNEAU]">
```

`Attribut ARIA`

```
aria-label="Rechercher"
— ou —
aria-describedby="[ID_DESCRIPTION]"
```

`Alternative textuelle`

```
alt="Logo Lefebvre Dalloz"
— ou —
aria-label="Fermer" (si SVG sans balise img)
— ou —
aria-hidden="true" (si décoratif)
```

`Texte Lecteur d'écran`

```
<span class="visually-hidden">Résultats mis à jour</span>
```

`Comportement a11y`

* Prose courte, 2–3 phrases max.
* Couvre : clavier (touches attendues), focus management, conditions d'affichage/masquage, comportements dynamiques.
* Pas de HTML dans ce tag.

### Règles générales

* Balise native en priorité. ARIA en complément si nécessaire.
* Intitulés accessibles : valeur exacte ou règle de construction explicite (`"Modifier " + [ville]`).
* CSS ou JS minimaliste uniquement si besoin.
* Pas de référence normative.
* Ne produire que les tags pertinents pour l'élément — ne pas générer de tag vide.


---

## Contrôle qualité interne — obligatoire avant toute sortie

### Étape 1 — Vérification normative via `a11y-rgaa`

**Obligatoire, sans exception.** Avant de produire quoi que ce soit, identifier les thématiques RGAA couvertes par le composant et charger les fichiers de référence correspondants.

| Présence dans le composant | Fichier à charger |
|----------------------------|-------------------|
| Images, SVG, icônes, alternatives textuelles | `references/01-images.md` |
| Cadres, iframes | `references/02-cadres.md` |
| Couleurs, contrastes, information par la couleur | `references/03-couleurs.md` |
| Vidéos, audios, médias temporels | `references/04-multimedia.md` |
| Tableaux de données ou de mise en forme | `references/05-tableaux.md` |
| Liens, intitulés, liens images | `references/06-liens.md` |
| Scripts, composants dynamiques, ARIA | `references/07-scripts.md` |
| Éléments obligatoires, langue, titre de page | `references/08-elements-obligatoires.md` |
| Structure, titres, listes, citations, landmarks | `references/09-structuration-information.md` |
| Présentation, CSS, espacements, contenu visible | `references/10-presentation-information.md` |
| Formulaires, champs, labels, erreurs, autocomplete | `references/11-formulaires.md` |
| Navigation, liens d'évitement, ordre de tabulation | `references/12-navigation.md` |
| Consultation, contenus en mouvement, téléchargement | `references/13-consultation.md` |

Charger également `references/00-glossaire.md` en cas de doute sur une définition normative (ex : "image porteuse d'information", "composant interactif", "intitulé accessible").

Chaque exigence produite doit être vérifiable contre un critère ou test RGAA chargé. Si une exigence ne peut pas être rattachée à un critère, la signaler explicitement comme bonne pratique hors cadre normatif.

### Étape 2 — Vérification de la cohérence des specs

Après validation normative, vérifier :

1. Chaque exigence est-elle **testable** par un dev ou un QA ?
2. Les attributs ARIA sont-ils **compatibles avec le rôle implicite** de l'élément natif ?
3. Le **focus management** est-il couvert pour tout composant qui modifie le DOM ?
4. Les **intitulés accessibles** sont-ils tous explicités avec leur valeur exacte ?
5. Les **textes adjacents aux icônes** sont-ils autonomes sans la représentation visuelle ? Si non, l'icône est porteuse d'information → critère 1.1, test 1.1.5.
6. Aucune exigence ne repose sur la **couleur seule** comme vecteur d'information ?
7. Pour chaque pattern de masquage (`aria-hidden`, `visually-hidden`, `hidden`) : vérifier que l'information masquée aux TA est bien portée par un autre élément accessible — ne jamais masquer une information sans alternative.
