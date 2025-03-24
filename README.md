# Axios - HTTP Client


Axios est une bibliothèque JavaScript populaire pour effectuer des requêtes HTTP depuis un navigateur ou Node.js. Elle est basée sur les Promesses et offre une API simple pour interagir avec des APIs REST.
 

## Installation
### Dans un projet Node.js / Frontend (via npm/yarn)

npm install axios
# ou
yarn add axios

### Via CDN (pour les projets frontend simples)
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

## Fonctionnalités Principales

✔ Effectuer des requêtes GET, POST, PUT, DELETE, etc.
✔ Gestion automatique des données JSON
✔ Intercepteurs pour requêtes et réponses
✔ Annulation de requêtes
✔ Protection contre les attaques XSRF
✔ Compatible avec Node.js et les navigateurs


## Axios vs Fetch API

Fonctionnalité	Axios	Fetch API
Syntaxe	:
Plus simple et concise(Axios)	 Bas niveau, plus verbeux(Fetch API)
Annulation :✅ Oui (CancelToken)(Axios)	❌ Non (sauf avec AbortController)(Fetch API)
Transformations	: Automatique (JSON)(Axios)	Manuel (response.json())(Fetch API)
Intercepteurs	✅ Oui(Axios)	❌ Non(Fetch API)
Compatibilité	Node.js + Navigateurs(Axios)	Navigateurs uniquement(Fetch API)



## Documentation

[Documentation](https://axios-http.com/docs/intro)




