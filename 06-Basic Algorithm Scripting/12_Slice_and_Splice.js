// Problem 12: Slice and Splice

function frankenSplice(arr1, arr2, n) {
    let result = [];
    if (arr2.length >= 1) {
        for (let i = 0; i < n; i++) {
            result.push(arr2[i]);
        }
    }
    result = result.concat(arr1);
    for (let i = n; i < arr2.length; i++) {
        result.push(arr2[i]);
    }
    return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
