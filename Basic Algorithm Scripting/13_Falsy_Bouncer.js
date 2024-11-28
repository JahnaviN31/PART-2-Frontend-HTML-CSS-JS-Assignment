// Problem 13: Falsy Bouncer

function bouncer(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] && newArr.push(arr[i]);
    }
    return newArr;
}
bouncer([7, "ate", "", false, 9]);
