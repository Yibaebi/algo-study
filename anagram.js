// Problem: Given words as inputs check if the inputs are anagrams of each other.

function validAnagram(firstWord, secondWord) {
  // ALGORITHM
  // Step 1: Check if the lengths of the words are the same. Return false, if not.
  if (firstWord.length !== secondWord.length) {
    return false;
  }

  // Step 2: Create a frequency counter for each word.
  let frequencyCounter_1 = {};
  let frequencyCounter_2 = {};

  // Step 3: Loop through each word and save the frequency of each character in the respective words.
  for (let char of firstWord) {
    frequencyCounter_1[char] = (frequencyCounter_1[char] || 0) + 1;
  }

  for (let char of secondWord) {
    frequencyCounter_2[char] = (frequencyCounter_2[char] || 0) + 1;
  }

  // Step 4: Using a loop, compare the values of the keys in each frequency counter. Return false if a wrong match is found.
  for (let key in frequencyCounter_1) {
    if (!(frequencyCounter_1[key] === frequencyCounter_2[key])) {
      return false;
    }
  }

  // Step 5: Return true if all values match.
  return true;
}

console.log(validAnagram("bleedk", "eedlbr"));
console.log(validAnagram("legs", "sleg"));
console.log(validAnagram("eat", "seat"));
console.log(validAnagram("thread", "readth"));
