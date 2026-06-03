# Anti-patterns Figma mutualisés

Source unique des anti-patterns Figma communs aux skills `design-landing-page`, `design-slide-deck`, `design-web-section` (et tout futur skill de production Figma Frontguys).

**Charger ce fichier dès qu'on passe en production Figma**, et au moment du pre-flight check. Les skills le complètent par leurs propres anti-patterns spécifiques (cf. `references/anti-patterns.md` local au skill).

## Composition et marque

- ❌ Multiplier les CTAs primary (1 max par section / slide / écran)
- ❌ Hardcoder une valeur (couleur, spacing, radius, fontSize) → toujours tokens DS
- ❌ Citer une règle de voix sans vérifier auprès de `design-frontguys`
- ❌ Inventer un composant absent du catalog
- ❌ Conviction décorative : citer la conviction sans la démontrer

## Composants

- ❌ **Cloner header / footer / composant racine** → toujours instancier depuis la librairie
- ❌ **Reconstruire from scratch un composant qui existe dans le catalog** (card, button, profileBanner) → toujours instance + `setProperties`. Cf. `design-system → components-catalog.md § Règle d'or` et `bindings-protocol.md § Anti-pattern majeur, Reconstruire un composant qui existe`
- ❌ Cloner une instance existante de la page hôte → toujours instancier depuis la librairie
- ❌ Inventer ou deviner une key. Consulter le catalog, ou demander une instance de référence.

## Illustrations

- ❌ **Hardcoder une illustration en SVG** → toujours instance du DS
- ❌ Cloner une illustration depuis un autre fichier comme fallback à un import échoué → demander activation de la librairie
- ❌ Laisser l'illustration à sa taille native (≈100×100) → toujours `inst.resize(W, H)` selon le type d'usage. Cf. `design-system → illustrations.md § Dimensions par type de section/slide`

## CTA et texte

- ❌ **Label CTA générique** (« Label » par défaut Figma, « Bouton », « Cliquez ici ») → toujours un verbe impératif canonique (« Planifiez un échange », « Découvrez nos cas »). Sur le Button Frontguys, la vraie prop TEXT est `CTA#2209:0`, pas `Label` (qui est un VARIANT Yes/No). Cf. `design-frontguys → voice-vocabulary.md § Règle absolue`
- ❌ Oublier `loadFontAsync({family:'Inter', style:'Regular'})` (et toutes les autres fonts DS) → erreur sur le premier `t.characters`
- ❌ Passer une valeur vide pour une prop TEXT dans `setProperties` → casse tout le `setProperties`

## Layout et sizing

- ❌ **Frame vide `_spacer`** pour créer de l'espace entre 2 nodes d'un auto-layout → utiliser `itemSpacing` du parent ou un padding bindé sur le node concerné. Cf. `bindings-protocol.md § Anti-pattern majeur, Frame _spacer vide`
- ❌ Padding sur un enfant pour le pousser → `itemSpacing` du parent (cf. bindings-protocol)
- ❌ Row HORIZONTAL en `primaryAxisSizingMode='AUTO'` qui devrait remplir la largeur → cards écrasées
- ❌ Frame parent avec `resize(W, H)` initial + `primaryAxisSizingMode='AUTO'` → la dimension AUTO est lockée. Ne pas resize l'axe AUTO, ou faire `resizeWithoutConstraints` après contenu
- ❌ **Cards d'une row horizontale qui n'ont pas la même hauteur** → pattern combiné obligatoire : `parent.counterAxisAlignItems='STRETCH'` + `parent.counterAxisSizingMode='AUTO'` + sur chaque card `layoutGrow=1` et `layoutAlign='STRETCH'`. Sans `counterAxisAlignItems='STRETCH'` sur le parent, les hauteurs deviennent aléatoires selon le contenu. Cf. `bindings-protocol.md § Étape 6, Règle d'or « cards alignées horizontalement = même hauteur obligatoire »`
- ❌ Section / frame racine sans `layoutAlign='STRETCH'` quand le parent est VERTICAL → ne prend pas toute la largeur
- ❌ **`profileBanner` (ou toute bannière CTA / contenu éditorial) appendée directement à la frame racine** → la racine a un padding de 0, donc `layoutSizingHorizontal='FILL'` rend la bannière pleine largeur (1440) et désaligne des autres sections. ✅ **Toujours dans un container de `Section`** (fond + padding `base-20`/`base-24`). Seuls **header et footer** sont des enfants racine pleine largeur. Cf. `design-system → components-catalog.md § Recette profileBanner`.

## Modes (light / dark)

- ❌ **Forcer le mode `dark` sur une frame de production** via `setExplicitVariableModeForCollection(_, darkMode.modeId)`. La convention Frontguys actuelle est **light partout, sur toutes les pages**. Le mode dark existe dans la collection `Semantic` du DS mais n'est pas utilisé en production. Cf. `design-system → design-system.md § Modes (light / dark)`.
- ❌ **Différencier visuellement deux sections par bascule de mode** plutôt que par changement de `background/*` token. Toute alternance se fait via les bg fills light : `background/default` / `subtle` / `default-alt` / `fade` / `accent`.
