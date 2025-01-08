// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
  name: "Joe's house",
  rooms: 5,
  garage: false,
  bathrooms: 1 + 2,
  cars: ["Clio", "Van"],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe

console.log("nombre de voitures de Joe : " + joeInfo["cars"].length);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.

joeInfo["bathrooms"] = 1;
console.log("Nombre de salle de bains de Joe : " + joeInfo["bathrooms"]);

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information.

joeInfo["garage"] = 1;
console.log("Nombre de garage de Joe : " + joeInfo["garage"]);

let team = {
  players: [
    {
      firstname: "pablo",
      lastname: "sanchez",
      age: 35,
    },
    {
      firstname: "kylian",
      lastname: "mbappe",
      age: 25,
    },
    {
      firstname: "zizou",
      lastname: "zidane",
      age: 48,
    },
    {
      firstname: "antoine",
      lastname: "griezman",
      age: 35,
    },
  ],
  games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "Italie",
      teamPoints: 25,
      opponentPoints: 83,
    },
    {
      opponent: "Suisse",
      teamPoints: 89,
      opponentPoints: 62,
    },
    {
      opponent: "Allemagne",
      teamPoints: 19,
      opponentPoints: 53,
    },
  ],
};

function addPlayer(firstname, lastname, age) {
  team.players.push({
    firstname: firstname,
    lastname: lastname,
    age: age,
  });
}
console.log(team.players);

addPlayer("killian", "vv", 25);

console.log(team.players);

function addGame(opponent, teamPoints, opponentPoints) {
  team.games.push({
    opponent: opponent,
    teamPoints: teamPoints,
    opponentPoints: opponentPoints,
  });
}
console.log(team.players);

addGame("US", 58, 25);

console.log(team.games);

let scoreTotalEquipe = null;

team.games.forEach((element) => {
  scoreTotalEquipe += element.teamPoints;
});

console.log(scoreTotalEquipe);

let scoreTotalOpponent = null;

team.games.forEach((element) => {
  scoreTotalOpponent += element.opponentPoints;
});

scoreMoyenOpponent = scoreTotalOpponent / team.games.length;

console.log(scoreMoyenOpponent);

function findOldestPlayer() {
  let oldestPlayer = team.players[0];

  team.players.forEach((element) => {
    if (oldestPlayer["age"] < element["age"]) {
      oldestPlayer = element;
    }
  });

  console.log(oldestPlayer);
}
findOldestPlayer();

let sortedTeamPlayerByLastname = team.players.sort((a, b) =>
  a.lastname.localeCompare(b.lastname)
);
console.log(sortedTeamPlayerByLastname);
