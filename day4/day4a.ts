import * as fs from 'fs';

function getContainedRangeCount(input: string): number {
  // split the input into lines
  const lines = input.split('\n');

  // initialize a counter to keep track of the number of lines with a fully contained range
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

    // check if either range1 is fully contained within range2, or range2 is fully contained within range1
    if ((lower1Num >= lower2Num && upper1Num <= upper2Num) || (lower2Num >= lower1Num && upper2Num <= upper1Num)) {
      // if so, increment the counter
      count++;
    }
  }

  // return the final count
  return count;
}

// read the input file
fs.readFile('input.txt', 'utf-8', (err, data) => {
  // log the number of lines with a fully contained range
  console.log(getContainedRangeCount(data));
});
