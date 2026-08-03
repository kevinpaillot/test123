# Carnets de route

Site de démonstration : un carnet de récits de voyage, en HTML/CSS/JS pur, sans framework. Déploiement automatique via GitHub Actions sur GitHub Pages.

## Aperçu

- **Accueil** (`index.html`) — présentation + aperçu des derniers récits
- **Récits** (`recits.html`) — liste complète des récits
- **Pages de récit** (`recit-*.html`) — texte + images pour chaque récit
- **À propos** (`a-propos.html`)

Installable comme une app mobile (PWA), fonctionne aussi hors-ligne une fois visité.

## Structure

```
.
├── index.html
├── recits.html
├── recit-vercors.html
├── recit-littoral.html
├── recit-ville.html
├── a-propos.html
├── style.css              # styles partagés par toutes les pages
├── script.js               # menu mobile + service worker
├── manifest.json           # config PWA
├── sw.js                   # service worker (mode hors-ligne)
├── icon-192.png / icon-512.png
├── img/                     # images des récits
└── .github/workflows/deploy.yml
```

## Ajouter un récit

1. Dupliquer un fichier `recit-*.html` existant, le renommer
2. Modifier le titre, le texte et les images
3. Ajouter une carte vers cette page dans `index.html` et `recits.html`
4. Ajouter le nouveau `.html` et ses images dans la liste `ASSETS` de `sw.js`

## Développement local

Pas de build : ouvrir simplement `index.html` dans un navigateur, ou lancer un petit serveur local pour tester le service worker correctement :

```bash
python3 -m http.server 8000
```

Puis aller sur `http://localhost:8000`.

## Déploiement

Automatique à chaque `push` sur `main`, via `.github/workflows/deploy.yml` (GitHub Actions → GitHub Pages). Aucune action manuelle nécessaire.

L'URL du site est visible dans **Settings > Pages** du dépôt une fois le premier déploiement terminé.
