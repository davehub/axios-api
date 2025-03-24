## Que faire mon projet ?

mon fichier axios-api.js est une Api qui permet de lancer des requetes via le lien `https://jsonplaceholder.typicode.com/users/` qui est mon outils de test pour mes requetes GET, POST, PUT et DELETE .


## Comment utiliser Axios API ?

### Initialiser le npm pour avoir le dossier package.json 

npm init 

### Installation du module Axios
#### Dans un projet Node.js / Frontend (via npm/yarn)

npm install axios
# ou
yarn add axios

#### Via CDN (pour les projets frontend simples)
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

## Description du code 

import du module axios : const axios = require('axios');
utilisation du lien : const PLACEHOLDER_URL_API = ('https://jsonplaceholder.typicode.com/users/');

#### avec la methode GET :
axios.get(`${PLACEHOLDER_URL_API}`)
##### Description : afficher tout les objets

#### avec la methode POST :
axios.post(`${PLACEHOLDER_URL_API}`, {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
##### Description : ajouter un nouvelle objet

#### avec la methode PUT :
axios.put(`${PLACEHOLDER_URL_API}`, {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
##### Description : modifier un objet

#### avec la methode DELETE :

axios.delete(`${PLACEHOLDER_URL_API}`)
##### Description : supprimer un objet


## Documentation

[Documentation](https://axios-http.com/docs/intro)




