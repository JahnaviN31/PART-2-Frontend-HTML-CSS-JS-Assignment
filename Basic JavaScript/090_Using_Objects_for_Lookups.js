// Problem 090: Using Objects for Lookups

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    "": undefined,
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
  return lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
