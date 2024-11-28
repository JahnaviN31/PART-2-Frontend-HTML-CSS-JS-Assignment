// Problem 10: Check For The Presence of an Element With indexOf()

function quickCheck(arr, elem) {
    // Only change code below this line
    const response = arr.indexOf(elem) !== -1;
    return response;
    // Only change code above this line
}

console.log(quickCheck([3, 5, 9, 125, 45, 2], 125));
