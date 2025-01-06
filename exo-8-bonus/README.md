## Bonus

Pour les plus téméraires ! Inutile de se lancer si les exercices précédents ne sont pas compris.

### Arithmétique : Aller plus loin

Faire une fonction qui indique si un nombre est divisable par un autre (par exemple, le résultat est un entier fini exploitable => dans l'intervalle ]-Number.MIN_VALUE; Number.MAX_VALUE[ ) avec un résultat pair.
Entrées (paramètres) :

- val1 : Number
- val2 : Number

Sortie (valeur de retour) :
Vrai si val1/val2 est un entier pair sur ]-Number.MIN_VALUE; Number.MAX_VALUE[. Faux sinon.

#### Valeurs de tests

Sois inspiré !
Pour t'aider :

- 0 et 1
- 1 et 0
- 4.0 et 4.0
- Number.NEGATIVE_INFINITY et 4.0
- NaN et 4.0
- Number.MIN_VALUE et 4.0

### Arrays et boucles : Découvrir davantage

Faire une fonction qui compare 2 tableaux.
_Suffit-il de faire arr1 == arr2 ? Ou arr1 === arr2 ?_
Entrées (paramètres) :

- arr1 : Array
- arr2 : Array

Sortie (valeur de retour) :
Vrai si les 2 tableaux ont strictement les mêmes valeurs (mêmes tailles, mêmes valeurs). Avec une particularité néanmoins : on considère que "4" est égal à 4 ("4" == 4)
À toi de préciser le comportement en cas de valeurs undefined ou NaN.

#### Valeurs de tests

Sois inspiré !
Pour t'aider :

```
var arr1 = [1.3, 4E-5, Number.POSITIVE_INFINITY, "hello", [, 42, NaN, null, 0xA4]];
var arr2 = ["1.3", 4E-5, Number.POSITIVE_INFINITY, "hello", [, 42, NaN, null, 0xA4]];
```

_Oui, ces arrays sont valides !_

### Objets : Découvrir davantage

Faire une fonction qui compare 2 objets. _Suffit-il de faire o1 == o2 ? Ou o1 === o2 ?_
Entrées (paramètres) :

- o1 : Object
- o2 : Object

Sortie (valeur de retour) :
Vrai si les 2 objets ont strictement les mêmes propriétés et valeurs (même nombre de propriétés, avec les mêmes valeurs). Avec une particularité néanmoins : "4" == 4
À vous de préciser le comportement en cas de valeurs undefined ou NaN.

### Fonctions : Découvrir davantage

#### Fiabiliser son code

Pour chacune de vos fonctions, la commenter proprement (indiquer au-dessus le nombre de paramètres attendus, leur type, l'ensemble de valeurs attendu (si défini ; par exemple : [0; inifinity[ ), leur utilité -> ce sont les _préconditions_ de la fonction. Faites de même pour la valeur de retour -> c'est la _postcondition_). Assurez-vous ensuite en début de fonction que les préconditions sont remplies (vérifiez le type des paramètres et s'ils sont bien dans l'intervalle définis) ; dans le cas contraire, afficher un message et retourner une valeur d'erreur (elle-même à définir) dans les commentaires de fonction.
_C'est entre-autres ainsi que les développeurs de la NASA s'assurent que leurs collaborateurs astronautes ne finissent pas dans un astéroïde à cause d'une fonction mal appelée !_

#### Fonctions variadiques : Nombre variable d'arguments

Modifier (fais un backup avant !) les fonctions de [Arrays et boucles : Découvrir davantage](#arrays-et-boucles--découvrir-davantage) et [Objets : Découvrir davantage](#objets--découvrir-davantage) pour accepter un nombre variable d'arguments (paramètres). Ainsi, vous pourrez appeler chacune de ces fonctions avec autant de paramètres que vous le souhaitez. Elles retourneront vrai si l'ensemble des arguments sont égaux tels que définis dans leurs exercices respectifs.
S'il n'y a qu'un argument, on retourne vrai.
