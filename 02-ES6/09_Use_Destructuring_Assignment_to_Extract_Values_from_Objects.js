// Problem 09: Use Destructuring Assignment to Extract Values from Objects

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line
const { today = 77 } = HIGH_TEMPERATURES;
const { tomorrow = 80 } = HIGH_TEMPERATURES;
  // Only change code above this line
