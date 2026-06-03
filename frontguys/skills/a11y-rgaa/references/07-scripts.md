# Thématique 7 — Scripts

## Table des matières

- [Critère 7.1 — Chaque script est-il, si nécessaire, compatible avec les technologies d’assistance ?](#critere-7-1)
- [Critère 7.2 — Pour chaque script ayant une alternative, cette alternative est-elle pertinente ?](#critere-7-2)
- [Critère 7.3 — Chaque script est-il contrôlable par le clavier et par tout dispositif de pointage (hors cas particuliers) ?](#critere-7-3)
- [Critère 7.4 — Pour chaque script qui initie un changement de contexte, l’utilisateur est-il averti ou en a-t-il le contrôle ?](#critere-7-4)
- [Critère 7.5 — Dans chaque page web, les messages de statut sont-ils correctement restitués par les technologies d’assistance ?](#critere-7-5)

---

<a id="critere-7-1"></a>

## Critère 7.1 — Chaque script est-il, si nécessaire, compatible avec les technologies d’assistance ?

### Définitions

- [script](00-glossaire.md#script)
- [compatible avec les technologies d’assistance](00-glossaire.md#compatible-avec-technologies-assistance)

### Cas particuliers

Il existe une gestion de cas particuliers pour le test 7.1.3 lorsque :

- La ponctuation et les lettres majuscules sont présentes dans le texte de l’intitulé visible : elles peuvent être ignorées dans le nom accessible sans porter à conséquence ;
- Le texte de l’intitulé visible sert de symbole : le texte ne doit pas être interprété littéralement au niveau du nom accessible. Le nom doit exprimer la fonction véhiculée par le symbole (par exemple, “B” au niveau d’un éditeur de texte aura pour nom accessible “Mettre en gras”, le signe “>” en fonction du contexte signifiera “Suivant” ou “Lancer la vidéo”). Le cas des symboles mathématiques fait cependant exception (voir la note ci-dessous).

Note : si l’étiquette visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir d’étiquette au nom accessible (ex. : “A>B”). Il est laissé à l’utilisateur le soin d’opérer la correspondance entre l’expression et ce qu’il doit épeler compte tenu de la connaissance qu’il a du fonctionnement de son logiciel de saisie vocale (“A plus grand que B” ou “A supérieur à B”).

### Note technique

Le critère 7.1 implémente la notion de « compatible avec les technologies d’assistance » telle que définie par les WCAG, ainsi que le recours à WAI-ARIA pour rendre un composant ou une fonctionnalité accessible. Le bon usage de WAI-ARIA est vérifié via les tests 7.1.1, 7.1.2, 7.1.3.

Note importante : dans un environnement HTML5, beaucoup de composants peuvent nécessiter JavaScript pour fonctionner ; en conséquence la fourniture d’une alternative à un composant JavaScript qui ne pourrait pas être rendu accessible devra bénéficier d’une méthode spécifique au composant en cause, permettant de le remplacer par une alternative accessible (et de le réactiver). Cela signifie que la désactivation de JavaScript pour l’ensemble de la page ne sera pas acceptée comme une méthode valable, à moins qu’elle ne remette pas en cause l’utilisation des autres composants.

### Tests du critère

#### Test 7.1.1

Chaque [script](00-glossaire.md#script) qui génère ou contrôle un [composant d’interface](00-glossaire.md#composant-interface) vérifie-t-il, si nécessaire, une de ces conditions ?

- Le [nom, le rôle, la valeur, le paramétrage et les changements d’états](00-glossaire.md#le-nom-role-valeur-parametrage-et-changements-etats) sont accessibles aux technologies d’assistance via une API d’accessibilité ;
- Un [composant d’interface](00-glossaire.md#composant-interface) accessible permettant d’accéder aux mêmes fonctionnalités est présent dans la page ;
- Une [alternative](00-glossaire.md#alternative-a-script) accessible permet d’accéder aux mêmes fonctionnalités.

##### Procédure de test

1. Retrouver dans le document tous les composants d’interface générés ou contrôlés au moyen de JavaScript ;
2. Vérifier que :
   - Le composant possède un rôle cohérent avec son usage (généralement un bouton ou un lien) ;
   - Le composant possède un nom explicite ;
   - Le nom du composant est cohérent avec l’état de la fonctionnalité ou des contenus contrôlés (par exemple pour une fonctionnalité permettant d’afficher ou de masquer une zone de contenu).
3. Sinon, vérifier la présence d’un composant d’interface accessible permettant d’accéder aux mêmes fonctionnalités ;
4. Sinon, vérifier la présence d’une alternative accessible permettant d’accéder aux mêmes fonctionnalités.
5. Si c’est le cas, **le test est validé**.
#### Test 7.1.2

Chaque [script](00-glossaire.md#script) qui génère ou contrôle un [composant d’interface](00-glossaire.md#composant-interface) respecte-t-il une de ces conditions ?

- Le [composant d’interface](00-glossaire.md#composant-interface) est [correctement restitué](00-glossaire.md#correctement-restitue-par-technologies-assistance) par les technologies d’assistance ;
- Une [alternative](00-glossaire.md#alternative-a-script) accessible permet d’accéder aux mêmes fonctionnalités.

##### Procédure de test

1. Pour chacun des composants d’interface ayant validé le test 7.1.1, vérifier que le composant d’interface est correctement restitué par les technologies d’assistance ;
2. Sinon, vérifier qu’une alternative accessible au composant d’interface permet d’accéder aux mêmes fonctionnalités ;
3. Si c’est le cas, **le test est validé**.
#### Test 7.1.3

Chaque [script](00-glossaire.md#script) qui génère ou contrôle un [composant d’interface](00-glossaire.md#composant-interface) vérifie-t-il ces conditions (hors cas particuliers) ?

- Le composant possède un nom pertinent ;
- Le nom accessible du composant contient au moins l’[intitulé visible](00-glossaire.md#intitule-visible) ;
- Le composant possède un rôle pertinent.

##### Procédure de test

1. Pour chacun des composants d’interface ayant validé le test 7.1.1, vérifier que le composant d’interface possède :
   - Un nom pertinent (intitulé visible) ;
   - Un rôle pertinent.
2. Si le composant d’interface possède un nom accessible, vérifier que ce nom est pertinent et contient au moins l’intitulé visible.
3. Si c’est le cas, **le test est validé**.
### Références WCAG

- 2.5.3 Label in Name (A)
- 4.1.2 Name, Role, Value (A)

**Techniques :**

- G10
- G135
- G136
- F15
- F19
- F20
- F42
- F59
- F79
- ARIA4
- ARIA5
- ARIA18
- ARIA19
- SCR21

---

<a id="critere-7-2"></a>

## Critère 7.2 — Pour chaque script ayant une alternative, cette alternative est-elle pertinente ?

### Définitions

- [script](00-glossaire.md#script)
- [alternative](00-glossaire.md#alternative-a-script)

### Tests du critère

#### Test 7.2.1

Chaque [script](00-glossaire.md#script) débutant par la balise `<script>` et ayant une [alternative](00-glossaire.md#alternative-a-script) vérifie-t-il une de ces conditions ?

- L’[alternative](00-glossaire.md#alternative-a-script) entre `<noscript>` et `</noscript>` permet d’accéder à des contenus et des fonctionnalités similaires ;
- La page affichée, lorsque JavaScript est désactivé, permet d’accéder à des contenus et des fonctionnalités similaires ;
- La page alternative permet d’accéder à des contenus et des fonctionnalités similaires ;
- Le langage de script côté serveur permet d’accéder à des contenus et des fonctionnalités similaires ;
- L’alternative présente dans la page permet d’accéder à des contenus et des fonctionnalités similaires.

##### Procédure de test

1. Retrouver les alternatives aux fonctionnalités JavaScript :
2. Chercher dans la page, les alternatives à un composant ou une fonctionnalité JavaScript mises à disposition.
3. Désactiver JavaScript dans le document et retrouver les alternatives proposées.
4. Pour chacune des alternatives proposées, vérifier qu’elle permet d’accéder aux mêmes contenus et à des fonctionnalités similaires.
5. Si c’est le cas, **le test est validé**.
#### Test 7.2.2

Chaque élément non textuel mis à jour par un [script](00-glossaire.md#script) (dans la page, ou dans un [cadre](00-glossaire.md#cadre)) et ayant une [alternative](00-glossaire.md#alternative-a-script) vérifie-t-il ces conditions ?

- L’alternative de l’élément non textuel est mise à jour ;
- L’alternative mise à jour est pertinente.

##### Procédure de test

1. Retrouver dans le document tous les éléments non textuels mis à jour par une fonctionnalité JavaScript.
2. Si l'élément non textuel a une alternative, vérifier que :
   - L'alternative est mise à jour lorsque le contenu non textuel est mis à jour ;
   - L'alternative mise à jour est pertinente.
3. Si c'est le cas, **le test est validé**.
### Références WCAG

- 1.1.1 Non-text Content (A)
- 4.1.2 Name, Role, Value (A)

**Techniques :**

- G136
- F19
- F20

---

<a id="critere-7-3"></a>

## Critère 7.3 — Chaque script est-il contrôlable par le clavier et par tout dispositif de pointage (hors cas particuliers) ?

### Définitions

- [script](00-glossaire.md#script)
- [contrôlable par le clavier et par tout dispositif de pointage](00-glossaire.md#accessible-et-activable-par-clavier-et-tout-dispositif-pointage)

### Cas particuliers

Il existe une gestion de cas particuliers lorsque la fonctionnalité dépend de l’utilisation d’un gestionnaire d’événement sans équivalent universel ; par exemple, une application de dessin à main levée ne pourra pas être rendue contrôlable au clavier. Dans ces situations, le critère est non applicable.

### Tests du critère

#### Test 7.3.1

Chaque élément possédant un gestionnaire d’événement contrôlé par un script vérifie-t-il une de ces conditions (hors cas particuliers) ?

- L’élément est [accessible par le clavier et tout dispositif de pointage](00-glossaire.md#accessible-et-activable-par-clavier-et-tout-dispositif-pointage) ;
- Un élément [accessible par le clavier et tout dispositif de pointage](00-glossaire.md#accessible-et-activable-par-clavier-et-tout-dispositif-pointage) permettant de réaliser la même action est présent dans la page.

##### Procédure de test

1. Retrouver dans le document, tous les éléments sur lesquels est implémenté un gestionnaire d’événements JavaScript (par exemple click, focus, mouseover, blur, keydown, touch, …).
2. Vérifier que l’élément est accessible au moyen du clavier :
   - Il est atteignable avec la touche de tabulation (tab) ;
   - Si l’élément gère une action simple, il est activable au clavier avec la touche entrée (Entrée) ;
   - Si l’élément gère une action complexe, il est utilisable avec le clavier (généralement avec les touches de direction).
3. Sinon, vérifier qu’un élément accessible par le clavier permettant de réaliser la même action est présent dans la page.
4. Vérifier que l’élément est accessible par tout dispositif de pointage (souris, toucher, stylet, …).
5. Sinon, vérifier qu’un élément accessible au moyen d’un dispositif de pointage et permettant de réaliser la même action est présent dans la page.
6. Si c’est le cas, **le test est validé**.
#### Test 7.3.2

Un [script](00-glossaire.md#script) ne doit pas supprimer le focus d’un élément qui le reçoit. Cette règle est-elle respectée (hors cas particuliers) ?

##### Procédure de test

1. Activer, l’un après l’autre, tous les éléments capables de recevoir le focus.
2. Vérifier que le focus n’est pas supprimé via une fonctionnalité JavaScript.
3. Si c’est le cas, **le test est validé**.
### Références WCAG

- 1.3.1 Info and Relationships (A)
- 2.1.1 Keyboard (A)
- 2.4.7 Focus Visible (AA)

**Techniques :**

- G90
- G202
- F42
- F54
- F55
- SCR2
- SCR20
- SCR29
- SCR35

---

<a id="critere-7-4"></a>

## Critère 7.4 — Pour chaque script qui initie un changement de contexte, l’utilisateur est-il averti ou en a-t-il le contrôle ?

### Définitions

- [script](00-glossaire.md#script)
- [changement de contexte](00-glossaire.md#changement-contexte)

### Tests du critère

#### Test 7.4.1

Chaque [script](00-glossaire.md#script) qui initie un [changement de contexte](00-glossaire.md#changement-contexte) vérifie-t-il une de ces conditions ?

- L’utilisateur est averti par un texte de l’action du script et du type de changement avant son déclenchement ;
- Le changement de contexte est initié par un bouton (input de type `submit`, `button` ou `image` ou balise `<button>`) explicite ;
- Le changement de contexte est initié par un lien explicite.

##### Procédure de test

1. Retrouver dans le document tous les événements JavaScript qui initient un changement de contexte, par exemple :
   - Une mise à jour dynamique de champs de formulaire ;
   - L’ouverture d’une nouvelle page à l’activation d’une option d’une liste de sélection (élément `<select>`) ;
   - La mise à jour, via un procédé AJAX d’une partie essentielle de la page ;
   - Le lancement automatique d’un lecteur vidéo suite à la sélection d’une playlist ;
   - La manipulation du focus ayant pour résultat de modifier la position courante de l’utilisateur dans la page.
2. Vérifier que :
   - L’utilisateur est averti par un message de l’action du script et du type de changement avant son déclenchement ;
   - Ou bien le changement de contexte est initié par un bouton (input de type submit, button ou image ou la balise button) explicite ;
   - Ou bien le changement de contexte est initié par un lien explicite.
3. Si c’est le cas, **le test est validé**.
### Références WCAG

- 3.2.1 On Focus (A)
- 3.2.2 On Input (A)

**Techniques :**

- G13
- G76
- G80
- G107
- H32
- H84
- F9
- F22
- F36
- F37
- F41
- SCR19

---

<a id="critere-7-5"></a>

## Critère 7.5 — Dans chaque page web, les messages de statut sont-ils correctement restitués par les technologies d’assistance ?

### Définitions

- [messages de statut](00-glossaire.md#message-statut)

### Note technique

Les rôles WAI-ARIA `log`, `status` et `alert` ont implicitement une valeur d’attribut WAI-ARIA `aria-live` et `aria-atomic`. On pourra donc considérer (conformément à la spécification WAI-ARIA 1.1) que :

- Un attribut WAI-ARIA `aria-live="polite"` associé à un message de statut peut valoir pour un rôle WAI-ARIA `log` ;
- Un attribut WAI-ARIA `aria-live="polite"` et un attribut WAI-ARIA `aria-atomic="true"` associés à un message de statut peuvent valoir pour un rôle WAI-ARIA `status` ;
- Un attribut WAI-ARIA `aria-live="assertive"` et un attribut WAI-ARIA `aria-atomic="true"` associés à un message de statut peuvent valoir pour un rôle WAI-ARIA `alert`.

C’est sous réserve que la nature du message de statut satisfasse bien à la correspondance implicitement établie. Dans le cas d’un message de statut indiquant la progression d’un processus et matérialisé graphiquement par une barre de progression, un rôle WAI-ARIA `progressbar` explicite est nécessaire.

### Tests du critère

#### Test 7.5.1

Chaque [message de statut](00-glossaire.md#message-statut) qui informe de la réussite, du résultat d’une action ou bien de l’état d’une application utilise-t-il l’attribut WAI-ARIA `role="status"` ?

##### Procédure de test

1. Retrouver dans le document les messages qui valent pour message de statut.
2. Pour chacun de ces messages, déterminer la nature de l’information dont est porteur le message :
3. Si le message informe de la réussite, du résultat d’une action ou bien de l’état d’une application, vérifier que l’élément qui contient le message :
   - Soit utilise l’attribut WAI-ARIA `role=”status”` ;
   - Soit utilise les attributs WAI-ARIA `aria-live=”polite”` et `aria-atomic=”true”`.
4. Si le message présente une suggestion, ou avertit de l’existence d’une erreur, vérifier que l’élément qui contient le message :
   - Soit utilise l’attribut WAI-ARIA `role=”alert”` ;
   - Soit utilise les attributs `aria-live=”assertive”` et `aria-atomic=”true”`.
5. Si le message indique la progression d’un processus, vérifier que l’élément qui contient le message :
   - Soit utilise l’un des attributs WAI-ARIA `role=”log”`, `role=”progressbar”` ou `role=”status”` ;
   - Soit utilise l’attribut WAI-ARIA `aria-live=”polite”` si l’intention est de signaler l’équivalent d’un `rôle “log”` ;
   - Soit utilise les attributs WAI-ARIA `aria-live=”polite”` et aria-atomic=”true si l’intention est de signaler l’équivalent d’un rôle “status”.
6. Si c’est le cas, **le test est validé**.
#### Test 7.5.2

Chaque [message de statut](00-glossaire.md#message-statut) qui présente une suggestion, ou avertit de l’existence d’une erreur utilise-t-il l’attribut WAI-ARIA `role="alert"` ?

##### Procédure de test

Tests identiques à 7.5.1
#### Test 7.5.3

Chaque [message de statut](00-glossaire.md#message-statut) qui indique la progression d’un processus utilise-t-il l’un des attributs WAI-ARIA `role="log"`, `role="progressbar"` ou `role="status"` ?

##### Procédure de test

Tests identiques à 7.5.1
### Références WCAG

- 4.1.3 Status Messages (AA)

**Techniques :**

- ARIA19
- ARIA22
- ARIA23

---

