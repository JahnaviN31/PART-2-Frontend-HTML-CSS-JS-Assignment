// Problem 17: Write Concise Declarative Functions with ES6

// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
// Only change code above this line
bicycle.setGear(48);
console.log(bicycle.gear);
