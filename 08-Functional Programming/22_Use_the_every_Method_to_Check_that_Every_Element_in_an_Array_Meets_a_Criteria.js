// Problem 22: Use the every Method to Check that Every Element in an Array Meets a Criteria

function checkPositive(arr) {
  // Only change code below this line
  return arr.every((item) => {
        return item > 0;
    })
  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
