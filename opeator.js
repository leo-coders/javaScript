// OPERATOR IN JS
let shirtPrice = 7; // = -> assignment operator
let pantPrice = 300;

/*
 * Mathematical operator
 */
// let sum = 10 + 20;
let totalPrice = shirtPrice + pantPrice;
// console.log("totalPrice:", totalPrice); // + -> addition

let difference = shirtPrice - pantPrice;
// console.log("difference:", difference);     // - -> subtraction

let multiplication = shirtPrice * pantPrice;
// console.log("multiplication:", multiplication); // * -> multiplication

let division = shirtPrice / pantPrice;
// console.log("division:", division); // * -> division

let remainder = shirtPrice % pantPrice;
// console.log("remainder:", remainder); // * -> remainder(modulo operator -> %)

// console.log(2 ** 4); // ** -> power/exponent operator

/*
 * Increment & Decrement
 */
pantPrice = pantPrice + 200;
// console.log("pantPrice:", pantPrice);

pantPrice += 100;
// console.log("pantPrice:", pantPrice);

pantPrice = pantPrice - 150;
// console.log("pantPrice:", pantPrice);

pantPrice -= 100;
// console.log("pantPrice:", pantPrice);

pantPrice = pantPrice * 2;
// console.log("pantPrice:", pantPrice);

pantPrice *= 2;
// console.log("pantPrice:", pantPrice);

/* pantPrice = +100;
console.log("pantPrice:", pantPrice); */

/*
 * Concatenation
 */

let fullName = "Sadman" + " " + "Sakib";
// console.log(fullName);

let x = fullName + shirtPrice;
// console.log(x);

let stringPantPrice = pantPrice.toString();
// console.log(stringPantPrice);
