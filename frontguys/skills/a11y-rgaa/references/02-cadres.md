# Thématique 2 — Cadres

## Table des matières

- [Critère 2.1 — Chaque cadre a-t-il un titre de cadre ?](#critere-2-1)
- [Critère 2.2 — Pour chaque cadre ayant un titre de cadre, ce titre de cadre est-il pertinent ?](#critere-2-2)

---

<a id="critere-2-1"></a>

## Critère 2.1 — Chaque cadre a-t-il un titre de cadre ?

### Définitions

- [cadre](00-glossaire.md#cadre)
- [titre de cadre](00-glossaire.md#titre-cadre)

### Tests du critère

#### Test 2.1.1

Chaque cadre (balise `<iframe>` ou `<frame>`) a-t-il un attribut `title` ?

##### Procédure de test

1. Retrouver dans le document les cadres (élément `<iframe>` ou `<frame>`) ;
2. Pour chaque cadre, vérifier qu’il possède un attribut `title `;
3. Si c’est le cas pour chaque cadre, **le test est validé**.
### Références WCAG

- 4.1.2 Name, Role, Value (A)

**Techniques :**

- H64

---

<a id="critere-2-2"></a>

## Critère 2.2 — Pour chaque cadre ayant un titre de cadre, ce titre de cadre est-il pertinent ?

### Définitions

- [cadre](00-glossaire.md#cadre)
- [titre de cadre](00-glossaire.md#titre-cadre)

### Tests du critère

#### Test 2.2.1

Pour chaque cadre (balise `<iframe>` ou `<frame>`) ayant un attribut `title`, le contenu de cet attribut est-il pertinent ?

##### Procédure de test

1. Retrouver dans le document les cadres (élément `<iframe>` ou `<frame>`) ;
2. Pour chaque cadre pourvu d’un attribut `title`, vérifier que son contenu est pertinent ;
3. Si c’est le cas pour chaque cadre, **le test est validé**.
### Références WCAG

- 4.1.2 Name, Role, Value (A)

**Techniques :**

- H64

---

