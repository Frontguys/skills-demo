# Thématique 10 — Présentation de l’information

## Table des matières

- [Critère 10.1 — Dans le site web, des feuilles de styles sont-elles utilisées pour contrôler la présentation de l’information ?](#critere-10-1)
- [Critère 10.2 — Dans chaque page web, le contenu visible porteur d’information reste-t-il présent lorsque les feuilles de styles sont désactivées ?](#critere-10-2)
- [Critère 10.3 — Dans chaque page web, l’information reste-t-elle compréhensible lorsque les feuilles de styles sont désactivées ?](#critere-10-3)
- [Critère 10.4 — Dans chaque page web, le texte reste-t-il lisible lorsque la taille des caractères est augmentée jusqu’à 200 %, au moins (hors cas particuliers) ?](#critere-10-4)
- [Critère 10.5 — Dans chaque page web, les déclarations CSS de couleurs de fond d’élément et de police sont-elles correctement utilisées ?](#critere-10-5)
- [Critère 10.6 — Dans chaque page web, chaque lien dont la nature n’est pas évidente est-il visible par rapport au texte environnant ?](#critere-10-6)
- [Critère 10.7 — Dans chaque page web, pour chaque élément recevant le focus, la prise de focus est-elle visible ?](#critere-10-7)
- [Critère 10.8 — Pour chaque page web, les contenus cachés ont-ils vocation à être ignorés par les technologies d’assistance ?](#critere-10-8)
- [Critère 10.9 — Dans chaque page web, l’information ne doit pas être donnée uniquement par la forme, taille ou position. Cette règle est-elle respectée ?](#critere-10-9)
- [Critère 10.10 — Dans chaque page web, l’information ne doit pas être donnée par la forme, taille ou position uniquement. Cette règle est-elle implémentée de façon pertinente ?](#critere-10-10)
- [Critère 10.11 — Pour chaque page web, les contenus peuvent-ils être présentés sans perte d’information ou de fonctionnalité et sans avoir recours soit à un défilement vertical pour une fenêtre ayant une hauteur de 256 px, soit à un défilement horizontal pour une fenêtre ayant une largeur de 320 px (hors cas particuliers) ?](#critere-10-11)
- [Critère 10.12 — Dans chaque page web, les propriétés d’espacement du texte peuvent-elles être redéfinies par l’utilisateur sans perte de contenu ou de fonctionnalité (hors cas particuliers) ?](#critere-10-12)
- [Critère 10.13 — Dans chaque page web, les contenus additionnels apparaissant à la prise de focus ou au survol d’un composant d’interface sont-ils contrôlables par l’utilisateur (hors cas particuliers) ?](#critere-10-13)
- [Critère 10.14 — Dans chaque page web, les contenus additionnels apparaissant via les styles CSS uniquement peuvent-ils être rendus visibles au clavier et par tout dispositif de pointage ?](#critere-10-14)

---

<a id="critere-10-1"></a>

## Critère 10.1 — Dans le site web, des feuilles de styles sont-elles utilisées pour contrôler la présentation de l’information ?

### Définitions

- [feuilles de styles](00-glossaire.md#feuille-style)
- [présentation de l’information](00-glossaire.md#presentation-information)

### Tests du critère

#### Test 10.1.1

Dans chaque page web, les balises servant à la [présentation de l’information](00-glossaire.md#presentation-information) ne doivent pas être présentes dans le code source généré des pages. Cette règle est-elle respectée ?

##### Procédure de test

1. Vérifier l’absence des éléments de présentation `<basefont>`, `<big>`, `<blink>`, `<center>`, `<font>`, `<marquee>`, `<s>`, `<strike>`, `<tt>` ;
2. Vérifier l’absence de l’élément `<u>` uniquement si le DOCTYPE du document ne correspond pas à HTML 5 ;
3. Si c’est le cas, **le test est validé**.
#### Test 10.1.2

Dans chaque page web, les attributs servant à la [présentation de l’information](00-glossaire.md#presentation-information) ne doivent pas être présents dans le code source généré des pages. Cette règle est-elle respectée ?

##### Procédure de test

1. Vérifier l’absence des attributs de présentation : `align`, `alink`, `background`, `bgcolor`, `border`, `cellpadding`, `cellspacing`, `char`, `charoff`, `clear`, `color`, `compact`, `frameborder`, `hspace`, `link`, `marginheight`, `marginwidth`, `text`, `valign`, `vlink`, `vspace`, `size`(exception faite de l'élément `<select>`), `width` (exception faite des éléments `<img>`, `<object>`, `<embed>`, `<canvas>` et `<svg>`), `height` (exception faite des éléments `<img>`, `<object>`, `<embed>`, `<canvas>` et `<svg>`) ;
2. Si c’est le cas, **le test est validé**.
#### Test 10.1.3

Dans chaque page web, l’utilisation des espaces vérifie-t-elle ces conditions ?

- Les espaces ne sont pas utilisées pour séparer les lettres d’un mot ;
- Les espaces ne sont pas utilisées pour simuler des tableaux ;
- Les espaces ne sont pas utilisées pour simuler des colonnes de texte.

##### Procédure de test

1. Désactiver les styles (CSS) du document ;
2. Vérifier l’absence d’espaces utilisées :
   - Entre les lettres d’un mot ;
   - Pour créer des effets de marges ou d’alignement ;
   - Pour simuler des tableaux ou des colonnes.
3. Si c’est le cas, **le test est validé**.
### Références WCAG

- 1.3.1 Info and Relationships (A)
- 1.3.2 Meaningful Sequence (A)

**Techniques :**

- G140
- F32
- F33
- F34
- F48
- C6
- C8
- C18
- C22

---

<a id="critere-10-2"></a>

## Critère 10.2 — Dans chaque page web, le contenu visible porteur d’information reste-t-il présent lorsque les feuilles de styles sont désactivées ?

### Définitions

- [contenu visible](00-glossaire.md#contenu-visible)
- [feuilles de styles](00-glossaire.md#feuille-style)

### Tests du critère

#### Test 10.2.1

Dans chaque page web, l’information reste-t-elle présente lorsque les [feuilles de styles](00-glossaire.md#feuille-style) sont désactivées ?

##### Procédure de test

1. Désactiver les styles (CSS) du document ;
2. Comparer le document dépourvu de styles avec le document mis en forme ;
3. Vérifier si dans le document dépourvu de styles, les contenus visibles porteurs d'information restent présents ;
4. Si c’est le cas, **le test est validé**.
### Références WCAG

- 1.1.1 Non-text Content (A)
- 1.3.1 Info and Relationships (A)

**Techniques :**

- G140
- F3
- F87

---

<a id="critere-10-3"></a>

## Critère 10.3 — Dans chaque page web, l’information reste-t-elle compréhensible lorsque les feuilles de styles sont désactivées ?

### Définitions

- [compréhensible](00-glossaire.md#comprehensible-ordre-lecture)
- [feuilles de styles](00-glossaire.md#feuille-style)

### Tests du critère

#### Test 10.3.1

Dans chaque page web, l’information reste-t-elle [compréhensible](00-glossaire.md#comprehensible-ordre-lecture) lorsque les [feuilles de styles](00-glossaire.md#feuille-style) sont désactivées ?

##### Procédure de test

1. Désactiver les styles (CSS) du document ;
2. Vérifier que l’ordre dans lequel les contenus sont implémentés ne pose pas de problème de compréhension ;
3. Si c’est le cas, **le test est validé**.
### Références WCAG

- 1.3.2 Meaningful Sequence (A)
- 2.4.3 Focus Order (A)

**Techniques :**

- G59
- G140
- F1

---

<a id="critere-10-4"></a>

## Critère 10.4 — Dans chaque page web, le texte reste-t-il lisible lorsque la taille des caractères est augmentée jusqu’à 200 %, au moins (hors cas particuliers) ?

### Définitions

- [taille des caractères](00-glossaire.md#taille-caracteres)

### Cas particuliers

Font exception à ce critère, les contenus pour lesquels l’utilisateur n’a pas de possibilité de personnalisation :

- Les sous-titres incrustés dans une vidéo ;
- Les textes en image ;
- Le texte au sein d’une balise `<canvas>`.

### Tests du critère

#### Test 10.4.1

Dans chaque page web, l’augmentation de la [taille des caractères](00-glossaire.md#taille-caracteres) jusqu’à 200 %, au moins, ne doit pas provoquer de perte d’information. Cette règle est-elle respectée selon une de ces conditions (hors cas particuliers) ?

- Lors de l’utilisation de la fonction d’agrandissement du texte du navigateur ;
- Lors de l’utilisation des fonctions de zoom graphique du navigateur ;
- Lors de l’utilisation d’un [composant d’interface](00-glossaire.md#composant-interface) propre au site permettant d’agrandir le texte ou de zoomer.

##### Procédure de test

1. Vérifier dans le document si les textes restent présents et lisibles lorsque :
   - Le zoom texte du navigateur est réglé à 200% ;
   - Le zoom graphique du navigateur est réglé à 200% ;
   - Les fonctionnalités de zoom personnalisées proposé par le document sont utilisés.
2. Si c’est le cas, **le test est validé**.
#### Test 10.4.2

Dans chaque page web, l’augmentation de la taille des caractères jusqu’à 200 %, au moins, doit être possible pour l’ensemble du texte dans la page. Cette règle est-elle respectée selon une de ces conditions (hors cas particuliers) ?

- Lors de l’utilisation de la fonction d’agrandissement du texte du navigateur ;
- Lors de l’utilisation des fonctions de zoom graphique du navigateur ;
- Lors de l’utilisation d’un [composant d’interface](00-glossaire.md#composant-interface) propre au site permettant d’agrandir le texte ou de zoomer.

##### Procédure de test

1. Vérifier dans le document si les textes sont effectivement agrandis lorsque :
   - Le zoom texte du navigateur est réglé à 200% ;
   - Le zoom graphique du navigateur est réglé à 200% ;
   - Les fonctionnalités de zoom personnalisées proposé par le document sont utilisés.
2. Si c’est le cas, **le test est validé**.
### Références WCAG

- 1.4.4 Resize Text (AA)

**Techniques :**

- G146
- G179
- F69
- F80
- SCR34
- C12
- C13
- C14
- C17
- C28

---

<a id="critere-10-5"></a>

## Critère 10.5 — Dans chaque page web, les déclarations CSS de couleurs de fond d’élément et de police sont-elles correctement utilisées ?

### Tests du critère

#### Test 10.5.1

Dans chaque page web, chaque déclaration CSS de couleurs de police (`color`), d’un élément susceptible de contenir du texte, est-elle accompagnée d’une déclaration de couleur de fond (`background`, `background-color`), au moins, héritée d’un parent ?

##### Procédure de test

1. Retrouver dans le document les textes mis en couleur, à l’exception des couleurs par défaut (par exemple les liens, etc.) ;
2. Déterminer l’élément qui contient le texte et vérifier la présence d’une valeur calculée pour la propriété `background-color` de l’élément ;
3. Si c’est le cas, **le test est validé**.
#### Test 10.5.2

Dans chaque page web, chaque déclaration de couleur de fond (`background`, `background-color`), d’un élément susceptible de contenir du texte, est-elle accompagnée d’une déclaration de couleur de police (`color`) au moins, héritée d’un parent ?

##### Procédure de test

1. Retrouver dans le document les textes mis en couleur, à l’exception des couleurs par défaut (par exemple les liens, etc.) ;
2. Déterminer l’élément qui contient le texte et vérifier la présence d’une valeur calculée pour la propriété `color` de l’élément ;
3. Si c’est le cas, **le test est validé**.
#### Test 10.5.3

Dans chaque page web, chaque utilisation d’une image pour créer une couleur de fond d’un élément susceptible de contenir du texte, via CSS (`background`, `background-image`), est-elle accompagnée d’une déclaration de couleur de fond (`background`, `background-color`), au moins, héritée d’un parent ?

##### Procédure de test

1. Retrouver dans le document les textes dont l’arrière-plan est constitué d’une image (propriété background-image) ;
2. Déterminer l’élément qui contient le texte et vérifier que si l’image d’arrière-plan est absente, le texte reste lisible ;
3. Si c’est le cas, **le test est validé**.
### Références WCAG

- 1.4.3 Contrast (Minimum) (AA)

**Techniques :**

- F24

---

<a id="critere-10-6"></a>

## Critère 10.6 — Dans chaque page web, chaque lien dont la nature n’est pas évidente est-il visible par rapport au texte environnant ?

### Définitions

- [lien dont la nature n’est pas évidente](00-glossaire.md#lien-dont-nature-n-est-pas-evidente)

### Tests du critère

#### Test 10.6.1

Dans chaque page web, chaque [lien texte](00-glossaire.md#lien-texte) signalé uniquement par la couleur, et dont la nature n’est pas évidente, vérifie-t-il ces conditions ?

- La couleur du lien a un rapport de [contraste](00-glossaire.md#contraste) supérieur ou égal à 3:1 par rapport au texte environnant ;
- Le lien dispose d’une indication visuelle au survol autre qu’un changement de couleur ;
- Le lien dispose d’une indication visuelle au focus autre qu’un changement de couleur.

##### Procédure de test

1. Retrouver dans le document les éléments de type lien (élément `<a>` ou élément pourvu d’un attribut WAI-ARIA `role="link"`) ;
2. Pour chaque élément de type lien, s’il peut être confondu avec un texte normal lorsqu’il est signalé uniquement par la couleur, vérifier que le contraste entre la couleur de police du lien et la couleur de police du texte environnant est de 3:1, au moins ;
3. Cette vérification doit être faite pour les différents états du lien s’ils sont présentés au moyen d’une couleur différente : l’état non visité, l’état visité, l’état activé, l’état au survol et l’état à la prise de focus ;
4. Si c’est le cas pour chaque élément de type lien, **le test est validé**.
### Références WCAG

- 1.4.1 Use of Color (A)

**Techniques :**

- G183
- F73

---

<a id="critere-10-7"></a>

## Critère 10.7 — Dans chaque page web, pour chaque élément recevant le focus, la prise de focus est-elle visible ?

### Définitions

- [prise de focus](00-glossaire.md#prise-focus)

### Tests du critère

#### Test 10.7.1

Pour chaque élément recevant le focus, la [prise de focus](00-glossaire.md#prise-focus) vérifie-t-elle une de ces conditions ?

- Le style du focus natif du navigateur n’est pas supprimé ou dégradé ;
- Un style du focus défini par l’auteur est visible.

##### Procédure de test

1. Retrouver dans le document les éléments susceptibles de recevoir le focus (les éléments d’interface tels que les liens ou les contrôles de formulaire, ainsi que tout élément pourvu d’un attribut `tabindex` d’une valeur égale ou supérieure à 1) ;
2. Pour chaque élément susceptible de recevoir le focus, vérifier que l’indication visuelle de la prise de focus est présente (en agissant sur le contour ou le fond ou les deux) et est suffisamment contrastée (ratio de contraste égal ou supérieur à 3.0) ;
3. Si c’est le cas pour chaque élément susceptible de recevoir le focus, **le test est validé**.
### Références WCAG

- 1.4.1 Use of Color (A)
- 2.4.7 Focus Visible (AA)

**Techniques :**

- G149
- G165
- G183
- G195
- F73
- F78
- SCR31
- C15

---

<a id="critere-10-8"></a>

## Critère 10.8 — Pour chaque page web, les contenus cachés ont-ils vocation à être ignorés par les technologies d’assistance ?

### Définitions

- [contenus cachés](00-glossaire.md#contenu-cache)

### Note technique

WAI-ARIA propose un attribut `aria-hidden` (`true` ou `false`) qui permet d’inhiber la restitution d’un contenu en direction des technologies d’assistance, sans action sur sa visibilité en direction des agents utilisateurs : un contenu avec `aria-hidden="true"` ne sera donc plus vocalisable, mais restera visible.

Sauf si le contenu contrôlé par `aria-hidden` n’a pas vocation à être restitué par les technologies d’assistance, la valeur de l’attribut `aria-hidden` doit être cohérente avec l’état affiché ou masqué du contenu à l’écran.

La spécification HTML5 propose un attribut `hidden` qui permet de rendre indisponible (quand l’attribut `hidden` est présent) un contenu dans le DOM généré (de manière similaire au `type="hidden"` sur un contrôle de formulaire).

Il est possible d’avoir des situations où un contenu contrôlé par `hidden` ou `aria-hidden` se trouve momentanément dans un état incohérent avec le statut affiché ou masqué du contenu, par exemple si l’on désire rendre disponible un élément, mais que son affichage à l’écran reste dépendant d’une action ultérieure. Dans ce cas, c’est l’état final du contenu qui doit être considéré.

### Tests du critère

#### Test 10.8.1

Dans chaque page web, chaque contenu caché vérifie-t-il une de ces conditions ?

- Le [contenu caché](00-glossaire.md#contenu-cache) a vocation à être ignoré par les technologies d’assistance ;
- Le [contenu caché](00-glossaire.md#contenu-cache) n’a pas vocation à être ignoré par les technologies d’assistance et est rendu restituable par les technologies d’assistance suite à une action de l’utilisateur réalisable au clavier ou par tout dispositif de pointage sur un élément précédent le contenu caché ou suite à un repositionnement du focus dessus.

##### Procédure de test

1. Retrouver les contenus cachés (éléments pourvus de l’attribut hidden ou de l’attribut WAI-ARIA aria-hidden, ou bien d’une classe ou d’un ensemble de styles CSS susceptibles de masquer le contenu).
2. Pour chaque contenu caché, vérifier que :
   - Soit le contenu caché a vocation à être ignoré par les technologies d’assistance (un élément statistique de visites par exemple) ;
   - Soit le contenu caché n’a pas vocation à être ignoré par les technologies d’assistance, et dans ce cas il est rendu restituable par les technologies d’assistance au moyen :
     - Soit d’une action de l’utilisateur réalisable au clavier ou par tout dispositif de pointage sur un élément précédent le contenu caché ;
     - Soit d’une fonction de programmation qui repositionne le focus sur le contenu.
3. Si c’est le cas pour chaque contenu caché, **le test est validé**.
### Références WCAG

- 1.3.2 Meaningful Sequence (A)
- 4.1.2 Name, Role, Value (A)

**Techniques :**

- G57

---

<a id="critere-10-9"></a>

## Critère 10.9 — Dans chaque page web, l’information ne doit pas être donnée uniquement par la forme, taille ou position. Cette règle est-elle respectée ?

### Définitions

- [par la forme, taille ou position](00-glossaire.md#indication-donnee-par-forme-taille-ou-position)

### Tests du critère

#### Test 10.9.1

Dans chaque page web, pour chaque texte ou ensemble de textes, l’information ne doit pas être donnée uniquement [par la forme, taille ou position](00-glossaire.md#indication-donnee-par-forme-taille-ou-position). Cette règle est-elle respectée ?

##### Procédure de test

1. Retrouver dans le document les informations d’un texte données par la forme, la taille ou la position ;
2. Pour chaque information donnée par la forme, la taille ou la position, vérifier qu’il existe un autre moyen de récupérer cette information ;
3. Si c’est le cas pour chaque information, **le test est validé**.
#### Test 10.9.2

Dans chaque page web, pour chaque image ou ensemble d’images, l’information ne doit pas être donnée uniquement [par la forme, taille ou position](00-glossaire.md#indication-donnee-par-forme-taille-ou-position). Cette règle est-elle respectée ?

##### Procédure de test

1. Retrouver dans le document les informations d’une image données par la forme, la taille ou la position ;
2. Pour chaque information donnée par la forme, la taille ou la position, vérifier qu’il existe un autre moyen de récupérer cette information ;
3. Si c’est le cas pour chaque information, **le test est validé**.
#### Test 10.9.3

Dans chaque page web, pour chaque [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise), l’information ne doit pas être donnée uniquement [par la forme, taille ou position](00-glossaire.md#indication-donnee-par-forme-taille-ou-position). Cette règle est-elle respectée ?

##### Procédure de test

1. Retrouver dans le document les informations d’un média temporel données par la forme, la taille ou la position ;
2. Pour chaque information donnée par la forme, la taille ou la position, vérifier qu’il existe un autre moyen de récupérer cette information ;
3. Si c’est le cas pour chaque information, **le test est validé**.
#### Test 10.9.4

Dans chaque page web, pour chaque [média non temporel](00-glossaire.md#media-non-temporel), l’information ne doit pas être donnée uniquement [par la forme, taille ou position](00-glossaire.md#indication-donnee-par-forme-taille-ou-position). Cette règle est-elle respectée ?

##### Procédure de test

1. Retrouver dans le document les informations d’un média non temporel données par la forme, la taille ou la position ;
2. Pour chaque information donnée par la forme, la taille ou la position, vérifier qu’il existe un autre moyen de récupérer cette information ;
3. Si c’est le cas pour chaque information, **le test est validé**.
### Références WCAG

- 1.3.3 Sensory Characteristics (A)
- 1.4.1 Use of Color (A)

**Techniques :**

- G96
- G140
- F14
- F26

---

<a id="critere-10-10"></a>

## Critère 10.10 — Dans chaque page web, l’information ne doit pas être donnée par la forme, taille ou position uniquement. Cette règle est-elle implémentée de façon pertinente ?

### Définitions

- [par la forme, taille ou position](00-glossaire.md#indication-donnee-par-forme-taille-ou-position)

### Tests du critère

#### Test 10.10.1

Dans chaque page web, pour chaque texte ou ensemble de textes, l’information ne doit pas être donnée uniquement [par la forme, taille ou position](00-glossaire.md#indication-donnee-par-forme-taille-ou-position). Cette règle est-elle implémentée de façon pertinente ?

##### Procédure de test

1. Retrouver dans le document les informations d’un texte données par la forme, la taille ou la position ;
2. Pour chaque information donnée par la forme, la taille ou la position, vérifier que le moyen alternatif de récupérer cette information est pertinent, c’est-à-dire qu’il permet de transmettre l’information dans tous les contextes de consultation et pour tous les utilisateurs.
3. Si c’est le cas pour chaque information, **le test est validé**.
#### Test 10.10.2

Dans chaque page web, pour chaque image ou ensemble d’images, l’information ne doit pas être donnée uniquement [par la forme, taille ou position](00-glossaire.md#indication-donnee-par-forme-taille-ou-position). Cette règle est-elle implémentée de façon pertinente ?

##### Procédure de test

1. Retrouver dans le document les informations d’une image données par la forme, la taille ou la position ;
2. Pour chaque information donnée par la forme, la taille ou la position, vérifier que le moyen alternatif de récupérer cette information est pertinent, c’est-à-dire qu’il permet de transmettre l’information dans tous les contextes de consultation et pour tous les utilisateurs.
3. Si c’est le cas pour chaque information, **le test est validé**.
#### Test 10.10.3

Dans chaque page web, pour chaque [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise), l’information ne doit pas être donnée uniquement [par la forme, taille ou position](00-glossaire.md#indication-donnee-par-forme-taille-ou-position). Cette règle est-elle implémentée de façon pertinente ?

##### Procédure de test

1. Retrouver dans le document les informations d’un média temporel données par la forme, la taille ou la position ;
2. Pour chaque information donnée par la forme, la taille ou la position, vérifier que le moyen alternatif de récupérer cette information est pertinent, c’est-à-dire qu’il permet de transmettre l’information dans tous les contextes de consultation et pour tous les utilisateurs.
3. Si c’est le cas pour chaque information, **le test est validé**.
#### Test 10.10.4

Dans chaque page web, pour chaque [média non temporel](00-glossaire.md#media-non-temporel), l’information ne doit pas être donnée uniquement [par la forme, taille ou position](00-glossaire.md#indication-donnee-par-forme-taille-ou-position). Cette règle est-elle implémentée de façon pertinente ?

##### Procédure de test

1. Retrouver dans le document les informations d’un média non temporel données par la forme, la taille ou la position ;
2. Pour chaque information donnée par la forme, la taille ou la position, vérifier que le moyen alternatif de récupérer cette information est pertinent, c’est-à-dire qu’il permet de transmettre l’information dans tous les contextes de consultation et pour tous les utilisateurs.
3. Si c’est le cas pour chaque information, **le test est validé**.
### Références WCAG

- 1.3.3 Sensory Characteristics (A)
- 1.4.1 Use of Color (A)

**Techniques :**

- G96
- G140
- F14
- F26

---

<a id="critere-10-11"></a>

## Critère 10.11 — Pour chaque page web, les contenus peuvent-ils être présentés sans perte d’information ou de fonctionnalité et sans avoir recours soit à un défilement vertical pour une fenêtre ayant une hauteur de 256 px, soit à un défilement horizontal pour une fenêtre ayant une largeur de 320 px (hors cas particuliers) ?

### Cas particuliers

L'objectif de ce critère est de garantir un défilement dans une unique direction pour une lecture facilitée selon le sens de l'écriture.

Font exception à ce critère, les contenus dont l'agencement requiert deux dimensions pour être compris ou utilisés comme :

- Les images, les graphiques ou les vidéos ;
- Les jeux (jeux de plateforme, par exemple) ;
- Les présentations (type diaporama, par exemple) ;
- Les tableaux de données ;
- Les interfaces où il est nécessaire d'avoir un ascenseur horizontal lors de la manipulation de l'interface.

Note : la majorité des navigateurs sur les systèmes d'exploitation sur mobile (Android, iOS) ne gère pas correctement la redistribution en cas de zoom. Dans ce contexte, le critère sera considéré comme non applicable sur ces environnements.

### Note technique

Lorsqu'il est ici question de pixel, il s'agit du pixel CSS tel que défini par le W3C https://www.w3.org/TR/css3-values/

### Tests du critère

#### Test 10.11.1

Pour chaque page web, lorsque le contenu dont le sens de lecture est horizontal est affiché dans une fenêtre réduite à une largeur de 320 px, l’ensemble des informations et des fonctionnalités sont-elles disponibles sans aucun défilement horizontal (hors cas particuliers) ?

##### Procédure de test

1. Retrouver dans le document si son contenu est conçu pour défiler verticalement (le sens de lecture du texte est horizontal), les informations et fonctionnalités ;
2. Réduire la fenêtre d’affichage à une largeur de 320px et vérifier que les informations et les fonctionnalités restent disponibles sans aucun défilement horizontal ;
3. Si c’est le cas, **le test est validé**.
#### Test 10.11.2

Pour chaque page web, lorsque le contenu dont le sens de lecture est vertical est affiché dans une fenêtre réduite à une hauteur de 256 px, l’ensemble des informations et des fonctionnalités sont-elles disponibles sans aucun défilement vertical (hors cas particuliers) ?

##### Procédure de test

1. Retrouver dans le document si son contenu est conçu pour défiler horizontalement (le sens de lecture du texte est vertical), les informations et fonctionnalités ;
2. Réduire la fenêtre d’affichage à une hauteur de 256px et vérifier que les informations et les fonctionnalités restent disponibles sans aucun défilement vertical ;
3. Si c’est le cas, **le test est validé**.
### Références WCAG

- 1.4.10 Reflow (AA)

**Techniques :**

- C34
- C37

---

<a id="critere-10-12"></a>

## Critère 10.12 — Dans chaque page web, les propriétés d’espacement du texte peuvent-elles être redéfinies par l’utilisateur sans perte de contenu ou de fonctionnalité (hors cas particuliers) ?

### Cas particuliers

Font exception à ce critère, les contenus pour lesquels l’utilisateur n’a pas de possibilité de personnalisation :

- Les sous-titres directement intégrés à une vidéo ;
- Les images texte ;
- Le texte au sein d’une balise `<canvas>`.

### Tests du critère

#### Test 10.12.1

Dans chaque page web, le texte reste-t-il lisible lorsque l’affichage est modifié selon ces conditions (hors cas particuliers) ?

- L’espacement entre les lignes (`line-height`) est augmenté jusqu’à 1,5 fois la taille de la police ;
- L’espacement suivant les paragraphes (balise `<p>`) est augmenté jusqu’à 2 fois la taille de la police ;
- L’espacement des lettres (`letter-spacing`) est augmenté jusqu’à 0,12 fois la taille de la police ;
- L’espacement des mots (`word-spacing`) est augmenté jusqu’à 0,16 fois la taille de la police.

##### Procédure de test

1. Modifier les styles du document en donnant :
   - Une valeur de 1.5 à la propriété `line-height` de tous les éléments du document ;
   - Une valeur de 2em à la propriété `margin-bottom` des éléments `<p>` ;
   - Une valeur de 0.12em à la propriété `letter-spacing` de tous les éléments du document ;
   - Une valeur de 0.16em à la propriété `word-spacing` de tous les éléments du document ;
2. Pour chaque passage de texte, vérifier qu’il reste lisible, à l’exception :
   - Des sous-titres directement intégrés à une vidéo ;
   - Des images texte ;
   - Des textes au sein d’une balise `<canvas>`.
3. Si c’est le cas pour chaque passage de texte, **le test est validé**.

Note : une implémentation de ces règles de modification est disponible dans les ressources du critère de succès WCAG 1.4.12 (https://github.com/alastc/adaptation-scripts/blob/master/scripts/text-adaptation.js).
### Références WCAG

- 1.4.12 Text Spacing (AA)

**Techniques :**

- C8
- C21
- C35
- C36

---

<a id="critere-10-13"></a>

## Critère 10.13 — Dans chaque page web, les contenus additionnels apparaissant à la prise de focus ou au survol d’un composant d’interface sont-ils contrôlables par l’utilisateur (hors cas particuliers) ?

### Définitions

- [composant d’interface](00-glossaire.md#composant-interface)

### Cas particuliers

Lorsque le contenu additionnel est contrôlé par l’agent utilisateur (par exemple, attribut `title` ou validation native de formulaire) ou correspond à une fenêtre modale conforme au [motif de conception](00-glossaire.md#motif-conception) WAI-ARIA `dialog`, le critère 10.13 est non applicable.

Lorsque le contenu additionnel ne masque ou ne remplace aucun contenu porteur d’information, le test 10.13.1 est non applicable.

### Tests du critère

#### Test 10.13.1

Chaque contenu additionnel devenant visible à la prise de focus ou au survol d’un [composant d’interface](00-glossaire.md#composant-interface) peut-il être masqué par une action de l’utilisateur sans déplacer le focus ou le pointeur de la souris (hors cas particuliers) ?

##### Procédure de test

1. Retrouver dans le document les contenus additionnels devenant visible à la prise de focus ou au survol d’un composant d’interface, à l’exception :
   - Des contenus additionnels contrôlés par l’agent utilisateur (par exemple, les infobulles associées à l’attribut `title` ou à la validation native d’un formulaire ;
   - Des contenus additionnels devenant visibles par une activation de l’utilisateur (par exemple, une fenêtre de dialogue).
2. Pour chaque contenu additionnel, vérifier que :
   - Soit le contenu additionnel est positionné de façon à ce qu’il ne gêne pas la consultation des autres contenus informatifs sur lesquels il viendrait se superposer (y compris le composant d’interface qui a déclenché son apparition), quelles que soient les conditions de consultation (y compris lors de l’utilisation d’un mécanisme de zoom) ;
   - Soit un mécanisme (au clavier) permet de faire disparaître le contenu additionnel (par exemple, la touche Echap).
3. Si c’est le cas pour chaque contenu additionnel, **le test est validé**.
#### Test 10.13.2

Chaque contenu additionnel qui apparait au survol d’un [composant d’interface](00-glossaire.md#composant-interface) peut-il être survolé par le pointeur de la souris sans disparaître (hors cas particuliers) ?

##### Procédure de test

1. Retrouver dans le document les contenus additionnels devenant visible au survol d’un composant d’interface, à l’exception :
   - Des contenus additionnels contrôlés par l’agent utilisateur (par exemple, les infobulles associées à l’attribut title ou à la validation native d’un formulaire) ;
   - Des contenus additionnels devenant visibles par une activation de l’utilisateur (par exemple, une fenêtre de dialogue).
2. Pour chaque contenu additionnel, vérifier qu’il peut être survolé par le pointeur de la souris sans disparaître ;
3. Si c’est le cas pour chaque contenu additionnel, **le test est validé**.
#### Test 10.13.3

Chaque contenu additionnel qui apparaît à la prise de focus ou au survol d’un [composant d’interface](00-glossaire.md#composant-interface) vérifie-t-il une de ces conditions (hors cas particuliers) ?

- Le contenu additionnel reste visible jusqu’à ce que l’utilisateur retire le pointeur souris ou le focus du contenu additionnel et du [composant d’interface](00-glossaire.md#composant-interface) ayant déclenché son apparition ;
- Le contenu additionnel reste visible jusqu’à ce que l’utilisateur déclenche une action masquant ce contenu sans déplacer le focus ou le pointeur de la souris du [composant d’interface](00-glossaire.md#composant-interface) ayant déclenché son apparition ;
- Le contenu additionnel reste visible jusqu’à ce qu’il ne soit plus valide.

##### Procédure de test

1. Retrouver dans le document les contenus additionnels devenant visible à la prise de focus ou au survol d’un composant d’interface, à l’exception :
   - Des contenus additionnels contrôlés par l’agent utilisateur (par exemple, les infobulles associées à l’attribut `title` ou à la validation native d’un formulaire) ;
   - Des contenus additionnels devenant visibles par une activation de l’utilisateur (par exemple, une fenêtre de dialogue).
2. Pour chaque contenu additionnel, vérifier qu’il reste visible :
   - Jusqu’à ce que l’utilisateur retire le pointeur souris ou le focus du contenu additionnel ou du composant d’interface ayant déclenché son apparition ;
   - Jusqu’à ce l’utilisateur déclenche le mécanisme prévu pour faire disparaître le contenu additionnel ;
   - Jusqu’à ce que l’information proposée par le contenu additionnel ne soit plus valide (par exemple un contenu additionnel signalant l’état “occupé” du composant d’interface que l’utilisateur souhaite activer ou encore un message d’erreur signalé sous la forme d’un contenu additionnel tant que l’utilisateur n’a pas rectifié sa saisie).
3. Si c’est le cas pour chaque contenu additionnel, **le test est validé**.
### Références WCAG

- 1.4.13 Content on Hover or Focus (AA)

**Techniques :**

- F95

---

<a id="critere-10-14"></a>

## Critère 10.14 — Dans chaque page web, les contenus additionnels apparaissant via les styles CSS uniquement peuvent-ils être rendus visibles au clavier et par tout dispositif de pointage ?

### Tests du critère

#### Test 10.14.1

Dans chaque page web, les contenus additionnels apparaissant au survol d’un [composant d’interface](00-glossaire.md#composant-interface) via les styles CSS respectent-ils si nécessaire une de ces conditions ?

- Les contenus additionnels apparaissent également à l’activation du composant via le clavier et tout dispositif de pointage ;
- Les contenus additionnels apparaissent également à la prise de focus du composant ;
- Les contenus additionnels apparaissent également par le biais de l’activation ou de la prise de focus d’un autre composant.

##### Procédure de test

1. Retrouver dans le document les contenus additionnels devenant visible au survol d’un composant d’interface au moyen d’un mécanisme CSS (`pseudo-classe :hover`) ;
2. Pour chaque contenu additionnel, vérifier que les contenus additionnels apparaissent également :
   - À l’activation du composant au moyen du clavier ou de tout autre dispositif de pointage ;
   - À la prise de focus du composant ;
   - À l’activation ou à la prise de focus d’un autre composant.
3. Si c’est le cas pour chaque contenu additionnel, **le test est validé**.
#### Test 10.14.2

Dans chaque page web, les contenus additionnels apparaissant au focus d’un [composant d’interface](00-glossaire.md#composant-interface) via les styles CSS respectent-ils si nécessaire une de ces conditions ?

- Les contenus additionnels apparaissent également à l’activation du composant via le clavier et tout dispositif de pointage ;
- Les contenus additionnels apparaissent également au survol du composant ;
- Les contenus additionnels apparaissent également par le biais de l’activation ou du survol d’un autre composant.

##### Procédure de test

1. Retrouver dans le document les contenus additionnels devenant visible à la prise de focus d’un composant d’interface au moyen d’un mécanisme CSS (`pseudo-classe :focus`) ;
2. Pour chaque contenu additionnel, vérifier que les contenus additionnels apparaissent également :

- À l’activation du composant au moyen du clavier ou de tout autre dispositif de pointage ;
- Au survol du composant ;
- À l’activation ou du survol d’un autre composant.

3. Si c’est le cas pour chaque contenu additionnel, **le test est validé**.
### Références WCAG

- 2.1.1 Keyboard (A)

**Techniques :**

- G202

---

