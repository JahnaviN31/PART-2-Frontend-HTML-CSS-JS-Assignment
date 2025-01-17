// Problem 04: Find the Longest Word in a String

function findLongestWordLength(str) {
  const words = str.split(" ");
  let maxLength = 0;
  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
