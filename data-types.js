/* -------------------
PRIMITIVE TYPES
 ---------------------*/
let name = "sifat";
let age = 22;

let isLearning = true;
let isMarried = false;

let havePet;

let haveBiryani = null;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isLearning);
console.log(typeof isMarried);
console.log(typeof havePet);
console.log(typeof haveBiryani);

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
