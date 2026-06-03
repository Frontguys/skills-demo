# Formats de réponse

Ce fichier décrit les formats de réponse attendus en fonction des types de demandes.

## Audit / diagnostic de non-conformité

Ordonner les non-conformités en trois blocs : certaines, puis probables, puis contrôles manuels requis. À l'intérieur de chaque bloc, grouper par composant ou zone de page.

### Structure du rapport

```markdown
## Rapport d'audit — [Nom de la page / du composant]

> ⚠️ Cet audit est produit par analyse statique. Les résultats doivent être vérifiés par un auditeur humain et testés avec des technologies d'assistance.

---

### Non-conformités certaines

> Problèmes identifiés avec un niveau de certitude suffisant pour être qualifiés sans test supplémentaire.

[Problème N°X — ...]
[Problème N°Y — ...]

---

### Non-conformités probables

> Problèmes présentant de forts indices de non-conformité, à confirmer par test manuel ou en AT.

[Problème N°X — ...]

---

### Contrôles manuels requis

> Points nécessitant une vérification humaine ou une restitution AT avant toute qualification.

[Problème N°X — ...]

---

### Synthèse

| # | Composant | Critère RGAA | Statut | Criticité | Complexité |
|---|---|---|---|---|---|
| 1 | [Composant] | X.Y | Non conforme | 🔴 Bloquant | ⭐ Simple |
| 2 | [Composant] | X.Y | Probablement NC | 🟠 Élevé | ⭐⭐ Modérée |
| 3 | [Composant] | X.Y | Contrôle requis | 🟡 Moyen | ⭐⭐⭐ Complexe |
```

### Template d'une non-conformité

```markdown
## Problème N°X — [Nom de l'élément concerné]

[Description du problème observé]

---

### Critères de référence

| Référentiel | Thématique | Critère | Test | Intitulé |
|---|---|---|---|---|
| RGAA 4.1 | X — [Thématique] | X.Y | X.Y.Z | [Intitulé du test] |
| WCAG 2.1 | — | SC X.Y.Z | — | [Intitulé] (niveau AA) |

**Technique(s) WCAG** : [Code] — [Intitulé court]

---

### Évaluation

| Dimension | Valeur |
|---|---|
| **Statut** | `Non conforme` / `Probablement non conforme` / `Contrôle manuel requis` |
| **Criticité** | 🔴 Bloquant / 🟠 Élevé / 🟡 Moyen / 🟢 Faible |
| **Impact utilisateur** | [Profils de handicap concernés, situation de blocage] |
| **Complexité de réparation** | ⭐⭐⭐⭐ Très complexe / ⭐⭐⭐ Complexe / ⭐⭐ Modérée / ⭐ Simple |

---

### Correction recommandée

[Solution technique, avec exemple de code si pertinent]

---

### Contrôles manuels à effectuer

- [ ] [Test à effectuer, technologie d'assistance concernée]
- [ ] [Test à effectuer, technologie d'assistance concernée]

---
```

## Ticket de remédiation

```markdown
## [Composant] — [Titre court du problème]

### Description du problème

[Description du problème : ce qui se passe, dans quel contexte, pour qui c'est bloquant. Peut inclure des termes techniques et des références (attributs HTML/ARIA, comportement AT) compréhensibles par un dev senior non initié à l'accessibilité.]

---

### Criticité

🔴 Bloquant / 🟠 Élevé / 🟡 Moyen / 🟢 Faible

[Une phrase max pour justifier le niveau : quel profil d'utilisateur est impacté et dans quelle mesure.]

---

### Solution(s) proposée(s)

#### Option 1 — [Titre court] ✅ *(recommandée)*

[Description de l'approche.]

```html
<!-- exemple de code si pertinent -->
```

#### Option 2 — [Titre court]

[Description de l'approche alternative, avec ses avantages/contraintes par rapport à l'option 1.]

```html
<!-- exemple de code si pertinent -->
```
```


## Explication d'un critère

```markdown
## Critère X.Y — [intitulé du critère]
**Niveau** : A / AA | **Thématique** : X — [Thématique]

> [Une phrase résumant ce que le critère vérifie, en langage accessible.]

---

### Objectif

[Pourquoi ce critère existe : quel besoin utilisateur il couvre, quel type de situation de handicap il adresse.]

---

### Tests RGAA

| N° | Condition à vérifier | Éléments concernés |
|---|---|---|
| X.Y.1 | [Ce que vérifie ce test] | `<img>`, `<svg>`… |
| X.Y.2 | [Ce que vérifie ce test] | `<input type="image">`… |

**Cas particuliers** : [Situations où le critère est non applicable ou s'applique différemment.]

---

### Impacts utilisateurs

| Profil | Technologie d'assistance | Situation de blocage |
|---|---|---|
| Déficience visuelle | Lecteur d'écran (NVDA, JAWS, VoiceOver) | [Ce qui se passe si le critère n'est pas respecté] |
| Handicap moteur | Navigation clavier | [Ce qui se passe] |

---

### Exemple

#### ✅ Conforme
```html
<!-- code conforme -->
```

#### ❌ Non conforme
```html
<!-- code non conforme -->
```

---

### Vérification

**Manuelle**
- [ ] [Ce qu'on inspecte, avec quel outil ou quelle méthode]
- [ ] [Test AT : lecteur d'écran + navigateur cible]

**Outillée**
- [Outil / extension / bookmarklet utile pour ce critère]

---

### Références

| Référentiel | Identifiant | Intitulé |
|---|---|---|
| RGAA 4.1 | Critère X.Y | [lien] |
| WCAG 2.1 | SC X.Y.Z (niveau A/AA) | [Intitulé] |
| Technique WCAG | H44 / ARIA6… | [Intitulé court] |

---
