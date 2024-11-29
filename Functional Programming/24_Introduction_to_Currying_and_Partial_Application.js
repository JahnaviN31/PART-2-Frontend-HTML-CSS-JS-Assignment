// Problem 24: Introduction to Currying and Partial Application

function add(x) {
  // Only change code below this line
  return function add(y) {
        return function add(z) {
            return x + y + z;
        }
    }
  // Only change code above this line
}
add(10)(20)(30);
