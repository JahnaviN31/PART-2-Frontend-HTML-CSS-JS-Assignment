// Problem 113: Use Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {
    return (
        startNum === endNum ? [startNum]
            : [startNum].concat(rangeOfNumbers(startNum + 1, endNum))
    );
};
