function printName(name) {
  if (typeof name === "number") {
    return "wrong input";
  }
  return name;
}

let myName = printName(20);
console.log(myName);

/*
Function - use case
*/
function filterWater(dustyWater) {
  if (dustyWater) {
    return "filtered water";
  }
}

let myWater = filterWater("moyla pani");

function getHotFood(coldFood) {
  if (coldFood) {
    return "hot chicken";
  }
}

function eatFood(water, food) {
  return {
    myWater: water,
    myFood: food,
  };
}

console.log(eatFood(myWater, myFood));

