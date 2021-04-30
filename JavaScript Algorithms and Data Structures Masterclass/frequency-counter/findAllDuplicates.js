// Frequency Counter - findAllDuplicates
// Given an array of positive integers, some elements appear twice and others appear once.
// Find all the elements that appear twice in this array.
// Note that you can return the elements in any order.

function findAllDuplicates(arr) {
  const duplicateCounter = {};
  const duplicateValues = [];

  for (let number of arr) {
    duplicateCounter[number]
      ? (duplicateCounter[number] += 1)
      : (duplicateCounter[number] = 1);
  }

  for (let number in duplicateCounter) {
    if (duplicateCounter[number] === 2) duplicateValues.push(number);
  }

  return duplicateValues;
}

console.log(findAllDuplicates([2, 2, 1, 1, 2, 3, 3]));
