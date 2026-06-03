# Thématique 10 — Présentation de l’information

## Gestion de l'affichage au moyen des feuilles de styles

Les personnes malvoyantes et certaines personnes présentant des troubles de la lecture (comme la dyslexie) peuvent rencontrer des difficultés pour lire le contenu si son affichage n'est pas personnalisable : augmenter l'espace entre les mots, les lettres ou les lignes peut faciliter la lecture. La présence d'éléments et d'attributs HTML de présentation peut empêcher cette personnalisation.

**Critère RGAA associé :**
- [10.1](./../rgaa/10-presentation-de-l-information.md) — Dans le site web, des feuilles de styles sont-elles utilisées pour contrôler la présentation de l'information ?

---

## Absence de contenu porteur d'information dans les feuilles de styles

Les éléments porteurs d'information insérés en CSS (comme une icône ou une image d'arrière-plan) ne sont pas correctement restitués par les lecteurs d'écran et les loupes vocalisées. À l'inverse, certains éléments décoratifs insérés en CSS peuvent être restitués aux personnes aveugles ou malvoyantes qui utilisent un lecteur d'écran, gênant la compréhension du contenu.

**Critère RGAA associé :**
- [10.2](./../rgaa/10-presentation-de-l-information.md) — Dans chaque page web, le contenu visible porteur d'information reste-t-il présent lorsque les feuilles de styles sont désactivées ?

---

## Cohérence de l'ordre du code source

La présence d'incohérences dans le code HTML peut fortement complexifier la compréhension du contenu pour les personnes aveugles ou malvoyantes qui utilisent un lecteur d'écran ou une loupe vocalisée. Lorsque l'ordre du code n'est pas logique, l'enchaînement des éléments peut poser des problèmes de compréhension, notamment pour les personnes malvoyantes qui utilisent une loupe d'écran, les personnes qui utilisent un lecteur d'écran, et les personnes qui naviguent au clavier.

**Critère RGAA associé :**
- [10.3](./../rgaa/10-presentation-de-l-information.md) — Dans chaque page web, l'information reste-t-elle compréhensible lorsque les feuilles de styles sont désactivées ?

---

## Personnalisation de la taille des caractères

Les personnes malvoyantes peuvent rencontrer des difficultés à lire des contenus dont elles ne peuvent pas contrôler la taille des caractères.

**Critère RGAA associé :**
- [10.4](./../rgaa/10-presentation-de-l-information.md) — Dans chaque page web, le texte reste-t-il lisible lorsque la taille des caractères est augmentée jusqu'à 200 %, au moins (hors cas particuliers) ?

---

## Présence conjointe d'une couleur de caractères et d'arrière-plan

En l'absence de couleur d'arrière-plan, les personnes naviguant en mode de contraste élevé peuvent ne pas voir le contenu placé sur une image insérée en CSS. En l'absence de couleur de premier plan ou d'arrière-plan, certaines personnes malvoyantes, certaines personnes avec des troubles cognitifs ou des difficultés de lecture ne peuvent pas personnaliser les styles CSS pour faciliter la lecture.

**Critère RGAA associé :**
- [10.5](./../rgaa/10-presentation-de-l-information.md) — Dans chaque page web, les déclarations CSS de couleurs de fond d'élément et de police sont-elles correctement utilisées ?

---

## Visibilité des liens par rapport au texte environnant

Les personnes malvoyantes pourraient ne pas distinguer les liens s'ils ne sont pas suffisamment contrastés par rapport au reste du texte.

**Critère RGAA associé :**
- [10.6](./../rgaa/10-presentation-de-l-information.md) — Dans chaque page web, chaque lien dont la nature n'est pas évidente est-il visible par rapport au texte environnant ?

---

## Visibilité de la prise de focus

Les personnes déficientes motrices qui naviguent au clavier peuvent rencontrer de grandes difficultés pour interagir avec la page si elles n'arrivent pas à voir où se situe le focus et à suivre ses déplacements.

**Critère RGAA associé :**
- [10.7](./../rgaa/10-presentation-de-l-information.md) — Dans chaque page web, pour chaque élément recevant le focus, la prise de focus est-elle visible ?

---

## Restitution des éléments cachés aux technologies d'assistance

Si du contenu porteur d'information est masqué aux technologies d'assistance, les personnes aveugles ou malvoyantes qui utilisent un lecteur d'écran n'en auront pas connaissance. À l'inverse, un contenu décoratif non masqué aux technologies d'assistance peut poser des problèmes de compréhension aux personnes qui les utilisent.

**Critère RGAA associé :**
- [10.8](./../rgaa/10-presentation-de-l-information.md) — Pour chaque page web, les contenus cachés ont-ils vocation à être ignorés par les technologies d'assistance ?

---

## Alternatives pour l'information donnée par la forme, la taille ou la position

Les informations véhiculées uniquement par un effet visuel (un terme mis en évidence en gras via CSS, ou l'indication de la page courante par l'ajout d'une bordure) peuvent être inaccessibles aux personnes aveugles ou malvoyantes qui utilisent un lecteur d'écran.

**Critères RGAA associés :**
- [10.9](./../rgaa/10-presentation-de-l-information.md) — Dans chaque page web, l'information ne doit pas être donnée uniquement par la forme, taille ou position. Cette règle est-elle respectée ?
- [10.10](./../rgaa/10-presentation-de-l-information.md) — Dans chaque page web, l'information ne doit pas être donnée par la forme, taille ou position uniquement. Cette règle est-elle implémentée de façon pertinente ?

---

## Absence de défilement horizontal sur les terminaux de faible largeur

Les personnes malvoyantes peuvent utiliser le zoom du navigateur pour agrandir la taille du texte. Si le contenu ne s'adapte pas et ne s'affiche pas sur une seule colonne, elles sont obligées d'utiliser les barres de défilement pour lire la totalité du contenu. De plus, certaines personnes (tétraplégiques, aveugles sur mobile…) n'utilisent que des terminaux mobiles : si les versions du site ne donnent pas la même information selon l'écran, elles seront privées d'une partie du contenu.

**Critère RGAA associé :**
- [10.11](./../rgaa/10-presentation-de-l-information.md) — Pour chaque page web, les contenus peuvent-ils être présentés sans perte d'information ou de fonctionnalité et sans avoir recours soit à un défilement vertical pour une fenêtre ayant une hauteur de 256 px, soit à un défilement horizontal pour une fenêtre ayant une largeur de 320 px (hors cas particuliers) ?

---

## Personnalisation des propriétés d'espacement du texte

Les personnes malvoyantes et certaines personnes présentant des troubles de la lecture (comme la dyslexie) peuvent rencontrer des difficultés pour lire un contenu si l'affichage n'est pas personnalisable : augmenter l'espace entre les mots, les lettres ou les lignes peut faciliter la lecture.

**Critère RGAA associé :**
- [10.12](./../rgaa/10-presentation-de-l-information.md) — Dans chaque page web, les propriétés d'espacement du texte peuvent-elles être redéfinies par l'utilisateur sans perte de contenu ou de fonctionnalité (hors cas particuliers) ?

---

## Accès et contrôle des contenus apparaissant au survol ou à la prise de focus

Les personnes malvoyantes qui utilisent un zoom d'écran peuvent rencontrer des difficultés si un élément s'affiche par-dessus la partie de la page qu'elles consultent et qu'elles ne peuvent pas le fermer ou accéder à son contenu.

**Critère RGAA associé :**
- [10.13](./../rgaa/10-presentation-de-l-information.md) — Dans chaque page web, les contenus additionnels apparaissant à la prise de focus ou au survol d'un composant d'interface sont-ils contrôlables par l'utilisateur (hors cas particuliers) ?

---

## Accès aux contenus affichés uniquement via CSS au clavier et par tout dispositif de pointage

Les personnes aveugles ou malvoyantes qui utilisent un lecteur d'écran et les personnes déficientes motrices qui naviguent au clavier pourraient être incapables d'accéder à du contenu additionnel si celui-ci est affiché en CSS uniquement.

**Critère RGAA associé :**
- [10.14](./../rgaa/10-presentation-de-l-information.md) — Dans chaque page web, les contenus additionnels apparaissant via les styles CSS uniquement peuvent-ils être rendus visibles au clavier et par tout dispositif de pointage ?

---
