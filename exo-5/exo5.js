// you can write js here

console.log("exo-5");

const vowels = ["A", "E", "I", "O", "U", "Y"];
let input = "apfuhfpzibhzagiarukfh;cbehkgjz,ja;qfDELVBS";
const resultArray = []

input.toUpperCase().split('').forEach(element => {
    console.log(element)
    vowels.forEach(value => {
        if (element == value) {
            resultArray.push(element)
        }
    });
});


finalResult = resultArray.join('')
console.log(finalResult)