## Ex 1 - Les variables

👉 Suivez le module suivant sur **Codecademy** :

[Introduction to JavaScript — 1 | Introduction](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction)

---

### Syntaxe ES6
Les exercices de ce projet utilise `var` pour déclarer les variables. Depuis ES6, il y a deux autres manières de déclarer des variables : avec `let` et avec `const`.

Nous vous recommandons, si vous êtes à l'aise, d'utiliser `let` et `const` (selon les cas) à la place de `var`. Ces articles vous feront découvrir les différences entre les trois types de variable :

- [Le plus complet, en anglais](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
- [Court article, en français](https://putaindecode.io/articles/es6-es2015-la-declaration-de-variables-avec-const-let-et-var/)
- [Un autre article en français](https://blog.freelancerepublik.com/tuto-javascript-var-let-const/)

---

La température aujourd'hui est de 294 Kelvins.

1. Pour commencer, créer une variable `kelvins` qui prend pour valeur 294

Nous pouvons aussi exprimer une température en Celsius. La température en Celsius est inférieure de 273 degrés à celle en Kelvins.

2. Convertir la température en Kelvins en stockant le résultat dans une variable nommée `celsius`.
   Ecrire un commentaire pour expliquer cette ligne de code.

Nous pouvons aussi exprimer une température en Fahrenheit avec la formule :
`Fahrenheits = Celsius * (9/5) + 32`

3. En utilisant cette équation, calculer la température en Fahrenheit et stocker le résultat dans une variable nommée `fahrenheits`. Ecrire un commentaire pour expliquer cette ligne de code.

Lorsque nous faisons cette conversion, il est très probable d'avoir un nombre avec des décimales, nous allons donc arrondir ce nombre.

4. En utilisant la méthode [`.floor()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/floor) de la bibliothèque standard, modifier le résultat de la variable `fahrenheits` pour obtenir un entier. Ecrire un commentaire pour expliquer cette ligne de code.

5. Nous voulons modifier le programme afin de demander la température en Kelvins à l'utilisateur et lui afficher ensuite les conversions dans la console du navigateur.
   Remplacer la première ligne de code par :

```js
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
```

et relancer le programme.
