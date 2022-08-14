function addTwoNum(num1, num2) {
  return num1 - num2;
}

let res = addTwoNum(3, 4);
// console.log(res);

let num = -10;
let absNum = Math.abs(num);
// console.log(absNum);

let num1 = 10.5;
let ceilNum1 = Math.ceil(num1);
// console.log(ceilNum1);

// console.log(Math.floor(num1));
// console.log(Math.round(num1));

// ... -> spread operator
let max = Math.max(...[1, 2, 3]);
// console.log(max);

// console.log(Math.round(Math.random() * 10));

function generateRand(num) {
  let i = 0;
  while (i < 10) {
    console.log(Math.round(Math.random() * num));
    i++;
  }
}
// generateRand(200);

/*
 * Generate random numbers conditionally:
 */
function genRandNumCond(num) {
  let i = 0;
  while (i < 10) {
    let rand = Math.round(Math.random() * num);
    if (rand % 3 === 0) {
      console.log(`${rand} is divisible by 3`);
    } else {
      console.log(`${rand} isn't divisible by 3`);
    }
    i++;
  }
}
// genRandNumCond(100);
