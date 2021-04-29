// Frequency Counter - areThereDuplicates
// Implement a function called areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Restrictions: Time Complexity - O(n), Space Complexity - O(n)

function areThereDuplicates(...args) {
  const duplicateCounter = {};

  for (let arg of args) {
    duplicateCounter[arg]
      ? (duplicateCounter[arg] += 1)
      : (duplicateCounter[arg] = 1);
  }

  for (let arg in duplicateCounter) {
    if (duplicateCounter[arg] > 1) return true;
  }

  return false;
}

console.log(areThereDuplicates("love", "hate", "hater", 1, 2));
