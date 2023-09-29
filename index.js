function hasTargetSum(array, target) {
    const seenNumbers = {};
  
    for (let num of array) {
      const complement = target - num;
  
      if (seenNumbers[complement]) {
        return true;
      }
  
      seenNumbers[num] = true;
    }
  
    return false;
  }
   
  
/* 
  Write the Big O time complexity of your function here
   Time complexity analysis:
  - We iterate through the array once, so the loop is O(n).
  - Inside the loop, accessing and updating the seenNumbers object is O(1).
  - Overall, the time complexity is O(n).
*/

/* 
  Add your pseudocode here
  - Create an empty object called seenNumbers.
  - Iterate through each number in the input array:
    - Calculate the complement needed to reach the target by subtracting the current number from the target.
    - If the complement exists in the seenNumbers object, return true, indicating that a pair was found.
    - Otherwise, add the current number to the seenNumbers object.
  - If the loop completes without finding a pair, return false.
*/

/*
  Add written explanation of your solution here

  - We use a hash table (JavaScript object) called seenNumbers to keep track of the numbers we've encountered.
  - For each number in the input array, we calculate the complement needed to reach the target sum.
  - If the complement is already in the seenNumbers object, it means we've found a pair that adds up to the target, so we return true.
  - If the complement is not in the object, we add the current number to the object, making it available for future checks.
  - If we iterate through the entire array without finding a pair, we return false, indicating that no pair adds up to the target.
  - The time complexity of this solution is O(n), where n is the length of the input array, because we iterate through the array once.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
