# Thématique 13 — Consultation

## Table des matières

- [Critère 13.1 — Pour chaque page web, l’utilisateur a-t-il le contrôle de chaque limite de temps modifiant le contenu (hors cas particuliers) ?](#critere-13-1)
- [Critère 13.2 — Dans chaque page web, l’ouverture d’une nouvelle fenêtre ne doit pas être déclenchée sans action de l’utilisateur. Cette règle est-elle respectée ?](#critere-13-2)
- [Critère 13.3 — Dans chaque page web, chaque document bureautique en téléchargement possède-t-il, si nécessaire, une version accessible (hors cas particuliers) ?](#critere-13-3)
- [Critère 13.4 — Pour chaque document bureautique ayant une version accessible, cette version offre-t-elle la même information ?](#critere-13-4)
- [Critère 13.5 — Dans chaque page web, chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) a-t-il une alternative ?](#critere-13-5)
- [Critère 13.6 — Dans chaque page web, pour chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) ayant une alternative, cette alternative est-elle pertinente ?](#critere-13-6)
- [Critère 13.7 — Dans chaque page web, les changements brusques de luminosité ou les effets de flash sont-ils correctement utilisés ?](#critere-13-7)
- [Critère 13.8 — Dans chaque page web, chaque contenu en mouvement ou clignotant est-il contrôlable par l’utilisateur ?](#critere-13-8)
- [Critère 13.9 — Dans chaque page web, le contenu proposé est-il consultable quelle que soit l’orientation de l’écran (portrait ou paysage) (hors cas particuliers) ?](#critere-13-9)
- [Critère 13.10 — Dans chaque page web, les fonctionnalités utilisables ou disponibles au moyen d’un geste complexe peuvent-elles être également disponibles au moyen d’un geste simple (hors cas particuliers) ?](#critere-13-10)
- [Critère 13.11 — Dans chaque page web, les actions déclenchées au moyen d’un dispositif de pointage sur un point unique de l’écran peuvent-elles faire l’objet d’une annulation (hors cas particuliers) ?](#critere-13-11)
- [Critère 13.12 — Dans chaque page web, les fonctionnalités qui impliquent un mouvement de l’appareil ou vers l’appareil peuvent-elles être satisfaites de manière alternative (hors cas particuliers) ?](#critere-13-12)

---

<a id="critere-13-1"></a>

## Critère 13.1 — Pour chaque page web, l’utilisateur a-t-il le contrôle de chaque limite de temps modifiant le contenu (hors cas particuliers) ?

### Cas particuliers

Il existe une gestion de cas particuliers lorsque la limite de temps est essentielle, notamment lorsqu’elle ne pourrait pas être supprimée sans changer fondamentalement le contenu ou les fonctionnalités liées au contenu.

Dans ces situations, le critère est non applicable. Par exemple, le rafraîchissement d’un flux RSS dans une page n’est pas une limite de temps essentielle ; le critère est applicable. En revanche, une redirection automatique qui amène vers la nouvelle version d’une page à partir d’une URL obsolète est essentielle ; le critère est non applicable.

### Tests du critère

#### Test 13.1.1

Pour chaque page web, chaque [procédé de rafraîchissement](00-glossaire.md#procede-rafraichissement) (balise `<object>`, balise `<embed>`, balise `<svg>`, balise `<canvas>`, balise `<meta>`) vérifie-t-il une de ces conditions (hors cas particuliers) ?

- L’utilisateur peut arrêter ou relancer le rafraîchissement ;
- L’utilisateur peut augmenter la limite de temps entre deux rafraîchissements de dix fois, au moins ;
- L’utilisateur est averti de l’imminence du rafraîchissement et dispose de vingt secondes, au moins, pour augmenter la limite de temps avant le prochain rafraîchissement ;
- La limite de temps entre deux rafraîchissements est de vingt heures, au moins.

##### Procédure de test

1. Retrouver dans le document les rafraîchissements initiés dans le contenu par un élément `<object>`, `<embed>`, `<svg>`, `<canvas>` ou par un élément `<meta http-equiv="refresh" content="[compteur]">` (dans l’élément `<head>` de la page) ;
2. Pour chaque rafraîchissement, vérifier que :
   - Soit la présence d’un mécanisme permet à l’utilisateur de stopper et de relancer le rafraîchissement ;
   - Soit la présence d’un mécanisme permet à l’utilisateur d’augmenter la limite de temps entre deux rafraîchissements de dix fois, au moins ;
   - Soit la présence d’un mécanisme qui avertit l’utilisateur de l’imminence du rafraîchissement, laisse 20 secondes, au moins, à l’utilisateur, pour augmenter la limite de temps avant le prochain rafraîchissement ;
   - Soit la limite de temps entre deux rafraîchissements est de vingt heures, au moins.
3. Si c’est le cas, **le test est validé**.
#### Test 13.1.2

Pour chaque page web, chaque procédé de [redirection](00-glossaire.md#redirection) effectué via une balise `<meta>` est-il immédiat (hors cas particuliers) ?

##### Procédure de test

1. Retrouver dans le document une redirection automatique initiée par un élément `<meta http-equiv="refresh" content="0;URL='[URL ciblée]'" />` ;
2. Vérifier que la redirection est immédiate ;
3. Si c’est le cas, **le test est validé**.
#### Test 13.1.3

Pour chaque page web, chaque procédé de [redirection](00-glossaire.md#redirection) effectué via un [script](00-glossaire.md#script) vérifie-t-il une de ces conditions (hors cas particuliers) ?

- L’utilisateur peut arrêter ou relancer la redirection ;
- L’utilisateur peut augmenter la limite de temps avant la redirection de dix fois, au moins ;
- L’utilisateur est averti de l’imminence de la redirection et dispose de vingt secondes, au moins, pour augmenter la limite de temps avant la prochaine redirection ;
- La limite de temps avant la redirection est de vingt heures, au moins.

##### Procédure de test

1. Retrouver dans le document les redirections automatiques initiées par un script (sous la forme d’un décompte par exemple) ;
2. Pour chaque redirection automatique, vérifier que :
   - Soit la présence d’un mécanisme permet à l’utilisateur de stopper et relancer la redirection ;
   - Soit la présence d’un mécanisme permet à l’utilisateur d’augmenter la limite de temps avant le rafraîchissement de dix fois, au moins ;
   - Soit la présence d’un mécanisme qui avertit l’utilisateur de l’imminence du rafraîchissement, laisse 20 secondes, au moins, à l’utilisateur, pour augmenter la limite de temps avant le prochain rafraîchissement ;
   - Soit la limite de temps avant la redirection est de vingt heures, au moins.
3. Si c’est le cas, **le test est validé**.
#### Test 13.1.4

Pour chaque page web, chaque procédé limitant le temps d’une session vérifie-t-il une de ces conditions (hors cas particuliers) ?

- L’utilisateur peut supprimer la limite de temps ;
- L’utilisateur peut augmenter la limite de temps ;
- La limite de temps avant la fin de la session est de vingt heures au moins.

##### Procédure de test

1. Retrouver dans le document les procédés limitant le temps d’une session (par exemple, après une authentification) ;
2. Pour chaque procédé, vérifier que :
   - Soit la présence d’un mécanisme permet à l’utilisateur de supprimer la limite de temps ;
   - Soit la présence d’un mécanisme permet à l’utilisateur d’augmenter la limite de temps ;
   - Soit la limite de temps est de vingt heures, au moins.
3. Si c’est le cas, **le test est validé**.

Note : lorsque la limite de temps est essentielle, notamment lorsqu'elle ne pourrait pas être supprimée sans changer fondamentalement le contenu ou les fonctionnalités liées au contenu, le critère est non applicable. Par exemple, le rafraîchissement d'un flux RSS dans une page n'est pas une limite de temps essentielle ; le critère est applicable. En revanche, une redirection automatique qui amène vers la nouvelle version d'une page à partir d'une url obsolète est essentielle ; le critère est non applicable.
### Références WCAG

- 2.2.1 Timing Adjustable (A)
- 2.2.2 Pause, Stop, Hide (A)

**Techniques :**

- F40
- F41
- F58
- F61
- G75
- G76
- G110
- G133
- G180
- G186
- G198
- H76
- SCR1
- SCR16
- SCR36
- SVR1

---

<a id="critere-13-2"></a>

## Critère 13.2 — Dans chaque page web, l’ouverture d’une nouvelle fenêtre ne doit pas être déclenchée sans action de l’utilisateur. Cette règle est-elle respectée ?

### Tests du critère

#### Test 13.2.1

Dans chaque page web, l’ouverture d’une nouvelle fenêtre ne doit pas être déclenchée sans action de l’utilisateur. Cette règle est-elle respectée ?

##### Procédure de test

1. Vérifier qu’à l’ouverture du document, aucune nouvelle fenêtre (pop-up ou pop-under, par exemple) n’est ouverte.
2. Si c’est le cas, **le test est validé**.
### Références WCAG

- 3.2.1 On focus (A)

**Techniques :**

- F55
- G107

---

<a id="critere-13-3"></a>

## Critère 13.3 — Dans chaque page web, chaque document bureautique en téléchargement possède-t-il, si nécessaire, une version accessible (hors cas particuliers) ?

### Définitions

- [version accessible](00-glossaire.md#version-accessible-pour-document-en-telechargement)

### Cas particuliers

Il existe une gestion de cas particuliers :

- Pour les personnes de droit privé mentionnées aux 2° à 4° du I de l’article 47 de la loi du 11 février 2005 : si les fichiers bureautiques (ex : PDF, documents Microsoft ou LibreOffice, etc.) ont été publiés avant le 23 septembre 2018 (sauf si ce sont des documents nécessaires pour accomplir une démarche administrative relevant des tâches effectuées par l’organisme concerné), ils sont exemptés de l’obligation d’accessibilité.

Dans cette situation, le critère est non applicable.

### Tests du critère

#### Test 13.3.1

Dans chaque page web, chaque fonctionnalité de téléchargement d’un document bureautique vérifie-t-elle une de ces conditions ?

- Le document en téléchargement est compatible avec l'accessibilité ;
- Il en existe une version alternative en téléchargement compatible avec l'accessibilité ;
- Il en existe une version alternative au format HTML compatible avec l'accessibilité.

##### Procédure de test

1. Retrouver dans le document les liens et les contrôles de formulaire (un bouton de formulaire ou un formulaire de téléchargement par exemple) permettant de télécharger un fichier au format bureautique ;
2. Pour chaque fichier au format bureautique, vérifier la présence d’une version alternative présentée comme accessible :
   - Pour les documents au format .pdf, analyser le fichier avec l’outil PAC (PDF Accessibility Checker) et vérifier l’absence d’erreur d’accessibilité dans le document (cf. note) ;
   - Pour les documents au format .doc ou .docx, analyser le fichier avec l’outil de vérification d’accessibilité de Microsoft Office (à partir de la version 2010) et vérifier l’absence d’erreur d’accessibilité (cf. note) ;
   - Pour les documents au format .odt, analyser le document avec l’éditeur OpenOffice et vérifier que l’ensemble des contenus est conforme avec la liste des critères « Liste document bureautique en téléchargement » (cf. note pour une méthode alternative) ;
   - Pour les documents au format EPUB/DAISY, analyser le document avec un éditeur EPUB/DAISY et vérifier que l’ensemble des contenus est conforme avec la liste des critères « Liste document bureautique en téléchargement ».
   - Pour les documents eux-mêmes au format .html, analyser l’accessibilité du document.
3. Si c’est le cas pour chaque fichier au format bureautique, **le test est validé**.

Note au sujet de l'outil PAC : l'outil analyse le document PDF du point de vue de l'accessibilité mais également de critères de qualité (par exemple la norme PDF/UA). Seules les erreurs relatives à des critères présents dans la liste des critères « Liste document bureautique en téléchargement » rendent le critère « Non conforme ». Par ailleurs, cet outil ne fonctionne que sur la plateforme Windows. Sur Mac, le contrôle doit se faire manuellement.

Note au sujet Microsoft Office : le logiciel offre un vérificateur d'accessibilité en standard, (accessible via le menu « Fichier > Informations > Vérifier la présence de problèmes > Vérifier l'accessibilité »). Ce vérificateur peut être considérablement amélioré via le plugin Word Accessibility Plug-in (voir dans la section Outils). Ce plugin ne fonctionne que sur Windows. Sur Mac, le contrôle doit se faire manuellement.

Note au sujet des documents au format .odt : OpenOffice et LibreOffice ne possèdent pas de vérificateur d'accessibilité. Une méthode plus rapide qu'une analyse manuelle peut consister à enregistrer le document au format .docx et le vérifier via le vérificateur d'accessibilité de Microsoft Office 2010. Attention cependant : cette méthode rapide est à réserver aux documents très simples car certaines informations liées à l'accessibilité ne sont pas correctement transcodées. C'est le cas des indications de langue, de certaines alternatives d'images ou d'en-têtes fusionnées sur les tableaux par exemple.

Note au sujet du format EPUB : l'utilitaire Ace by DAISY App permet d'effectuer le travail de validation d'un fichier EPUB 3 de manière efficace.

Note au sujet des documents dérogés : le référentiel propose un statut de dérogation dans certains cas (cf. guide d'accompagnement). Dans ce cas, les tests ne sont pas à réaliser, la version accessible étant fournie sur demande de l'utilisateur.

Note à l'attention des personnes de droit privé mentionnées aux 2° à 4° du I de l’article 47 de la loi du 11 février 2005 : si les fichiers bureautiques (ex : PDF, documents Microsoft ou libreOffice, etc.) ont été publiés avant le 23 septembre 2018 (sauf si ce sont des documents nécessaires pour accomplir une démarche administrative relevant des tâches effectuées par l'organisme concerné), ils sont exemptés de l’obligation d’accessibilité.
### Références WCAG

- 1.1.1 Non-text Content (A)
- 1.3.1 Info and Relationships (A)
- 1.3.2 Meaningful Sequence (A)
- 2.4.1 Bypass Blocks (A)
- 2.4.3 Focus Order (A)
- 3.1.1 Language of Page (A)
- 4.1.2 Name, Role, Value (A)

**Techniques :**

- F15
- G10
- G135

---

<a id="critere-13-4"></a>

## Critère 13.4 — Pour chaque document bureautique ayant une version accessible, cette version offre-t-elle la même information ?

### Définitions

- [version accessible](00-glossaire.md#version-accessible-pour-document-en-telechargement)

### Tests du critère

#### Test 13.4.1

Chaque document bureautique ayant une version accessible vérifie-t-il une de ces conditions ?

- La version compatible avec l’accessibilité offre la même information ;
- La version alternative au format HTML est pertinente et offre la même information.

##### Procédure de test

1. Retrouver dans le document les fichiers en téléchargement au format bureautique accompagné de leur version alternative accessible ;
2. Pour chaque couple de fichiers, ouvrir les deux documents (le document d’origine et le document accessible) et vérifier que les deux documents apportent la même information ;
3. Si c’est le cas pour chaque couple de fichiers, **le test est validé**.
### Références WCAG

- 1.1.1 Non-text Content (A)
- 1.3.1 Info and Relationships (A)
- 1.3.2 Meaningful Sequence (A)
- 2.4.1 Bypass Blocks (A)
- 2.4.3 Focus Order (A)
- 3.1.1 Language of Page (A)
- 4.1.2 Name, Role, Value (A)

**Techniques :**

- F15
- G10
- G135

---

<a id="critere-13-5"></a>

## Critère 13.5 — Dans chaque page web, chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) a-t-il une alternative ?

### Tests du critère

#### Test 13.5.1

Dans chaque page web, chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) vérifie-t-il une de ces conditions ?

- Un attribut title est disponible ;
- Une définition est donnée par le contexte adjacent.

##### Procédure de test

1. Retrouver dans le document les contenus cryptiques (art ASCII, émoticône, syntaxe cryptique) ;
2. Pour chaque contenu cryptique, vérifier que :
   - Soit une définition est disponible au moyen d’un attribut `title`, sur un lien, un contrôle de formulaire, une abréviation (élément `<abbr>`) par exemple ;
   - Soit une définition est donnée dans le contexte adjacent (immédiatement avant ou après).
3. Si c’est le cas pour chaque contenu cryptique, **le test est validé**.
### Références WCAG

- 1.1.1 Non-text Content (A)

**Techniques :**

- F71
- F70
- G135
- H86

---

<a id="critere-13-6"></a>

## Critère 13.6 — Dans chaque page web, pour chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) ayant une alternative, cette alternative est-elle pertinente ?

### Tests du critère

#### Test 13.6.1

Dans chaque page web, chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) vérifie-t-il une de ces conditions ?

- Le contenu de l’attribut `title` est pertinent ;
- La définition donnée par le contexte adjacent est pertinente.

##### Procédure de test

1. Retrouver dans le document les contenus cryptiques (art ASCII, émoticône, syntaxe cryptique) ;
2. Pour chaque contenu cryptique, vérifier que la définition donnée est pertinente.
3. Si c’est le cas pour chaque contenu cryptique, **le test est validé**.
### Références WCAG

- 1.1.1 Non-text Content (A)

**Techniques :**

- F71
- F72
- H86

---

<a id="critere-13-7"></a>

## Critère 13.7 — Dans chaque page web, les changements brusques de luminosité ou les effets de flash sont-ils correctement utilisés ?

### Définitions

- [les changements brusques de luminosité ou les effets de flash](00-glossaire.md#changement-brusque-luminosite-ou-effet-flash)

### Tests du critère

#### Test 13.7.1

Dans chaque page web, chaque image ou élément multimédia (balise `<video>`, balise `<img>`, balise `<svg>`, balise `<canvas>`, balise `<embed>` ou balise `<object>`) qui provoque un changement brusque de luminosité ou un effet de flash vérifie-t-il une de ces conditions ?

- La fréquence de l’effet est inférieure à 3 par seconde ;
- La surface totale cumulée des effets est inférieure ou égale à 21824 pixels.

##### Procédure de test

1. Retrouver dans le document les contenus clignotants ou qui provoquent des effets de flash de type image animée, vidéo (cf. note) ou animation (éléments `<img>`, `<svg>`, `<canvas>`, `<embed>`, `<object>` ou `<video>`) ;
2. Pour chaque contenu clignotant ou provoquant des effets de flash, vérifier que :
   - Soit la fréquence de l’effet est inférieur à 3 par seconde ;
   - Soit la surface cumulée est inférieure à 21824 pixels.
3. Si c’est le cas pour chaque contenu clignotant ou provoquant des effets de flash, **le test est validé**.

Note : l'évaluation de ce critère peut être complexe. Lorsque l'effet est géré par un script ou au moyen de CSS, l'analyse du code est suffisante. L'outil PEAT permet d'analyser les vidéos au format .avi, par exemple. Un exemple de vidéo ayant provoquée des crises d'épilepsie peut être consulté ici : London 2012 Olympics Seizure (https://www.youtube.com/watch?v=vs0hfhSje9M).
#### Test 13.7.2

Dans chaque page web, chaque script qui provoque [un changement brusque de luminosité ou un effet de flash](00-glossaire.md#changement-brusque-luminosite-ou-effet-flash) vérifie-t-il une de ces conditions ?

- La fréquence de l’effet est inférieure à 3 par seconde ;
- La surface totale cumulée des effets est inférieure ou égale à 21824 pixels.

##### Procédure de test

1. Retrouver dans le document les contenus clignotants ou qui provoquent des effets de flash obtenus au moyen d’un script ;
2. Pour chaque contenu clignotant ou provoquant des effets de flash, vérifier que :
   - Soit la fréquence de l’effet est inférieur à 3 par seconde ;
   - Soit la surface cumulée est inférieure à 21824 pixels.
3. Si c’est le cas pour chaque contenu clignotant ou provoquant des effets de flash, **le test est validé**.
#### Test 13.7.3

Dans chaque page web, chaque mise en forme CSS qui provoque [un changement brusque de luminosité ou un effet de flash](00-glossaire.md#changement-brusque-luminosite-ou-effet-flash) vérifie-t-il une de ces conditions ?

- La fréquence de l’effet est inférieure à 3 par seconde ;
- La surface totale cumulée des effets est inférieure ou égale à 21824 pixels.

##### Procédure de test

1. Retrouver dans le document les contenus clignotants ou qui provoquent des effets de flash obtenus au moyen d’une animation CSS ;
2. Pour chaque contenu clignotant ou provoquant des effets de flash, vérifier que :
   - Soit la fréquence de l’effet est inférieur à 3 par seconde ;
   - Soit la surface cumulée est inférieure à 21824 pixels.
3. Si c’est le cas pour chaque contenu clignotant ou provoquant des effets de flash, **le test est validé**.
### Références WCAG

- 2.3.1 Three Flashes or Below Threshold (A)

**Techniques :**

- G15
- G19
- G176

---

<a id="critere-13-8"></a>

## Critère 13.8 — Dans chaque page web, chaque contenu en mouvement ou clignotant est-il contrôlable par l’utilisateur ?

### Définitions

- [contrôlable](00-glossaire.md#controle-contenu-en-mouvement-ou-clignotant)

### Tests du critère

#### Test 13.8.1

Dans chaque page web, chaque contenu en mouvement déclenché automatiquement, vérifie-t-il une de ces conditions ?

- La durée du mouvement est inférieure ou égale à 5 secondes ;
- L’utilisateur peut arrêter et relancer le mouvement ;
- L’utilisateur peut afficher et masquer le contenu en mouvement ;
- L’utilisateur peut afficher la totalité de l’information sans le mouvement.

##### Procédure de test

1. Retrouver dans le document les contenus en mouvement (obtenus au moyen d’une image, d’un script ou d’un effet CSS) déclenchés automatiquement au chargement de la page ou lors de l’affichage d’un contenu (cf. note) ;
2. Pour chaque contenu, vérifier que :
   - Soit la durée du mouvement est inférieure à 5 secondes ;
   - Soit la présence d’un mécanisme (un bouton, par exemple) permet d’arrêter et de relancer le mouvement ;
   - Soit la présence d’un mécanisme (un bouton, par exemple) permet de cacher et d’afficher à nouveau le contenu en mouvement ;
   - Soit la présence d’un mécanisme (un bouton, par exemple) permet d’afficher la totalité du contenu sans mouvement.
3. Si c’est le cas pour chaque contenu en mouvement, **le test est validé**.
#### Test 13.8.2

Dans chaque page web, chaque contenu clignotant déclenché automatiquement, vérifie-t-il une de ces conditions ?

- La durée du clignotement est inférieure ou égale à 5 secondes ;
- L’utilisateur peut arrêter et relancer le clignotement ;
- L’utilisateur peut afficher et masquer le contenu clignotant ;
- L’utilisateur peut afficher la totalité de l’information sans le clignotement.

##### Procédure de test

1. Retrouver dans le document les contenus clignotants (obtenus au moyen d’une image, d’un script ou d’un effet CSS) déclenchés automatiquement au chargement de la page ou lors de l’affichage d’un contenu (cf. note).
2. Pour chaque contenu, vérifier que :
   - Soit la durée du clignotement est inférieure à 5 secondes ;
   - Soit la présence d’un mécanisme (un bouton, par exemple) permet d’arrêter et de relancer le clignotement ;
   - Soit la présence d’un mécanisme (un bouton, par exemple) permet de cacher et d’afficher à nouveau le contenu clignotant ;
   - Soit la présence d’un mécanisme (un bouton, par exemple) permet d’afficher la totalité du contenu clignotement.
3. Si c’est le cas pour chaque contenu clignotant, **le test est validé**.

Note : l'arrêt ou la mise en pause d'un contenu en mouvement ou clignotant au moyen de la prise de focus (par exemple, l'effet est suspendu uniquement pendant la prise de focus) n'est pas considéré comme un procédé conforme. Dans certains cas, le mouvement ne peut pas être arrêté, par exemple dans le cas d'une barre de progression, dans ce cas, le critère est non applicable.
### Références WCAG

- 2.2.1 Timing Adjustable (A)
- 2.2.2 Pause, Stop, Hide (A)

**Techniques :**

- F4
- F7
- F16
- F47
- F50
- G4
- G11
- G152
- G186
- G187
- G191
- SCR22
- SCR33
- SCR36
- SM11
- SM12

---

<a id="critere-13-9"></a>

## Critère 13.9 — Dans chaque page web, le contenu proposé est-il consultable quelle que soit l’orientation de l’écran (portrait ou paysage) (hors cas particuliers) ?

### Cas particuliers

Il existe des interfaces pour lesquelles l’orientation du périphérique est essentielle à leur utilisation.

Dans ces situations, le critère est non applicable. Il peut s’agir d’interfaces de jeu, de piano, de dépôt de chèques bancaires, etc.

Si l’interface est le seul moyen d’accéder au service proposé, une alternative devrait être mise en place pour pallier cette carence.

### Tests du critère

#### Test 13.9.1

Dans chaque page web, chaque contenu vérifie-t-il ces conditions (hors cas particuliers) ?

- La consultation est possible quel que soit le mode d’orientation de l’écran ;
- Le contenu proposé reste le même quel que soit le mode d’orientation de l’écran utilisé même si sa présentation et le moyen d’y accéder peut différer.

##### Procédure de test

1. Consulter le document dans un mode d’orientation portrait puis dans un mode d’orientation paysage ;
2. Vérifier que :
   - La consultation est possible quel que soit le mode d’orientation de l’écran.
   - Le contenu proposé reste le même quel que soit le mode d’orientation de l’écran utilisé même si sa présentation et le moyen d’y accéder peut différer.
3. Si c’est le cas, **le test est validé**.

Note : il existe des interfaces pour lesquelles l'orientation du périphérique est essentielle à leur utilisation. Dans ces situations, le critère est non applicable. Il peut s'agir d'interfaces de jeu, de piano, de dépôt de chèques bancaires, etc. Si l'interface est le seul moyen d'accéder au service proposé, une alternative devrait être mise en place pour pallier cette carence.
### Références WCAG

- 1.3.4 Orientation (AA)

---

<a id="critere-13-10"></a>

## Critère 13.10 — Dans chaque page web, les fonctionnalités utilisables ou disponibles au moyen d’un geste complexe peuvent-elles être également disponibles au moyen d’un geste simple (hors cas particuliers) ?

### Définitions

- [geste complexe](00-glossaire.md#gestes-complexes-et-gestes-simples)
- [geste simple](00-glossaire.md#gestes-complexes-et-gestes-simples)

### Cas particuliers

Il existe une gestion de cas particuliers dans deux types de situation :

- Le critère ne s’applique qu’à des fonctionnalités mises en place par l’auteur du site. Il ne concerne donc pas les gestes requis par l’agent utilisateur ou le système d’exploitation ;
- Le critère ne s’applique pas aux fonctionnalités dont la réalisation d’un geste complexe est essentielle (exécuter le tracé d’une signature, par exemple).

### Tests du critère

#### Test 13.10.1

Dans chaque page web, chaque fonctionnalité utilisable ou disponible suite à un contact multipoint est-elle également utilisable ou disponible suite à un contact en un point unique de l’écran (hors cas particuliers).

##### Procédure de test

1. Retrouver dans le document les fonctionnalités utilisables ou disponibles au moyen d’une interaction au toucher de type contact multipoint ;
2. Pour chaque fonctionnalité, vérifier qu’elle reste disponible au moyen d’une interaction au toucher de type contact en un point unique de l’écran (par exemple, la possibilité de consulter les éléments d’une liste par un mouvement de balayage horizontal droit ou gauche doit aussi être disponible au moyen de boutons “précédent” et “suivant” ou encore un geste de pincer et zoomer qui peut être alternativement réalisé au moyen de boutons “plus” et “moins”) ;
3. Si c’est le cas pour chaque fonctionnalité utilisable ou disponible au moyen d’une interaction au toucher de type contact multipoint, **le test est validé**.
#### Test 13.10.2

Dans chaque page web, chaque fonctionnalité utilisable ou disponible suite à un geste basé sur le suivi d’une trajectoire sur l’écran est-elle également utilisable ou disponible suite à un contact en un point unique de l’écran (hors cas particuliers).

##### Procédure de test

1. Retrouver dans le document les fonctionnalités utilisables ou disponibles au moyen d’une interaction au toucher qui implique le suivi d’une trajectoire sur l’écran ;
2. Pour chaque fonctionnalité, vérifier qu’elle reste disponible au moyen d’une interaction au toucher de type contact en un point unique de l’écran (par exemple, la possibilité de composer son mot de passe en suivant une trajectoire sur un clavier virtuel doit aussi être disponible au moyen de pressions successives sur les touches du clavier) ;
3. Si c’est le cas pour chaque fonctionnalité utilisable ou disponible au moyen d’une interaction au toucher qui implique le suivi d’une trajectoire sur l’écran, **le test est validé**.

Il existe une gestion de cas particuliers dans deux types de situation :

- Le critère ne s'applique qu'à des fonctionnalités mises en place par l'auteur du site. Il ne concerne donc pas les gestes requis par l'agent utilisateur ou le système d'exploitation.
- Le critère ne s'applique pas aux fonctionnalités dont la réalisation d'un geste complexe est essentielle (exécuter le tracé d'une signature, par exemple).
### Références WCAG

- 2.5.1 Pointer Gestures (A)

**Techniques :**

- G215
- G216

---

<a id="critere-13-11"></a>

## Critère 13.11 — Dans chaque page web, les actions déclenchées au moyen d’un dispositif de pointage sur un point unique de l’écran peuvent-elles faire l’objet d’une annulation (hors cas particuliers) ?

### Cas particuliers

Il existe une gestion de cas particulier lorsque la fonctionnalité nécessite que le comportement attendu soit réalisé lors d’un événement descendant, par exemple, un émulateur de clavier dont les touches doivent s’activer à la pression comme sur un clavier physique. Dans ces situations, le critère est non applicable.

### Note technique

Deux exemples de mécanisme mis en place pour annuler ou abandonner une action déclenchée au moyen d’un dispositif de pointage sur un point unique de l’écran :

- Une fenêtre modale permettant d’annuler l’action après son achèvement ;
- Pour une fonction de glisser/déposer, le fait d’abandonner l’action si l’utilisateur relâche l’élément en dehors de la zone cible.

### Tests du critère

#### Test 13.11.1

Dans chaque page web, les actions déclenchées au moyen d’un dispositif de pointage sur un point unique de l’écran vérifient-elles l’une de ces conditions (hors cas particuliers) ?

- L’action est déclenchée au moment où le dispositif de pointage est [relâché ou relevé](00-glossaire.md#relache-ou-releve) ;
- L’action est déclenchée au moment où le dispositif de pointage est [pressé ou posé](00-glossaire.md#presse-ou-pose) puis annulée lorsque le dispositif de pointage est [relâché ou relevé](00-glossaire.md#relache-ou-releve) ;
- Un mécanisme est disponible pour abandonner (avant achèvement de l’action) ou annuler (après achèvement) l’exécution de l’action.

##### Procédure de test

1. Retrouver dans le document les actions déclenchées au moyen d’un dispositif de pointage sur un point unique de l’écran ;
2. Pour chaque action, vérifier que :
   - Soit l’action est déclenchée au moment où le dispositif de pointage est relâché ou relevé ;
   - Soit l’action est déclenchée au moment où le dispositif de pointage est pressé ou posé puis annulée lorsque le dispositif de pointage est relâché ou relevé ;
   - Soit il existe un mécanisme pour abandonner (avant achèvement de l’action) ou annuler (après achèvement) l’exécution de l’action ; par exemple, lors d’une interaction de type glisser-déposer un relâchement du dispositif de pointage doit permettre d’abandonner l’interaction en cours et une fois la zone de dépôt atteinte, l’utilisateur doit rester en mesure d’annuler son opération de dépôt au moyen d’un dialogue de confirmation (choix de confirmer ou d’annuler le dépôt) ou par le fait de pouvoir replacer l’élément déposé à sa position initiale.
3. Si c’est le cas pour chaque action déclenchée au moyen d’un dispositif de pointage sur un point unique de l’écran, **le test est validé**.
### Références WCAG

- 2.5.2 Pointer Cancellation (A)

---

<a id="critere-13-12"></a>

## Critère 13.12 — Dans chaque page web, les fonctionnalités qui impliquent un mouvement de l’appareil ou vers l’appareil peuvent-elles être satisfaites de manière alternative (hors cas particuliers) ?

### Cas particuliers

Il existe une gestion de cas particulier lorsque :

- Le mouvement est essentiel à l’accomplissement de la fonctionnalité (ex. podomètre) ;
- La détection du mouvement est utilisée pour contrôler une fonctionnalité au travers d’une interface compatible avec l’accessibilité.

### Tests du critère

#### Test 13.12.1

Dans chaque page web, les fonctionnalités disponibles en bougeant l’appareil peuvent-elles être accomplies avec des [composants d’interface](00-glossaire.md#composant-interface) utilisateur (hors cas particuliers) ?

##### Procédure de test

1. Retrouver dans le document les fonctionnalités disponibles en bougeant l’appareil ;
2. Pour chaque fonctionnalité, vérifier qu’elle peut être accomplie au moyen de composants d’interface utilisateur ;
3. Si c’est le cas pour chaque fonctionnalité disponible en bougeant l’appareil, **le test est validé**.
#### Test 13.12.2

Dans chaque page web, les fonctionnalités disponibles en faisant un geste en direction de l’appareil peuvent-elles être accomplies avec des [composants d’interface](00-glossaire.md#composant-interface) utilisateur (hors cas particuliers) ?

##### Procédure de test

1. Retrouver dans le document les fonctionnalités disponibles en faisant un geste en direction de l’appareil ;
2. Pour chaque fonctionnalité, vérifier qu’elle peut être accomplie au moyen de composants d’interface utilisateur ;
3. Si c’est le cas pour chaque fonctionnalité disponible en faisant un geste en direction de l’appareil, **le test est validé**.
#### Test 13.12.3

L’utilisateur a-t-il la possibilité de désactiver la détection du mouvement pour éviter un déclenchement accidentel de la fonctionnalité (hors cas particuliers) ?

##### Procédure de test

1. Retrouver dans le document les fonctionnalités disponibles en mettant en mouvement l’appareil ;
2. Vérifier si l’utilisateur à la possibilité de désactiver la détection du mouvement ;
3. Si c’est le cas, pour chaque fonctionnalité, vérifier qu’elle ne peut pas être déclenchée ;
4. Si c’est le cas pour chaque fonctionnalité disponible en mettant en mouvement l’appareil, **le test est validé**.### Références WCAG

- 2.5.4 Motion Actuation (A)

---

