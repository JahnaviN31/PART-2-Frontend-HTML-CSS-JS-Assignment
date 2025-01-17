// Problem 09: Finders Keepers

function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
    return;
}
console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));
