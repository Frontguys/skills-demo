# Normes et référentiels d'accessibilité

## Norme internationale WCAG 

Les WCAG (Web Content Accessibility Guidelines) sont les règles pour l'accessibilité des contenus Web. C'est la **source de vérité** : tous les autres référentiels (RGAA, EN 301 549, RAWeb…) s'y réfèrent et en sont des transpositions ou des extensions.

### Versions

- Version en vigueur : [WCAG 2.2 (2023)](https://www.w3.org/Translations/WCAG22-fr/)
- Version précédente : [WCAG 2.1 (2018)](https://www.w3.org/Translations/WCAG21-fr/)

### Structure normative

Les WCAG sont organisées selon quatre niveaux imbriqués :

1. **Principes** (4) : Perceptible, Utilisable, Compréhensible, Robuste.
2. **Règles** : regroupent les critères par domaine fonctionnel.
3. **Critères de succès (SC)** : exigences testables, chacun affecté à un niveau A, AA ou AAA.
4. **Techniques** : orientations d'implémentation (suffisantes, recommandées, ou échecs à éviter).

Les WCAG sont rédigées par le groupe de travail [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/) du W3C.

### Niveaux de conformité A, AA, AAA

- **Niveau A** : garantit l'accès à l'information et l'utilisabilité de base. Couvre environ 80 % des critères. Obligatoire dans tous les contextes.
- **Niveau AA** : améliore la prise en charge de contextes particuliers et de situations spécifiques. C'est le niveau exigé par la réglementation européenne et française.
- **Niveau AAA** : niveau d'excellence, ne peut pas s'appliquer à tous les types de contenus et de situations.

> ⚠️ Ne jamais recommander la conformité AAA comme objectif général pour un site entier. Comme le précise la documentation WCAG : « il n'est pas possible de satisfaire tous les critères de succès de niveau AAA pour certains contenus. »
> — [Understanding Conformance](https://www.w3.org/WAI/WCAG22/Understanding/conformance#conf-req1)

Référence : [Understanding Levels of Conformance](https://www.w3.org/WAI/WCAG22/Understanding/conformance#levels)

### Ressources — quand les utiliser

- [Standards d'accessibilité du W3C – Vue d'ensemble](https://www.w3.org/WAI/standards-guidelines/fr) — point d'entrée pour expliquer l'écosystème normatif à un public non-technique.
- [How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG22/quickref/) — outil de filtrage des critères et techniques, à destination des développeurs et auditeurs en phase opérationnelle.
- [WCAG 2.2 Understanding Docs](https://www.w3.org/WAI/WCAG22/Understanding/) — documentation explicative critère par critère, à consulter pour interpréter l'intention d'un critère ou trancher un cas limite.

---

## Référentiel français RGAA 4

Le RGAA (Référentiel Général d'Amélioration de l'Accessibilité) 4.1.2 est la transposition française des WCAG 2.1 en critères testables pour le web sur les niveaux A et AA.

- [Version en vigueur : RGAA 4.1.2](https://accessibilite.numerique.gouv.fr/) (18 avril 2023)
- [Tableau de correspondance RGAA 4.1.2 / WCAG 2.1](https://design.numerique.gouv.fr/assets/pdf/RGAA4_vs_WCAG2.1.pdf)

> ⚠️ **Limites du RGAA à ne pas ignorer :**
> - Le RGAA est **uniquement un référentiel web**. Il ne couvre pas les applications mobiles natives, les logiciels, les bornes ou le matériel.
> - Il s'agit d'une **transposition partielle** de la norme européenne EN 301 549 : ne jamais présenter le RGAA comme équivalent ou supérieur à EN 301 549.
> - Une mise à jour vers RGAA 5 est annoncée pour fin 2026.

### Méthode technique

Le RGAA propose une méthode de test structurée en 13 thématiques. Chaque critère est accompagné de tests, de cas particuliers et de notes techniques. Toujours consulter le glossaire avant d'évaluer un critère.

| N° | Thématique | Nb critères |
|---|---|---|
| 1 | Images | 9 |
| 2 | Cadres | 2 |
| 3 | Couleurs | 3 |
| 4 | Multimédia | 13 |
| 5 | Tableaux | 8 |
| 6 | Liens | 2 |
| 7 | Scripts | 5 |
| 8 | Éléments obligatoires | 10 |
| 9 | Structuration de l'information | 4 |
| 10 | Présentation de l'information | 14 |
| 11 | Formulaires | 13 |
| 12 | Navigation | 11 |
| 13 | Consultation | 12 |

### Ressources — quand les utiliser

- [Critères et tests RGAA](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/) — référence normative principale pour tout audit RGAA.
- [Glossaire RGAA](https://accessibilite.numerique.gouv.fr/methode/glossaire/) — à consulter systématiquement avant d'évaluer un critère.
- [Environnement de test RGAA](https://accessibilite.numerique.gouv.fr/methode/environnement-de-test/) — combinaisons navigateur/AT de référence pour les tests avec technologies d'assistance.

---

## Norme européenne EN 301 549

L'EN 301 549 définit les exigences d'accessibilité pour l'ensemble des produits et services TIC (technologies de l'information et de la communication), au-delà du seul web.

- [Version en vigueur : V3.2.1](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf) (mars 2021)
- Norme de référence en Union européenne et au-delà.

### Périmètre et structure

L'EN 301 549 couvre 9 thématiques TIC, dont 7 produisent des exigences directement applicables aux produits numériques courants : web, documents, logiciels, applications mobiles, matériel, communications en temps réel, et services de support.

Les deux thématiques restantes (exigences générales de performance et conformité) encadrent la démarche mais ne génèrent pas d'exigences de contenu propres.

- La **thématique Web** de la norme reprend actuellement les **critères WCAG 2.1 niveaux A et AA**.
- Une mise à jour vers **WCAG 2.2** est prévue dans la prochaine version de la norme, sans date officielle confirmée à ce jour.

> ⚠️ L'EN 301 549 inclut des **exigences supplémentaires par rapport aux WCAG** pour les contextes non-web (matériel, logiciels embarqués, bornes, etc.). Ne pas réduire la norme à sa seule composante web.