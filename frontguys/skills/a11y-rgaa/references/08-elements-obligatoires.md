# Thématique 8 — Éléments obligatoires

## Table des matières

- [Critère 8.1 — Chaque page web est-elle définie par un type de document ?](#critere-8-1)
- [Critère 8.2 — Pour chaque page web, le code source généré est-il valide selon le type de document spécifié ?](#critere-8-2)
- [Critère 8.3 — Dans chaque page web, la langue par défaut est-elle présente ?](#critere-8-3)
- [Critère 8.4 — Pour chaque page web ayant une langue par défaut, le code de langue est-il pertinent ?](#critere-8-4)
- [Critère 8.5 — Chaque page web a-t-elle un titre de page ?](#critere-8-5)
- [Critère 8.6 — Pour chaque page web ayant un titre de page, ce titre est-il pertinent ?](#critere-8-6)
- [Critère 8.7 — Dans chaque page web, chaque changement de langue est-il indiqué dans le code source (hors cas particuliers) ?](#critere-8-7)
- [Critère 8.8 — Dans chaque page web, le code de langue de chaque changement de langue est-il valide et pertinent ?](#critere-8-8)
- [Critère 8.9 — Dans chaque page web, les balises ne doivent pas être utilisées uniquement à des fins de présentation. Cette règle est-elle respectée ?](#critere-8-9)
- [Critère 8.10 — Dans chaque page web, les changements du sens de lecture sont-ils signalés ?](#critere-8-10)

---

<a id="critere-8-1"></a>

## Critère 8.1 — Chaque page web est-elle définie par un type de document ?

### Définitions

- [type de document](00-glossaire.md#type-document)

### Tests du critère

#### Test 8.1.1

Pour chaque page web, le [type de document](00-glossaire.md#type-document) (balise `doctype`) est-il présent ?

##### Procédure de test

1. Retrouver dans le document la balise DOCTYPE (par exemple `<!DOCTYPE html>`) ;
2. Vérifier que :
   - La balise DOCTYPE est placée avant la balise `<html>` ;
   - Le type de document est valide.
3. Si c’est le cas, **le test est validé**.
#### Test 8.1.2

Pour chaque page web, le [type de document](00-glossaire.md#type-document) (balise `doctype`) est-il valide ?

##### Procédure de test

Tests identiques à 8.1.1
#### Test 8.1.3

Pour chaque page web possédant une déclaration de [type de document](00-glossaire.md#type-document), celle-ci est-elle située avant la balise `<html>` dans le code source ?

##### Procédure de test

Tests identiques à 8.1.1
### Références WCAG

- 4.1.1 Parsing (A)

**Techniques :**

- G134
- G192

---

<a id="critere-8-2"></a>

## Critère 8.2 — Pour chaque page web, le code source généré est-il valide selon le type de document spécifié ?

### Définitions

- [type de document](00-glossaire.md#type-document)

### Tests du critère

#### Test 8.2.1

Pour chaque déclaration de [type de document](00-glossaire.md#type-document), le code source généré de la page vérifie-t-il ces conditions ?

- Les balises, attributs et valeurs d’attributs respectent les [règles d’écriture](00-glossaire.md#regles-ecriture) ;
- L’imbrication des balises est conforme ;
- L’ouverture et la fermeture des balises sont conformes ;
- Les valeurs d’attribut id sont uniques dans la page ;
- Les attributs ne sont pas doublés sur un même élément.

##### Procédure de test

1. Dans le menu « Check », activer l’option « W3C Nu markup checker (all frames) ».
2. Dans la page de résultats, vérifier que :
   - Les balises, attributs et valeurs d’attributs respectent les règles d’écriture ;
   - L’imbrication des balises est conforme ;
   - L’ouverture et la fermeture des balises sont conformes ;
   - Les valeurs d’attribut id sont uniques dans la page ;
   - Les attributs ne sont pas doublés sur un même élément.
3. Si c’est le cas, **le test est validé**.
### Références WCAG

- 4.1.1 Parsing (A)
- 4.1.2 Name, Role, Value (A)

**Techniques :**

- H74
- H93
- H94
- F70
- F77

---

<a id="critere-8-3"></a>

## Critère 8.3 — Dans chaque page web, la langue par défaut est-elle présente ?

### Définitions

- [langue par défaut](00-glossaire.md#langue-par-defaut)

### Tests du critère

#### Test 8.3.1

Pour chaque page web, l’indication de langue par défaut vérifie-t-elle une de ces conditions ?

- L’indication de la langue de la page (attribut `lang` et/ou `xml:lang`) est donnée pour l’élément `html` ;
- L’indication de la langue de la page (attribut `lang` et/ou `xml:lang`) est donnée sur chaque élément de texte ou sur l’un des éléments parents.

##### Procédure de test

1. Retrouver dans le document l’indication de langue par défaut ;
2. Vérifier la présence d’une indication de langue :
   - Soit au moyen de l’attribut lang sur la balise html si le code est du HTML5 ou du HTML4 ;
   - Soit au moyen des attributs lang et xml:lang sur la balise html si le code est du XHTML 1.0 ;
   - Soit au moyen de l’attribut xml:lang sur la balise html si le code est du XHTML 1.1 ;
   - Sinon, vérifier la présence d’une indication de langue sur chaque élément de texte ou l’un de ses parents.
3. Si c’est le cas, **le test est validé**.
### Références WCAG

- 3.1.1 Language of Page (A)

**Techniques :**

- H57

---

<a id="critere-8-4"></a>

## Critère 8.4 — Pour chaque page web ayant une langue par défaut, le code de langue est-il pertinent ?

### Définitions

- [langue par défaut](00-glossaire.md#langue-par-defaut)
- [code de langue](00-glossaire.md#code-langue)

### Tests du critère

#### Test 8.4.1

Pour chaque page web ayant une langue par défaut, le code de langue vérifie-t-il ces conditions ?

- Le code de langue est valide ;
- Le code de langue est pertinent.

##### Procédure de test

1. Retrouver dans le document l’indication de langue par défaut ;
2. Vérifier la présence d’un code de langue :
   - Valide (conforme à la norme ISO 639-1 ou ISO 639-2 et suivantes) ;
   - Et pertinent (qui indique la langue principale du document).
3. Si c’est le cas, **le test est validé**.
### Références WCAG

- 3.1.1 Language of Page (A)

**Techniques :**

- H57

---

<a id="critere-8-5"></a>

## Critère 8.5 — Chaque page web a-t-elle un titre de page ?

### Définitions

- [titre de page](00-glossaire.md#titre-page)

### Tests du critère

#### Test 8.5.1

Chaque page web a-t-elle un [titre de page](00-glossaire.md#titre-page) (balise `<title>`) ?

##### Procédure de test

Test 8.5.1

1. Retrouver dans le document le titre structuré au moyen d’un élément `<title>` ;
2. Si c’est le cas, **le test est validé**.
### Références WCAG

- 2.4.2 Page Titled (A)

**Techniques :**

- G88
- G127
- H25

---

<a id="critere-8-6"></a>

## Critère 8.6 — Pour chaque page web ayant un titre de page, ce titre est-il pertinent ?

### Définitions

- [titre de page](00-glossaire.md#titre-page)

### Tests du critère

#### Test 8.6.1

Pour chaque page web ayant un [titre de page](00-glossaire.md#titre-page) (balise `<title>`), le contenu de cette balise est-il pertinent ?

##### Procédure de test

1. Retrouver dans le document le titre structuré au moyen d’un élément `<title>` ;
2. Vérifier si le contenu de l’élément `<title>` est suffisamment pertinent (il permet de retrouver la page dans l’historique de navigation ou la liste des onglets).
3. Si c’est le cas, **le test est validé**.
### Références WCAG

- 2.4.2 Page Titled (A)

**Techniques :**

- G88
- G127
- H25

---

<a id="critere-8-7"></a>

## Critère 8.7 — Dans chaque page web, chaque changement de langue est-il indiqué dans le code source (hors cas particuliers) ?

### Définitions

- [changement de langue](00-glossaire.md#changement-langue)

### Cas particuliers

Il y a une gestion de cas particuliers sur le changement de langue pour les cas suivants :

- Nom propre, le critère est non applicable ;
- Nom commun de langue étrangère présent dans le dictionnaire officiel de la langue (voir note 1 ci-dessous) par défaut de la page web, le critère est non applicable ;
- Le terme de langue étrangère soumis, via un [champ de formulaire](00-glossaire.md#champ-saisie-formulaire) et rappelé dans la page (par exemple comme indication du terme recherché dans le cas d’un moteur de recherche), le critère est non applicable ;
- Passage de texte dont la langue ne peut pas être déterminée : le critère est non applicable ;
- Terme ou passage de texte issus d’une langue morte ou imaginaire pour laquelle il n’existe pas d’interprétation vocale : le critère est non applicable.

Note 1 : le dictionnaire officiel est celui recommandé par l’académie en charge de la langue en question. Pour la France, par exemple, le lien vers le dictionnaire officiel se trouve sur le site de l’Académie française à l’adresse suivante : http://www.academie-francaise.fr/le-dictionnaire/la-9e-edition. Pour toute demande auprès du service du dictionnaire de l’Académie française, utiliser le formulaire de contact du service du dictionnaire.

Note 2 : pour les noms communs de langue étrangère, absents dans le dictionnaire officiel de la langue par défaut de la page web, et qui sont passés dans le langage commun (exemple : newsletter) : le critère est applicable, uniquement lorsque l’absence d’indication de langue peut provoquer une incompréhension pour la restitution.

### Tests du critère

#### Test 8.7.1

Dans chaque page web, chaque texte écrit dans une langue différente de la [langue par défaut](00-glossaire.md#langue-par-defaut) vérifie-t-il une de ces conditions (hors cas particuliers) ?

- L’indication de langue est donnée sur l’élément contenant le texte (attribut `lang` et/ou `xml:lang`) ;
- L’indication de langue est donnée sur un des éléments parents (attribut `lang` et/ou `xml:lang`)

##### Procédure de test

1. Retrouver les passages de texte en langue étrangère, à l’exception :
   - Des noms propres ;
   - Des mots d’origine étrangère, présents dans le dictionnaire de la langue du document ;
   - Des mots d’origine étrangère et d’usage courant dont la prononciation ne provoque pas d’incompréhension.
   - Vérifier que chaque passage de texte retenu possède une indication de langue (attribut `lang` et/ou `xml:lang` sur l’élément lui-même ou l’un de ses parents).
2. Si c’est le cas, **le test est validé**.
### Références WCAG

- 3.1.2 Language of Parts (AA)

**Techniques :**

- H58

---

<a id="critere-8-8"></a>

## Critère 8.8 — Dans chaque page web, le code de langue de chaque changement de langue est-il valide et pertinent ?

### Définitions

- [changement de langue](00-glossaire.md#changement-langue)

### Tests du critère

#### Test 8.8.1

Pour chaque page web, le code de langue de chaque [changement de langue](00-glossaire.md#changement-langue) vérifie-t-il ces conditions ?

- Le code de langue est valide ;
- Le code de langue est pertinent.

##### Procédure de test

1. Pour chaque passage de texte validé au test 8.7.1, vérifier que :
   - L’indication de langue est valide ;
   - L’indication de langue est pertinente.
2. Si c’est le cas, **le test est validé**.
### Références WCAG

- 3.1.2 Language of Parts (AA)

**Techniques :**

- H58

---

<a id="critere-8-9"></a>

## Critère 8.9 — Dans chaque page web, les balises ne doivent pas être utilisées uniquement à des fins de présentation. Cette règle est-elle respectée ?

### Définitions

- [uniquement à des fins de présentation](00-glossaire.md#uniquement-a-fins-presentation)

### Tests du critère

#### Test 8.9.1

Dans chaque page web les balises (à l’exception de `<div>`, `<span>` et `<table>`) ne doivent pas être utilisées [uniquement à des fins de présentation](00-glossaire.md#uniquement-a-fins-presentation). Cette règle est-elle respectée ?

##### Procédure de test

1. Retrouver dans le document l’ensemble des éléments sémantiques utilisés à des fins de présentation ;
2. Pour chacun de ces éléments, vérifier que :
   - L’élément est pourvu d’un attribut `role="presentation"` ;
   - L’utilisation de cet élément à des fins de présentation reste justifée.
3. Si c’est le cas, **le test est validé**.

Note : Quelques exemples, non exhaustifs de détournement de balisage : un élément `<div>` utilisé comme paragraphe, un titre utilisé comme légende, un élément `<blockquote>` ou des paragraphes vides ou encore des espaces utilisés pour créer des effets de marges.
L'utilisation d'un `role="presentation"` est formellement déconseillée, mais peut toutefois se justifier dans de rares cas. Cela peut être acceptable sur un élément `<blockquote>` ou un paragraphe vide, mais sera considéré comme non-conforme sur un titre.

Le cas des tableaux : à noter que ce test aborde les tableaux de présentation qui ne devraient finalement pas apparaître au sein de la thématique Tableaux.
### Références WCAG

- 1.3.1 Info and Relationships (A)

**Techniques :**

- G115
- H88
- F43
- F92

---

<a id="critere-8-10"></a>

## Critère 8.10 — Dans chaque page web, les changements du sens de lecture sont-ils signalés ?

### Définitions

- [sens de lecture](00-glossaire.md#sens-lecture)

### Tests du critère

#### Test 8.10.1

Dans chaque page web, chaque texte dont le sens de lecture est différent du [sens de lecture](00-glossaire.md#sens-lecture) par défaut est contenu dans une balise possédant un attribut `dir` ?

##### Procédure de test

1. Retrouver dans le document les passages de textes qui utilisent une langue qui se lit dans le sens inverse de la langue du document (comme l’arabe ou l’hébreu pour le français par exemple).
2. Pour chaque passage de texte, vérifier que le passage de texte est contenu dans une balise qui possède un attribut `dir`.
3. Si c’est le cas pour chaque passage de texte, **le test est validé**.
#### Test 8.10.2

Dans chaque page web, chaque changement du [sens de lecture](00-glossaire.md#sens-lecture) (attribut `dir`) vérifie-t-il ces conditions ?

- La valeur de l’attribut `dir` est conforme (`rtl` ou `ltr`) ;
- La valeur de l’attribut `dir` est pertinente.

##### Procédure de test

1. Pour chaque passage de texte validé au test 8.10.1, vérifier que :
   - L’indication de sens de lecture est conforme (ltr, pour le sens « de gauche à droite » et rtl pour le sens « de droite à gauche ») ;
   - L’indication de sens de lecture est pertinente.
2. Si c’est le cas pour chaque passage de texte, **le test est validé**.
### Références WCAG

- 1.3.2 Meaningful Sequence (A)

**Techniques :**

- H56

---

