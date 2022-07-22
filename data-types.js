/* -------------------
PRIMITIVE TYPES
 ---------------------*/
let name = "sifat";
let age = 22;

let isLearning = true;
let isMarried = false;

let havePet;

let haveBiryani = null;

/* 
console.log(typeof name);
console.log(typeof age);
console.log(typeof isLearning);
console.log(typeof isMarried);
console.log(typeof havePet);
console.log(typeof haveBiryani); 
*/

/* ---------------------
OBJECT
---------------------- */
const accesories = {
  // key : value
  laptop: true,
  pen: "matador",
  phone: "mi",
  watch: "hyolu",
  book: "animal firm",
  phonePrice: 20000,
};
accesories.laptop = "dell";

accesories.adapter = "sandisk";
accesories.hardDisk = "adata";
accesories.phone = "samsung";

/**
 * case -> error(assignment to constant variable)
 * case -> no error(object is declared by let)
 */
/* accesories = {
  notebook: "basundara",
  earphone: "xiaomi",
}; */

// console.log(typeof accesories);

// console.log(accesories);

const product = {
  name: "laptop",
  brand: "hp",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, reiciendis.",
  price: 32000,
};

/**
 * ARRAY
 */
const items = [
  "john",
  ,
  20,
  { title: "wdd-class", date: "22-07-22" },
  true,
  [1, 2, 3, 4],
];

//index:     [0, 1, 2, 3, 4]
const nums = [1, 2, 3, 4, 5];
console.log(nums.length);

/* 
index:[0, 1, 2, 3, 4]
const nums = [1, 2, 3, 4, 5];
nums[0] -> 1
nums[1] -> 2
nums[2] -> 3
nums[3] -> 4
nums[4] -> 5 
*/
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);
console.log(nums[4]);
nums[0] = "john";
nums[5] = "smith";
console.log(nums[5]);
console.log(nums);
const myNums = nums;
console.log(myNums);

const numbers = [2, 3, 4, 5];
console.log("original-", numbers);
nums.unshift(1);
console.log("unshift-", numbers);
nums.shift();
console.log("shift-", numbers);
