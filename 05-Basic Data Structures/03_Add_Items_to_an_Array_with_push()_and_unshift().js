// Problem 03: Add Items to an Array with push() and unshift()

function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift(2);
    arr.unshift("I");
    arr.unshift("three");
    
    arr.push(7);
    arr.push("VIII");
    arr.push(9);
    // Only change code above this line
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
