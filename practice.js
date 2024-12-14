const name = "gaurav"
const repoCount = 50

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
 
const gameName = new String('gaurav-gj-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'));


// const newString = gameName.substring(2,13)
// console.log(newString)

const anotherString = gameName.slice(-4, 2)
console.log(anotherString);

const newStringOne = "   gaurav   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://gaurav.com/gaurav%20jadhav"

console.log(url.replace('%20','-'));

console.log(url.includes('gaura'));

console.log(gameName.split('-'));

