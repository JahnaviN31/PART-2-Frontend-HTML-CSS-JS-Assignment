// Problem 21: Match All Non-Numbers

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/gi; // Change this line
let result = movieName.match(noNumRegex).length;
console.log(result);
