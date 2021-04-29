// Given a sorted array and a number x, find a pair in array whose sum is equal to x.
// Examples:

// Input: arr[] = {10, 22, 24, 29, 30, 40}, x = 54
// Output: 24 and 30

// Input: arr[] = {1, 3, 4, 7, 10}, x = 14
// Output: 4 and 10

function findAPairedSum(arr, sumResult) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    let sum = arr[leftIndex] + arr[rightIndex];

    if (sum === sumResult) return [arr[leftIndex], arr[rightIndex]];
    if (sum < sumResult) leftIndex++;
    else rightIndex--;
  }
  return undefined;
}

console.log(findAPairedSum([1, 3, 4, 7, 10], 54));
