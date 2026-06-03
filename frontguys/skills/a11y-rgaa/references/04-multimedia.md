# Thématique 4 — Multimédia

## Table des matières

- [Critère 4.1 — Chaque média temporel pré-enregistré a-t-il, si nécessaire, une transcription textuelle ou une audiodescription (hors cas particuliers) ?](#critere-4-1)
- [Critère 4.2 — Pour chaque média temporel pré-enregistré ayant une transcription textuelle ou une audiodescription synchronisée, celles-ci sont-elles pertinentes (hors cas particuliers) ?](#critere-4-2)
- [Critère 4.3 — Chaque média temporel synchronisé pré-enregistré a-t-il, si nécessaire, des sous-titres synchronisés (hors cas particuliers) ?](#critere-4-3)
- [Critère 4.4 — Pour chaque média temporel synchronisé pré-enregistré ayant des sous-titres synchronisés, ces sous-titres sont-ils pertinents ?](#critere-4-4)
- [Critère 4.5 — Chaque média temporel pré-enregistré a-t-il, si nécessaire, une audiodescription synchronisée (hors cas particuliers) ?](#critere-4-5)
- [Critère 4.6 — Pour chaque média temporel pré-enregistré ayant une audiodescription synchronisée, celle-ci est-elle pertinente ?](#critere-4-6)
- [Critère 4.7 — Chaque média temporel est-il clairement identifiable (hors cas particuliers) ?](#critere-4-7)
- [Critère 4.8 — Chaque média non temporel a-t-il, si nécessaire, une alternative (hors cas particuliers) ?](#critere-4-8)
- [Critère 4.9 — Pour chaque média non temporel ayant une alternative, cette alternative est-elle pertinente ?](#critere-4-9)
- [Critère 4.10 — Chaque son déclenché automatiquement est-il contrôlable par l’utilisateur ?](#critere-4-10)
- [Critère 4.11 — La consultation de chaque média temporel est-elle, si nécessaire, contrôlable par le clavier et tout dispositif de pointage ?](#critere-4-11)
- [Critère 4.12 — La consultation de chaque média non temporel est-elle contrôlable par le clavier et tout dispositif de pointage ?](#critere-4-12)
- [Critère 4.13 — Chaque média temporel et non temporel est-il compatible avec les technologies d’assistance (hors cas particuliers) ?](#critere-4-13)

---

<a id="critere-4-1"></a>

## Critère 4.1 — Chaque média temporel pré-enregistré a-t-il, si nécessaire, une transcription textuelle ou une audiodescription (hors cas particuliers) ?

### Définitions

- [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise)
- [transcription textuelle](00-glossaire.md#transcription-textuelle-media-temporel)
- [audiodescription](00-glossaire.md#audiodescription-synchronisee-media-temporel)

### Cas particuliers

Il existe une gestion de cas particulier lorsque :

- Le [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) est utilisé à des fins décoratives (c’est-à-dire qu’il n’apporte aucune information) ;
- Le [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) est lui-même une alternative à un contenu de la page (une vidéo en langue des signes ou la vocalisation d’un texte, par exemple) ;
- Le [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) est utilisé pour accéder à une version agrandie ;
- Le [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) est utilisé comme un [CAPTCHA](00-glossaire.md#captcha) ;
- Le [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) fait partie d’un test qui deviendrait inutile si la [transcription textuelle](00-glossaire.md#transcription-textuelle-media-temporel), les [sous-titres synchronisés](00-glossaire.md#sous-titres-synchronises-objet-multimedia) ou l’[audiodescription](00-glossaire.md#audiodescription-synchronisee-media-temporel) étaient communiqués ;
- Pour les services de l’État, les collectivités territoriales et leurs établissements : si le [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) a été publié entre le 23 septembre 2019 et le 23 septembre 2020 sur un site internet, intranet ou extranet créé depuis le 23 septembre 2018, il est exempté de l’obligation d’accessibilité ;
- Pour les personnes de droit privé mentionnées aux 2° à 4° du I de l’article 47 de la loi du 11 février 2005 : si le [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) a été publié avant le 23 septembre 2020, il est exempté de l’obligation d’accessibilité.

Dans ces situations, le critère est non applicable.

Ce cas particulier s’applique également aux critères 4.2, 4.3, 4.5.

### Tests du critère

#### Test 4.1.1

Chaque [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) pré-enregistré seulement audio, vérifie-t-il, si nécessaire, l’une de ces conditions (hors cas particuliers) ?

- Il existe une [transcription textuelle](00-glossaire.md#transcription-textuelle-media-temporel) accessible via un [lien ou bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent) ;
- Il existe une [transcription textuelle](00-glossaire.md#transcription-textuelle-media-temporel) adjacente clairement identifiable.

##### Procédure de test

1. Retrouver dans le document les médias temporels (éléments `<audio>`, `<video>` ou `<object>`) seulement audio qui nécessitent une transcription textuelle ;
2. Pour chaque média temporel seulement audio, vérifier la présence d’une transcription textuelle :
   - Soit accessible au moyen d’un bouton ou d'un lien adjacent (une URL ou une ancre) ;
   - Soit adjacente clairement identifiable.
3. Si c’est le cas pour chaque média temporel, **le test est validé**.
#### Test 4.1.2

Chaque [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) pré-enregistré seulement vidéo vérifie-t-il, si nécessaire, l’une de ces conditions (hors cas particuliers) ?

- Il existe une [version alternative « audio seulement »](00-glossaire.md#version-alternative-audio-seulement) accessible via un [lien ou bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent) ;
- Il existe une [version alternative « audio seulement »](00-glossaire.md#version-alternative-audio-seulement) adjacente clairement identifiable ;
- Il existe une [transcription textuelle](00-glossaire.md#transcription-textuelle-media-temporel) accessible via un [lien ou bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent) ;
- Il existe une [transcription textuelle](00-glossaire.md#transcription-textuelle-media-temporel) adjacente clairement identifiable ;
- Il existe une [audiodescription](00-glossaire.md#audiodescription-synchronisee-media-temporel) synchronisée ;
- Il existe une version alternative avec une [audiodescription](00-glossaire.md#audiodescription-synchronisee-media-temporel) synchronisée accessible via un [lien ou bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent).

##### Procédure de test

1. Retrouver dans le document les médias temporels (éléments `<video>` ou `<object>`) seulement vidéo qui nécessitent une transcription textuelle ;
2. Pour chaque média temporel seulement vidéo, vérifier la présence :
   - Soit d’une version alternative audio seulement accessible au moyen d’un lien ou bouton adjacent (une URL ou une ancre) ;
   - Soit d’une version alternative audio seulement adjacente ;
   - Soit d’une transcription textuelle accessible au moyen d’un bouton ou d'un lien adjacent (une URL ou une ancre) ;
   - Soit d’une transcription textuelle adjacente clairement identifiable ;
   - Soit d’une audiodescription synchronisée ;
   - Soit d’une version alternative avec une audiodescription synchronisée accessible au moyen d’un bouton ou d'un lien adjacent (une URL ou une ancre).
3. Si c’est le cas pour chaque média temporel, **le test est validé**.
#### Test 4.1.3

Chaque [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré vérifie-t-il, si nécessaire, une de ces conditions (hors cas particuliers) ?

- Il existe une [transcription textuelle](00-glossaire.md#transcription-textuelle-media-temporel) accessible via un [lien ou bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent) ;
- Il existe une [transcription textuelle](00-glossaire.md#transcription-textuelle-media-temporel) adjacente clairement identifiable ;
- Il existe une [audiodescription](00-glossaire.md#audiodescription-synchronisee-media-temporel) synchronisée ;
- Il existe une version alternative avec une [audiodescription](00-glossaire.md#audiodescription-synchronisee-media-temporel) synchronisée accessible via un [lien ou bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent).

##### Procédure de test

1. Retrouver dans le document les médias temporels (éléments `<video>` ou `<object>`) synchronisés qui nécessitent une transcription textuelle ;
2. Pour chaque média temporel synchronisé, vérifier la présence :
   - Soit d’une transcription textuelle accessible au moyen d’un lien ou bouton adjacent (une URL ou une ancre) ;
   - Soit d’une transcription textuelle adjacente clairement identifiable ;
   - Soit d’une audiodescription synchronisée ;
   - Soit d’une version alternative avec une audiodescription synchronisée accessible au moyen d’un bouton ou d'un lien adjacent (une URL ou une ancre).
3. Si c’est le cas pour chaque média temporel, **le test est validé**.

Note : le critère est non applicable dans les situations où :

- Le média temporel est utilisé à des fins décoratives (c'est-à-dire qu'il n'apporte aucune information) ;
- Le média temporel est lui-même une alternative à un contenu de la page (une vidéo en langue des signes ou la vocalisation d'un texte, par exemple) ;
- Le média temporel est utilisé pour accéder à une version agrandie ;
- Le média temporel est utilisé comme un CAPTCHA ;
- Le média temporel fait partie d'un test qui deviendrait inutile si la transcription textuelle, les sous-titres synchronisés ou l'audiodescription étaient communiqués ;
- Pour les services de l’État, les collectivités territoriales et leurs établissements : si le média temporel a été publié entre le 23 septembre 2019 et le 23 septembre 2020 sur un site internet, intranet ou extranet créé depuis le 23 septembre 2018, il est exempté de l’obligation d’accessibilité ;
- Pour les personnes de droit privé mentionnées aux 2° à 4° du I de l’article 47 de la loi du 11 février 2005 : si le média temporel a été publié avant le 23 septembre 2020, il est exempté de l’obligation d’accessibilité.
### Références WCAG

- 1.2.1 Audio-only and Video-only (Prerecorded) (A)
- 1.2.3 Audio Description or Media Alternative (Prerecorded) (A)

**Techniques :**

- G58
- G69
- G78
- G158
- G159
- G173
- G8
- G166
- H96
- SM6
- SM7

---

<a id="critere-4-2"></a>

## Critère 4.2 — Pour chaque média temporel pré-enregistré ayant une transcription textuelle ou une audiodescription synchronisée, celles-ci sont-elles pertinentes (hors cas particuliers) ?

### Définitions

- [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise)
- [transcription textuelle](00-glossaire.md#transcription-textuelle-media-temporel)
- [audiodescription](00-glossaire.md#audiodescription-synchronisee-media-temporel)

### Cas particuliers

Voir cas particuliers critère 4.1.

### Tests du critère

#### Test 4.2.1

Pour chaque [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) pré-enregistré seulement audio, ayant une [transcription textuelle](00-glossaire.md#transcription-textuelle-media-temporel), celle-ci est-elle pertinente (hors cas particuliers) ?

##### Procédure de test

1. Retrouver dans le document les médias temporels pré-enregistrés seulement audio qui possèdent une transcription textuelle ;
2. Pour chaque média temporel seulement audio, vérifier que transcription textuelle est pertinente ;
3. Si c’est le cas pour chaque média temporel, **le test est validé**.
#### Test 4.2.2

Chaque [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) pré-enregistré seulement vidéo vérifie-t-il une de ces conditions (hors cas particuliers) ?

- La [transcription textuelle](00-glossaire.md#transcription-textuelle-media-temporel) est pertinente ;
- L’[audiodescription](00-glossaire.md#audiodescription-synchronisee-media-temporel) synchronisée est pertinente ;
- L’[audiodescription](00-glossaire.md#audiodescription-synchronisee-media-temporel) synchronisée de la version alternative est pertinente ;
- La version alternative audio seulement est pertinente.

##### Procédure de test

1. Retrouver dans le document les médias temporels pré-enregistrés seulement vidéo qui possèdent une transcription textuelle ;
2. Pour chaque média temporel seulement vidéo, vérifier la pertinence :
   - Soit de la transcription textuelle ;
   - Soit de l’audiodescription synchronisée ;
   - Soit de l’audiodescription synchronisée de la version alternative ;
   - Soit de la version alternative audio seulement.
3. Si c’est le cas pour chaque média temporel, **le test est validé**.
#### Test 4.2.3

Chaque [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré vérifie-t-il une de ces conditions (hors cas particuliers) ?

- La [transcription textuelle](00-glossaire.md#transcription-textuelle-media-temporel) est pertinente ;
- L’[audiodescription](00-glossaire.md#audiodescription-synchronisee-media-temporel) synchronisée est pertinente ;
- L’[audiodescription](00-glossaire.md#audiodescription-synchronisee-media-temporel) synchronisée de la version alternative est pertinente.

##### Procédure de test

1. Retrouver dans le document les médias temporels pré-enregistrés synchronisés ;
2. Pour chaque média temporel synchronisé, vérifier la pertinence :
   - Soit de la transcription textuelle ;
   - Soit de l’audiodescription synchronisée ;
   - Soit de l’audiodescription synchronisée de la version alternative.
3. Si c’est le cas pour chaque média temporel, **le test est validé**.
### Références WCAG

- 1.2.1 Audio-only and Video-only (Prerecorded) (A)
- 1.2.3 Audio Description or Media Alternative (Prerecorded) (A)

**Techniques :**

- F30
- F67
- SM6
- SM7

---

<a id="critere-4-3"></a>

## Critère 4.3 — Chaque média temporel synchronisé pré-enregistré a-t-il, si nécessaire, des sous-titres synchronisés (hors cas particuliers) ?

### Définitions

- [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise)
- [sous-titres synchronisés](00-glossaire.md#sous-titres-synchronises-objet-multimedia)

### Cas particuliers

Voir cas particuliers critère 4.1.

### Tests du critère

#### Test 4.3.1

Chaque [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré vérifie-t-il, si nécessaire, l’une de ces conditions (hors cas particuliers) ?

- Le [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) synchronisé possède des [sous-titres synchronisés](00-glossaire.md#sous-titres-synchronises-objet-multimedia) ;
- Il existe une version alternative possédant des [sous-titres synchronisés](00-glossaire.md#sous-titres-synchronises-objet-multimedia) accessible via un [lien ou bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent).

##### Procédure de test

1. Retrouver dans le document les médias temporels pré-enregistrés synchronisés ;
2. Pour chaque média temporel synchronisé, vérifier la présence :
   - Soit de sous-titres synchronisés ;
   - Soit d’une version alternative possédant des sous-titres synchronisés accessible au moyen d’un lien ou d’un bouton adjacent.
3. Si c’est le cas pour chaque média temporel, **le test est validé**.
#### Test 4.3.2

Pour chaque [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré possédant des [sous-titres synchronisés](00-glossaire.md#sous-titres-synchronises-objet-multimedia) diffusés via une balise `<track>`, la balise `<track>` possède-t-elle un attribut `kind="captions"` ?

##### Procédure de test

1. Retrouver dans le document les médias temporels synchronisés possédant des sous-titres synchronisés au moyen d’un élément `<track>` ;
2. Pour chaque média temporel synchronisé, vérifier que la balise `<track>` possède un attribut `kind="caption"` ;
3. Si c’est le cas pour chaque média temporel synchronisé, **le test est validé**.
### Références WCAG

- 1.2.2 Captions (Prerecorded) (A)

**Techniques :**

- G58
- G93
- G87
- H95
- SM11
- SM12
- F74
- F75

---

<a id="critere-4-4"></a>

## Critère 4.4 — Pour chaque média temporel synchronisé pré-enregistré ayant des sous-titres synchronisés, ces sous-titres sont-ils pertinents ?

### Définitions

- [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise)
- [sous-titres synchronisés](00-glossaire.md#sous-titres-synchronises-objet-multimedia)

### Tests du critère

#### Test 4.4.1

Pour chaque [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré ayant des [sous-titres synchronisés](00-glossaire.md#sous-titres-synchronises-objet-multimedia), ces sous-titres sont-ils pertinents ?

##### Procédure de test

1. Retrouver dans le document les médias temporels synchronisés possédant des sous-titres synchronisés ;
2. Pour chaque média temporel synchronisé, vérifier que les sous-titres sont :
   - Pertinents (toutes les informations sonores importantes sont présentes, les dialogues notamment) ;
   - Et correctement synchronisés.
3. Si c’est le cas pour chaque média temporel synchronisé, **le test est validé**.
### Références WCAG

- 1.2.2 Captions (Prerecorded) (A)

**Techniques :**

- G93
- G87
- SM11
- SM12
- F8
- F74
- F75

---

<a id="critere-4-5"></a>

## Critère 4.5 — Chaque média temporel pré-enregistré a-t-il, si nécessaire, une audiodescription synchronisée (hors cas particuliers) ?

### Définitions

- [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise)
- [audiodescription](00-glossaire.md#audiodescription-synchronisee-media-temporel)

### Cas particuliers

Voir cas particuliers critère 4.1.

### Tests du critère

#### Test 4.5.1

Chaque [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) pré-enregistré seulement vidéo vérifie-t-il, si nécessaire, une de ces conditions (hors cas particuliers) ?

- Il existe une [audiodescription](00-glossaire.md#audiodescription-synchronisee-media-temporel) synchronisée ;
- Il existe une version alternative avec une [audiodescription](00-glossaire.md#audiodescription-synchronisee-media-temporel) synchronisée.

##### Procédure de test

1. Retrouver dans le document les médias temporels pré-enregistrés seulement vidéo qui nécessitent une audiodescription ;
2. Pour chaque média temporel seulement vidéo, vérifier la présence :
   - Soit d’une audiodescription synchronisée ;
   - Soit d’une version alternative avec une audiodescription synchronisée accessible au moyen d’un bouton ou d'un lien adjacent (une URL ou une ancre).
3. Si c’est le cas pour chaque média temporel seulement vidéo, **le test est validé**.
#### Test 4.5.2

Chaque [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré vérifie-t-il, si nécessaire, une de ces conditions (hors cas particuliers) ?

- Il existe une [audiodescription](00-glossaire.md#audiodescription-synchronisee-media-temporel) synchronisée ;
- Il existe une version alternative avec une [audiodescription](00-glossaire.md#audiodescription-synchronisee-media-temporel) synchronisée.

##### Procédure de test

1. Retrouver dans le document les médias temporels pré-enregistrés synchronisés qui nécessitent une audiodescription ;
2. Pour chaque média temporel synchronisé, vérifier la présence :
   - Soit d’une audiodescription synchronisée ;
   - Soit d’une version alternative avec une audiodescription synchronisée accessible au moyen d’un bouton ou d'un lien adjacent (une URL ou une ancre).
3. Si c’est le cas pour chaque média temporel synchronisé, **le test est validé**.
### Références WCAG

- 1.2.5 Audio Description (Prerecorded) (AA)

**Techniques :**

- G8
- G58
- G78
- G173
- H96
- SM1
- SM2
- SM6
- SM7

---

<a id="critere-4-6"></a>

## Critère 4.6 — Pour chaque média temporel pré-enregistré ayant une audiodescription synchronisée, celle-ci est-elle pertinente ?

### Définitions

- [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise)
- [audiodescription](00-glossaire.md#audiodescription-synchronisee-media-temporel)

### Tests du critère

#### Test 4.6.1

Pour chaque [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) pré-enregistré seulement vidéo ayant une [audiodescription](00-glossaire.md#audiodescription-synchronisee-media-temporel) synchronisée, celle-ci est-elle pertinente ?

##### Procédure de test

1. Retrouver dans le document les médias temporels seulement vidéo qui possèdent une audiodescription ;
2. Pour chaque média temporel, vérifier que l’audiodescription synchronisée est pertinente (toutes les informations visuelles qu’il est possible de vocaliser dans les blancs de la bande son principale sont présentes, les textes incrustés notamment) ;
3. Si c’est le cas pour chaque média temporel seulement vidéo, **le test est validé**.
#### Test 4.6.2

Pour chaque [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) synchronisé ayant une [audiodescription](00-glossaire.md#audiodescription-synchronisee-media-temporel) synchronisée, celle-ci est-elle pertinente ?

##### Procédure de test

1. Retrouver dans le document les médias temporels synchronisés qui possèdent une audiodescription ;
2. Pour chaque média temporel, vérifier que l’audiodescription synchronisée est pertinente (toutes les informations visuelles qu’il est possible de vocaliser dans les blancs de la bande son principale sont présentes, les textes incrustés notamment) ;
3. Si c’est le cas pour chaque média temporel synchronisé, **le test est validé**.
### Références WCAG

- 1.2.5 Audio Description (Prerecorded) (AA)

**Techniques :**

- SM1
- SM2
- SM6
- SM7

---

<a id="critere-4-7"></a>

## Critère 4.7 — Chaque média temporel est-il clairement identifiable (hors cas particuliers) ?

### Définitions

- [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise)

### Cas particuliers

Il existe une gestion de cas particulier lorsque le [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) est utilisé à des fins décoratives (c’est-à-dire qu’il n’apporte aucune information). Dans cette situation, le critère est non applicable.

### Tests du critère

#### Test 4.7.1

Pour chaque [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) seulement son, seulement vidéo ou synchronisé, le contenu textuel adjacent permet-il d’identifier clairement le [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) (hors cas particuliers) ?

##### Procédure de test

1. Retrouver dans le document les médias temporels pré-enregistrés seulement vidéo, audio ou synchronisés ;
2. Pour chaque média temporel, vérifier que :
   - Un passage de texte (un titre ou un paragraphe, par exemple) qui précède ou suit immédiatement le média temporel, permet de l’identifier ;
   - Et le passage de texte est situé à l’extérieur du lecteur de contenu multimédia si ce dernier fait appel à la technologie Flash.
3. Si c’est le cas pour chaque média temporel, **le test est validé**.
### Références WCAG

- 1.1.1 Non-text Content (A)

**Techniques :**

- G68
- G100

---

<a id="critere-4-8"></a>

## Critère 4.8 — Chaque média non temporel a-t-il, si nécessaire, une alternative (hors cas particuliers) ?

### Définitions

- [média non temporel](00-glossaire.md#media-non-temporel)

### Cas particuliers

Il existe une gestion de cas particulier lorsque :

- Le [média non temporel](00-glossaire.md#media-non-temporel) est utilisé à des fins décoratives (c’est-à-dire qu’il n’apporte aucune information) ;
- Le [média non temporel](00-glossaire.md#media-non-temporel) est diffusé dans un [environnement maîtrisé](00-glossaire.md#environnement-maitrise) ;
- Le [média non temporel](00-glossaire.md#media-non-temporel) est inséré via JavaScript en vérifiant la présence et la version du plug-in, en remplacement d’un [contenu alternatif](00-glossaire.md#contenu-alternatif) déjà présent.

Dans ces situations, le critère est non applicable.

### Tests du critère

#### Test 4.8.1

Chaque [média non temporel](00-glossaire.md#media-non-temporel) vérifie-t-il, si nécessaire, une de ces conditions (hors cas particuliers) ?

- Un [lien ou un bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent), clairement identifiable, permet d’accéder à une page contenant une alternative ;
- Un [lien ou un bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent), clairement identifiable, permet d’accéder à une alternative dans la page.

##### Procédure de test

1. Retrouver dans le document les médias non temporels ;
2. Pour chaque média non temporel, vérifier qu’un lien ou un bouton adjacent, clairement identifiable :
   - Soit contient l’adresse (url) d’une page contenant une alternative ;
   - Soit permet d’accéder à une alternative dans la page.
3. Si c’est le cas pour chaque média non temporel, **le test est validé**.
#### Test 4.8.2

Chaque [média non temporel](00-glossaire.md#media-non-temporel) associé à une alternative vérifie-t-il une de ces conditions (hors cas particuliers) ?

- La page référencée par le [lien ou bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent) est accessible ;
- L’alternative dans la page, référencée par le [lien ou bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent), est accessible.

##### Procédure de test

1. Retrouver dans le document les médias non temporels associés à une alternative ;
2. Pour chaque média non temporel, vérifier que :
   - La page référencée par le lien ou le bouton adjacent est accessible ;
   - L’alternative dans la page, référencée par le lien ou le bouton adjacent, est accessible.
3. Si c’est le cas pour chaque média non temporel, **le test est validé**.

Note : le critère est non applicable dans les situations où :

- Le média non temporel est utilisé à des fins décoratives (c'est-à-dire qu'il n'apporte aucune information) ;
- Le média non temporel est diffusé dans un environnement maîtrisé ;
- Le média non temporel est inséré via JavaScript en vérifiant la présence et la version du plug-in, en remplacement d'un contenu alternatif déjà présent.
### Références WCAG

- 1.1.1 Non-text Content (A)

**Techniques :**

- H35
- H46

---

<a id="critere-4-9"></a>

## Critère 4.9 — Pour chaque média non temporel ayant une alternative, cette alternative est-elle pertinente ?

### Définitions

- [média non temporel](00-glossaire.md#media-non-temporel)

### Tests du critère

#### Test 4.9.1

Pour chaque [média non temporel](00-glossaire.md#media-non-temporel) ayant une alternative, cette alternative permet-elle d’accéder au même contenu et à des fonctionnalités similaires ?

##### Procédure de test

1. Retrouver dans le document les médias non temporels associés à une alternative ;
2. Pour chaque média non temporel, vérifier que l’alternative est pertinente (elle permet d’accéder au même contenu et à des fonctionnalités similaires) ;
3. Si c’est le cas pour chaque média non temporel, **le test est validé**.
### Références WCAG

- 1.1.1 Non-text Content (A)

**Techniques :**

- H46
- F30

---

<a id="critere-4-10"></a>

## Critère 4.10 — Chaque son déclenché automatiquement est-il contrôlable par l’utilisateur ?

### Définitions

- [contrôlable](00-glossaire.md#controle-son-declenche-automatiquement)

### Tests du critère

#### Test 4.10.1

Chaque séquence sonore déclenchée automatiquement via une balise `<object>`, `<video>`, `<audio>`, `<embed>`, `<bgsound>` ou un code JavaScript vérifie-t-elle une de ces conditions ?

- La séquence sonore a une durée inférieure ou égale à 3 secondes ;
- La séquence sonore peut être stoppée sur action de l’utilisateur ;
- Le volume de la séquence sonore peut être contrôlé par l’utilisateur indépendamment du contrôle de volume du système.

##### Procédure de test

1. Au chargement du document, si un son se déclenche automatiquement, vérifier que :
   - Soit la séquence sonore a une durée inférieure ou égale à 3 secondes ;
   - Soit un dispositif (un bouton par exemple), sur l’élément ayant déclenché le son (voir note), ou dans la page, permet de le stopper ;
   - Soit le volume de la séquence peut être contrôlé par l’utilisateur, indépendamment du contrôle de volume du système.
2. Si c’est le cas, **le test est validé**.

Note : les éléments suivants sont susceptibles de déclencher des sons au chargement de la page : éléments `<audio>`, `<video>`, `<object>`, `<embed>`, `<bgsound>` ou un code JavaScript (utilisation de la Web Audio API, par exemple).
### Références WCAG

- 1.4.2 Audio Control (A)

**Techniques :**

- G60
- G170
- G171
- F23
- F93

---

<a id="critere-4-11"></a>

## Critère 4.11 — La consultation de chaque média temporel est-elle, si nécessaire, contrôlable par le clavier et tout dispositif de pointage ?

### Définitions

- [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise)
- [contrôlable par le clavier et tout dispositif de pointage](00-glossaire.md#accessible-et-activable-par-clavier-et-tout-dispositif-pointage)

### Tests du critère

#### Test 4.11.1

Chaque [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) a-t-il, si nécessaire, les fonctionnalités de [contrôle de sa consultation](00-glossaire.md#controle-consultation-media-temporel) ?

##### Procédure de test

1. Retrouver dans le document les médias temporels ;
2. Pour chaque média temporel, vérifier la présence des fonctionnalités obligatoires de contrôle de la consultation :
   - Au minimum : lecture, pause ou stop ;
   - Si le média a du son, il doit avoir une fonctionnalité d’activation / désactivation du son ;
   - Si le média a des sous-titres, il doit avoir une fonctionnalité de contrôle de l’apparition/disparition des sous-titres ;
   - Si le média a une audiodescription, il doit avoir une fonctionnalité de contrôle de l’apparition/disparition de l’audiodescription.
3. Si c’est le cas pour chaque média temporel, **le test est validé**.
#### Test 4.11.2

Pour chaque [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise), chaque fonctionnalité vérifie-t-elle une de ces conditions ?

- La fonctionnalité est [accessible par le clavier et tout dispositif de pointage](00-glossaire.md#accessible-et-activable-par-clavier-et-tout-dispositif-pointage) ;
- Une fonctionnalité [accessible par le clavier et tout dispositif de pointage](00-glossaire.md#accessible-et-activable-par-clavier-et-tout-dispositif-pointage) permettant de réaliser la même action est présente dans la page.

##### Procédure de test

1. Retrouver dans le document les médias temporels pourvus de fonctionnalités de contrôle ;
2. Pour chaque média temporel, vérifier que :
   - Soit la fonctionnalité est accessible par le clavier et tout dispositif de pointage ;
   - Soit une fonctionnalité accessible par le clavier et tout dispositif de pointage permettant de réaliser la même action est présente dans la page.
3. Si c’est le cas pour chaque média temporel, **le test est validé**.
#### Test 4.11.3

Pour chaque [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise), chaque fonctionnalité vérifie-t-elle une de ces conditions ?

- La fonctionnalité est [activable par le clavier et tout dispositif de pointage](00-glossaire.md#accessible-et-activable-par-clavier-et-tout-dispositif-pointage) ;
- Une fonctionnalité [activable par le clavier et tout dispositif de pointage](00-glossaire.md#accessible-et-activable-par-clavier-et-tout-dispositif-pointage) permettant de réaliser la même action est présente dans la page.

##### Procédure de test

1. Retrouver dans le document les médias temporels pourvus de fonctionnalités de contrôle ;
2. Pour chaque média temporel, vérifier que :
   - Soit la fonctionnalité est activable par le clavier et tout dispositif de pointage ;
   - Soit une fonctionnalité activable par le clavier et tout dispositif de pointage permettant de réaliser la même action est présente dans la page.
3. Si c’est le cas pour chaque média temporel, **le test est validé**.
### Références WCAG

- 2.1.1 Keyboard (A)
- 2.1.2 No Keyboard Trap (A)

**Techniques :**

- G4
- G90
- G202

---

<a id="critere-4-12"></a>

## Critère 4.12 — La consultation de chaque média non temporel est-elle contrôlable par le clavier et tout dispositif de pointage ?

### Définitions

- [média non temporel](00-glossaire.md#media-non-temporel)
- [contrôlable par le clavier et tout dispositif de pointage](00-glossaire.md#accessible-et-activable-par-clavier-et-tout-dispositif-pointage)

### Tests du critère

#### Test 4.12.1

Pour chaque [média non temporel](00-glossaire.md#media-non-temporel), chaque fonctionnalité vérifie-t-elle une de ces conditions ?

- La fonctionnalité est [accessible par le clavier et tout dispositif de pointage](00-glossaire.md#accessible-et-activable-par-clavier-et-tout-dispositif-pointage) ;
- Une fonctionnalité [accessible par le clavier et tout dispositif de pointage](00-glossaire.md#accessible-et-activable-par-clavier-et-tout-dispositif-pointage) permettant de réaliser la même action est présente dans la page.

##### Procédure de test

1. Retrouver dans le document les médias non temporels pourvus de fonctionnalités de contrôle ;
2. Pour chaque média non temporel, vérifier que :
   - Soit la fonctionnalité est accessible par le clavier et tout dispositif de pointage ;
   - Soit une fonctionnalité accessible par le clavier et tout dispositif de pointage permettant de réaliser la même action est présente dans la page.
3. Si c’est le cas pour chaque média non temporel, **le test est validé**.
#### Test 4.12.2

Pour chaque [média non temporel](00-glossaire.md#media-non-temporel), chaque fonctionnalité vérifie-t-elle une de ces conditions ?

- La fonctionnalité est [activable par le clavier et tout dispositif de pointage](00-glossaire.md#accessible-et-activable-par-clavier-et-tout-dispositif-pointage) ;
- Une fonctionnalité [activable par le clavier et tout dispositif de pointage](00-glossaire.md#accessible-et-activable-par-clavier-et-tout-dispositif-pointage) permettant de réaliser la même action est présente dans la page.

##### Procédure de test

1. Retrouver dans le document les médias non temporels pourvus de fonctionnalités de contrôle ;
2. Pour chaque média non temporel, vérifier que :
   - Soit la fonctionnalité est activable par le clavier et tout dispositif de pointage ;
   - Soit une fonctionnalité activable par le clavier et tout dispositif de pointage permettant de réaliser la même action est présente dans la page.
3. Si c’est le cas pour chaque média non temporel, **le test est validé**.
### Références WCAG

- 2.1.1 Keyboard (A)
- 2.1.2 No Keyboard Trap (A)

**Techniques :**

- G4
- G90

---

<a id="critere-4-13"></a>

## Critère 4.13 — Chaque média temporel et non temporel est-il compatible avec les technologies d’assistance (hors cas particuliers) ?

### Définitions

- [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise)
- [non temporel](00-glossaire.md#media-non-temporel)
- [compatible avec les technologies d’assistance](00-glossaire.md#compatible-avec-technologies-assistance)

### Cas particuliers

Il existe une gestion de cas particulier lorsque le [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) ou [non temporel](00-glossaire.md#media-non-temporel) est utilisé à des fins décoratives (c’est-à-dire qu’il n’apporte aucune information).

Dans ces situations, le critère est non applicable.

### Tests du critère

#### Test 4.13.1

Chaque [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) et [non temporel](00-glossaire.md#media-non-temporel) vérifie-t-il une de ces conditions (hors cas particuliers) ?

- Le nom, le rôle, la valeur, le paramétrage et les changements d’états des composants d’interfaces sont accessibles aux technologies d’assistance via une API d’accessibilité ;
- Une alternative [compatible avec une API d’accessibilité](00-glossaire.md#compatible-avec-technologies-assistance) permet d’accéder aux mêmes fonctionnalités.

##### Procédure de test

1. Retrouver dans le document les médias temporels et non temporels ;
2. Pour chaque média, vérifier que :
   - Soit le nom, le rôle, la valeur, le paramétrage et les changements d’états des composants d’interfaces sont accessibles aux technologies d’assistance via une API d’accessibilité (par exemple, les zones mises à jour dynamiquement dans un lecteur vidéo sont correctement restituées) ;
   - Soit une alternative compatible avec une API d’accessibilité permet d’accéder aux mêmes fonctionnalités.
3. Si c’est le cas pour chaque média temporel ou non temporel, **le test est validé**.
#### Test 4.13.2

Chaque [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) et [non temporel](00-glossaire.md#media-non-temporel) qui possède une alternative [compatible avec les technologies d’assistance](00-glossaire.md#compatible-avec-technologies-assistance), vérifie-t-il une de ces conditions ?

- L’alternative est adjacente au [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) ou [non temporel](00-glossaire.md#media-non-temporel) ;
- L’alternative est accessible via un [lien ou bouton adjacent](00-glossaire.md#lien-ou-bouton-adjacent) ;
- Un mécanisme permet de remplacer le [média temporel](00-glossaire.md#media-temporel-type-son-video-et-synchronise) ou [non temporel](00-glossaire.md#media-non-temporel) par son alternative.

##### Procédure de test

1. Retrouver dans le document les médias temporels et non temporels qui possèdent une alternative compatible avec les technologies d’assistance ;
2. Pour chaque média, vérifier que :
   - Soit l’alternative est adjacente au média temporel ou non temporel ;
   - Soit l’alternative est accessible au moyen d’un lien ou d’un bouton adjacent ;
   - Soit un mécanisme permet de remplacer le média temporel ou non temporel par son alternative.
3. Si c’est le cas pour chaque média temporel ou non temporel, **le test est validé**.
### Références WCAG

- 4.1.2 Name, role, Value (A)

**Techniques :**

- G10
- G135
- F15
- F54

---

