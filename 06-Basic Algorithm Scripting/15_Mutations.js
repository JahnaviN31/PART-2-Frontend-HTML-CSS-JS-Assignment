// Problem 15: Mutations

function mutation(arr) {
    const str1 = arr[1].toLowerCase();
    const str2 = arr[0].toLowerCase();
    for (let i = 0; i < str1.length; i++) {
        if (str2.indexOf(str1[i]) < 0) return false;
    }
    return true;
}

mutation(["hello", "hey"]);
