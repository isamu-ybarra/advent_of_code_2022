// First, we need to import the fs (file system) module
// so that we can read the input file
import * as fs from 'fs';

// This function takes in the path to an input file and returns
// the maximum sum for a group in the file
function findMaxSum(filePath: string) {
  // We start by reading the file and splitting it into an array of lines
  const lines = fs.readFileSync(filePath, 'utf-8').split('\n');

  // Then, we initialize the maximum sum and the current group sum to 0
  let maxSum = 0;
  let groupSum = 0;

  // Next, we loop through the lines in the file
  for (const line of lines) {
    // If the line is empty, it indicates the end of a group
    // so we need to update the maximum sum if necessary
    if (line === '') {
      maxSum = Math.max(maxSum, groupSum);
      groupSum = 0;
    } else {
      // If the line is not empty, we add its value to the current group sum
      groupSum += parseInt(line);
    }
  }

  // Finally, we return the maximum sum
  return maxSum;
}

// Now we can call the function and pass in the path to the input file
const maxSum = findMaxSum('input.txt');
console.log(maxSum);
