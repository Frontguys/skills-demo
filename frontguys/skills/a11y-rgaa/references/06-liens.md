# Thématique 6 — Liens

## Table des matières

- [Critère 6.1 — Chaque lien est-il explicite (hors cas particuliers) ?](#critere-6-1)
- [Critère 6.2 — Dans chaque page web, chaque lien a-t-il un intitulé ?](#critere-6-2)

---

<a id="critere-6-1"></a>

## Critère 6.1 — Chaque lien est-il explicite (hors cas particuliers) ?

### Définitions

- [lien](00-glossaire.md#lien)

### Cas particuliers

Il existe une gestion de cas particuliers pour les tests 6.1.1, 6.1.2, 6.1.3 et 6.1.4 lorsque le lien est [ambigu pour tout le monde](00-glossaire.md#ambigu-pour-tout-monde). Dans cette situation, où il n’est pas possible de rendre le lien explicite dans son contexte, le critère est non applicable.

Il existe une gestion de cas particuliers pour le test 6.1.5 lorsque :

- La ponctuation et les lettres majuscules sont présentes dans le texte de l’[intitulé visible](00-glossaire.md#intitule-visible) : elles peuvent être ignorées dans le nom accessible sans porter à conséquence ;
- Le texte de l’[intitulé visible](00-glossaire.md#intitule-visible) sert de symbole : le texte ne doit pas être interprété littéralement au niveau du nom accessible. Le nom doit exprimer la fonction véhiculée par le symbole (par exemple, “B” au niveau d’un éditeur de texte aura pour nom accessible “Mettre en gras”, le signe “>” en fonction du contexte signifiera “Suivant” ou “Lancer la vidéo”). Le cas des symboles mathématiques fait cependant exception (voir la note ci-dessous).

Note : si l’étiquette visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir d’étiquette au nom accessible (ex. : “A>B”). Il est laissé à l’utilisateur le soin d’opérer la correspondance entre l’expression et ce qu’il doit épeler compte tenu de la connaissance qu’il a du fonctionnement de son logiciel de saisie vocale (“A plus grand que B” ou “A supérieur à B”).

### Note technique

Lorsque l’intitulé visible est complété par une autre expression dans le nom accessible :

- WCAG insiste sur le placement de l’intitulé visible au début du nom accessible sans toutefois réserver l’exclusivité de cet emplacement ;
- WCAG considère comme un cas d’échec une correspondance non exacte de la chaîne de caractères de l’intitulé visible au sein du nom accessible.

Par exemple, si l’on considère l’intitulé visible « Commander maintenant » complété dans le nom accessible par l’expression « produit X », on peut avoir les différents cas suivants :

- « Commander maintenant produit X » est valide (bonne pratique) ;
- « Produit X : commander maintenant » est valide ;
- « Commander produit X maintenant » est non valide.

### Tests du critère

#### Test 6.1.1

Chaque [lien texte](00-glossaire.md#lien-texte) vérifie-t-il une de ces conditions (hors cas particuliers) ?

- L’[intitulé de lien](00-glossaire.md#intitule-ou-nom-accessible-lien) seul permet d’en comprendre la fonction et la destination ;
- L’[intitulé de lien](00-glossaire.md#intitule-ou-nom-accessible-lien) additionné au [contexte du lien](00-glossaire.md#contexte-lien) permet d’en comprendre la fonction et la destination.

##### Procédure de test

1. Retrouver dans le document les liens texte ;
2. Pour chaque lien texte, vérifier que ce qui permet d’en comprendre la fonction et la destination est :
   - Soit l’intitulé du lien seul ;
   - Soit le contexte du lien.
3. Si c’est le cas pour chaque lien texte, **le test est validé**.
#### Test 6.1.2

Chaque [lien image](00-glossaire.md#lien-image) vérifie-t-il une de ces conditions (hors cas particuliers) ?

- L’[intitulé de lien](00-glossaire.md#intitule-ou-nom-accessible-lien) seul permet d’en comprendre la fonction et la destination ;
- L’[intitulé de lien](00-glossaire.md#intitule-ou-nom-accessible-lien) additionné au [contexte du lien](00-glossaire.md#contexte-lien) permet d’en comprendre la fonction et la destination.

##### Procédure de test

1. Retrouver dans le document les liens image (lien avec pour contenu un élément `<img>` ou un élément ayant l’attribut WAI-ARIA `role="img"`, un élément `<area>` possédant un attribut `href`, un élément `<object>`, un élément `<canvas>` ou un élément `<svg>`) ;
2. Pour chaque lien image, vérifier que ce qui permet d’en comprendre la fonction et la destination est :
   - Soit l’intitulé du lien seul, fourni par l’alternative textuelle de l’image ;
   - Soit le contexte du lien.
3. Si c’est le cas pour chaque lien image, **le test est validé**.
#### Test 6.1.3

Chaque [lien composite](00-glossaire.md#lien-composite) vérifie-t-il une de ces conditions (hors cas particuliers) ?

- L’[intitulé de lien](00-glossaire.md#intitule-ou-nom-accessible-lien) seul permet d’en comprendre la fonction et la destination ;
- L’[intitulé de lien](00-glossaire.md#intitule-ou-nom-accessible-lien) additionné au [contexte du lien](00-glossaire.md#contexte-lien) permet d’en comprendre la fonction et la destination.

##### Procédure de test

1. Retrouver dans le document les liens composites (lien composé à la fois de contenu texte et d’éléments de type image) ;
2. Pour chaque lien composite, vérifier que ce qui permet d’en comprendre la fonction et la destination est :
   - Soit l’intitulé du lien seul, fourni par la combinaison du contenu texte et de l’alternative textuelle de l’image ;
   - Soit le contexte du lien.
3. Si c’est le cas pour chaque lien composite, **le test est validé**.
#### Test 6.1.4

Chaque [lien SVG](00-glossaire.md#lien-svg) vérifie-t-il une de ces conditions (hors cas particuliers) ?

- L’[intitulé de lien](00-glossaire.md#intitule-ou-nom-accessible-lien) seul permet d’en comprendre la fonction et la destination ;
- L’[intitulé de lien](00-glossaire.md#intitule-ou-nom-accessible-lien) additionné au [contexte du lien](00-glossaire.md#contexte-lien) permet d’en comprendre la fonction et la destination.

##### Procédure de test

1. Retrouver dans le document les liens SVG (élément `<svg>` qui possède un élément `<a>` pourvu d’un attribut `xlink-href` (SVG 1.1) ou `href` (SVG 2)) ;
2. Pour chaque lien SVG, vérifier que ce qui permet d’en comprendre la fonction et la destination est :
   - Soit l’intitulé du lien seul, fourni par le nom accessible de l’élément `<svg>` (résolu généralement à partir du contenu d’un élément `<text>`) ;
   - Soit le contexte du lien.
3. Si c’est le cas pour chaque lien SVG, **le test est validé**.
#### Test 6.1.5

Pour chaque [lien](00-glossaire.md#lien) ayant un [intitulé visible](00-glossaire.md#intitule-visible), le [nom accessible du lien](00-glossaire.md#intitule-ou-nom-accessible-lien) contient-il au moins l’[intitulé visible](00-glossaire.md#intitule-visible) (hors cas particuliers) ?

##### Procédure de test

1. Retrouver dans le document les liens autres que SVG dont le contenu est fourni à la fois par un intitulé visible et par le contenu soit d’un attribut title ou d’un attribut `aria-label` ou d’un attribut `aria-labelledby` ;
2. Pour chaque lien, vérifier que le contenu de l’attribut `title` ou de l’attribut `aria-label` ou de l’attribut `aria-labelledby` contient l’intitulé visible ;
3. Si c’est le cas pour chaque lien, **le test est validé** pour les liens autres que SVG.
4. Retrouver dans le document les liens SVG dont le contenu est fourni à la fois par un intitulé visible et par le contenu soit d’un attribut `aria-labelledby`, ou d’un attribut `aria-label` ou d’un élément title (enfant direct de l’élément `<svg>`) ou d’un attribut x-link:title (SVG 1.1) ou d’un ou plusieurs éléments `<text>`;
5. Pour chaque lien SVG, vérifier que le contenu de l’attribut `aria-labelledby` ou de l’attribut `aria-label` ou de l’élément `<title>` ou de l’attribut `x-link:title` ou d’un ou plusieurs éléments `<text>` contient l’intitulé visible ;
6. Si c’est le cas pour chaque lien SVG, **le test est validé** pour les liens SVG.
7. Si le test est validé à la fois pour les liens non SVG et pour les liens SVG, le test est globalement validé.

Note : considérant la détermination du nom accessible, il existe deux cas particuliers et une particularité liée aux expressions mathématiques :

- La ponctuation et les lettres majuscules présentes dans le texte de l’intitulé visible peuvent être ignorées dans le nom accessible sans porter à conséquence.
- Si le texte de l’intitulé visible sert de symbole, il ne doit pas être interprété littéralement au niveau du nom accessible. Le nom doit exprimer la fonction véhiculée par le symbole (par exemple, "B" au niveau d'un éditeur de texte aura pour nom accessible "Mettre en gras", le signe ">" en fonction du contexte signifiera "Suivant" ou "Lancer la vidéo"). Le cas des symboles mathématiques fait cependant exception (voir le point ci-dessous).
- Si l'étiquette visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir d'étiquette au nom accessible (par exemple, "A>B"). Il est laissé à l'utilisateur le soin d'opérer la correspondance entre l'expression et ce qu'il doit épeler compte tenu de la connaissance qu'il a du fonctionnement de son logiciel de saisie vocale ("A plus grand que B" ou "A supérieur à B").
### Références WCAG

- 1.1.1 Non-text Content (A)
- 2.4.4 Link Purpose (In Context) (A)
- 2.5.3 Label in Name (A)

**Techniques :**

- H30
- H78
- H79
- H80
- H81
- G53
- G91
- F63
- F89
- ARIA7
- ARIA8

---

<a id="critere-6-2"></a>

## Critère 6.2 — Dans chaque page web, chaque lien a-t-il un intitulé ?

### Définitions

- [lien](00-glossaire.md#lien)
- [intitulé](00-glossaire.md#intitule-ou-nom-accessible-lien)

### Note technique

Une ancre n’est pas un lien même si pendant longtemps l’élément `

### Tests du critère

#### Test 6.2.1

Dans chaque page web, chaque [lien](00-glossaire.md#lien) a-t-il un [intitulé](00-glossaire.md#intitule-ou-nom-accessible-lien) entre `<a>` et `</a>` ?

##### Procédure de test

1. Retrouver dans le document les liens quels qu’ils soient ;
2. Pour chaque lien, vérifier que le contenu de l’élément `<a>` (ou d’un élément pourvu d’un attribut WAI-ARIA `role=link`) contient un intitulé (texte ou alternative) ;
3. Si c’est le cas pour chaque lien, **le test est validé**.
### Références WCAG

- 1.1.1 Non-text Content (A)
- 2.4.4 Link Purpose (In Context) (A)

**Techniques :**

- H30
- G91
- F89

---

