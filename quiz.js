function getMultipliersOfThree(num) {
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
}

getMultipliersOfThree(10);
