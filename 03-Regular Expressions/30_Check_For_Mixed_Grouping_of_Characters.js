// Problem 30: Check For Mixed Grouping of Characters

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin (""|D.)|Eleanor) Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line

console.log(result);
