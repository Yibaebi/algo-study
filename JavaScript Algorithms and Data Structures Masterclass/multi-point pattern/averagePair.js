// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers
// and a target average, determine if there is a pair of values in the array
// where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Bonus letraints:
// Time Complexity: O(N)
// Space Complexity: O(1)

function averagePair(arr, targetAverage) {
  if (!arr.length) return false;

  let pointer_1 = 0;
  let pointer_2 = arr.length - 1;

  while (pointer_1 < pointer_2) {
    let currentAverage = (arr[pointer_1] + arr[pointer_2]) / 2;
    if (currentAverage === targetAverage) return true;

    currentAverage > targetAverage ? pointer_2-- : pointer_1++;
  }

  return false;
}

console.log(averagePair([1, 2, 3, 4, 5], 4.5));
console.log(averagePair([1, 2, 3, 4, 5], 9));
console.log(averagePair([-2, -1, 1, 2, 3, 4, 5], 2));
console.log(averagePair([-2, -1, 1, 2, 3, 4, 5], 5));
