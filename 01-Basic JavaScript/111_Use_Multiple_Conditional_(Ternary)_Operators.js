// Problem 111: Use Multiple Conditional (Ternary) Operators

function checkSign(num) {
    return (
        num === 0 ? "zero" : num > 0 ? "positive" : "negative"
    );
}

checkSign(10);