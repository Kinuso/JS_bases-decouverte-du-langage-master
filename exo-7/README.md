## Ex 7 - Listing d'articles sur un site marchand

Nous allons essayer de nous rapprocher d'un site marchand.
Nous vous fournissons un jeu de données qui reprend des articles que l'on peut retrouver sur un site de commerce en ligne type Le bon coin.

Dans cet exercice, vous allez lier la partie HTML et Javascript afin de mettre en pratique ce que vous avez appris dans un contexte un peu plus concret.

Ces manipulations seront à faire avec du pur JavaScript, cela vous permettra de mieux comprendre la partie jQuery qui suivra.

Voici quelques pages de docs pouvant vous servir.

https://www.w3schools.com/js/js_htmldom.asp

https://developer.mozilla.org/fr/docs/Apprendre/JavaScript/Client-side_web_APIs/Manipulating_documents

https://www.tutorialrepublic.com/javascript-tutorial/javascript-dom-manipulation.php

https://dom-tutorials.appspot.com/static/index.html

### Administrer un catalogue d'articles depuis une page web

1. Parcourir les articles fournis pour les afficher un à un dans la console

2. Créer un objet qui servira à traduire les types. Cet objet aura pour structure `{type : "type traduit"}`. Par exemple `{videoGame:"Jeux Vidéos"}`.

3. Ajouter une nouvelle clé aux objets existants pour stocker le type traduit, sans modifier le fichier data.js. Répéter l'étape 1 pour vérifier le type traduit.

4. Créer une page HTML et lister les articles depuis la donnée.

5. Créer un champ texte et un bouton. Au clic sur le bouton, afficher les articles du type entré dans le champ texte.

6. Ajouter une checkbox pour afficher ou non les articles en rupture de stock.

7. Créer la fonctionnalité de tri des articles par nom ou par prix, et donner le choix de trier par ordre ASC (ascendant) ou DESC (descendant).

8. Ajouter un formulaire simple permettant d'ajouter un article à la liste.

9. Retravailler la structure de données dans `data.js` afin d'avoir une structure comme décrite dans le fichier `datas2.js`. Pour cela, remonter le type d'un niveau et ajouter un contact à l'objet.

Ceci permettra d'avoir une structure qui liste les catégories composées d'une clé `type` et une clé `items` qui contient tous les objets de la catégorie `type`.

10. Afficher tous les contacts.

11. Faites fonctionner votre page avec cette nouvelle structure.

### Mise en forme

Pour rendre l'utilisation de votre application plus facile, nous allons maintenant travailler son ergonomie.

1. Charger [Bootstrap 5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/) dans le projet.

2. Afficher les articles et leurs contacts dans un tableau, en utilisant un tableau depuis la documentation de Bootstrap.

3. Faire en sorte qu'en ajoutant un nouvel objet, il s'ajoute aussi dans le tableau.

4. Adapter le filtre et le tri au tableau.

5. Transformer le filtre d'un champ texte en liste déroulante basée sur votre data. Si une traduction est disponible, l'afficher à la place du nom du type.

### Fonctionnalités bonus

1. Ajouter une checkbox au début de chaque ligne pour pouvoir sélectionner un ou plusieurs articles.

2. Quand des articles sont sélectionnés, afficher un bouton "Ajouter au panier".

_Vous pouvez ici changer la structure de données pour vous aider._

3. Afficher le nombre d'articles et le prix total dans un panier d'achats. À la validation du panier, déduire les quantités disponibles des articles sélectionnés.
