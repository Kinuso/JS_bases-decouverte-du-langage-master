// you can write js here

console.log("exo-4");

var secretMessage = [
  "Learning",
  "isn't",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it's",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

secretMessage.pop();
console.log(secretMessage);

function addElements(elementsToAdd) {
  elementsToAdd.forEach((value) => {
    secretMessage.push(value);
  });
  console.log(secretMessage);
}
addElements(["to", "program"]);

secretMessage.shift();
console.log(secretMessage);

secretMessage[secretMessage.indexOf("easily")] = "right";
console.log(secretMessage);

secretMessage.unshift("Programming");
console.log(secretMessage);

indexOfGet = secretMessage.indexOf("right");
secretMessage.splice(indexOfGet, 4);
console.log(secretMessage);

secretMessage[indexOfGet - 1] = "know";
console.log(secretMessage);

decodedMessage = secretMessage.join(" ");
console.log(decodedMessage);
