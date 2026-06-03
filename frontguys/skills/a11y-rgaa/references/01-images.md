# Thématique 1 — Images

## Table des matières

- [Critère 1.1 — Chaque image porteuse d’information a-t-elle une alternative textuelle ?](#critere-1-1)
- [Critère 1.2 — Chaque image de décoration est-elle correctement ignorée par les technologies d’assistance ?](#critere-1-2)
- [Critère 1.3 — Pour chaque image porteuse d’information ayant une alternative textuelle, cette alternative est-elle pertinente (hors cas particuliers) ?](#critere-1-3)
- [Critère 1.4 — Pour chaque image utilisée comme CAPTCHA ou comme image-test, ayant une alternative textuelle, cette alternative permet-elle d’identifier la nature et la fonction de l’image ?](#critere-1-4)
- [Critère 1.5 — Pour chaque image utilisée comme CAPTCHA, une solution d’accès alternatif au contenu ou à la fonction du CAPTCHA est-elle présente ?](#critere-1-5)
- [Critère 1.6 — Chaque image porteuse d’information a-t-elle, si nécessaire, une description détaillée ?](#critere-1-6)
- [Critère 1.7 — Pour chaque image porteuse d’information ayant une description détaillée, cette description est-elle pertinente ?](#critere-1-7)
- [Critère 1.8 — Chaque image texte porteuse d’information, en l’absence d’un mécanisme de remplacement, doit si possible être remplacée par du texte stylé. Cette règle est-elle respectée (hors cas particuliers) ?](#critere-1-8)
- [Critère 1.9 — Chaque légende d’image est-elle, si nécessaire, correctement reliée à l’image correspondante ?](#critere-1-9)

---

<a id="critere-1-1"></a>

## Critère 1.1 — Chaque image porteuse d’information a-t-elle une alternative textuelle ?

### Définitions

- [image porteuse d’information](00-glossaire.md#image-porteuse-information)
- [alternative textuelle](00-glossaire.md#alternative-textuelle-image)

### Tests du critère

#### Test 1.1.1

Chaque image (balise `<img>` ou balise possédant l’attribut WAI-ARIA `role="img"`) [porteuse d’information](00-glossaire.md#image-porteuse-information) a-t-elle une [alternative textuelle](00-glossaire.md#alternative-textuelle-image) ?

##### Procédure de test

1. Retrouver dans le document les images structurées au moyen d’un élément `<img>` ou d’un élément possédant l’attribut WAI-ARIA `role="img"` ;
2. Pour chaque image, déterminer si l’image est porteuse d’information ;
3. Dans le cas où il s’agit d’un élément `<img>`, vérifier que l’image est pourvue au moins d’une alternative textuelle parmi les suivantes :
   - Passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` ;
   - Contenu de l’attribut WAI-ARIA `aria-label` ;
   - Contenu de l’attribut `alt` ;
   - Contenu de l’attribut `title`.
4. Dans le cas où il s’agit d’un élément possédant l’attribut WAI-ARIA `role="img"`, vérifier que l’image est pourvue au moins d’une alternative textuelle parmi les suivantes :
   - Passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` ;
   - Contenu de l’attribut WAI-ARIA `aria-label`.
5. Si au moins une alternative textuelle est trouvée, **le test est validé**.
#### Test 1.1.2

Chaque [zone](00-glossaire.md#zone-image-reactive) d’une [image réactive](00-glossaire.md#image-reactive) (balise `<area>`) [porteuse d’information](00-glossaire.md#image-porteuse-information) a-t-elle une [alternative textuelle](00-glossaire.md#alternative-textuelle-image) ?

##### Procédure de test

1. Retrouver dans le document les éléments `<area>` ;
2. Pour chaque élément `<area>`, déterminer si la zone réactive est porteuse d’information ;
3. Vérifier que la zone réactive est pourvue au moins d’une alternative textuelle parmi les suivantes :
   - Contenu de l’attribut WAI-ARIA `aria-label` ;
   - Contenu de l’attribut `alt` ;
4. Si au moins une alternative textuelle est trouvée, **le test est validé**.
#### Test 1.1.3

Chaque bouton de type `image` (balise `<input>` avec l’attribut `type="image"`) a-t-il une [alternative textuelle](00-glossaire.md#alternative-textuelle-image) ?

##### Procédure de test

1. Retrouver dans le document les éléments `<input>` pourvus de l’attribut `type="image"` ;
2. Pour chaque élément `<input>` pourvu de l’attribut type="image", déterminer si l’image utilisée est porteuse d’information ;
3. Vérifier que l’élément `<input>` est pourvu au moins d’une alternative textuelle parmi les suivantes :
   - Passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` ;
   - Contenu de l’attribut WAI-ARIA `aria-label` ;
   - Contenu de l’attribut `alt` ;
   - Contenu de l’attribut `title`.
4. Si au moins une alternative textuelle est trouvée, **le test est validé**.
#### Test 1.1.4

Chaque [zone cliquable](00-glossaire.md#zone-cliquable) d’une image réactive côté serveur est-elle doublée d’un mécanisme utilisable quel que soit le dispositif de pointage utilisé et permettant d’accéder à la même destination ?

##### Procédure de test

1. Retrouver dans le document les éléments `<img>` pourvus de l’attribut `ismap` ;
2. Pour chaque élément `<img>` pourvu de l’attribut `ismap`, vérifier la présence d’un lien ou d’un ensemble de liens (ou bien d’un autre type de composant d’interface qui jouerait un rôle similaire comme une liste de sélection, par exemple) permettant d’accéder aux mêmes ressources que lorsque l’image fait l’objet d’un clic.
3. Si c’est le cas, **le test est validé**.
#### Test 1.1.5

Chaque image vectorielle (balise `<svg>`) [porteuse d’information](00-glossaire.md#image-porteuse-information), vérifie-t-elle ces conditions ?

- La balise `<svg>` possède un attribut WAI-ARIA `role="img"` ;
- La balise `<svg>` a une [alternative textuelle](00-glossaire.md#alternative-textuelle-image).

##### Procédure de test

1. Retrouver dans le document les éléments `<svg>` ;
2. Pour chaque élément `<svg>`, déterminer si l’image est porteuse d’information ;
3. S’assurer que l’élément `<svg>` est pourvu d’un attribut WAI-ARIA `role="img"` ;
4. Si ce n’est pas le cas, le test est invalidé.
5. Le cas échéant, vérifier que l’élément `<svg>` est pourvu au moins d’une alternative textuelle parmi les suivantes :
   - Contenu de l'élément `<title>` ;
   - Passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` ;
   - Contenu de l’attribut WAI-ARIA `aria-label` ;
6. Si au moins une alternative textuelle est trouvée, **le test est validé**.
#### Test 1.1.6

Chaque [image objet](00-glossaire.md#image-objet) (balise `<object>` avec l’attribut `type="image/…"`) [porteuse d’information](00-glossaire.md#image-porteuse-information), vérifie-t-elle une de ces conditions ?

- La balise `<object>` possède une [alternative textuelle](00-glossaire.md#alternative-textuelle-image) et un attribut `role="img"` ;
- L’élément `<object>` est immédiatement suivi d’un [lien ou bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent) permettant d’accéder à un [contenu alternatif](00-glossaire.md#contenu-alternatif) ;
- Un mécanisme permet à l’utilisateur de remplacer l’élément `<object>` par un [contenu alternatif](00-glossaire.md#contenu-alternatif).

##### Procédure de test

1. Retrouver dans le document les balises ouvrantes `<object>` pourvues de l'attribut `type="image/…"` ;
2. Pour chaque balise ouvrante `<object>` pourvue de l'attribut `type="image/…"`, déterminer si l’image utilisée est porteuse d'information ;
3. Vérifier que l’élément `<object>` est pourvu d’un attribut WAI-ARIA `role="img"` ;
4. Vérifier que l’élément `<object>` est pourvu au moins d’une alternative textuelle parmi les suivantes :
   - Passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` ;
   - Contenu de l’attribut WAI-ARIA `aria-label` ;
   - Contenu de l’attribut `title`.
5. Si au moins une alternative textuelle est trouvée, **le test est validé** ;
6. Sinon, vérifier que l'élément `<object>` est :
   - Soit immédiatement suivi d'un lien ou bouton adjacent permettant d'accéder à un contenu alternatif ;
   - Soit un mécanisme permet à l'utilisateur de remplacer l'élément `<object>` par un contenu alternatif.
7. Si c'est le cas, **le test est validé**.
#### Test 1.1.7

Chaque image embarquée (balise `<embed>` avec l’attribut `type="image/…"`) [porteuse d’information](00-glossaire.md#image-porteuse-information), vérifie-t-elle une de ces conditions ?

- La balise `<embed>` possède une [alternative textuelle](00-glossaire.md#alternative-textuelle-image) et un attribut `role="img"` ;
- L’élément `<embed>` est immédiatement suivi d’un [lien ou bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent) permettant d’accéder à un [contenu alternatif](00-glossaire.md#contenu-alternatif) ;
- Un mécanisme permet à l’utilisateur de remplacer l’élément `<embed>` par un [contenu alternatif](00-glossaire.md#contenu-alternatif).

##### Procédure de test

1. Pour chaque élément `<embed>` pourvu de l’attribut `type="image/…"`, déterminer si l’image utilisée est porteuse d’information ;
2. Vérifier que l’élément `<embed>` est pourvu d’un attribut WAI-ARIA `role="img"` ;
3. Vérifier que l’élément `<embed>` est pourvu au moins d’une alternative textuelle parmi les suivantes :
   - Passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` ;
   - Contenu de l’attribut WAI-ARIA `aria-label` ;
   - Contenu de l’attribut `title`.
4. Si au moins une alternative textuelle est trouvée, **le test est validé** ;
5. Sinon, vérifier que l’élément `<embed>` est :
   - Soit immédiatement suivi d’un lien ou bouton adjacent permettant d’accéder à un contenu alternatif ;
   - Soit un mécanisme permet à l’utilisateur de remplacer l’élément `<embed>` par un contenu alternatif.
6. Si c’est le cas, **le test est validé**.
#### Test 1.1.8

Chaque image bitmap (balise `<canvas>`) [porteuse d’information](00-glossaire.md#image-porteuse-information), vérifie-t-elle une de ces conditions ?

- La balise `<canvas>` possède une [alternative textuelle](00-glossaire.md#alternative-textuelle-image) et un attribut `role="img"` ;
- Un [contenu alternatif](00-glossaire.md#contenu-alternatif) est présent entre les balises `<canvas>` et `</canvas>` ;
- L’élément `<canvas>` est immédiatement suivi d’un [lien ou bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent) permettant d’accéder à un [contenu alternatif](00-glossaire.md#contenu-alternatif) ;
- Un mécanisme permet à l’utilisateur de remplacer l’élément `<canvas>` par un [contenu alternatif](00-glossaire.md#contenu-alternatif).

##### Procédure de test

1. Retrouver dans le document les éléments `<canvas>` ;
2. Pour chaque élément `<canvas>`, déterminer si l’image utilisée est porteuse d’information ;
3. Vérifier que l’élément `<canvas>` est pourvu d’un attribut WAI-ARIA `role="img"` ;
4. Vérifier que la balise ouvrante `<canvas>` est pourvue au moins d’une alternative textuelle parmi les suivantes :
   - Passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` ;
   - Contenu de l’attribut WAI-ARIA `aria-label`.
5. Si au moins une alternative textuelle est trouvée, **le test est validé**.
6. Si les étapes 3 et 4 ne sont pas satisfaites, vérifier que l’élément `<canvas>` est :
   - Soit pourvu d’un contenu alternatif présent entre les balises `<canvas>` et `</canvas>` ;
   - Soit immédiatement suivi d’un lien ou bouton adjacent permettant d’accéder à un contenu alternatif ;
   - Soit un mécanisme permet à l’utilisateur de remplacer l’élément `<canvas>` par un contenu alternatif.
7. Si c’est le cas, **le test est validé**.

Note : si l'élément `<canvas>` dispose d'un rôle `img`, son alternative ne peut  être fournie que par les techniques listées à l'étape 4.
### Références WCAG

- 1.1.1 Non-text Content (A)

**Techniques :**

- H36
- H37
- H53
- F65
- H24

---

<a id="critere-1-2"></a>

## Critère 1.2 — Chaque image de décoration est-elle correctement ignorée par les technologies d’assistance ?

### Définitions

- [image de décoration](00-glossaire.md#image-decoration)

### Note technique

Lorsqu'une image est associée à une [légende](00-glossaire.md#legende-image), la note technique WCAG recommande de prévoir systématiquement une [alternative textuelle](00-glossaire.md#alternative-textuelle-image) (cf. critère 1.9). Dans ce cas le critère 1.2 est non applicable.

Dans le cas d'une image vectorielle (balise `<svg>`) de décoration qui serait affichée au travers d'un élément `<use href="…">` enfant de l'élément `<svg>`, le test 1.2.4 s'appliquera également à l'élément `<svg>` associée par le biais de l'élément `<use>`.

Un attribut WAI-ARIA `role="presentation"` peut être utilisé sur les images de décoration et les zones non cliquables de décoration. Le rôle `"none"` introduit en ARIA 1.1 et synonyme du rôle `"presentation"` peut être aussi utilisé. Il reste préférable cependant d'utiliser le rôle `"presentation"` en attendant un support satisfaisant du rôle `"none"`.

### Tests du critère

#### Test 1.2.1

Chaque image (balise `<img>`) [de décoration](00-glossaire.md#image-decoration), sans [légende](00-glossaire.md#legende-image), vérifie-t-elle une de ces conditions ?

- La balise `<img>` possède un attribut `alt` vide (`alt=""`) et est dépourvue de tout autre attribut permettant de fournir une [alternative textuelle](00-glossaire.md#alternative-textuelle-image) ;
- La balise `<img>` possède un attribut WAI-ARIA `aria-hidden="true"` ou `role="presentation"`.

##### Procédure de test

1. Retrouver dans le document les images décoratives dépourvues de légende structurées au moyen d’un élément `<img>` ;
2. Pour chaque image, vérifier que l’image ne possède pas d’attributs `aria-labelledby`, `aria-label` ou `title` et qu’elle possède :
   - Soit un attribut `alt` vide (`alt=""`) ;
   - Soit un attribut WAI-ARIA `aria-hidden="true"` ou `role="presentation"`.
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.2.2

Chaque [zone non cliquable](00-glossaire.md#zone-non-cliquable) (balise `<area>` sans attribut `href`) [de décoration](00-glossaire.md#image-decoration), vérifie-t-elle une de ces conditions ?

- La balise `<area>` possède un attribut `alt` vide (`alt=""`) et est dépourvue de tout autre attribut permettant de fournir une [alternative textuelle](00-glossaire.md#alternative-textuelle-image) ;
- La balise `<area>` possède un attribut WAI-ARIA `aria-hidden="true"` ou `role="presentation"`.

##### Procédure de test

1. Retrouver dans le document les images décoratives structurées au moyen d’un élément `<area>` (sans attribut `href`) ;
2. Pour chaque image, vérifier que l’élément `<area>` ne possède pas d’attributs `aria-labelledby`, `aria-label` ou `title` et qu’il possède :
   - Soit un attribut `alt` vide (`alt=""`) ;
   - Soit un attribut WAI-ARIA `aria-hidden="true"` ou `role="presentation"`.
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.2.3

Chaque [image objet](00-glossaire.md#image-objet) (balise `<object>` avec l’attribut `type="image/…"`) [de décoration](00-glossaire.md#image-decoration), sans [légende](00-glossaire.md#legende-image), vérifie-t-elle ces conditions ?

- La balise `<object>` possède un attribut WAI-ARIA `aria-hidden="true"` ;
- La balise `<object>` est dépourvue d’alternative textuelle ;
- Il n’y a aucun texte faisant office d’alternative textuelle entre `<object>` et `</object>`.

##### Procédure de test

1. Retrouver dans le document les images décoratives structurées dépourvues de légende au moyen d’un élément `<object>` (avec un attribut `type="image/…"`) ;
2. Pour chaque image, vérifier que la balise ouvrante `<object>` ne possède pas d’attributs `aria-labelledby`, `aria-label` ou `title` et qu’elle :
   - Possède un attribut WAI-ARIA `aria-hidden="true"` ;
   - Et est dépourvue d’alternative textuelle ;
   - Et est dépourvue d’un contenu alternatif présent entre les balises `<object>` et `</object>`.
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.2.4

Chaque image vectorielle (balise `<svg>`) [de décoration](00-glossaire.md#image-decoration), sans [légende](00-glossaire.md#legende-image), vérifie-t-elle ces conditions ?

- La balise `<svg>` possède un attribut WAI-ARIA `aria-hidden="true"` ;
- La balise `<svg>` et ses enfants sont dépourvus d’[alternative textuelle](00-glossaire.md#alternative-textuelle-image) ;
- Les balises `<title>` et `<desc>` sont absentes ou vides ;
- La balise `<svg>` et ses enfants sont dépourvus d’attribut `title`.

##### Procédure de test

1. Retrouver dans le document les images décoratives dépourvues de légende structurées au moyen d’un élément `<svg>` ;
2. Pour chaque image, vérifier que l’élément `<svg>` ne possède pas d’attributs `aria-labelledby` ou `aria-label` et qu’il :
   - Possède un attribut WAI-ARIA `aria-hidden="true"` ;
   - Et est dépourvu d’alternative textuelle (ainsi que ses éléments enfants) ;
   - Et ne contient pas d’éléments `<title>` et `<desc>` à moins que vides de contenu ;
   - Et est dépourvu d’attribut `title` (ainsi que ses éléments enfants).
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.2.5

Chaque image bitmap (balise `<canvas>`) [de décoration](00-glossaire.md#image-decoration), sans [légende](00-glossaire.md#legende-image), vérifie-t-elle ces conditions ?

- La balise `<canvas>` possède un attribut WAI-ARIA `aria-hidden="true"` ;
- La balise `<canvas>` et ses enfants sont dépourvus d’[alternative textuelle](00-glossaire.md#alternative-textuelle-image) ;
- Il n’y a aucun texte faisant office d’[alternative textuelle](00-glossaire.md#alternative-textuelle-image) entre `<canvas>` et `</canvas>`.

##### Procédure de test

1. Retrouver dans le document les images décoratives dépourvues de légende structurées au moyen d’un élément `<canvas>` ;
2. Pour chaque image, vérifier que l’élément `<canvas>` ne possède pas d’attributs `aria-labelledby`, `aria-label` ou `title` et qu’il :
   - Possède un attribut WAI-ARIA `aria-hidden="true"` ;
   - Et est dépourvu d’alternative textuelle ;
   - Et est dépourvu d’un contenu alternatif présent entre les balises `<canvas>` et `</canvas>`.
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.2.6

Chaque image embarquée (balise `<embed>` avec l’attribut `type="image/…"`) [de décoration](00-glossaire.md#image-decoration), sans [légende](00-glossaire.md#legende-image), vérifie-t-elle ces conditions ?

- La balise `<embed>` possède un attribut WAI-ARIA `aria-hidden="true"` ;
- La balise `<embed>` et ses enfants sont dépourvus d’[alternative textuelle](00-glossaire.md#alternative-textuelle-image).

##### Procédure de test

1. Retrouver dans le document les images décoratives dépourvues de légende structurées au moyen d’un élément `<embed>` (avec un attribut `type="image/…"`) ;
2. Pour chaque image, vérifier que l’élément `<embed>` ne possède pas d’attributs `aria-labelledby`, `aria-label` ou `title` et qu’il :
   - Possède un attribut WAI-ARIA `aria-hidden="true"` ;
   - Et est dépourvu d’alternative textuelle ;
3. Si c’est le cas pour chaque image, **le test est validé**.
### Références WCAG

- 1.1.1 Non-text Content (A)
- 4.1.2 Name, Role, Value (A)

**Techniques :**

- H67
- G196
- C9
- F39
- F38
- ARIA4
- ARIA10

---

<a id="critere-1-3"></a>

## Critère 1.3 — Pour chaque image porteuse d’information ayant une alternative textuelle, cette alternative est-elle pertinente (hors cas particuliers) ?

### Définitions

- [porteuse d’information](00-glossaire.md#image-porteuse-information)
- [alternative textuelle](00-glossaire.md#alternative-textuelle-image)

### Cas particuliers

Il existe une gestion de cas particuliers lorsque l’image est utilisée comme [CAPTCHA](00-glossaire.md#captcha) ou comme [image-test](00-glossaire.md#image-test). Dans cette situation, où il n’est pas possible de donner une alternative pertinente sans détruire l’objet du CAPTCHA ou du test, le critère est non applicable.

Note : le cas des CAPTCHA et des images-test est traité de manière spécifique par le critère 1.4.

### Tests du critère

#### Test 1.3.1

Chaque image (balise `<img>` ou balise possédant l’attribut WAI-ARIA `role="img"`) [porteuse d’information](00-glossaire.md#image-porteuse-information), ayant une [alternative textuelle](00-glossaire.md#alternative-textuelle-image), cette alternative est-elle pertinente (hors cas particuliers) ?

- S’il est présent, le contenu de l’attribut `alt` est pertinent ;
- S’il est présent, le contenu de l’attribut `title` est pertinent ;
- S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;
- S’il est présent, le [passage de texte](00-glossaire.md#passage-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent.

##### Procédure de test

1. Retrouver dans le document les images structurées au moyen d’un élément `<img>` (ou d’un élément possédant l’attribut WAI-ARIA `role="img"`) pourvues d’une alternative textuelle ;
2. Pour chaque image, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.3.2

Pour chaque [zone](00-glossaire.md#zone-image-reactive) (balise `<area>`) d’une [image réactive](00-glossaire.md#image-reactive) [porteuse d’information](00-glossaire.md#image-porteuse-information), ayant une [alternative textuelle](00-glossaire.md#alternative-textuelle-image), cette alternative est-elle pertinente (hors cas particuliers) ?

- S’il est présent, le contenu de l’attribut `alt` est pertinent ;
- S’il est présent, le contenu de l’attribut `title` est pertinent ;
- S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;
- S’il est présent, le [passage de texte](00-glossaire.md#passage-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent.

##### Procédure de test

1. Retrouver dans le document les éléments `<area>` pourvus d’une alternative textuelle ;
2. Pour chaque élément `<area>`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.3.3

Pour chaque [bouton](00-glossaire.md#bouton-formulaire) de type `image` (balise `<input>` avec l’attribut `type="image"`), ayant une [alternative textuelle](00-glossaire.md#alternative-textuelle-image), cette alternative est-elle pertinente (hors cas particuliers) ?

- S’il est présent, le contenu de l’attribut `alt` est pertinent ;
- S’il est présent, le contenu de l’attribut `title` est pertinent ;
- S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;
- S’il est présent, le [passage de texte](00-glossaire.md#passage-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent.

##### Procédure de test

1. Retrouver dans le document les éléments `<input>` pourvus de l’attribut `type="image"` et d’une alternative textuelle ;
2. Pour chaque élément `<input>` pourvu de l’attribut `type="image"`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.3.4

Pour chaque [image objet](00-glossaire.md#image-objet) (balise `<object>` avec l’attribut `type="image/…"`) [porteuse d’information](00-glossaire.md#image-porteuse-information), ayant une [alternative textuelle](00-glossaire.md#alternative-textuelle-image) ou un [contenu alternatif](00-glossaire.md#contenu-alternatif), cette alternative est-elle pertinente (hors cas particuliers) ?

- S’il est présent, le contenu de l’attribut `title` est pertinent ;
- S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;
- S’il est présent, le [passage de texte](00-glossaire.md#passage-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent ;
- S’il est présent le [contenu alternatif](00-glossaire.md#contenu-alternatif) est pertinent.

##### Procédure de test

1. Retrouver dans le document les éléments `<object>` pourvus de l’attribut `type="image/…"` et d’une alternative textuelle ;
2. Pour chaque élément `<object>` pourvu de l’attribut `type="image/…"`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.3.5

Pour chaque image embarquée (balise `<embed>` avec l’attribut `type="image/…"`) [porteuse d’information](00-glossaire.md#image-porteuse-information), ayant une [alternative textuelle](00-glossaire.md#alternative-textuelle-image) ou un [contenu alternatif](00-glossaire.md#contenu-alternatif), cette alternative est-elle pertinente (hors cas particuliers) ?

- S’il est présent, le contenu de l’attribut `title` est pertinent ;
- S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;
- S’il est présent, le [passage de texte](00-glossaire.md#passage-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent ;
- S’il est présent le [contenu alternatif](00-glossaire.md#contenu-alternatif) est pertinent.

##### Procédure de test

1. Retrouver dans le document les éléments `<embed>` pourvus de l’attribut `type="image/…"` et d’une alternative textuelle ;
2. Pour chaque élément `<embed>` pourvu de l’attribut `type="image/…"`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.3.6

Pour chaque image vectorielle (balise `<svg>`) [porteuse d’information](00-glossaire.md#image-porteuse-information), ayant une [alternative textuelle](00-glossaire.md#alternative-textuelle-image), cette alternative est-elle pertinente (hors cas particuliers) ?

- S’il est présent, le contenu de l'élément `<title>` est pertinent ;
- S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;
- S’il est présent, le [passage de texte](00-glossaire.md#passage-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent.

##### Procédure de test

1. Retrouver dans le document les éléments `<svg>` pourvus d’une alternative textuelle ;
2. Pour chaque élément `<svg>`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.3.7

Pour chaque image bitmap (balise `<canvas>`) [porteuse d’information](00-glossaire.md#image-porteuse-information), ayant une [alternative textuelle](00-glossaire.md#alternative-textuelle-image) ou un [contenu alternatif](00-glossaire.md#contenu-alternatif), cette alternative est-elle pertinente (hors cas particuliers) ?

- S’il est présent, le contenu de l’attribut `title` est pertinent ;
- S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;
- S’il est présent, le [passage de texte](00-glossaire.md#passage-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent ;
- S’il est présent le [contenu alternatif](00-glossaire.md#contenu-alternatif) est pertinent.

##### Procédure de test

1. Retrouver dans le document les éléments `<canvas>` pourvus d’une alternative textuelle ;
2. Pour chaque élément `<canvas>`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.3.8

Pour chaque image bitmap (balise `<canvas>`) [porteuse d’information](00-glossaire.md#image-porteuse-information) et ayant  un [contenu alternatif](00-glossaire.md#contenu-alternatif) entre `<canvas>` et `</canvas>`, ce [contenu alternatif](00-glossaire.md#contenu-alternatif) est-il [correctement restitué par les technologies d’assistance](00-glossaire.md#correctement-restitue-par-technologies-assistance) ?

##### Procédure de test

1. Retrouver dans le document les éléments `<canvas>` pourvus d’un contenu alternatif entre les balises `<canvas>` et `</canvas>` ;
2. Pour chaque élément `<canvas>`, vérifier que le contenu alternatif est correctement restitué par les technologies d’assistance ;
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.3.9

Pour chaque image [porteuse d’information](00-glossaire.md#image-porteuse-information) et ayant une [alternative textuelle](00-glossaire.md#alternative-textuelle-image), l’[alternative textuelle](00-glossaire.md#alternative-textuelle-image) est-elle [courte et concise](00-glossaire.md#alternative-courte-et-concise) (hors cas particuliers) ?

##### Procédure de test

1. Retrouver dans le document les images pourvues d’une alternative textuelle ;
2. Pour chaque image, vérifier l’alternative textuelle est courte et concise ;
3. Si c’est le cas pour chaque image, **le test est validé**.
### Références WCAG

- 1.1.1 Non-text Content (A)
- 4.1.2 Name, Role, Value (A)

**Techniques :**

- G94
- G95
- F30
- F71
- G196
- ARIA6
- ARIA9
- ARIA10

---

<a id="critere-1-4"></a>

## Critère 1.4 — Pour chaque image utilisée comme CAPTCHA ou comme image-test, ayant une alternative textuelle, cette alternative permet-elle d’identifier la nature et la fonction de l’image ?

### Définitions

- [CAPTCHA](00-glossaire.md#captcha)
- [image-test](00-glossaire.md#image-test)
- [alternative textuelle](00-glossaire.md#alternative-textuelle-image)

### Tests du critère

#### Test 1.4.1

Pour chaque image (balise `<img>`) utilisée comme [CAPTCHA](00-glossaire.md#captcha) ou comme [image-test](00-glossaire.md#image-test), ayant une [alternative textuelle](00-glossaire.md#alternative-textuelle-image), cette alternative est-elle pertinente ?

- S’il est présent, le contenu de l’attribut `alt` est pertinent ;
- S’il est présent, le contenu de l’attribut `title` est pertinent ;
- S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;
- S’il est présent, le [passage de texte](00-glossaire.md#passage-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent.

##### Procédure de test

1. Retrouver dans le document les images structurées au moyen d’un élément `<img>` pourvues d’une alternative textuelle et utilisées comme CAPTCHA ou comme image-test ;
2. Pour chaque image, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.4.2

Pour chaque zone (balise `<area>`) d’une image réactive utilisée comme [CAPTCHA](00-glossaire.md#captcha) ou comme [image-test](00-glossaire.md#image-test), ayant une [alternative textuelle](00-glossaire.md#alternative-textuelle-image), cette alternative est-elle pertinente ?

- S’il est présent, le contenu de l’attribut `alt` est pertinent ;
- S’il est présent, le contenu de l’attribut `title` est pertinent ;
- S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;
- S’il est présent, le [passage de texte](00-glossaire.md#passage-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent.

##### Procédure de test

1. Retrouver dans le document les éléments `<area>` pourvus d’une alternative textuelle et utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque élément `<area>`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.4.3

Pour chaque [bouton](00-glossaire.md#bouton-formulaire) de type image (balise `<input>` avec l’attribut `type="image"`) utilisé comme [CAPTCHA](00-glossaire.md#captcha) ou comme [image-test](00-glossaire.md#image-test), ayant une [alternative textuelle](00-glossaire.md#alternative-textuelle-image), cette alternative est-elle pertinente ?

- S’il est présent, le contenu de l’attribut `alt` est pertinent ;
- S’il est présent, le contenu de l’attribut `title` est pertinent ;
- S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;
- S’il est présent, le [passage de texte](00-glossaire.md#passage-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent.

##### Procédure de test

1. Retrouver dans le document les éléments `<input>` pourvus de l’attribut `type="image"` et d’une alternative textuelle, et utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque élément `<input>` pourvu de l’attribut `type="image"`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.4.4

Pour chaque [image objet](00-glossaire.md#image-objet) (balise `<object>` avec l’attribut `type="image/…"`) utilisée comme [CAPTCHA](00-glossaire.md#captcha) ou comme [image-test](00-glossaire.md#image-test), ayant une [alternative textuelle](00-glossaire.md#alternative-textuelle-image) ou un [contenu alternatif](00-glossaire.md#contenu-alternatif), cette alternative est-elle pertinente ?

- S’il est présent, le contenu de l’attribut `alt` est pertinent ;
- S’il est présent, le contenu de l’attribut `title` est pertinent ;
- S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;
- S’il est présent, le [passage de texte](00-glossaire.md#passage-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent ;
- S’il est présent le [contenu alternatif](00-glossaire.md#contenu-alternatif) est pertinent.

##### Procédure de test

1. Retrouver dans le document les éléments `<object>` pourvus de l’attribut `type="image/…"` et d’une alternative textuelle, et utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque élément `<object>` pourvu de l’attribut `type="image/…"`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.4.5

Pour chaque image embarquée (balise `<embed>` avec l’attribut `type="image/…"`) utilisée comme [CAPTCHA](00-glossaire.md#captcha) ou comme [image-test](00-glossaire.md#image-test), ayant une [alternative textuelle](00-glossaire.md#alternative-textuelle-image) ou un [contenu alternatif](00-glossaire.md#contenu-alternatif), cette alternative est-elle pertinente ?

- S’il est présent, le contenu de l’attribut `alt` est pertinent ;
- S’il est présent, le contenu de l’attribut `title` est pertinent ;
- S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;
- S’il est présent, le [passage de texte](00-glossaire.md#passage-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent ;
- S’il est présent le [contenu alternatif](00-glossaire.md#contenu-alternatif) est pertinent.

##### Procédure de test

1. Retrouver dans le document les éléments `<embed>` pourvus de l’attribut `type="image/…"` et d’une alternative textuelle, et utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque élément `<embed>` pourvu de l’attribut `type="image/…"`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.4.6

Pour chaque image vectorielle (balise `<svg>`) utilisée comme [CAPTCHA](00-glossaire.md#captcha) ou comme [image-test](00-glossaire.md#image-test), ayant une [alternative textuelle](00-glossaire.md#alternative-textuelle-image), cette alternative est-elle pertinente ?

- S’il est présent, le contenu de l’attribut `alt` est pertinent ;
- S’il est présent, le contenu de l’attribut `title` est pertinent ;
- S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;
- S’il est présent, le [passage de texte](00-glossaire.md#passage-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent.

##### Procédure de test

1. Retrouver dans le document les éléments `<svg>` pourvus d’une alternative textuelle et utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque élément `<svg>`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.4.7

Pour chaque image bitmap (balise `<canvas>`) utilisée comme [CAPTCHA](00-glossaire.md#captcha) ou comme [image-test](00-glossaire.md#image-test), ayant une [alternative textuelle](00-glossaire.md#alternative-textuelle-image) ou un [contenu alternatif](00-glossaire.md#contenu-alternatif), cette alternative est-elle pertinente ?

- S’il est présent, le contenu de l’attribut `alt` est pertinent ;
- S’il est présent, le contenu de l’attribut `title` est pertinent ;
- S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;
- S’il est présent, le [passage de texte](00-glossaire.md#passage-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent ;
- S’il est présent le [contenu alternatif](00-glossaire.md#contenu-alternatif) est pertinent.

##### Procédure de test

1. Retrouver dans le document les éléments `<canvas>` pourvus d’une alternative textuelle et utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque élément `<canvas>`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.
### Références WCAG

- 1.1.1 Non-text Content (A)

**Techniques :**

- G100
- G143

---

<a id="critere-1-5"></a>

## Critère 1.5 — Pour chaque image utilisée comme CAPTCHA, une solution d’accès alternatif au contenu ou à la fonction du CAPTCHA est-elle présente ?

### Définitions

- [CAPTCHA](00-glossaire.md#captcha)

### Tests du critère

#### Test 1.5.1

Chaque image (balises `<img>`, `<area>`, `<object>`, `<embed>`, `<svg>`, `<canvas>` ou possédant un attribut WAI-ARIA `role="img"`) utilisée comme [CAPTCHA](00-glossaire.md#captcha) vérifie-t-elle une de ces conditions ?

- Il existe une autre forme de [CAPTCHA](00-glossaire.md#captcha) non graphique, au moins ;
- Il existe une autre solution d’accès à la fonctionnalité qui est sécurisée par le [CAPTCHA](00-glossaire.md#captcha).

##### Procédure de test

1. Retrouver dans le document les images (éléments `<img>`, `<area>`, `<object>`, `<embed>`, `<svg>`, `<canvas>` ou possédant un attribut WAI-ARIA `role="img"`) utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque image, vérifier qu’il existe :
   - Soit une autre forme de CAPTCHA non graphique, au moins ;
   - Soit une autre solution d’accès à la fonctionnalité qui est sécurisée par le CAPTCHA.
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.5.2

Chaque bouton associé à une image (balise `input` avec l’attribut `type="image"`) utilisée comme [CAPTCHA](00-glossaire.md#captcha) vérifie-t-il une de ces conditions ?

- Il existe une autre forme de [CAPTCHA](00-glossaire.md#captcha) non graphique, au moins ;
- Il existe une autre solution d’accès à la fonctionnalité sécurisée par le [CAPTCHA](00-glossaire.md#captcha).

##### Procédure de test

1. Retrouver dans le document les boutons associés à une image (éléments `<input>` avec l’attribut `type="image"`) utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque bouton associé à une image, vérifier qu’il existe :
   - Soit une autre forme de CAPTCHA non graphique, au moins ;
   - Soit une autre solution d’accès à la fonctionnalité qui est sécurisée par le CAPTCHA.
3. Si c’est le cas pour chaque image, **le test est validé**.
### Références WCAG

- 1.1.1 Non-text Content (A)

**Techniques :**

- G144

---

<a id="critere-1-6"></a>

## Critère 1.6 — Chaque image porteuse d’information a-t-elle, si nécessaire, une description détaillée ?

### Définitions

- [porteuse d’information](00-glossaire.md#image-porteuse-information)
- [description détaillée](00-glossaire.md#description-detaillee-image)

### Note technique

Dans le cas du SVG, le manque de support de l’élément `<title>` et `<desc>` par les technologies d’assistance crée une difficulté dans le cas de l’implémentation de l’[alternative textuelle](00-glossaire.md#alternative-textuelle-image) de l’image et de sa [description détaillée](00-glossaire.md#description-detaillee-image). Dans ce cas, il est recommandé d’utiliser l’attribut WAI-ARIA `aria-label` pour implémenter à la fois l’[alternative textuelle](00-glossaire.md#alternative-textuelle-image) courte et la référence à la [description détaillée](00-glossaire.md#description-detaillee-image) adjacente ou l’attribut WAI-ARIA `aria-labelledby` pour associer les passages de texte faisant office d’alternative courte et de [description détaillée](00-glossaire.md#description-detaillee-image).

L’utilisation de l’attribut WAI-ARIA aria-describedby n’est pas recommandée pour lier une image (`<img>`, `<object>`, `<embed>`, `<canvas>`) à sa [description détaillée](00-glossaire.md#description-detaillee-image), par manque de support des technologies d’assistance. Néanmoins, lorsqu’il est utilisé, l’attribut devra nécessairement faire référence à l’`id` de la zone contenant la [description détaillée](00-glossaire.md#description-detaillee-image).

La [description détaillée](00-glossaire.md#description-detaillee-image) adjacente peut être implémentée via une balise `<figcaption>`, dans ce cas le critère 1.9 doit être vérifié (utilisation de `<figure>` et des attributs WAI-ARIA `role="figure"` et `aria-label`, notamment).

L'attribut `longdesc` qui constitue une des conditions du test 1.6.1 (et dont la pertinence est vérifiée avec le test 1.7.1) est désormais considéré comme obsolète par la spécification HTML en cours. La vérification de cet attribut ne sera donc requise que pour les versions de la spécification HTML antérieure à HTML 5.

### Tests du critère

#### Test 1.6.1

Chaque image (balise `<img>`) [porteuse d’information](00-glossaire.md#image-porteuse-information), qui nécessite une [description détaillée](00-glossaire.md#description-detaillee-image), vérifie-t-elle une de ces conditions ?

- Il existe un attribut `longdesc` qui donne l’adresse (URL) d’une page ou d’un emplacement dans la page contenant la [description détaillée](00-glossaire.md#description-detaillee-image) ;
- Il existe une [alternative textuelle](00-glossaire.md#alternative-textuelle-image) contenant la référence à une [description détaillée](00-glossaire.md#description-detaillee-image) adjacente à l’image ;
- Il existe un [lien ou un bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent) permettant d’accéder à la [description détaillée](00-glossaire.md#description-detaillee-image).

##### Procédure de test

1. Retrouver dans le document les images structurées au moyen d’un élément `<img>` (ou d’un élément possédant l’attribut WAI-ARIA `role="img"`) porteuses d’information qui nécessitent une description détaillée ;
2. Pour chaque image, vérifier qu’il existe :
   - Soit un attribut longdesc qui donne l’adresse (url) d’une page ou d’un emplacement dans la page contenant la description détaillée ;
   - Soit une alternative textuelle contenant la référence à une description détaillée adjacente à l’image ;
   - Soit un lien ou un bouton adjacent permettant d’accéder à la description détaillée.
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.6.2

Chaque [image objet](00-glossaire.md#image-objet) (balise `<object>` avec l’attribut `type="image/…"`) [porteuse d’information](00-glossaire.md#image-porteuse-information), qui nécessite une [description détaillée](00-glossaire.md#description-detaillee-image), vérifie-t-elle une de ces conditions ?

- Il existe un attribut `longdesc` qui donne l’adresse (URL) d’une page ou d’un emplacement dans la page contenant la [description détaillée](00-glossaire.md#description-detaillee-image) ;
- Il existe une [alternative textuelle](00-glossaire.md#alternative-textuelle-image) contenant la référence à une [description détaillée](00-glossaire.md#description-detaillee-image) adjacente à l’image ;
- Il existe un [lien ou un bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent) permettant d’accéder à la [description détaillée](00-glossaire.md#description-detaillee-image).

##### Procédure de test

1. Retrouver dans le document les éléments `<object>` pourvus de l’attribut `type="image/…"`, porteurs d’information qui nécessitent une description détaillée ;
2. Pour chaque élément `<object>` pourvu de l’attribut `type="image/…"`, vérifier qu’il existe :
   - Soit une alternative textuelle contenant la référence à une description détaillée adjacente à l’image ;
   - Soit un lien ou un bouton adjacent permettant d’accéder à la descript on détaillée.
3. Si c’est le cas pour chaque élément `<object>` pourvu de l’attribut `type="image/…"`, **le test est validé**.
#### Test 1.6.3

Chaque image embarquée (balise `<embed>`) [porteuse d’information](00-glossaire.md#image-porteuse-information), qui nécessite une [description détaillée](00-glossaire.md#description-detaillee-image), vérifie-t-elle une de ces conditions ?

- Il existe un attribut `longdesc` qui donne l’adresse (URL) d’une page ou d’un emplacement dans la page contenant la [description détaillée](00-glossaire.md#description-detaillee-image) ;
- Il existe une [alternative textuelle](00-glossaire.md#alternative-textuelle-image) contenant la référence à une [description détaillée](00-glossaire.md#description-detaillee-image) adjacente à l’image ;
- Il existe un [lien ou un bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent) permettant d’accéder à la [description détaillée](00-glossaire.md#description-detaillee-image).

##### Procédure de test

1. Retrouver dans le document les éléments `<embed>` pourvus de l’attribut `type="image/…"`, porteurs d’information qui nécessitent une description détaillée ;
2. Pour chaque élément `<embed>` pourvu de l’attribut `type="image/…"`, vérifier qu’il existe :
   - Soit une alternative textuelle contenant la référence à une description détaillée adjacente à l’image ;
   - Soit un lien ou un bouton adjacent permettant d’accéder à la description détaillée.
3. Si c’est le cas pour chaque élément `<embed>` pourvu de l’attribut `type="image/…"`, **le test est validé**.
#### Test 1.6.4

Chaque [bouton](00-glossaire.md#bouton-formulaire) de type image (balise `<input>` avec l’attribut `type="image"`) [porteur d’information](00-glossaire.md#image-porteuse-information), qui nécessite une [description détaillée](00-glossaire.md#description-detaillee-image), vérifie-t-il une de ces conditions ?

- Il existe un attribut `longdesc` qui donne l’adresse (URL) d’une page ou d’un emplacement dans la page contenant la [description détaillée](00-glossaire.md#description-detaillee-image) ;
- Il existe une [alternative textuelle](00-glossaire.md#alternative-textuelle-image) contenant la référence à une [description détaillée](00-glossaire.md#description-detaillee-image) adjacente à l’image ;
- Il existe un [lien ou un bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent) permettant d’accéder à la [description détaillée](00-glossaire.md#description-detaillee-image).

##### Procédure de test

1. Retrouver dans le document les éléments `<input>` pourvus de l’attribut `type="image"`, porteurs d’information qui nécessitent une description détaillée ;
2. Pour chaque élément `<input>` pourvu de l’attribut `type="image"`, vérifier qu’il existe :
   - Soit une alternative textuelle contenant la référence à une description détaillée adjacente à l’image ;
   - Soit un lien ou un bouton adjacent permettant d’accéder à la description détaillée ;
   - Soit un attribut WAI-ARIA aria-describedby associant un passage de texte faisant office de description détaillée.
3. Si c’est le cas pour chaque élément `<input>` pourvu de l’attribut `type="image"`, **le test est validé**.
#### Test 1.6.5

Chaque image vectorielle (balise `<svg>`) [porteuse d’information](00-glossaire.md#image-porteuse-information), qui nécessite une [description détaillée](00-glossaire.md#description-detaillee-image), vérifie-t-elle une de ces conditions ?

- Il existe un attribut WAI-ARIA `aria-label` contenant l’alternative textuelle et une référence à une [description détaillée](00-glossaire.md#description-detaillee-image) adjacente ;
- Il existe un attribut WAI-ARIA `aria-labelledby` associant un [passage de texte](00-glossaire.md#passage-texte-lie-par-aria-labelledby-ou-aria-describedby) faisant office d’alternative textuelle et un autre faisant office de [description détaillée](00-glossaire.md#description-detaillee-image) ;
- Il existe un attribut WAI-ARIA `aria-describedby` associant un [passage de texte](00-glossaire.md#passage-texte-lie-par-aria-labelledby-ou-aria-describedby) faisant office de [description détaillée](00-glossaire.md#description-detaillee-image) ;
- Il existe un [lien ou un bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent) permettant d’accéder à la [description détaillée](00-glossaire.md#description-detaillee-image).

##### Procédure de test

1. Retrouver dans le document les éléments `<svg>` porteurs d’information qui nécessitent une description détaillée ;
2. Pour chaque élément `<svg>`, vérifier qu’il existe :
   - Soit un attribut WAI-ARIA `aria-label` contenant l’alternative textuelle et une référence à une description détaillée adjacente ;
   - Soit un attribut WAI-ARIA `aria-labelledby` associant un passage de texte faisant office d’alternative textuelle et un autre faisant office de description détaillée ;
   - Soit un attribut WAI-ARIA `aria-describedby` associant un passage de texte faisant office de description détaillée ;
   - Soit un lien ou un bouton adjacent permettant d’accéder à la description détaillée.
3. Si c’est le cas pour chaque élément `<svg>`, **le test est validé**.
#### Test 1.6.6

Pour chaque image vectorielle (balise `<svg>`) [porteuse d’information](00-glossaire.md#image-porteuse-information), ayant une [description détaillée](00-glossaire.md#description-detaillee-image), la référence éventuelle à la [description détaillée](00-glossaire.md#description-detaillee-image) dans l’attribut WAI-ARIA `aria-label` et la [description détaillée](00-glossaire.md#description-detaillee-image) associée par l’attribut WAI-ARIA `aria-labelledby` ou `aria-describedby` sont-elles correctement restituées par les technologies d’assistance ?

##### Procédure de test

1. Retrouver dans le document les éléments `<svg>` porteurs d’information dont la description détaillée est fournie au moyen d’un attribut `aria-label`, `aria-labelledby` ou `aria-describedby` ;
2. Pour chaque élément `<svg>`, vérifier que le contenu de la description détaillée est correctement restitué par les technologies d’assistance ;
3. Si c’est le cas pour chaque élément `<svg>`, **le test est validé**.
#### Test 1.6.7

Chaque image bitmap (balise `<canvas>`), [porteuse d’information](00-glossaire.md#image-porteuse-information), qui nécessite une [description détaillée](00-glossaire.md#description-detaillee-image), vérifie-t-elle une de ces conditions ?

- Il existe un attribut WAI-ARIA `aria-label` contenant l’alternative textuelle et une référence à une [description détaillée](00-glossaire.md#description-detaillee-image) adjacente ;
- Il existe un attribut WAI-ARIA `aria-labelledby` associant un passage de texte faisant office d’alternative textuelle et un autre faisant office de [description détaillée](00-glossaire.md#description-detaillee-image) ;
- Il existe un contenu textuel entre `<canvas>` et `</canvas>` faisant référence à une [description détaillée](00-glossaire.md#description-detaillee-image) adjacente à l’image bitmap ;
- Il existe un contenu textuel entre `<canvas>` et `</canvas>` faisant office de [description détaillée](00-glossaire.md#description-detaillee-image) ;
- Il existe un [lien ou bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent) permettant d’accéder à la [description détaillée](00-glossaire.md#description-detaillee-image).

##### Procédure de test

1. Retrouver dans le document les éléments `<canvas>` porteurs d’information qui nécessitent une description détaillée ;
2. Pour chaque élément `<canvas>`, vérifier qu’il existe :
   - Soit un attribut WAI-ARIA aria-label contenant l’alternative textuelle et une référence à une description détaillée adjacente ;
   - Soit un attribut WAI-ARIA aria-labelledby associant un passage de texte faisant office d’alternative textuelle et un autre faisant office de description détaillée ;
   - Soit un contenu textuel entre `<canvas>` et `</canvas>` faisant référence à une description détaillée adjacente à l’image bitmap ;
   - Soit un contenu textuel entre `<canvas>` et `</canvas>` faisant office de description détaillée ;
   - Soit un lien ou un bouton adjacent permettant d’accéder à la description détaillée.
3. Si c’est le cas pour chaque élément `<canvas>`, **le test est validé**.
#### Test 1.6.8

Pour chaque image bitmap (balise `<canvas>`) [porteuse d’information](00-glossaire.md#image-porteuse-information), qui implémente une référence à une [description détaillée](00-glossaire.md#description-detaillee-image) adjacente, cette référence est-elle correctement restituée par les technologies d’assistance ?

##### Procédure de test

1. Retrouver dans le document les éléments `<canvas>` porteurs d’information dont la description détaillée est fournie au moyen d’un attribut `aria-label`, `aria-labelledby` ou `aria-describedby` ;
2. Pour chaque élément `<canvas>`, vérifier que le contenu de la description détaillée est correctement restitué par les technologies d’assistance ;
3. Si c’est le cas pour chaque élément `<canvas>`, **le test est validé**.
#### Test 1.6.9

Pour chaque image (balise `<img>`, `<input>` avec l’attribut `type="image"`, `<area>`, `<object>`, `<embed>`, `<svg>`, `<canvas>`, ou possédant un attribut WAI-ARIA `role="img"`) [porteuse d’information](00-glossaire.md#image-porteuse-information), qui est accompagnée d’une [description détaillée](00-glossaire.md#description-detaillee-image) et qui utilise un attribut WAI-ARIA `aria-describedby`, l’attribut WAI-ARIA `aria-describedby` associe-t-il la [description détaillée](00-glossaire.md#description-detaillee-image) ?

##### Procédure de test

1. Retrouver dans le document les images (éléments `<img>`, `<input>` avec l’attribut `type="image"`, `<area>`, `<object>`, `<embed>`, `<svg>`, `<canvas>` ou possédant un attribut WAI-ARIA `role="img"`) porteuses d’information dont la description détaillée utilise un attribut WAI-ARIA `aria-describedby` ;
2. Pour chaque image, vérifier que le contenu de la description détaillée est correctement restitué par les technologies d’assistance ;
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.6.10

Chaque balise possédant un attribut WAI-ARIA `role="img"` [porteuse d’information](00-glossaire.md#image-porteuse-information), qui nécessite une [description détaillée](00-glossaire.md#description-detaillee-image), vérifie-t-elle une de ces conditions ?

- Il existe un attribut WAI-ARIA `aria-label` contenant l’[alternative textuelle](00-glossaire.md#alternative-textuelle-image) et une référence à une [description détaillée](00-glossaire.md#description-detaillee-image) adjacente ;
- Il existe un attribut WAI-ARIA `aria-labelledby` associant un [passage de texte](00-glossaire.md#passage-texte-lie-par-aria-labelledby-ou-aria-describedby) faisant office d’[alternative textuelle](00-glossaire.md#alternative-textuelle-image) et un autre faisant office de [description détaillée](00-glossaire.md#description-detaillee-image) ;
- Il existe un attribut WAI-ARIA `aria-describedby` associant un [passage de texte](00-glossaire.md#passage-texte-lie-par-aria-labelledby-ou-aria-describedby) faisant office de [description détaillée](00-glossaire.md#description-detaillee-image) ;
- Il existe un [lien ou un bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent) permettant d’accéder à la [description détaillée](00-glossaire.md#description-detaillee-image).

##### Procédure de test

1. Retrouver dans le document les éléments pourvu d’un attribut WAI-ARIA `role="img"` porteurs d’information qui nécessitent une description détaillée ;
2. Pour chaque élément `role="img"`, vérifier qu’il existe :
   - Soit un attribut WAI-ARIA `aria-label` contenant l’alternative textuelle et une référence à une description détaillée adjacente ;
   - Soit un attribut WAI-ARIA `aria-labelledby` associant un passage de texte faisant office d’alternative textuelle et un autre faisant office de description détaillée ;
   - Soit un attribut WAI-ARIA `aria-describedby` associant un passage de texte faisant office de description détaillée ;
   - Soit un lien ou un bouton adjacent permettant d’accéder à la description détaillée.
3. Si c’est le cas pour chaque élément `role="img"`, **le test est validé**.
### Références WCAG

- 1.1.1 Non-text Content (A)

**Techniques :**

- G92
- G74
- G73
- H45
- ARIA6

---

<a id="critere-1-7"></a>

## Critère 1.7 — Pour chaque image porteuse d’information ayant une description détaillée, cette description est-elle pertinente ?

### Définitions

- [porteuse d’information](00-glossaire.md#image-porteuse-information)
- [description détaillée](00-glossaire.md#description-detaillee-image)

### Tests du critère

#### Test 1.7.1

Chaque image (balise `<img>`) [porteuse d’information](00-glossaire.md#image-porteuse-information), ayant une [description détaillée](00-glossaire.md#description-detaillee-image), vérifie-t-elle ces conditions ?

- La [description détaillée](00-glossaire.md#description-detaillee-image) via l’adresse référencée dans l’attribut `longdesc` est pertinente ;
- La [description détaillée](00-glossaire.md#description-detaillee-image) dans la page et signalée par l’[alternative textuelle](00-glossaire.md#alternative-textuelle-image) est pertinente ;
- La [description détaillée](00-glossaire.md#description-detaillee-image) via un [lien ou un bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent) est pertinente ;
- Le passage de texte associé via l’attribut WAI-ARIA `aria-describedby` est pertinent.

##### Procédure de test

1. Retrouver dans le document les images structurées au moyen d’un élément `<img>` qui possèdent une description détaillée ;
2. Pour chaque image, vérifier que la description détaillée est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.7.2

Chaque [bouton](00-glossaire.md#bouton-formulaire) de type image (balise `<input>` avec l’attribut `type="image"`) [porteur d’information](00-glossaire.md#image-porteuse-information), ayant une [description détaillée](00-glossaire.md#description-detaillee-image), vérifie-t-il ces conditions ?

- La [description détaillée](00-glossaire.md#description-detaillee-image) dans la page et signalée par l’[alternative textuelle](00-glossaire.md#alternative-textuelle-image) est pertinente ;
- La [description détaillée](00-glossaire.md#description-detaillee-image) via un [lien ou un bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent) est pertinente ;
- Le passage de texte associé via l’attribut WAI-ARIA `aria-describedby` est pertinent.

##### Procédure de test

1. Retrouver dans le document les éléments `<input>` pourvus de l’attribut `type="image"` qui possèdent une description détaillée ;
2. Pour chaque élément `<input>` pourvu de l’attribut `type="image"`, vérifier que la description détaillée est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.7.3

Chaque [image objet](00-glossaire.md#image-objet) (balise `<object>` avec l’attribut `type="image/…"`) [porteuse d’information](00-glossaire.md#image-porteuse-information), ayant une [description détaillée](00-glossaire.md#description-detaillee-image), vérifie-t-elle ces conditions ?

- La [description détaillée](00-glossaire.md#description-detaillee-image) dans la page et signalée par l’[alternative textuelle](00-glossaire.md#alternative-textuelle-image) est pertinente ;
- La [description détaillée](00-glossaire.md#description-detaillee-image) adjacente à l’[image objet](00-glossaire.md#image-objet) est pertinente ;
- La [description détaillée](00-glossaire.md#description-detaillee-image) via un [lien ou un bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent) est pertinente ;
- Le passage de texte associé via l’attribut WAI-ARIA `aria-describedby` est pertinent.

##### Procédure de test

1. Retrouver dans le document les éléments `<object>` pourvus de l’attribut `type="image/…"` qui possèdent une description détaillée ;
2. Pour chaque élément `<object>` pourvu de l’attribut `type="image/…"`, vérifier que la description détaillée est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.7.4

Chaque image embarquée (balise `<embed>` avec l’attribut `type="image/…"`) [porteuse d’information](00-glossaire.md#image-porteuse-information), ayant une [description détaillée](00-glossaire.md#description-detaillee-image), vérifie-t-elle ces conditions ?

- La [description détaillée](00-glossaire.md#description-detaillee-image) dans la page et signalée par l’[alternative textuelle](00-glossaire.md#alternative-textuelle-image) est pertinente ;
- La [description détaillée](00-glossaire.md#description-detaillee-image) adjacente à l’image embarquée est pertinente ;
- La [description détaillée](00-glossaire.md#description-detaillee-image) via un [lien ou un bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent) est pertinente ;
- Le passage de texte associé via l’attribut WAI-ARIA `aria-describedby` est pertinent.

##### Procédure de test

1. Retrouver dans le document les éléments `<embed>` pourvus de l’attribut `type="image/…"` qui possèdent une description détaillée ;
2. Pour chaque élément `<embed>` pourvu de l’attribut `type="image/…"`, vérifier que la description détaillée est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.7.5

Chaque image vectorielle (balise `<svg>`) [porteuse d’information](00-glossaire.md#image-porteuse-information), ayant une [description détaillée](00-glossaire.md#description-detaillee-image), vérifie-t-elle ces conditions ?

- La [description détaillée](00-glossaire.md#description-detaillee-image) dans la page et signalée par l’[alternative textuelle](00-glossaire.md#alternative-textuelle-image) est pertinente ;
- La [description détaillée](00-glossaire.md#description-detaillee-image) dans la page et signalée par le texte contenu dans la balise `<desc>` ou `<title>` est pertinente ;
- La [description détaillée](00-glossaire.md#description-detaillee-image) adjacente contenue dans la balise `<desc>` est pertinente ;
- La [description détaillée](00-glossaire.md#description-detaillee-image) via un [lien ou un bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent) est pertinente ;
- Le passage de texte associé via l’attribut WAI-ARIA `aria-describedby` est pertinent.

##### Procédure de test

1. Retrouver dans le document les éléments `<svg>` qui possèdent une description détaillée ;
2. Pour chaque élément `<svg>`, vérifier que la description détaillée est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.7.6

Chaque image bitmap (balise `<canvas>`) [porteuse d’information](00-glossaire.md#image-porteuse-information), ayant une [description détaillée](00-glossaire.md#description-detaillee-image), vérifie-t-elle ces conditions ?

- La [description détaillée](00-glossaire.md#description-detaillee-image) dans la page et signalée par l’[alternative textuelle](00-glossaire.md#alternative-textuelle-image) est pertinente ;
- La [description détaillée](00-glossaire.md#description-detaillee-image) dans la page et signalée par le texte contenu entre `<canvas>` et `</canvas>` est pertinente ;
- La [description détaillée](00-glossaire.md#description-detaillee-image) contenue entre `<canvas>` et `</canvas>` est pertinente ;
- La [description détaillée](00-glossaire.md#description-detaillee-image) adjacente à l’image bitmap est pertinente ;
- La [description détaillée](00-glossaire.md#description-detaillee-image) via un [lien ou un bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent) est pertinente ;
- Le passage de texte associé via l’attribut WAI-ARIA `aria-describedby` est pertinent.

##### Procédure de test

1. Retrouver dans le document les éléments `<canvas>` qui possèdent une description détaillée ;
2. Pour chaque élément `<canvas>`, vérifier que la description détaillée est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.
### Références WCAG

- 1.1.1 Non-text Content (A)

**Techniques :**

- G92
- F67

---

<a id="critere-1-8"></a>

## Critère 1.8 — Chaque image texte porteuse d’information, en l’absence d’un mécanisme de remplacement, doit si possible être remplacée par du texte stylé. Cette règle est-elle respectée (hors cas particuliers) ?

### Définitions

- [image texte](00-glossaire.md#image-texte)
- [porteuse d’information](00-glossaire.md#image-porteuse-information)
- [mécanisme de remplacement](00-glossaire.md#mecanisme-remplacement)
- [texte stylé](00-glossaire.md#texte-style)

### Cas particuliers

Pour ce critère, il existe une gestion de cas particulier lorsque le texte fait partie du logo, d’une dénomination commerciale, d’un [CAPTCHA](00-glossaire.md#captcha), d’une [image-test](00-glossaire.md#image-test) ou d’une image dont l’exactitude graphique serait considérée comme essentielle à la bonne transmission de l’information véhiculée par l’image. Dans ces situations, le critère est non applicable pour ces éléments.

### Note technique

Le texte dans les images vectorielles étant du texte réel, il n’est pas concerné par ce critère.

### Tests du critère

#### Test 1.8.1

Chaque [image texte](00-glossaire.md#image-texte) (balise `<img>` ou possédant un attribut WAI-ARIA `role="img"`) [porteuse d’information](00-glossaire.md#image-porteuse-information), en l’absence d’un [mécanisme de remplacement](00-glossaire.md#mecanisme-remplacement), doit si possible être remplacée par du [texte stylé](00-glossaire.md#texte-style). Cette règle est-elle respectée (hors cas particuliers) ?

##### Procédure de test

1. Retrouver dans le document les images texte structurées au moyen d’un élément `<img>` (ou d’un élément possédant l’attribut WAI-ARIA `role="img"`) ;
2. Pour chaque image, vérifier que :
   - Soit il existe un mécanisme de remplacement ;
   - Soit l’image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.8.2

Chaque bouton « [image texte](00-glossaire.md#image-texte) » (balise `<input>` avec l’attribut `type="image"`) [porteur d’information](00-glossaire.md#image-porteuse-information), en l’absence d’un [mécanisme de remplacement](00-glossaire.md#mecanisme-remplacement), doit si possible être remplacé par du [texte stylé](00-glossaire.md#texte-style). Cette règle est-elle respectée (hors cas particuliers) ?

##### Procédure de test

1. Retrouver dans le document les boutons “images texte” (élément `<input>` avec l’attribut `type="image"`) ;
2. Pour chaque image, vérifier que :
   - Soit il existe un mécanisme de remplacement ;
   - Soit l’image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.8.3

Chaque [image texte](00-glossaire.md#image-texte) objet (balise `<object>` avec l’attribut `type="image/…"`) [porteuse d’information](00-glossaire.md#image-porteuse-information), en l’absence d’un [mécanisme de remplacement](00-glossaire.md#mecanisme-remplacement), doit si possible être remplacée par du [texte stylé](00-glossaire.md#texte-style). Cette règle est-elle respectée (hors cas particuliers) ?

##### Procédure de test

1. Retrouver dans le document les images texte objet (élément `<object>` avec l’attribut `type="image/…"`) ;
2. Pour chaque image, vérifier que :
   - Soit il existe un mécanisme de remplacement ;
   - Soit l’image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.8.4

Chaque [image texte](00-glossaire.md#image-texte) embarquée (balise `<embed>` avec l’attribut `type="image/…"`) [porteuse d’information](00-glossaire.md#image-porteuse-information), en l’absence d’un [mécanisme de remplacement](00-glossaire.md#mecanisme-remplacement), doit si possible être remplacée par du [texte stylé](00-glossaire.md#texte-style). Cette règle est-elle respectée (hors cas particuliers) ?

##### Procédure de test

1. Retrouver dans le document les images texte embarquées (élément `<embed>` avec l’attribut `type="image/…"`) ;
2. Pour chaque image, vérifier que :
   - Soit il existe un mécanisme de remplacement ;
   - Soit l’image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.8.5

Chaque [image texte](00-glossaire.md#image-texte) bitmap (balise `<canvas>`) [porteuse d’information](00-glossaire.md#image-porteuse-information), en l’absence d’un [mécanisme de remplacement](00-glossaire.md#mecanisme-remplacement), doit si possible être remplacée par du [texte stylé](00-glossaire.md#texte-style). Cette règle est-elle respectée (hors cas particuliers) ?

##### Procédure de test

1. Retrouver dans le document les images texte bitmap (élément `<canvas>`) ;
2. Pour chaque image, vérifier que :
   - Soit il existe un mécanisme de remplacement ;
   - Soit l’image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.8.6

Chaque [image texte](00-glossaire.md#image-texte) SVG (balise `<svg>`) [porteuse d’information](00-glossaire.md#image-porteuse-information) et dont le texte n’est pas complètement structuré au moyen d’éléments `<text>`, en l’absence d’un [mécanisme de remplacement](00-glossaire.md#mecanisme-remplacement), doit si possible être remplacée par du [texte stylé](00-glossaire.md#texte-style). Cette règle est-elle respectée (hors cas particuliers) ?

##### Procédure de test

1. Retrouver dans le document les images texte vectorielle (élément `<svg>`) porteuse d’information et dont le texte n’est pas complètement structuré au moyen d’éléments `<text>` ;
2. Pour chaque image, vérifier que :
   - Soit il existe un mécanisme de remplacement ;
   - Soit l’image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.
3. Si c’est le cas pour chaque image, **le test est validé**.
### Références WCAG

- 1.4.5 Images of Text (AA)

**Techniques :**

- G136
- G140
- C22
- C30

---

<a id="critere-1-9"></a>

## Critère 1.9 — Chaque légende d’image est-elle, si nécessaire, correctement reliée à l’image correspondante ?

### Définitions

- [légende d’image](00-glossaire.md#legende-image)

### Note technique

L’implémentation d’un attribut WAI-ARIA `role="group"` ou `role="figure"` sur l’élément parent `<figure>` est destiné à pallier le manque de support actuel des éléments `<figure>` par les technologies d’assistance. L’utilisation d’un élément `<figcaption>` pour associer une [légende](00-glossaire.md#legende-image) à une image impose au minimum l’utilisation d’un attribut WAI-ARIA `aria-label` sur l’élément parent `<figure>` dont le contenu sera identique au contenu de l’élément `<figcaption>`. Pour s’assurer d’un support optimal, il peut également être fait une association explicite entre le contenu de l’[alternative textuelle](00-glossaire.md#alternative-textuelle-image) de l’image et le contenu de l’élément `<figcaption>`, par exemple :

`<img src="image.png" alt="Photo : soleil couchant" /><figcaption>Photo : crédit xxx</figcaption>`

Les attributs WAI-ARIA `aria-labelledby` et `aria-describedby` ne peuvent pas être utilisés actuellement par manque de support par les technologies d’assistance.

Note : les images légendées doivent par ailleurs respecter le critère 1.1 et le critère 1.3 relatifs aux images porteuses d’information.

### Tests du critère

#### Test 1.9.1

Chaque image pourvue d’une [légende](00-glossaire.md#legende-image) (balise `<img>`, `<input>` avec l’attribut `type="image"` ou possédant un attribut WAI-ARIA `role="img"` associée à une [légende](00-glossaire.md#legende-image) adjacente), vérifie-t-elle, si nécessaire, ces conditions ?

- L’image (balise `<img>`, `<input>` avec l’attribut `type="image"` ou possédant un attribut WAI-ARIA `role="img"`) et sa [légende](00-glossaire.md#legende-image) adjacente sont contenues dans une balise `<figure>` ;
- La balise `<figure>` possède un attribut WAI-ARIA `role="figure"` ou `role="group"` ;
- La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la [légende](00-glossaire.md#legende-image) ;
- La [légende](00-glossaire.md#legende-image) est contenue dans une balise `<figcaption>`.

##### Procédure de test

1. Retrouver dans le document les images pourvues d’une légende structurées au moyen d’élément `<img>`, d’un élément `<input>` avec l’attribut `type="image"` ou d’un élément possédant l’attribut WAI-ARIA `role="img"` ;
2. Pour chaque image, vérifier que :
   - L’image et sa légende sont contenues dans une balise `<figure>` ;
   - La balise `<figure>` possède une propriété WAI-ARIA `role="figure"` ou `role="group"` ;
   - La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la légende ;
   - La légende est contenue dans une balise `<figcaption>`.
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.9.2

Chaque [image objet](00-glossaire.md#image-objet) pourvue d’une [légende](00-glossaire.md#legende-image) (balise `<object>` avec l’attribut `type="image/…"` associée à une [légende](00-glossaire.md#legende-image) adjacente), vérifie-t-elle, si nécessaire, ces conditions ?

- L’[image objet](00-glossaire.md#image-objet) et sa [légende](00-glossaire.md#legende-image) adjacente sont contenues dans une balise `<figure>` ;
- La balise `<figure>` possède un attribut WAI-ARIA `role="figure"` ou `role="group"` ;
- La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la [légende](00-glossaire.md#legende-image) ;
- La [légende](00-glossaire.md#legende-image) est contenue dans une balise `<figcaption>`.

##### Procédure de test

1. Retrouver dans le document les images objet pourvues d’une légende (élément `<object>` avec l’attribut `type="image/…"`) ;
2. Pour chaque image, vérifier que :
   - L’image et sa légende sont contenues dans une balise `<figure>` ;
   - La balise `<figure>` possède une propriété WAI-ARIA `role="figure`" ou `role="group"` ;
   - La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la légende ;
   - La légende est contenue dans une balise `<figcaption>`.
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.9.3

Chaque image embarquée pourvue d’une [légende](00-glossaire.md#legende-image) (balise `<embed>` associée à une [légende](00-glossaire.md#legende-image) adjacente), vérifie-t-elle, si nécessaire, ces conditions ?

- L’image embarquée (balise `<embed>`) et sa [légende](00-glossaire.md#legende-image) adjacente sont contenues dans une balise `<figure>` ;
- La balise `<figure>` possède un attribut WAI-ARIA `role="figure"` ou `role="group"` ;
- La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la [légende](00-glossaire.md#legende-image) ;
- La [légende](00-glossaire.md#legende-image) est contenue dans une balise `<figcaption>`.

##### Procédure de test

1. Retrouver dans le document les images embarquées pourvues d’une légende (élément `<embed>` avec l’attribut `type="image/…"`) ;
2. Pour chaque image, vérifier que :
   - L’image et sa légende sont contenues dans une balise `<figure>` ;
   - La balise `<figure>` possède une propriété WAI-ARIA `role="figure"` ou `role="group"` ;
   - La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la légende ;
   - La légende est contenue dans une balise `<figcaption>`.
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.9.4

Chaque image vectorielle pourvue d’une [légende](00-glossaire.md#legende-image) (balise `<svg>` associée à une [légende](00-glossaire.md#legende-image) adjacente), vérifie-t-elle, si nécessaire, ces conditions ?

- L’image vectorielle (balise `<svg>`) et sa [légende](00-glossaire.md#legende-image) adjacente sont contenues dans une balise `<figure>` ;
- La balise `<figure>` possède un attribut WAI-ARIA `role="figure"` ou `role="group"` ;
- La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la [légende](00-glossaire.md#legende-image) ;
- La [légende](00-glossaire.md#legende-image) est contenue dans une balise `<figcaption>`.

##### Procédure de test

1. Retrouver dans le document les images vectorielles pourvues d’une légende (élément `<svg>`) ;
2. Pour chaque image, vérifier que :
   - L’image et sa légende sont contenues dans une balise `<figure>` ;
   - La balise `<figure>` possède une propriété WAI-ARIA `role="figure"` ou `role="group"` ;
   - La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la légende ;
   - La légende est contenue dans une balise `<figcaption>`.
3. Si c’est le cas pour chaque image, **le test est validé**.
#### Test 1.9.5

Chaque image bitmap pourvue d’une [légende](00-glossaire.md#legende-image) (balise `<canvas>` associée à une [légende](00-glossaire.md#legende-image) adjacente), vérifie-t-elle, si nécessaire, ces conditions ?

- L’image bitmap (balise `<canvas>`) et sa [légende](00-glossaire.md#legende-image) adjacente sont contenues dans une balise `<figure>` ;
- La balise `<figure>` possède un attribut WAI-ARIA `role="figure"` ou `role="group"` ;
- La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la [légende](00-glossaire.md#legende-image) ;
- La [légende](00-glossaire.md#legende-image) est contenue dans une balise `<figcaption>`.

##### Procédure de test

1. Retrouver dans le document les images bitmap (élément `<canvas>`) ;
2. Pour chaque image, vérifier que :
   - L’image et sa légende sont contenues dans une balise `<figure>` ;
   - La balise `<figure>` possède une propriété WAI-ARIA `role="figure"` ou `role="group"` ;
   - La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la légende ;
   - La légende est contenue dans une balise `<figcaption>`.
3. Si c’est le cas pour chaque image, **le test est validé**.
### Références WCAG

- 1.1.1 Non-text Content (A)
- 4.1.2 Name, Role, Value (A)

**Techniques :**

- G140
- ARIA4
- ARIA6

---

