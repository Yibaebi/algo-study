// Problem: Given two arrays of numbers as inputs;
// Check if the elements of the second array are the squares of the first array.
// Also check if the frequency of a number and it's square are the same in both arrays.

function same(Arr1, Arr2) {
  // ALGORITHM
  // Step 1: Check if the lengths of the arrays are the same. Return false, if not.
  if (Arr1.length !== Arr2.length) {
    return false;
  }

  // Step 2: Create a frequency counter for each array of numbers.
  let frequencyCounter_1 = {};
  let frequencyCounter_2 = {};

  // Step 3: Loop through each array and save the frequency of each value in the respective arrays.
  for (let value of Arr1) {
    frequencyCounter_1[value] = (frequencyCounter_1[value] || 0) + 1;
  }

  for (let value of Arr2) {
    frequencyCounter_2[value] = (frequencyCounter_2[value] || 0) + 1;
  }

  // Step 4: Using a loop, compare the values of the keys in each frequency counter.
  // Return false if a wrong match is found.

  for (let key in frequencyCounter_1) {
    if (!(key ** 2 in frequencyCounter_2)) {
      return false;
    }
    if (frequencyCounter_1[key] !== frequencyCounter_2[key ** 2]) {
      return false;
    }
  }

  // Step 5: Return true if arrays match based on given criteria.
  return true;
}

console.log(same([1, 2, 3, 4], [1, 3, 9, 16]));
console.log(same([1, 2, 3, 4], [1, 4, 9, 16]));
console.log(same([1, 2, 3, 4, 7], [1, 3, 9, 16]));
console.log(same([1, 5, 3, 4], [16, 1, 9, 25]));
