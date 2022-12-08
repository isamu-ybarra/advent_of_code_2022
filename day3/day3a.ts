import * as fs from 'fs';

// translate letter to value
const letterValue = (letter: string): number => {
  const code = letter.charCodeAt(0);
  if (code >= 97 && code <= 122) { // lowercase
    return code - 96;
  } else if (code >= 65 && code <= 90) { // uppercase
    return code - 38;
  } else { // other characters
    return 0;
  }
}

// read input.txt file
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // split input into lines
  const lines = data.split('\n');

  // iterate over each line and sum values of first common letter
  const totalSum = lines.reduce((totalSum, line) => {
    const half = line.length / 2;
    const input1 = line.substring(0, half);
    const input2 = line.substring(half);

    // find first common letter between inputs
    const commonLetter = input1.split('').find(letter => input2.includes(letter));

    if (commonLetter)
      // add value of common letter to total sum
      return totalSum + letterValue(commonLetter);
    return totalSum;
  }, 0);

  // log total sum to console
  console.log(totalSum);
});
