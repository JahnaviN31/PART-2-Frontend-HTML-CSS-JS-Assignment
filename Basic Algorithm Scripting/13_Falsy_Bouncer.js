// Problem 13: Falsy Bouncer

function bouncer(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] && result.push(arr[i]);
    }
    return result;
}
bouncer([7, "ate", "", false, 9]);
