// Problem 03: Create a Method on an Object

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return `This dog has ${dog.numLegs} legs.` }
};

dog.sayLegs();
