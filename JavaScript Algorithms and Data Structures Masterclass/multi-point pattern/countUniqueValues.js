// Problem: Accept a sorted array of numbers and return the count of unique values in the array.
// The sorted array could contain negative values but sorted.

// Edge Cases
// countUniqueValues([1,1,1,2,3,4,4,6,7,7,7]); //Returns 7

function countUniqueValues(arr) {
  let pointer_1 = 0;
  let pointer_2 = 1;

  if (!arr.length) {
    return pointer_1;
  }

  while (pointer_2 < arr.length) {
    if (arr[pointer_1] === arr[pointer_2]) {
      pointer_2++;
    } else {
      pointer_1++;
      arr[pointer_1] = arr[pointer_2];
      pointer_2++;
    }
  }

  return pointer_1 + 1;
}

console.log(countUniqueValues([1, 1, 1, 2, 3, 4, 4, 6, 7, 7, 7]));
console.log(
  countUniqueValues([-4, -3, -3, -2, -2, -1, -1, 1, 2, 3, 4, 4, 6, 7, 7, 7])
);
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([]));
