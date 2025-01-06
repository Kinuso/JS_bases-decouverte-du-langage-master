## Ex 2 - Les conditions

👉 Suivez le module suivant sur **Codecademy** :

[Introduction to JavaScript — 2 | Conditionals](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-control-flow)

---

Le site [https://estcequecestbientotleweekend.fr/](https://estcequecestbientotleweekend.fr/) affiche un message selon le jour et l'heure dans la semaine : pas du tout, pas encore, bientôt, presque, c'est le weekend, etc.
Vous allez ici **récréer cette logique dans la console du navigateur**.

1. Mise en place

Commencer par créer une variable assignée à un objet Date :

```js
const myDate = new Date();
```

Vous pouvez désormais appeler des _méthodes_ sur cette variable _myDate_.
Retrouvez la liste des méthodes disponibles sur le site [https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date)

Créer une variable de type _String_ contenant le message à afficher dans le cas où nous sommes un jour de semaine.

Créer une autre variable de type String contenant le message à afficher dans le cas où nous sommes un jour de weekend.

2. Créer une nouvelle variable correspondant au jour actuel de la semaine, en appelant une méthode sur la variable `myDate`. Tester cette variable pour savoir si le jour actuel est un jour de semaine ou du weekend. En fonction de la réponse, afficher dans la console le message correspondant.

3. En conservant ce premier test, ajouter la nouvelle condition suivante : le vendredi après 17h, afficher le message du weekend. Pour cela, créer une nouvelle variable correspondant à l'heure actuelle, toujours à partir de notre variable initiale _myDate_, puis tester cette variable.

4. De la même manière que pour le **3.**, créer une nouvelle condition si nous sommes un lundi avant 9h, afficher le message du weekend.

Votre programme est réalisé, mais il est difficile de le tester pour savoir si toutes les conditions sont valides. Pour cela, créer en début de programme une variable _isTesting_ de type _booléen_ :

- Test activé : lancer notre programme en rentrant manuellement le jour et l'heure pour le tester.
- Test désactivé : faire tourner le programme avec le jour et l'heure du moment.

1. Si **isTesting** est `true`, alors la variable correspondant au jour de la semaine n'est plus reliée au jour actuel, mais à un jour fictif demandé à l'utilisateur via la commande `prompt()`. Il en va de même pour la variable contenant l'heure.

2. Si **isTesting** est `false`, le programme se lance avec le jour et l'heure du moment.
