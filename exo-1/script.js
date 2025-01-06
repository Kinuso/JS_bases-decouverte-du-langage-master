// you can write js here
console.log("hello from file");

// Prompt pour demander une temprérature en kelvins a l'utilisateur
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");


// const kelvins = 294;

// Conversion de la témpérature de kelvins en celsius
const celsius = kelvins - 273

// Conversion de la témprature de celsius en fahrenheits, utilisation de Math.floor pour arrondir a l'entier inférieur
const fahrenheits = Math.floor((celsius * (9/5) + 32))

console.log(fahrenheits)