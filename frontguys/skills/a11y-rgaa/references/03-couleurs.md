# Thématique 3 — Couleurs

## Table des matières

- [Critère 3.1 — Dans chaque page web, l’information ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?](#critere-3-1)
- [Critère 3.2 — Dans chaque page web, le contraste entre la couleur du texte et la couleur de son arrière-plan est-il suffisamment élevé (hors cas particuliers) ?](#critere-3-2)
- [Critère 3.3 — Dans chaque page web, les couleurs utilisées dans les composants d’interface ou les éléments graphiques porteurs d’informations sont-elles suffisamment contrastées (hors cas particuliers) ?](#critere-3-3)

---

<a id="critere-3-1"></a>

## Critère 3.1 — Dans chaque page web, l’information ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?

### Définitions

- [information](00-glossaire.md#information-donnee-par-couleur)

### Tests du critère

#### Test 3.1.1

Pour chaque mot ou ensemble de mots dont la mise en couleur est porteuse d’information, l’[information](00-glossaire.md#information-donnee-par-couleur) ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?

##### Procédure de test

1. Retrouver dans le document les informations données par la couleur dans un mot ou un ensemble de mots ;
2. Pour chacune de ces informations, vérifier qu’il existe un autre moyen de récupérer cette information (présence d’un attribut title, d’une icône ou d’un effet graphique de forme ou de position, un effet typographique…) ;
3. Si c’est le cas pour chaque information, **le test est validé**.
#### Test 3.1.2

Pour chaque indication de couleur donnée par un texte, l’[information](00-glossaire.md#information-donnee-par-couleur) ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?

##### Procédure de test

1. Retrouver dans le document les informations données par la couleur dans un texte ;
2. Pour chacune de ces informations, vérifier qu’il existe un autre moyen de récupérer cette information (présence d’un attribut title, d’une icône ou d’un effet graphique de forme ou de position, un effet typographique…) ;
3. Si c’est le cas pour chaque information, **le test est validé**.
#### Test 3.1.3

Pour chaque image [véhiculant une information](00-glossaire.md#image-vehiculant-information-donnee-par-couleur), l’[information](00-glossaire.md#information-donnee-par-couleur) ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?

##### Procédure de test

1. Retrouver dans le document les informations données par la couleur dans une image ;
2. Pour chacune de ces informations, vérifier qu’il existe un autre moyen de récupérer cette information (présence d’un attribut title, d’une icône ou d’un effet graphique de forme ou de position, un effet typographique…) ;
3. Si c’est le cas pour chaque information, **le test est validé**.
#### Test 3.1.4

Pour chaque [propriété CSS déterminant une couleur](00-glossaire.md#propriete-css-determinant-couleur) et [véhiculant une information](00-glossaire.md#image-vehiculant-information-donnee-par-couleur), l’[information](00-glossaire.md#information-donnee-par-couleur) ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?

##### Procédure de test

1. Retrouver dans le document les informations données par la couleur dans une propriété CSS ;
2. Pour chacune de ces informations, vérifier qu’il existe un autre moyen de récupérer cette information (présence d’un attribut title, d’une icône ou d’un effet graphique de forme ou de position, un effet typographique…) ;
3. Si c’est le cas pour chaque information, **le test est validé**.
#### Test 3.1.5

Pour chaque [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) [véhiculant une information](00-glossaire.md#image-vehiculant-information-donnee-par-couleur), l’[information](00-glossaire.md#information-donnee-par-couleur) ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?

##### Procédure de test

1. Retrouver dans le document les informations données par la couleur dans un média temporel ;
2. Pour chacune de ces informations, vérifier qu’il existe un autre moyen de récupérer cette information (présence d’un attribut title, d’une icône ou d’un effet graphique de forme ou de position, un effet typographique…) ;
3. Si c’est le cas pour chaque information, **le test est validé**.
#### Test 3.1.6

Pour chaque [média non temporel](00-glossaire.md#media-non-temporel) [véhiculant une information](00-glossaire.md#image-vehiculant-information-donnee-par-couleur), l’[information](00-glossaire.md#information-donnee-par-couleur) ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?

##### Procédure de test

1. Retrouver dans le document les informations données par la couleur dans un média non temporel ;
2. Pour chacune de ces informations, vérifier qu’il existe un autre moyen de récupérer cette information (présence d’un attribut title, d’une icône ou d’un effet graphique de forme ou de position, un effet typographique…) ;
3. Si c’est le cas pour chaque information, **le test est validé**.
### Références WCAG

- 1.3.1 Info and Relationships (A)
- 1.4.1 Use of color (A)

**Techniques :**

- G14
- G182
- G111
- G117
- G138
- G205

---

<a id="critere-3-2"></a>

## Critère 3.2 — Dans chaque page web, le contraste entre la couleur du texte et la couleur de son arrière-plan est-il suffisamment élevé (hors cas particuliers) ?

### Définitions

- [contraste](00-glossaire.md#contraste)

### Cas particuliers

Dans ces situations, les critères sont non applicables pour ces éléments :

- Le texte fait partie d’un logo ou d’un nom de marque d’un organisme ou d’une société ;
- Le texte ou l’image de texte est purement décoratif ;
- Le texte fait partie d’une image véhiculant une information mais le texte lui-même n’apporte aucune information essentielle ;
- Le texte ou l’image de texte fait partie d’un élément d’interface sur lequel aucune action n’est possible (par exemple un bouton avec l’attribut `disabled`).

### Tests du critère

#### Test 3.2.1

Dans chaque page web, le texte et le texte en image sans effet de graisse d’une taille restituée inférieure à 24px vérifient-ils une de ces conditions (hors cas particuliers) ?

- Le rapport de [contraste](00-glossaire.md#contraste) entre le texte et son arrière-plan est de 4.5:1, au moins ;
- Un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de [contraste](00-glossaire.md#contraste) de 4.5:1, au moins.

##### Procédure de test

1. Retrouver dans le document les textes et les textes en image sans effet de graisse d’une taille restituée inférieure à 24px qui pourraient poser des problèmes de contraste ;
2. Pour chacun de ces textes, vérifier que :
   - Soit le rapport de contraste entre le texte et son arrière-plan est de 4.5:1, au moins ;
   - Soit un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de contraste de 4.5:1, au moins.
3. Si c’est le cas pour chaque texte, **le test est validé**.
#### Test 3.2.2

Dans chaque page web, le texte et le texte en image en gras d’une taille restituée inférieure à 18,5px vérifient-ils une de ces conditions (hors cas particuliers) ?

- Le rapport de [contraste](00-glossaire.md#contraste) entre le texte et son arrière-plan est de 4.5:1, au moins ;
- Un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de [contraste](00-glossaire.md#contraste) de 4.5:1, au moins.

##### Procédure de test

1. Retrouver dans le document les textes et les textes en image en gras d’une taille restituée inférieure à 18,5px qui pourraient poser des problèmes de contraste ;
2. Pour chacun de ces textes, vérifier que :
   - Soit le rapport de contraste entre le texte et son arrière-plan est de 4.5:1, au moins ;
   - Soit un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de contraste de 4.5:1, au moins.
3. Si c’est le cas pour chaque texte, **le test est validé**.
#### Test 3.2.3

Dans chaque page web, le texte et le texte en image sans effet de graisse d’une taille restituée supérieure ou égale à 24px vérifient-ils une de ces conditions (hors cas particuliers) ?

- Le rapport de [contraste](00-glossaire.md#contraste) entre le texte et son arrière-plan est de 3:1, au moins ;
- Un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de [contraste](00-glossaire.md#contraste) de 3:1, au moins.

##### Procédure de test

1. Retrouver dans le document les textes et les textes en image sans effet de graisse d’une taille restituée supérieure ou égale à 24px qui pourraient poser des problèmes de contraste ;
2. Pour chacun de ces textes, vérifier que :
   - Soit le rapport de contraste entre le texte et son arrière-plan est de 3:1, au moins ;
   - Soit un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de contraste de 3:1, au moins.
3. Si c’est le cas pour chaque texte, **le test est validé**.
#### Test 3.2.4

Dans chaque page web, le texte et le texte en image en gras d’une taille restituée supérieure ou égale à 18,5px vérifient-ils une de ces conditions (hors cas particuliers) ?

- Le rapport de [contraste](00-glossaire.md#contraste) entre le texte et son arrière-plan est de 3:1, au moins ;
- Un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de [contraste](00-glossaire.md#contraste) de 3:1, au moins.

##### Procédure de test

1. Retrouver dans le document les textes et les textes en image en gras d’une taille restituée supérieure ou égale à 18,5px qui pourraient poser des problèmes de contraste ;
2. Pour chacun de ces textes, vérifier que :
   - Soit le rapport de contraste entre le texte et son arrière-plan est de 3:1, au moins ;
   - Soit un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de contraste de 3:1, au moins.
3. Si c’est le cas pour chaque texte, **le test est validé**.
#### Test 3.2.5

Dans le [mécanisme qui permet d’afficher un rapport de contraste](00-glossaire.md#mecanisme-qui-permet-afficher-rapport-contraste-conforme) conforme, le rapport de contraste entre le texte et la couleur d’arrière-plan est-il suffisamment élevé ?

##### Procédure de test

1. Retrouver dans le document les mécanismes qui permettent d’afficher un rapport de contraste conforme ;
2. Pour chacun de ces mécanismes, vérifier que le rapport de contraste entre le texte et la couleur d’arrière-plan est suffisamment élevé ;
3. Si c’est le cas pour chaque mécanisme, **le test est validé**.
### Références WCAG

- 1.4.3 Contrast (Minimum) (AA)

**Techniques :**

- G18
- G136
- G148
- G174
- G145
- C29

---

<a id="critere-3-3"></a>

## Critère 3.3 — Dans chaque page web, les couleurs utilisées dans les composants d’interface ou les éléments graphiques porteurs d’informations sont-elles suffisamment contrastées (hors cas particuliers) ?

### Définitions

- [composants d’interface](00-glossaire.md#composant-interface)

### Cas particuliers

Les cas suivants sont non applicables pour ce critère :

- Composant d’interface inactif (par exemple, un bouton avec un attribut `disabled`) sur lequel aucune action n’est possible ;
- Composant d’interface pour lequel l’apparence est gérée par les styles natifs du navigateur sans aucune modification par l’auteur (par exemple, le style au focus natif dans Chrome ou Firefox) ;
- Composant d’interface pour lequel la couleur n’est pas nécessaire pour identifier le composant ou son état (par exemple, un groupe de liens faisant office de navigation dont la position dans la page, la taille et la couleur du texte permettent de comprendre qu’il s’agit de liens même si la couleur du soulignement des liens avec le fond blanc n’a pas un ratio de 3:1 et que le texte lui a un ratio de 4.5:1) ;
- [Élément graphique](00-glossaire.md#element-graphique) ou parties d’élément graphique non porteur d’information ou ayant une alternative (description longue, informations identiques visibles dans la page) ;
- [Élément graphique](00-glossaire.md#element-graphique) ou parties d’élément graphique faisant partie d’un logo ou du nom de marque d’un organisme ou d’une société ;
- [Élément graphique](00-glossaire.md#element-graphique) ou parties d’élément graphique dont la présentation est essentielle à l’information véhiculée (par exemple, drapeaux, logotypes, photos de personnes ou de scènes, captures d’écran, diagrammes médicaux, carte de chaleurs) ;
- [Élément graphique](00-glossaire.md#element-graphique) ou parties d’élément graphique dynamiques dont le contraste au survol / focus est suffisant.

### Tests du critère

#### Test 3.3.1

Dans chaque page web, le rapport de [contraste](00-glossaire.md#contraste) entre les couleurs d’un [composant d’interface](00-glossaire.md#composant-interface) dans ses différents états et la [couleur d’arrière-plan contiguë](00-glossaire.md#couleur-arriere-plan-contigue-et-couleur-contigue) vérifie-t-il une de ces conditions (hors cas particuliers) ?

- Le rapport de [contraste](00-glossaire.md#contraste) est de 3:1, au moins ;
- Un [mécanisme](00-glossaire.md#mecanisme-qui-permet-afficher-rapport-contraste-conforme) permet un rapport de [contraste](00-glossaire.md#contraste) de 3:1, au moins.

##### Procédure de test

1. Retrouver dans le document les composants d’interface qui pourraient poser des problèmes de contraste ;
2. Pour chacun de ces composants, vérifier que :
   - Soit le rapport de contraste entre les couleurs du composant dans ses différents états et la couleur d’arrière-plan contiguë est de 3:1, au moins ;
   - Soit un mécanisme permet à l’utilisateur d’afficher le composant avec un rapport de contraste de 3:1, au moins.
3. Si c’est le cas pour chaque composant, **le test est validé**.
#### Test 3.3.2

Dans chaque page web, le rapport de [contraste](00-glossaire.md#contraste) des différentes couleurs composant un [élément graphique](00-glossaire.md#element-graphique), lorsqu’elles sont nécessaires à sa compréhension, et la [couleur d’arrière-plan contiguë](00-glossaire.md#couleur-arriere-plan-contigue-et-couleur-contigue), vérifie-t-il une de ces conditions (hors cas particuliers) ?

- Le rapport de [contraste](00-glossaire.md#contraste) est de 3:1, au moins ;
- Un [mécanisme](00-glossaire.md#mecanisme-qui-permet-afficher-rapport-contraste-conforme) permet un rapport de [contraste](00-glossaire.md#contraste) de 3:1, au moins.

##### Procédure de test

1. Retrouver dans le document les éléments graphiques qui pourraient poser des problèmes de contraste ;
2. Pour chacun de ces éléments, vérifier que :
   - Soit le rapport de contraste entre les couleurs de l’élément graphique nécessaires à sa compréhension et la couleur d’arrière-plan contiguë est de 3:1, au moins ;
   - Soit un mécanisme permet à l’utilisateur d’afficher l’élément graphique avec un rapport de contraste de 3:1, au moins.
3. Si c’est le cas pour chaque composant, **le test est validé**.
#### Test 3.3.3

Dans chaque page web, le rapport de [contraste](00-glossaire.md#contraste) des différentes [couleurs contiguës](00-glossaire.md#couleur-arriere-plan-contigue-et-couleur-contigue) entre elles d’un [élément graphique](00-glossaire.md#element-graphique), lorsqu’elles sont nécessaires à sa compréhension, vérifie-t-il une de ces conditions (hors cas particuliers) ?

- Le rapport de [contraste](00-glossaire.md#contraste) est de 3:1, au moins ;
- Un [mécanisme](00-glossaire.md#mecanisme-qui-permet-afficher-rapport-contraste-conforme) permet un rapport de [contraste](00-glossaire.md#contraste) de 3:1, au moins.

##### Procédure de test

1. Retrouver dans le document les éléments graphiques qui pourraient poser des problèmes de contraste ;
2. Pour chacun de ces éléments, vérifier que :
   - Soit le rapport de contraste des différentes couleurs contiguës de l’élément graphique entre elles, lorsqu’elles sont nécessaires à sa compréhension, est de 3:1, au moins ;
   - Soit un mécanisme permet à l’utilisateur d’afficher l’élément graphique avec un rapport de contraste de 3:1, au moins.
3. Si c’est le cas pour chaque élément graphique, **le test est validé**.
#### Test 3.3.4

Dans le [mécanisme qui permet d’afficher un rapport de contraste](00-glossaire.md#mecanisme-qui-permet-afficher-rapport-contraste-conforme) conforme, les couleurs du composant ou des éléments graphiques porteurs d’informations qui le composent, sont-elles suffisamment contrastées ?

##### Procédure de test

1. Retrouver dans le document les mécanismes qui permettent d’afficher un rapport de contraste conforme ;
2. Pour chacun de ces mécanismes, vérifier que le rapport de contraste entre les couleurs du composant ou des éléments graphiques porteurs d’informations qui le composent est suffisamment élevé ;
3. Si c’est le cas pour chaque mécanisme, **le test est validé**.

Note : le critère est non applicable dans ces situations :

- Composant d'interface inactif (par exemple, un bouton avec un attribut `disabled`) sur lequel aucune action n'est possible ;
- Composant d'interface pour lequel l'apparence est gérée par les styles natifs du navigateur sans aucune modification par l'auteur (par exemple, le style au focus natif dans Chrome ou Firefox) ;
- Composant d'interface pour lequel la couleur n'est pas nécessaire pour identifier le composant ou son état (par exemple, un groupe de liens faisant office de navigation dont la position dans la page, la taille et la couleur du texte permettent de comprendre qu'il s'agit de liens même si la couleur du soulignement des liens avec le fond blanc n'a pas un ratio de 3:1 et que le texte lui a un ratio de 4.5:1) ;
- Élément graphique ou parties d'élément graphique non porteur d'information ou ayant une alternative (description longue, informations identiques visibles dans la page) ;
- Élément graphique ou parties d'élément graphique faisant partie d'un logo ou du nom de marque d'un organisme ou d'une société ;
- Élément graphique ou parties d'élément graphique dont la présentation est essentielle à l'information véhiculée (exemple drapeaux, logotypes, photos de personnes ou de scènes, captures d'écran, diagrammes médicaux, carte de chaleurs) ;
- Élément graphique ou parties d'élément graphique dynamiques dont le contraste au survol / focus est suffisant.
### Références WCAG

- 1.4.11 Non-text Contrast (AA)

**Techniques :**

- G18
- G195
- G207
- G174
- G145
- G183
- F78

---

