function printName(name) {
  if (typeof name === "number") {
    return "wrong input";
  }
  return name;
}

let myName = printName(20);
console.log(myName);
