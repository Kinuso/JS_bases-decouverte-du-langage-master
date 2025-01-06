## Ex 6 - Les objets

👉 Suivez le module suivant sur **Codecademy** :

[Introduction to JavaScript — 8 | Objects](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-objects)

---

1. Compléter le petit exercice qui se trouve en commentaire dans le fichier javascript de l'exercice.

2. Nous allons maintenant créer et extraire des informations à propos de votre équipe de sports préférée. _Choississez votre sport : Basketball, soccer, tennis, water polo..._ Posez-vous la question des différentes données à afficher à propos de cette équipe, et comment cette donnée peut être structurée.

Nous avons besoin dans un premier temps d'une structure de données permettant de stocker des informations multiples sur notre équipe : créer une variable `team` dont la valeur est un objet vide.

3. Notre équipe possède d'une part un ensemble de joueurs et d'autre part un ensemble de match joués. Nous voulons représenter les deux. Ajouter deux propriétés à votre objet : `players` et `games` toutes les deux étant des tableaux vides.

4. Remplir le tableau `players` avec des données sous ce format :

```js
{
    firstName: “Pablo”,
    lastName:”Sanchez”,
    age: 11
}
```

5. Remplir le tableau `games` avec des données sous ce format :

```js
{
    opponent: "Broncos",
    teamPoints: 42,
    opponentPoints: 27
}
```

6. Nous allons maintenant ajouter un nouveau joueur à l'équipe. Créer une nouvelle propriété à votre objet : déclarer une méthode `addPlayer` qui prend trois arguments, `firstName`, `lastName`, et `age` et qui ajoute un joueur au tableau `players`.

7. Appeler cette méthode et vérifier son bon fonctionnement.

8. Faire la même chose pour les matchs, stockés dans le tableau `games`.

9. Appeler vos fonctions plusieurs fois pour avoir un objet avec suffisamment de données.

10. Calculer la somme des points de votre équipe sur tous les matchs joués.

11. Calculer la moyenne des points de l'équipe adverse sur tous les matchs.

12. Écrire une fonction qui permet de trouver le joueur le plus âgé.

13. Bonus : Trier les joueurs par ordre alphabétique.
