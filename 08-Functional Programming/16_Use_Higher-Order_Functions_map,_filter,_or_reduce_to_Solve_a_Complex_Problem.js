// Problem 16: Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

const squareList = arr => {
  // Only change code below this line
  return arr
    .filter(num => num > 0 && Number.isInteger(num)) 
    .map(num => num ** 2); 
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
