// Problem 16: Use the delete Keyword to Remove Object Properties

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
delete foods.oranges && delete foods.plums && delete foods.strawberries;
// Only change code above this line

console.log(foods);
