// Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Restrictions:
// Time Complexity - O(n log n)
// Space Complexity - O(1)

function areThereDuplicates(...args) {
  if (!args.length) {
    return false;
  }

  args.sort();

  let pointer_1 = 0;
  let pointer_2 = 1;

  while (pointer_2 < args.length) {
    if (args[pointer_1] === args[pointer_2]) return true;

    pointer_2++;
    pointer_1++;
  }

  return false;
}

console.log(areThereDuplicates("love", "hate", "hater", 1, 2, "lover", 1, 2));
