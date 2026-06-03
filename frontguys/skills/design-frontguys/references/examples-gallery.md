---
type: examples-gallery
status: ✅ stable
last_synced: 2026-05-29
source: knowtion/refonte/content-system/ux-writing (Approche, Homepage, À propos, Expertises)
---

# Examples Gallery, Frontguys

Galerie d'exemples avant/après tirés des révisions UX writing canoniques (pages Approche, Homepage, À propos, Expertises). À mobiliser en complément de `voice-rules.md` et `voice-vocabulary.md` pour les productions longues (landing, article, page de positionnement).

## Quand charger ce fichier

- Rédaction d'une landing, d'un article ou d'une page de positionnement
- Audit / correction d'un texte existant qui ne sonne pas Frontguys
- Hésitation sur la formulation d'un hero, d'un CTA final, d'une section conviction

**Ne pas charger** pour une tâche courte isolée (un seul CTA, un seul titre). Trop coûteux en tokens.

## Patterns de correction récurrents

### 1. Anglicismes et jargon agile / conseil

Le ToV Frontguys bannit systématiquement les anglicismes décoratifs et le jargon conseil. Substituts FALC à utiliser :

| ❌ Avant | ✅ Après | Source |
|---|---|---|
| « cadrage » | « définition » | Page Approche |
| « gouvernance claire » | « jalons clairs » | Page Approche |
| « vélocité » | « rapidité » | Page Approche |
| « industrialiser la cohérence » | « accélérer les livraisons » | Page Approche |
| « delivery » | « livraison » | Page À propos |
| « process » | « méthode » ou « collaboration » | Page Approche / Homepage |
| « interdisciplinaire » | « entre métiers » | Page Approche |
| « dette d'interface » / « dette technique » | « incohérences d'interface » | Page Approche / Expertises |
| « scalables » | « évolutifs » | Homepage |
| « silo » | « chacune de leur côté » | Homepage |
| « levier business » | « levier de performance » | Page Approche |
| « rituels » / « flux » (agile) | « organiser les équipes » | Homepage |
| « mise en qualité » | « montée en qualité » | Homepage |
| « SMART » (objectifs) | retirer, parler en bénéfice client | Page Approche |

### 2. Concepts vagues, à remplacer par du concret

| ❌ Avant | ✅ Après | Source |
|---|---|---|
| « Créez de l'impact sociétal » | « Sécurisez votre conformité » | Tone of Voice |
| « Notre approche transformative » | « Voyez ce qui nous distingue. Concrètement. » | Page Approche |
| « Le design est un levier business » | « Le design n'est pas accessoire. C'est ce qui fait la différence. » | Homepage |
| « Frontguys n'est pas un studio design. Pas une ESN. Pas du conseil abstrait. » | « Voyez ce qui nous distingue. Concrètement. » | Page Approche |
| « Quatre convictions qui guident toutes nos interventions » | « Quatre principes qui changent votre façon de travailler » | Page Approche |
| « Renforcez vos équipes. Stratégie, design, dev pour livrer des interfaces qui fonctionnent. » | « Vos équipes s'alignent, accélèrent et livrent ce qui compte vraiment. » | Homepage |
| « Mission, exigence, relations humaines au cœur de la collaboration » | « Nous plaçons l'exigence et l'humain au centre de chaque collaboration » | Page À propos |

### 3. Alternance Nous / Vous mal appliquée

La règle : Nous au niveau 1 (titres H1/H2), Vous au niveau 2 (sous-titres). Si le titre commence par « Nous », le sous-titre doit basculer.

| ❌ Avant (Nous + Nous) | ✅ Après (Nous + Vous) | Source |
|---|---|---|
| H2 « Notre modèle n'est pas classique » + sous-titre « Frontguys n'est pas un studio… » | H2 inchangé + sous-titre « Voyez ce qui nous distingue. Concrètement. » | Page Approche |
| H2 « Nous connaissons vos enjeux » + sous-titre « Ces enjeux reviennent dans nos missions » | H2 inchangé + sous-titre « Vous n'êtes pas seuls à y faire face. » | Homepage |
| H2 « Nous pilotons par la valeur » + sous-titre « Gouvernance claire, objectifs SMART, indicateurs partagés » | H2 inchangé + sous-titre « Pour que vous gardiez la visibilité à chaque étape. » | Page Approche |
| H2 « Nos résultats » + sous-titre « Des projets ambitieux, des équipes exigeantes » | H2 inchangé + sous-titre « Vous avez des ambitions. Nous les concrétisons. » | Homepage |
| H2 « Trouvez l'expertise qui correspond à votre situation » + sous-titre « Vous n'avez pas à connaître le nom de l'expertise, décrivez votre problème » | H2 « Nous écoutons d'abord. Nous orientons ensuite. » + sous-titre « Décrivez ce qui bloque. Nous trouvons la bonne entrée. » | Page Expertises |

### 4. Auto-valorisation à effacer

| ❌ Avant | ✅ Après | Source |
|---|---|---|
| « Un premier échange avec un expert, sans argumentaire commercial » | « Racontez-nous votre projet. Sans engagement. » | Page Approche |
| H2 « Découvrez nos expertises à travers des cas réels » | H2 « Nous préférons montrer plutôt que promettre. » | Page Expertises |
| H2 « Découvrez comment nous pouvons intervenir sur votre contexte » | H2 « Pas sûr de l'expertise qui vous correspond ? Parlons-en. » | Page À propos |
| « Nos guildes internes réunissent nos consultants sur des sujets de fond » | « Nos guildes internes réunissent nos consultants. Vous en bénéficiez directement : chaque production devient un contenu que vous pouvez utiliser. » | Page À propos |

### 5. Voix passive, à mettre à l'actif Nous

| ❌ Avant (passif) | ✅ Après (actif Nous) | Source |
|---|---|---|
| « L'accessibilité est simplifiée » | « Nous simplifions vos démarches » | Tone of Voice |
| « Le design system est structuré » | « Nous structurons votre design system » | Voice Rules |
| « Une démarche est structurée pour vous » | « Nous structurons votre accessibilité numérique » | Voice Rules |

### 6. Tout-en-caps inutile

| ❌ Avant | ✅ Après | Source |
|---|---|---|
| H2 « DÉMARRONS ENSEMBLE » | H2 « Démarrons ensemble » | Homepage |
| Eyebrow « NOS EXPERTISES » | Eyebrow « Nos expertises » | Page Expertises |

Note : les surtitle / eyebrow gardent souvent une casse normale dans le copy, et le style typographique (text style Surtitle du DS) applique le `text-transform: uppercase` au rendu si nécessaire. Ne pas combiner les deux.

## Patterns d'ouverture canoniques (extraits)

### Hero pattern (titre + sous-titre + 2 CTAs)

**Page Approche** :
```
H1   : Nous apportons clarté, confiance, efficacité et impact.
Sub  : Renforcez vos équipes. Nous réunissons stratégie, design et développement pour livrer des interfaces qui fonctionnent.
CTA  : Demandez un diagnostic + Découvrez nos méthodes
```

**Homepage** :
```
H1   : Nous clarifions vos objectifs, fluidifions vos organisations, renforçons vos produits.
Sub  : Vos équipes s'alignent, accélèrent et livrent ce qui compte vraiment.
CTA  : Demandez un diagnostic + Découvrez notre approche
```

**Page Expertises** :
```
H1   : Nous intervenons sur quatre leviers pour accélérer vos équipes.
Sub  : Peu importe où vous en êtes, nous avons l'expertise qui correspond à votre situation.
CTA  : Demandez un diagnostic + Découvrez nos cas clients
```

### Section différenciation humble

**Page Approche** :
```
H2   : Notre modèle n'est pas classique
Sub  : Voyez ce qui nous distingue. Concrètement.
Items : "Pas seulement du design", "Pas un renfort junior", "Pas du conseil sans suite", "Pas une promesse cosmétique"
```

Pattern « Pas X. Mais Y. » : formulation par négation modeste plutôt que par superlatif.

### Section conviction (4 piliers à reformuler)

**Page Approche** (corrigée) :
```
H2     : Nous avons des convictions profondes
Sub    : Quatre principes qui changent votre façon de travailler.
01 · Le design et le développement sont un levier de performance.
       Pas un coût, pas un embellissement. Une décision stratégique qui accélère
       les livraisons et améliore les résultats.
02 · La collaboration entre métiers crée la qualité.
       Design et développement qui travaillent ensemble réduisent les erreurs,
       les allers-retours et les incohérences d'interface.
03 · Les outils doivent servir les équipes.
       Un design system ou une méthode qui ne sont pas adoptés ne valent rien.
       Nous mettons les équipes au centre.
04 · L'impact du design est mesurable.
       Rapidité, rétention, cohérence : chaque mission doit produire un résultat
       partageable et pilotable.
```

### CTA final empathique

**Page Approche** :
```
H2     : Parlons de vos enjeux
Body   : Racontez-nous votre projet. Sans engagement.
Button : Parlez de votre projet
```

**Homepage** :
```
H2     : Démarrons ensemble
Body   : Le design n'est pas accessoire. C'est ce qui fait la différence.
Note   : Gratuit. Sans engagement. On identifie vos besoins en 30 minutes.
Button : Planifiez un échange
```

**Page À propos / Expertises** :
```
H2     : Nous pouvons vous aider à trouver la bonne entrée.
Body   : Un premier échange suffit pour identifier l'enjeu principal et la bonne entrée.
Button 1 : Parlez à un expert
Button 2 : Demandez un diagnostic
```

## Bilan métrique

Sur les 4 pages révisées, environ **40 % des éléments éditoriaux sont modifiés** lors d'une révision ToV (16/37 sur Approche, 20/47 sur Homepage, 19/35 sur À propos, 12/34 sur Expertises). Les autres 60 % étaient déjà conformes.

Les corrections les plus fréquentes :

1. **Anglicismes / jargon agile** (cadrage, gouvernance, vélocité, delivery, process, scalables, rituels, flux)
2. **Alternance Nous/Vous mal appliquée** (sous-titres qui répètent « Nous »)
3. **Concepts vagues sans bénéfice client nommé**
4. **Auto-valorisation gratuite** (« nos experts », « nos résultats remarquables »)

## Source canonique

Knowtion : `Refonte > Content System > UX Writing` (pages Approche, Homepage, À propos, Expertises). En cas de divergence avec ce fichier, Knowtion gagne.
