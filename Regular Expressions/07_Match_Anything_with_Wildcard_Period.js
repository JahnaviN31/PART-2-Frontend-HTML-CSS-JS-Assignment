// Problem 07: Match Anything with Wildcard Period

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /ru.|su.|fu.|pu.|nu.|bun/; // Change this line
let result = unRegex.test(exampleStr);
