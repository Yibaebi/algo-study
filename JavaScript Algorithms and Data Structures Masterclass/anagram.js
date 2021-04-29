// Problem: Given words as inputs check if the inputs are anagrams of each other.

function validAnagram(firstWord, secondWord) {
  // ALGORITHM
  // Step 1: Check if the lengths of the words are the same. Return false, if not.
  if (firstWord.length !== secondWord.length) {
    return false;
  }

  // Step 2: Create a lookup object.
  let lookup = {};

  // Step 3: Loop through the first word and check if a character is contained in the lookup object.
  // If true, add one to the frequency of that key in the lookup object;
  // If false, initialize the frequency of that key to 1;

  for (let char of firstWord) {
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }

  // Step 4: Compare the lookup object with the second letter
  // If a character of the second letter exists as a key in the lookup object, subtract on from its frequency;
  // Else return false since such a letter does not exist in the lookup object;

  for (let char of secondWord) {
    // Check if the character of a word in the lookup object: exists or has a frequency of 0;

    if (lookup[char]) {
      lookup[char] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("bleedk", "eedlbt"));
console.log(validAnagram("legs", "sleg"));
console.log(validAnagram("eat", "seat"));
console.log(validAnagram("thread", "readth"));
