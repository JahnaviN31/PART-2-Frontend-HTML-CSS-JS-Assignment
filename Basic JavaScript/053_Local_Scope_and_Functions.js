// Problem 053: Local Scope and Functions

function myLocalScope() {
  // Only change code below this line
  let myVar = 9;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
