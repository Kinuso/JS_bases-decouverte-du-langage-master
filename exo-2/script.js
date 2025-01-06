// you can write js here
console.log("exo-2");

const isTesting = true;
const myDate = new Date().getDay();
const hour = new Date().getHours();

console.log(hour);

console.log(myDate);

const weekMessage = "Pas encore";

const weekEndMessage = "C'est la teuf";

function isWeekend(day, hour) {
  if (isTesting) {
    let usersHour = prompt(
      "Veuillez enter l'heure (sans les minutes) actuelle"
    );
    let usersDay = prompt("Veuillez enter le jour actuel").toLowerCase();
    console.log(usersHour, usersDay);
    if (
      usersDay == "dimanche" ||
      usersDay == "samedi" ||
      (usersDay == "lundi" && usersHour < 9)
    ) {
      console.log(weekEndMessage);
    } else {
      console.log(weekMessage);
    }
  } else {
    if (day === 0 || day === 6 || (day === 1 && hour < 9)) {
      console.log(weekEndMessage);
    } else {
      console.log(weekMessage);
    }
  }
}

isWeekend(myDate, hour);
