// Problem 13: Change the Prototype to a New Object

function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function () { },
    describe: function () { }
};
