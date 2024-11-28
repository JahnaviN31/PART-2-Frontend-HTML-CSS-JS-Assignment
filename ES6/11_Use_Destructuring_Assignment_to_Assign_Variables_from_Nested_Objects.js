// Problem 11: Use Destructuring Assignment to Assign Variables from Nested Objects

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
const { today: { low: lowToday } } = LOCAL_FORECAST;
const { today: { high: highToday } } = LOCAL_FORECAST;
console.log(lowToday,highToday);
  // Only change code above this line
