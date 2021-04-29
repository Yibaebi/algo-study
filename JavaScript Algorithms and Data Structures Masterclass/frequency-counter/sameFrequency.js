// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities: Time: O(N)

function sameFrequency(firstNumber, secondNumber) {
  firstNumber = String(firstNumber);
  secondNumber = String(secondNumber);

  if (firstNumber.length !== secondNumber.length) return false;

  const lookUp = {};

  for (let num of firstNumber) {
    lookUp[num] ? (lookUp[num] += 1) : (lookUp[num] = 1);
  }

  for (let num of secondNumber) {
    if (lookUp[num]) {
      lookUp[num] -= 1;
    } else return false;
  }

  return true;
}

console.log(sameFrequency(121, 211));
console.log(sameFrequency(121, 2112));
console.log(sameFrequency(1123, 3113));
console.log(sameFrequency(1133, 3113));
