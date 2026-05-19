# Page fiche joueur Dembélé : maquette d'optimisation SEO + module boutique

Maquette HTML/CSS produite par datashake dans le cadre de l'appel d'offres SEO Paris Saint-Germain.

Cette page est une proposition d'optimisation de la fiche joueur officielle d'Ousmane Dembélé sur psg.fr, livrée avec un module e-commerce inspiré de la fiche joueur de Manchester City pour Erling Haaland.

## Aperçu

- URL de référence : https://www.psg.fr/joueurs/ousmane-dembele
- Référence module boutique : https://shop.mancity.com/en/shop-by-player/mens-team/forwards/9-erling-haaland/
- Format : HTML statique + CSS + JS vanilla (zéro dépendance, prêt à intégrer dans n'importe quelle stack)

## Démo

Ouvrir `index.html` dans un navigateur, ou via GitHub Pages si publié.

## Optimisations SEO intégrées

Issues du brief Notion d'optimisation :

### Meta data
- `<title>` : "Ousmane Dembélé : attaquant du Paris Saint-Germain" (vs "Ousmane Dembélé" actuel)
- `meta description` ajoutée : "Découvrez Ousmane Dembélé, attaquant du Paris Saint-Germain et Ballon d'Or 2025 : biographie, parcours, statistiques et sélection en équipe de France."
- Open Graph + Twitter Card complets
- Balise canonical vers la page officielle

### Structure Hn
- H1 unique : Ousmane Dembélé
- 8 H2 alignés sur le brief
  - Fiche d'identité (nouveau)
  - Biographie
  - Style de jeu et caractéristiques (nouveau)
  - Statistiques au PSG (nouveau)
  - Palmarès (nouveau)
  - Clubs précédents
  - Maillots Dembélé 10 (module boutique)
  - Questions fréquentes (nouveau)
  - Articles liés
- H3 chronologiques sur la biographie : Rennes formation, Rennes pro, Dortmund, Barcelone, PSG
- H3 FAQ alignés sur les requêtes courantes (âge, taille, poste, signature, numéro)

### Volume rédactionnel
Cible brief : 2 100 à 2 400 mots (vs ~300 mots actuels). Le brouillon livré dans la maquette compte environ 1 100 mots, à compléter en rédaction finale via Datafer.

### Données structurées (JSON-LD)
- Schéma `Person` avec birthDate, birthPlace, nationality, height, jobTitle, memberOf (SportsTeam), award
- Schéma `FAQPage` couvrant les 5 questions de la FAQ
- Bénéfices : éligibilité aux rich results FAQ, knowledge panel Google, et meilleure compréhension par les moteurs génératifs (ChatGPT, Perplexity, AI Overviews)

### Maillage interne
- 5 ancres entrantes prévues au brief (Ballon d'Or, 100e match, tous les buts, Laureus, rétro 2025) : pointées depuis la section Articles liés
- 5 ancres sortantes :
  - "tout l'effectif du PSG" → /football-masculin/effectif
  - "palmarès du PSG" → /football-masculin/palmares
  - "Khvicha Kvaratskhelia" → /joueurs/khvicha-kvaratskhelia
  - "maillot floqué Dembélé" → store.psg.fr (via module boutique)
  - "Ballon d'Or 2025" → article dédié

### Accessibilité et performance
- HTML5 sémantique (`header`, `main`, `section`, `article`, `footer`, `nav`)
- Roles ARIA et attributs `aria-labelledby` sur chaque section
- `alt` descriptifs sur toutes les images (vs `alt=""` constatés sur la page actuelle)
- `loading="lazy"` sur les images hors viewport, `fetchpriority="high"` sur le hero
- `preconnect` vers media.psg.fr et fonts.gstatic.com
- Tableau de stats avec `scope` et structure accessible
- Détails/summary natifs sur la FAQ (clavier OK, AT OK)

## Module boutique (Dembélé 10)

Inspiré directement de la fiche player Man City pour Haaland :
- Carrousel horizontal scrollable
- 6 produits : domicile, extérieur, third, authentic, kids, training
- Format card avec image carrée, badge type maillot, titre, prix
- CTA final vers la collection complète sur store.psg.fr

Avantage SEO et UX :
- Mots-clés transactionnels capturés sur la page joueur (maillot Dembélé 10, maillot floqué Dembélé)
- Pont direct entre contenu informationnel (fiche joueur, ~165 000 recherches/mois sur "Ousmane Dembélé") et conversion boutique
- Manchester City monétise ainsi ses pages joueurs depuis plusieurs années, PSG ne le fait pas encore

## Structure du repo

```
dembele-optimise/
├── index.html      page complète optimisée
├── styles.css      design system PSG (variables couleurs, typo Archivo)
├── script.js       carrousel boutique (vanilla JS, ~30 lignes)
└── README.md       ce document
```

## Identité visuelle

Couleurs :
- Bleu PSG `#004170` / Bleu profond `#0a1c3d`
- Rouge PSG `#da291c`
- Or `#d4af37` (utilisé pour les accents Ballon d'Or)

Typographie : Archivo (Google Fonts), variations 400 à 900, proche de la fonte du site officiel.

## Crédits

Maquette : datashake.
Images : CDN media.psg.fr (utilisées en référence pour la démonstration, à valider pour exploitation finale).
