/**
 * PRIMITIVE TYPES -> string, number, boolean, undefined, null
 * OBJECT TYPES -> object, array
 */

/* 
----------PRIMITIVE TYPES----------
 */
// "i am string" -> string
// 70 -> number
// true/false -> boolean
// undefined -> declared but not assigned
// null -> special or error case

console.log(typeof "John Smith");
console.log(typeof 10);
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);

/* 
----------OBJECT TYPES----------
 */
// object
const student = {
  id: 101,
  name: "Nayok Jasim",
  class: 9,
  division: "science",
  subjects: ["math", "physics", "chemistry", "english", "biology"],
  isRegular: false,
  failedSubjects: null,
};

student.name = "Hero Alam"; // mutable or changeable
student.isMeritorious = false; // new key: value added -> mutable concept

// ARRAY -> any types of data can be stored here
/* const myArray = [
    
    'laptop', 90, true, {name: 'Rohan', isStudent: true}, [1,2,3,4,5]
] */

// index: [0,1,2,3,4]
let arr = [1, 2, 3, 4, 5];
// arr[0] -> 1
// arr[1] -> 2
// arr[2] -> 3
// arr[3] -> 4
// arr[4] -> 5

// arr.push(6) -> insert 6 at last(5th index) of the arr
// arr.pop() -> remove the last element of the arr
