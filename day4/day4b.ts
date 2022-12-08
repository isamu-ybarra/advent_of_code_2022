import * as fs from 'fs';

function getOverlappingRangeCount(input: string): number {
  // split the input into lines
  const lines = input.split('\n');

  // initialize a counter to keep track of the number of lines with an overlapping range
  let count = 0;

  // iterate over each line
  for (const line of lines) {
    if (!line) continue;
    // split the line into the two ranges
    const [range1, range2] = line.split(',');

    // split each range into its lower and upper bounds
    const [lower1, upper1] = range1.split('-');
    const [lower2, upper2] = range2.split('-');

    // convert the lower and upper bounds to numbers
    const lower1Num = parseInt(lower1, 10);
    const upper1Num = parseInt(upper1, 10);
    const lower2Num = parseInt(lower2, 10);
    const upper2Num = parseInt(upper2, 10);

    // check if there is any overlap between the two ranges
    if (!(upper1Num < lower2Num || upper2Num < lower1Num)) {
      // if so, increment the counter
      count++;
    }
  }

  // return the final count
  return count;
}

// read the input file
fs.readFile('input.txt', 'utf-8', (err, data) => {
  // log the number of lines with an overlapping range
  console.log(getOverlappingRangeCount(data));
});
