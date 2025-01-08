console.log("exo-7");

console.log(jsonDatas);

jsonDatas.forEach((element) => {
    console.log(element);
});

let typeTraduit = [
  {
    videoGame: "Jeux vidéos",
    car: "Voiture",
    house: "Maison",
    show: "Prestation",
    game: "Jeu",
  },
];
console.log(typeTraduit[0].car);

jsonDatas.forEach((element) => {
  
  switch (element.type) {
    case "car":
      element.translatedType = typeTraduit[0]["car"];
      break;
    case "videoGame":
      element.translatedType = typeTraduit[0]["videoGame"];
      break;
    case "house":
      element.translatedType = typeTraduit[0]["house"];
      break;
    case "game":
      element.translatedType = typeTraduit[0]["game"];
      break;
    default:
      element.translatedType = typeTraduit[0]["show"];

      break;
  }
});

console.log(jsonDatas);

let mainContent = document.getElementById("mainContent");

jsonDatas.forEach((element) => {
  mainContent.innerHTML += `<tr>
    <td>${element.name}</td>
    <td>${element.type}</td>
    <td>${element.price}</td>
    <td>${element.quantity}</td>
    <td>${element.description}</td>
</tr>`;
});
