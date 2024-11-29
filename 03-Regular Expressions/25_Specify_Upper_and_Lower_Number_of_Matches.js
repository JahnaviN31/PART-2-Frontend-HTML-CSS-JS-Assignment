// Problem 25: Specify Upper and Lower Number of Matches

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/g; // Change this line
let result = ohRegex.test(ohStr);

console.log(result);
