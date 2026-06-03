# Thématique 12 — Navigation

## Table des matières

- [Critère 12.1 — Chaque ensemble de pages dispose-t-il de deux systèmes de navigation différents, au moins (hors cas particuliers) ?](#critere-12-1)
- [Critère 12.2 — Dans chaque ensemble de pages, le menu et les barres de navigation sont-ils toujours à la même place (hors cas particuliers) ?](#critere-12-2)
- [Critère 12.3 — La page « plan du site » est-elle pertinente ?](#critere-12-3)
- [Critère 12.4 — Dans chaque ensemble de pages, la page « plan du site » est-elle accessible à partir d’une fonctionnalité identique ?](#critere-12-4)
- [Critère 12.5 — Dans chaque ensemble de pages, le moteur de recherche est-il atteignable de manière identique ?](#critere-12-5)
- [Critère 12.6 — Les zones de regroupement de contenus présentes dans plusieurs pages web (zones d’en-tête, de navigation principale, de contenu principal, de pied de page et de moteur de recherche) peuvent-elles être atteintes ou évitées ?](#critere-12-6)
- [Critère 12.7 — Dans chaque page web, un lien d’évitement ou d’accès rapide à la zone de contenu principal est-il présent (hors cas particuliers) ?](#critere-12-7)
- [Critère 12.8 — Dans chaque page web, l’ordre de tabulation est-il cohérent ?](#critere-12-8)
- [Critère 12.9 — Dans chaque page web, la navigation ne doit pas contenir de piège au clavier. Cette règle est-elle respectée ?](#critere-12-9)
- [Critère 12.10 — Dans chaque page web, les raccourcis clavier n’utilisant qu’une seule touche (lettre minuscule ou majuscule, ponctuation, chiffre ou symbole) sont-ils contrôlables par l’utilisateur ?](#critere-12-10)
- [Critère 12.11 — Dans chaque page web, les contenus additionnels apparaissant au survol, à la prise de focus ou à l’activation d’un composant d’interface sont-ils si nécessaire atteignables au clavier ?](#critere-12-11)

---

<a id="critere-12-1"></a>

## Critère 12.1 — Chaque ensemble de pages dispose-t-il de deux systèmes de navigation différents, au moins (hors cas particuliers) ?

### Définitions

- [ensemble de pages](00-glossaire.md#ensemble-pages)
- [systèmes de navigation](00-glossaire.md#systeme-navigation)

### Cas particuliers

Il existe une gestion de cas particulier lorsque le site web est constitué d’une seule page ou d’un nombre très limité de pages (cf. note). Dans ce cas-là, le critère est non applicable.

Le critère est également non applicable pour les pages d’un ensemble de pages qui sont le résultat ou une partie d’un processus (un processus de paiement ou de prise de commande, par exemple).

Note : l’appréciation d’un nombre très limité de pages devrait être réservé à un site dont l’ensemble des pages sont atteignables depuis la page d’accueil.

### Tests du critère

#### Test 12.1.1

Chaque [ensemble de pages](00-glossaire.md#ensemble-pages) vérifie-t-il une de ces conditions (hors cas particuliers) ?

- Un [menu de navigation](00-glossaire.md#menu-et-barre-navigation) et un [plan du site](00-glossaire.md#page-plan-site) sont présents ;
- Un [menu de navigation](00-glossaire.md#menu-et-barre-navigation) et un [moteur de recherche](00-glossaire.md#moteur-recherche-interne-a-site-web) sont présents ;
- Un [moteur de recherche](00-glossaire.md#moteur-recherche-interne-a-site-web) et un [plan du site](00-glossaire.md#page-plan-site) sont présents.

##### Procédure de test

1. Pour chaque ensemble de pages du site, vérifier la présence :
   - Soit d’un menu de navigation et d’un plan du site ;
   - Soit d’un menu de navigation et d’un moteur de recherche ;
   - Soit d’un moteur de recherche et d’un plan du site.
2. Si c’est le cas pour chaque ensemble de pages du site, **le test est validé**.
### Références WCAG

- 2.4.5 Multiple Ways (AA)

**Techniques :**

- G63
- G64
- G161

---

<a id="critere-12-2"></a>

## Critère 12.2 — Dans chaque ensemble de pages, le menu et les barres de navigation sont-ils toujours à la même place (hors cas particuliers) ?

### Définitions

- [ensemble de pages](00-glossaire.md#ensemble-pages)
- [menu et les barres de navigation](00-glossaire.md#menu-et-barre-navigation)

### Cas particuliers

Il existe une gestion de cas particuliers lorsque :

- La page est la page d’accueil ;
- Le site web est constitué d’une seule page ;
- Le changement fait suite à une modification initiée par l’utilisateur.

Dans ces situations, le critère est non applicable.

### Tests du critère

#### Test 12.2.1

Dans chaque [ensemble de pages](00-glossaire.md#ensemble-pages), chaque page disposant d’un [menu et les barres de navigation](00-glossaire.md#menu-et-barre-navigation) vérifie-t-elle ces conditions (hors cas particuliers) ?

- Le [menu et les barres de navigation](00-glossaire.md#menu-et-barre-navigation) sont toujours à la même place dans la présentation ;
- Le [menu et les barres de navigation](00-glossaire.md#menu-et-barre-navigation) se présentent toujours dans le même ordre relatif dans le code source.

##### Procédure de test

1. Choisir une page de l’échantillon appartenant au même ensemble que la page en cours d’audit ;
2. Comparer visuellement les deux pages et vérifier que le menu ou les barres de navigation sont toujours à la même place dans la présentation ;
3. Comparer le code source (généré côté client) des deux pages et vérifier que le menu ou les barres de navigation se présentent toujours dans le même ordre relatif dans la structure ;
4. Si c’est le cas, **le test est validé**.

Note : le critère est non applicable dans les situations où :

- Les pages d'un ensemble de pages sont le résultat ou une partie d'un processus (un processus de paiement ou de prise de commande, par exemple) ;
- La page est la page d'accueil ;
- Le site web est constitué d'une seule page.
### Références WCAG

- 3.2.3 Consistent Navigation (AA)

**Techniques :**

- G61
- F66

---

<a id="critere-12-3"></a>

## Critère 12.3 — La page « plan du site » est-elle pertinente ?

### Définitions

- [page « plan du site »](00-glossaire.md#page-plan-site)

### Tests du critère

#### Test 12.3.1

La [page « plan du site »](00-glossaire.md#page-plan-site) est-elle représentative de l’architecture générale du site ?

##### Procédure de test

1. Vérifier que le plan du site est représentatif de l’architecture générale du site (cf. note) ;
2. Si c’est le cas, **le test est validé**.

Note : Un plan du site trop complexe ou trop profond n'est pas recommandé pour aider à la navigation. Il n'est pas obligatoire que toutes les pages soient présentes dans le plan du site si elles peuvent être atteintes, par exemple, à partir de la page d'accueil d'une rubrique ou d'un catalogue.
#### Test 12.3.2

Les liens du [plan du site](00-glossaire.md#page-plan-site) sont-ils fonctionnels ?

##### Procédure de test

1. Pour tous les liens du plan du site, vérifier qu’ils sont fonctionnels ;
2. Si c’est le cas, **le test est validé**.
#### Test 12.3.3

Les liens du [plan du site](00-glossaire.md#page-plan-site) renvoient-ils bien vers les pages indiquées par l’intitulé ?

##### Procédure de test

1. Pour tous les liens du plan du site, vérifier qu’ils sont à jour (ni obsolètes ni en erreur) et conduisent à la page indiquée par leur intitulé ;
2. Si c’est le cas, **le test est validé**.
### Références WCAG

- 2.4.5 Multiple Ways (AA)

**Techniques :**

- G63

---

<a id="critere-12-4"></a>

## Critère 12.4 — Dans chaque ensemble de pages, la page « plan du site » est-elle accessible à partir d’une fonctionnalité identique ?

### Définitions

- [ensemble de pages](00-glossaire.md#ensemble-pages)
- [page « plan du site »](00-glossaire.md#page-plan-site)

### Tests du critère

#### Test 12.4.1

Dans chaque [ensemble de pages](00-glossaire.md#ensemble-pages), la [page « plan du site »](00-glossaire.md#page-plan-site) est-elle accessible à partir d’une fonctionnalité identique ?

##### Procédure de test

1. Choisir une page de l’échantillon appartenant au même ensemble que la page en cours d’audit ;
2. Comparer le code source (généré côté client) des deux pages et vérifier que le moyen d’accès au plan du site est toujours le même (un lien ou un bouton, par exemple) ;
3. Si c’est le cas, **le test est validé**.
#### Test 12.4.2

Dans chaque [ensemble de pages](00-glossaire.md#ensemble-pages), la fonctionnalité vers la [page « plan du site »](00-glossaire.md#page-plan-site) est-elle située à la même place dans la présentation ?

##### Procédure de test

1. Choisir une page de l’échantillon appartenant au même ensemble que la page en cours d’audit ;
2. Comparer le code source (généré côté client) des deux pages et vérifier que le moyen d’accès au plan du site est toujours à la même place dans la structure (par rapport à l’ordre relatif des éléments de la page, par exemple il est toujours en haut de page) ;
3. Si c’est le cas, **le test est validé**.
#### Test 12.4.3

Dans chaque [ensemble de pages](00-glossaire.md#ensemble-pages), la fonctionnalité vers la [page « plan du site »](00-glossaire.md#page-plan-site) se présente-t-elle toujours dans le même ordre relatif dans le code source ?

##### Procédure de test

1. Choisir une page de l’échantillon appartenant au même ensemble que la page en cours d’audit ;
2. Comparer visuellement les deux pages et vérifier que le moyen d’accès au plan du site est toujours à la même place dans la présentation ;
3. Si c’est le cas, **le test est validé**.
### Références WCAG

- 2.4.5 Multiple Ways (AA)
- 3.2.3 Consistent Navigation (AA)

**Techniques :**

- G61
- G63

---

<a id="critere-12-5"></a>

## Critère 12.5 — Dans chaque ensemble de pages, le moteur de recherche est-il atteignable de manière identique ?

### Définitions

- [ensemble de pages](00-glossaire.md#ensemble-pages)
- [moteur de recherche](00-glossaire.md#moteur-recherche-interne-a-site-web)

### Tests du critère

#### Test 12.5.1

Dans chaque [ensemble de pages](00-glossaire.md#ensemble-pages), le [moteur de recherche](00-glossaire.md#moteur-recherche-interne-a-site-web) est-il accessible à partir d’une fonctionnalité identique ?

##### Procédure de test

1. Choisir une page de l’échantillon appartenant au même ensemble que la page en cours d’audit ;
2. Comparer le code source (généré côté client) des deux pages et vérifier que le moyen d’accès au moteur de recherche est toujours le même (un champ de formulaire, par exemple) ;
3. Si c’est le cas, **le test est validé**.
#### Test 12.5.2

Dans chaque [ensemble de pages](00-glossaire.md#ensemble-pages), la fonctionnalité vers le [moteur de recherche](00-glossaire.md#moteur-recherche-interne-a-site-web) est-elle située à la même place dans la présentation ?

##### Procédure de test

1. Choisir une page de l’échantillon appartenant au même ensemble que la page en cours d’audit ;
2. Comparer visuellement les deux pages et vérifier que le moyen d’accès au moteur de recherche est toujours à la même place dans la présentation ;
3. Si c’est le cas, **le test est validé**.
#### Test 12.5.3

Dans chaque [ensemble de pages](00-glossaire.md#ensemble-pages), la fonctionnalité vers le [moteur de recherche](00-glossaire.md#moteur-recherche-interne-a-site-web) se présente-t-elle toujours dans le même ordre relatif dans le code source ?

##### Procédure de test

1. Choisir une page de l’échantillon appartenant au même ensemble que la page en cours d’audit ;
2. Comparer le code source (généré côté client) des deux pages et vérifier que le moyen d’accès au moteur de recherche est toujours à la même place dans la structure (par rapport à l’ordre relatif des éléments de la page, par exemple il est toujours en haut de page) ;
3. Si c’est le cas, **le test est validé**.
### Références WCAG

- 3.2.3 Consistent Navigation (AA)

**Techniques :**

- G61
- F66

---

<a id="critere-12-6"></a>

## Critère 12.6 — Les zones de regroupement de contenus présentes dans plusieurs pages web (zones d’en-tête, de navigation principale, de contenu principal, de pied de page et de moteur de recherche) peuvent-elles être atteintes ou évitées ?

### Définitions

- [en-tête](00-glossaire.md#zone-en-tete)
- [navigation principale](00-glossaire.md#menu-et-barre-navigation)
- [contenu principal](00-glossaire.md#zone-contenu-principal)
- [pied de page](00-glossaire.md#zone-pied-page)
- [moteur de recherche](00-glossaire.md#moteur-recherche-interne-a-site-web)

### Tests du critère

#### Test 12.6.1

Dans chaque page web où elles sont présentes, la zone d’[en-tête](00-glossaire.md#zone-en-tete), de [navigation principale](00-glossaire.md#menu-et-barre-navigation), de [contenu principal](00-glossaire.md#zone-contenu-principal), de [pied de page](00-glossaire.md#zone-pied-page) et de [moteur de recherche](00-glossaire.md#moteur-recherche-interne-a-site-web) respectent-elles au moins une de ces conditions ?

- La zone possède un rôle WAI-ARIA de type [landmark](00-glossaire.md#landmarks) correspondant à sa nature ;
- La zone possède un titre dont le contenu permet de comprendre la nature du contenu de la zone ;
- La zone peut être masquée par le biais d’un bouton précédent directement la zone dans l’ordre du code source ;
- La zone peut être évitée par le biais d’un [lien d’évitement](00-glossaire.md#liens-evitement-ou-acces-rapide) précédent directement la zone dans l’ordre du code source ;
- La zone peut être atteinte par le biais d’un [lien d’accès rapide](00-glossaire.md#liens-evitement-ou-acces-rapide) visible ou, à défaut, visible à la prise de focus.

##### Procédure de test

1. Retrouver dans le document les zones de regroupement de contenus (zones d’en-tête, de navigation principale, de contenu principal, de pied de page et de moteur de recherche) ;
2. Pour chaque zone, vérifier que la zone :
   - Soit possède un rôle WAI-ARIA de type landmark correspondant à sa nature ;
   - Soit possède un titre de hiérarchie dont le contenu permet de comprendre la nature du contenu de la zone ;
   - Soit peut être masquée au moyen d’un bouton précédant directement la zone dans l’ordre du code source ;
   - Soit peut être évitée au moyen d’un lien d’évitement précédant directement la zone dans l’ordre du code source ;
   - Soit peut être atteinte au moyen d’un lien d’accès rapide soit visible par défaut, soit visible à la prise de focus lors d’une tabulation.
3. Si c’est le cas pour chaque zone de regroupement de contenus, **le test est validé**.
### Références WCAG

- 1.3.1 Info and Relationships (A)
- 2.4.1 Bypass Blocks (A)
- 4.1.2 Name, Role, Value (A)

**Techniques :**

- H69
- G115
- ARIA4
- ARIA11

---

<a id="critere-12-7"></a>

## Critère 12.7 — Dans chaque page web, un lien d’évitement ou d’accès rapide à la zone de contenu principal est-il présent (hors cas particuliers) ?

### Définitions

- [lien d’évitement ou d’accès rapide](00-glossaire.md#liens-evitement-ou-acces-rapide)
- [zone de contenu principal](00-glossaire.md#zone-contenu-principal)

### Cas particuliers

Il existe une gestion de cas particuliers lorsque le site web est constitué d’une seule page.

Dans ce cas de figure, l’obligation de la présence d’un lien d’accès rapide est liée au contexte de la page : présence ou absence de navigation ou de contenus additionnels, par exemple. Le critère peut être considéré comme non applicable lorsqu’il est avéré qu’un lien d’accès rapide est inutile.

### Tests du critère

#### Test 12.7.1

Dans chaque page web, un lien permet-il d’éviter la [zone de contenu principal](00-glossaire.md#zone-contenu-principal) ou d’y accéder (hors cas particuliers) ?

##### Procédure de test

1. Retrouver dans le document la zone de contenu principal (indiquée par l’élément main visible) ;
2. Vérifier que la zone :
   - Soit peut être évitée au moyen d’un lien d’évitement précédant directement la zone dans l’ordre du code source ;
   - Soit peut être atteinte au moyen d’un lien d’accès rapide visible à la prise de focus lors d’une tabulation.
3. Si c’est le cas, **le test est validé**.
#### Test 12.7.2

Dans chaque ensemble de pages, le [lien d’évitement ou d’accès rapide](00-glossaire.md#liens-evitement-ou-acces-rapide) à la [zone de contenu principal](00-glossaire.md#zone-contenu-principal) vérifie-t-il ces conditions (hors cas particuliers) ?

- Le lien est situé à la même place dans la présentation ;
- Le lien se présente toujours dans le même ordre relatif dans le code source ;
- Le lien est visible ou, à défaut, visible à la prise de focus ;
- Le lien est fonctionnel.

##### Procédure de test

1. Retrouver dans le document la zone de contenu principal (indiquée par l’élément main visible) ;
2. Vérifier que le lien d’évitement ou d’accès rapide à la zone est :
   - Situé à la même place dans la présentation ;
   - Présent toujours dans le même ordre relatif dans le code source (généré côté client) ;
   - Visible à la prise de focus lors d’une tabulation ;
   - Fonctionnel.
3. Si c’est le cas, **le test est validé**.

Note : lorsque le site web est constitué d'une seule page, l'obligation de la présence d'un lien d'accès rapide est liée au contexte de la page (présence ou absence de navigation ou de contenus additionnels, par exemple). Le critère peut être considéré comme non applicable lorsqu'il est avéré qu'un lien d'accès rapide est inutile.
### Références WCAG

- 2.4.1 Bypass Blocks (A)
- 2.4.3 Focus Order (A)
- 3.2.3 Consistent Navigation (AA)

**Techniques :**

- G1
- G59
- G123
- G124
- SCR28
- F66

---

<a id="critere-12-8"></a>

## Critère 12.8 — Dans chaque page web, l’ordre de tabulation est-il cohérent ?

### Définitions

- [ordre de tabulation](00-glossaire.md#ordre-tabulation)
- [cohérent](00-glossaire.md#comprehensible-ordre-lecture)

### Tests du critère

#### Test 12.8.1

Dans chaque page web, l’[ordre de tabulation](00-glossaire.md#ordre-tabulation) dans le contenu est-il [cohérent](00-glossaire.md#comprehensible-ordre-lecture) ?

##### Procédure de test

1. Parcourir dans le document l’ensemble des contenus au moyen de la touche de tabulation vers l’avant (touche Tab) et vers l’arrière (touches Maj+Tab) ;
2. Vérifier que l’ordre de déplacement du focus reste cohérent relativement au contenu considéré (par exemple, l’ordre de tabulation dans une fenêtre modale ne doit considérer que les éléments d’interface présents au sein de cette fenêtre) ;
3. Si c’est le cas, **le test est validé**.

Note : il n'est pas obligatoire que la tabulation suive l'ordre de lecture naturel (de gauche à droite et de haut en bas par exemple) tant que les éléments sont accessibles dans un ordre cohérent.
#### Test 12.8.2

Pour chaque [script](00-glossaire.md#script) qui met à jour ou insère un contenu, l’[ordre de tabulation](00-glossaire.md#ordre-tabulation) reste-t-il [cohérent](00-glossaire.md#comprehensible-ordre-lecture) ?

##### Procédure de test

1. Retrouver dans le document l’ensemble des contenus insérés au moyen d’un script (affichage d’éléments masqués, mise jour de contenu via AJAX par exemple) ;
2. Positionner la tabulation sur l’élément déclencheur et l’activer ;
3. Après l’affichage du contenu mis à jour, vérifier que la tabulation reste cohérente (repositionnement correct du focus) ;
4. Si c’est le cas, **le test est validé**.
### Références WCAG

- 2.4.3 Focus Order (A)

**Techniques :**

- G59
- H4
- F44
- F85
- SCR26
- SCR27
- SCR37
- C27

---

<a id="critere-12-9"></a>

## Critère 12.9 — Dans chaque page web, la navigation ne doit pas contenir de piège au clavier. Cette règle est-elle respectée ?

### Tests du critère

#### Test 12.9.1

Dans chaque page web, chaque [élément recevant le focus](00-glossaire.md#prise-focus) vérifie-t-il une de ces conditions ?

- Il est possible d’atteindre l’élément suivant ou précédent pouvant recevoir le focus avec la touche de tabulation ;
- L’utilisateur est informé d’un mécanisme fonctionnel permettant d’atteindre au clavier l’élément suivant ou précédent pouvant recevoir le focus.

##### Procédure de test

1. Retrouver dans le document l’ensemble des éléments d’interface susceptibles de recevoir le focus (au moyen de la tabulation ou au moyen d’un script) ;
2. Pour chaque élément d’interface, vérifier que l’utilisateur peut atteindre l’élément suivant ou précédent pouvant recevoir le focus :
   - Soit au moyen de la touche de tabulation (Tab ou Maj+Tab) ;
   - Soit au moyen d’une autre interaction clavier dont l’utilisateur est informé (par exemple, les flèches de direction).
3. Si c’est le cas pour chaque élément d’interface, **le test est validé**.

Note : certains éléments d'interface complexes, comme un groupe de boutons radio, une liste de sélection et tous les composants développés avec WAI-ARIA font appel à des navigations optimisées qui utilisent généralement les flèches de direction pour passer d'une partie du composant à l'autre. Par exemple, dans un groupe de boutons radio les options sont navigables avec les flèches de direction. De même dans un système d'onglets l'utilisateur active les onglets avec les flèches de direction. Le test sur le piège au clavier se limite alors à vérifier que le composant est atteint avec la tabulation et qu'il est possible de passer au composant suivant ou revenir au composant précédent.
### Références WCAG

- 2.1.1 Keyboard (A)
- 2.1.2 No Keyboard Trap (A)

**Techniques :**

- G21
- H91
- F10

---

<a id="critere-12-10"></a>

## Critère 12.10 — Dans chaque page web, les raccourcis clavier n’utilisant qu’une seule touche (lettre minuscule ou majuscule, ponctuation, chiffre ou symbole) sont-ils contrôlables par l’utilisateur ?

### Définitions

- [raccourcis clavier](00-glossaire.md#raccourci-clavier)

### Tests du critère

#### Test 12.10.1

Dans chaque page web, chaque [raccourci clavier](00-glossaire.md#raccourci-clavier) n’utilisant qu’une seule touche (lettre minuscule ou majuscule, ponctuation, chiffre ou symbole) vérifie-t-il l’une de ces conditions ?

- Un mécanisme est disponible pour désactiver le [raccourci clavier](00-glossaire.md#raccourci-clavier) ;
- Un mécanisme est disponible pour configurer la touche de [raccourci clavier](00-glossaire.md#raccourci-clavier) au moyen des touches de modification (Ctrl, Alt, Maj, etc.) ;
- Dans le cas d’un [composant d’interface](00-glossaire.md#composant-interface) utilisateur, le [raccourci clavier](00-glossaire.md#raccourci-clavier) qui lui est associé ne peut être activé que si le focus clavier est sur ce composant.

##### Procédure de test

1. Retrouver dans le document l’ensemble des raccourcis clavier proposés à l’utilisateur ;
2. Pour chaque raccourci clavier, vérifier que :
   - Soit un mécanisme est disponible pour désactiver le raccourci clavier ;
   - Soit un mécanisme est disponible pour configurer la touche de raccourci clavier au moyen des touches de modification (Ctrl, Alt, Maj, etc.) ;
   - Soit, dans le cas d’un composant d’interface utilisateur, le raccourci clavier qui lui est associé ne peut être activé que si le focus clavier est sur ce composant.
3. Si c’est le cas pour chaque raccourci clavier, **le test est validé**.
### Références WCAG

- 2.1.4 Character Key Shortcuts (A)

**Techniques :**

- F99
- G217

---

<a id="critere-12-11"></a>

## Critère 12.11 — Dans chaque page web, les contenus additionnels apparaissant au survol, à la prise de focus ou à l’activation d’un composant d’interface sont-ils si nécessaire atteignables au clavier ?

### Définitions

- [composant d’interface](00-glossaire.md#composant-interface)

### Note technique

Ce critère adresse les situations où un contenu additionnel contient des [composants d’interface](00-glossaire.md#composant-interface) avec lesquels il doit être possible d’interagir au clavier. Par exemple, une infobulle personnalisée qui propose un lien dans son contenu.

### Tests du critère

#### Test 12.11.1

Dans chaque page web, les contenus additionnels apparaissant au survol, à la prise de focus ou à l’activation d’un [composant d’interface](00-glossaire.md#composant-interface) sont-ils si nécessaire atteignables au clavier ?

##### Procédure de test

1. Retrouver dans le document l’ensemble des contenus additionnels apparaissant au survol, à la prise de focus ou à l’activation d’un composant d’interface ;
2. Pour chaque contenu additionnel, s’il contient des composants d’interface avec lesquels l’utilisateur peut interagir au clavier (par exemple, une infobulle personnalisée qui propose un lien dans son contenu), vérifier que ces composants d’interface sont atteignables au clavier ;
3. Si c’est le cas pour chaque contenu additionnel, **le test est validé**.
### Références WCAG

- 2.1.1 Keyboard (A)

---

