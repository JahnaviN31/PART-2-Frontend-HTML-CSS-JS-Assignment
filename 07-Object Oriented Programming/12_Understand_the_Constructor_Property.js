// Problem 12: Understand the Constructor Property

function Dog(name) {
    this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) return true;
    return false;
}
