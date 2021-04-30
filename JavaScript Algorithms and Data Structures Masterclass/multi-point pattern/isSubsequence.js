// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks
// whether the characters in the first string form a subsequence of the characters
// in the second string. In other words, the function should check whether the characters
// in the first string appear somewhere in the second string, without their order changing.

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

const isSubsequence = (firstString, secondString) => {
  if (!firstString) return true;

  let pointer_1 = 0;
  let pointer_2 = 0;

  while (pointer_2 < secondString.length) {
    if (secondString[pointer_2] === firstString[pointer_1]) pointer_1++;

    if (pointer_1 === firstString.length) {
      return true;
    }

    pointer_2++;
  }

  return false;
};

console.log(isSubsequence("rirare", "breadrirlarare"));
console.log(isSubsequence("redirl", "redir"));
console.log(isSubsequence("", "redir"));
