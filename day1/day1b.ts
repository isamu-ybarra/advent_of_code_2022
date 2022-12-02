// First, we need to import the fs (file system) module
// so that we can read the input file
import * as fs from 'fs';

// This function takes in the path to an input file and returns
// the top 3 sums for a group in the file
function findTop3Sums(filePath: string) {
  // We start by reading the file and splitting it into an array of lines
  const lines = fs.readFileSync(filePath, 'utf-8').split('\n');

  // Then, we initialize the top 3 sums and the current group sum to 0
  const top3Sums = [0, 0, 0];
  let groupSum = 0;

  // Next, we loop through the lines in the file
  for (const line of lines) {
    // If the line is empty, it indicates the end of a group
    // so we need to update the top 3 sums if necessary
    if (line === '') {
      // First, we sort the top 3 sums in descending order
      top3Sums.sort((a, b) => b - a);

      // Then, we check if the current group sum is greater than the smallest
      // value in the top 3 sums. If it is, we replace the smallest value
      // with the current group sum
      if (groupSum > top3Sums[2]) {
        top3Sums[2] = groupSum;
      }

      // Finally, we reset the current group sum to 0
      groupSum = 0;
    } else {
      // If the line is not empty, we add its value to the current group sum
      groupSum += parseInt(line);
    }
  }

  // After we have looped through all the lines in the file, we sort the top 3 sums
  // in descending order again, since they may not be in the correct order
  top3Sums.sort((a, b) => b - a);

  // Finally, we return the top 3 sums
  return top3Sums;
}

// Now we can call the function and pass in the path to the input file
const top3Sums = findTop3Sums('input.txt');
console.log(top3Sums);

// To get the sum of the top 3 sums, we simply add them up
const sumOfTop3Sums = top3Sums.reduce((sum, value) => sum + value, 0);
console.log(sumOfTop3Sums);
