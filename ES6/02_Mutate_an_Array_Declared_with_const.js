// Problem 02: Mutate an Array Declared with const

const s = [5, 7, 2];
function editInPlace() {
    // Only change code below this line
    let first = s[0];
    let second = s[1];
    let third = s[2];
    s.length = 0;
    s[0] = third;
    s[1] = first;
    s[2] = second;
    return s;
    // Only change code above this line
}
console.log(editInPlace());
