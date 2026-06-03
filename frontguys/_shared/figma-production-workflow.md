# Workflow de production Figma mutualisé

Squelette commun à tous les skills de production de page Frontguys (`design-article-page`, `design-case-study-page`, `design-contact-page`, `design-formation-detail-page`, `design-landing-page`, `design-listing-page`).

**Charger ce fichier au démarrage de la phase 3 (production)**, en complément du `figma-production-workflow.md` local du skill, qui ne décrit que les sections spécifiques à son type de page (hero, sections du body, composants signature).

## 1. Pré-requis (commun à toutes les pages)

- URL Figma cible et `node-id` fournis
- `design-system → bindings-protocol.md` chargé (non-négociable)
- `_shared/figma-anti-patterns.md` chargé
- MCP Figma accessible
- Librairies activées dans le fichier utilisateur (cf. `design-system → design-system.md § Libraries`). Si l'import échoue : demander activation, jamais contourner.

## 2. Convention de mode (rappel)

**Tout en light, sur toutes les pages.** Le mode `dark` existe dans la collection `Semantic` mais n'est pas utilisé en production. La différenciation visuelle entre sections se fait uniquement par les `background/*` light : `default` (blanc), `subtle` (mint), `default-alt` (gris très clair), `fade` (lavande pâle), `accent` (teal, avec textes en `foreground/default-invert` pour le contraste).

Aucun `setExplicitVariableModeForCollection(_, darkMode.modeId)` dans aucun workflow. Cf. `_shared/figma-anti-patterns.md § Modes`.

## 3. Setup (premier appel MCP, identique pour toutes les pages)

Suivre strictement les étapes 0 à 3 de `bindings-protocol.md` :

1. `setCurrentPageAsync` sur la page cible (climber `.parent` jusqu'à PAGE si besoin)
2. `loadFontAsync` pour **toutes** les fonts DS (Inter Regular + Reddit Sans Regular/Medium au minimum, cf. `design-system.md § Typography`)
3. Import en bloc (variables, styles, composants) en try/catch
4. Stocker les IDs dans `setSharedPluginData` de la page (pour les appels MCP suivants)
5. Créer la frame parent : **1440 Desktop**, `VERTICAL`, `bindFill background/default`, padding 0, itemSpacing 0
6. Header : instance racine `header / device=desktop`, `layoutSizingHorizontal='FILL'`

## 4. Section par section (appels MCP séparés)

Pour chaque section, dans un appel MCP séparé :

1. Récupérer vars/styles/comps depuis `getSharedPluginData`
2. Recharger les fonts (chaque appel MCP repart de zéro)
3. Créer la section (frame avec `bindFill` + `bindSpacing`, cf. bindings-protocol)
4. Ajouter le header de section + contenu spécifique à la page (voir le `figma-production-workflow.md` local au skill)
5. Configurer les `componentProperties` des instances via `setProperties`
6. Forcer le stretching sur rows / grids / cards (cf. `_shared/figma-anti-patterns.md § Layout et sizing`)
7. `parentFrame.appendChild(section)` puis `section.layoutSizingHorizontal='FILL'`

## 5. CTA final générique (recette canonique partagée)

Pattern réutilisé tel quel par `design-article-page`, `design-case-study-page`, `design-formation-detail-page`, `design-listing-page`. Les pages `design-landing-page` (CTA via profileBanner) et `design-contact-page` (pas de CTA final, c'est la page de destination) n'ont pas besoin de ce bloc.

```
Frame VERTICAL
  bindFill background/subtle              (subtle, JAMAIS fade ni accent)
  padding T/B base-20, L/R base-24
  itemSpacing base-6
  counterAxisAlignItems = 'CENTER'
  layoutSizingHorizontal = 'FILL'

  Surtitle "Parlons-en"                   (fill brand/primary, optionnel)
  Heading 2 "Nous transformons …"         (fill foreground/default, CENTER)
  Subtitle "Profitez d'un premier …"       (fill foreground/subtle, CENTER)

  Row HORIZONTAL itemSpacing base-4, counterAxisAlignItems = 'CENTER'
    Button / secondary "Découvrez notre expertise"
    Button / primary   "Contactez-nous"
```

Labels canoniques : `secondary = "Découvrez notre expertise"`, `primary = "Contactez-nous"`. Toujours en `background/subtle`, jamais `fade` (la lavande est réservée aux sections d'information) ni `accent` (le teal est réservé aux sections signature comme hero ou Résultats).

## 6. profileBanner (rappel de pattern)

Le `profileBanner` est **toujours un enfant d'une `Section`** (fond + padding `base-20`/`base-24`), jamais un enfant direct de la frame racine. Dans la section, `pb.layoutSizingHorizontal='FILL'` (après `appendChild`) le met à 1248 px (1440 − 2×96), aligné avec les `cards-grid`. Recette complète : `design-system → components-catalog.md § Recette profileBanner`. Cf. également `_shared/figma-anti-patterns.md § Layout et sizing`.

## 7. Footer

Instance racine `footer / device=desktop`. `layoutSizingHorizontal='FILL'`. **Jamais cloner ni reconstruire.** Avec le header, ce sont les seuls enfants directs de la frame racine en pleine largeur. Tout le reste vit dans une section.

## 8. Pre-flight check

Exécuter `preflightCheck(parentFrame)` du `bindings-protocol.md`. **Objectif : 0 issue.**

## 9. Screenshot de contrôle (checklist générique)

Prendre un screenshot via le MCP Figma. Vérifier :

- Pas de cards écrasées (le stretching n'a pas fonctionné)
- Pas de texte vertical en colonne (frame trop étroit)
- Alternance des fonds visible et cohérente (light only, jamais dark)
- Illustrations bien placées et dimensionnées (canon 350×350 pour hero, cf. `illustrations.md`)
- `profileBanner` dans son container (1248 px), pas en pleine largeur racine
- CTAs avec labels canoniques (pas « Label », « Bouton », « Cliquez ici »)
- Header et footer en instance racine (pas clonés)

La checklist locale du skill complète celle-ci avec les items spécifiques (lisibilité d'un formulaire, alignement d'une meta-row, contraste des chiffres sur accent, etc.).

## 10. Livraison (structure générique)

À fournir en fin de production :

- URL de la frame produite
- Liste des composants DS utilisés (keys + librairie source)
- Liste des illustrations utilisées (avec justification sémantique, cf. `illustrations.md`)
- Liste des tokens consommés
- Persona ciblé et conviction ancrée (citer `design-frontguys`)
- Spécificités propres à la page (cf. § Livraison du `figma-production-workflow.md` local)

## Cas particuliers (communs)

- **Spec éditoriale + URL Figma fournies** : sauter le retro-spec, annoncer l'architecture retenue, exécuter.
- **Composant absent du catalog** : demander une instance de référence, inspecter `mainComponent.key` (et `mainComponent.parent.key` si ComponentSet), mettre à jour `components-catalog.md`.
- **Import qui échoue** : librairie non activée. Demander activation, jamais contourner.
- **Property patterns d'un composant non documentés** : inspecter dès la première utilisation via une instance jetable et `Object.keys(inst.componentProperties)`, puis reporter dans `components-catalog.md § Composants étendus` avant de continuer.
