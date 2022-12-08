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

  // split input into groups of 3 lines
  const groups = data.split('\n', data.length / 3).reduce<string[][]>((groups, line, index) => {
    if (index % 3 === 0) {
      // start a new group
      groups.push([line]);
    } else {
      // add line to the last group
      groups[groups.length - 1].push(line);
    }
    return groups;
  }, []);

  // iterate over each group and sum values of common letter
  const totalSum = groups.reduce<number>((totalSum, group) => {
    const commonLetter = group.reduce<string | null>((commonLetter, line) => {
      // find the common letter between all lines in the group
      const letters = line.split('');
      if (commonLetter === null) {
        return letters.find(letter => group.every(l => l.includes(letter))) || null;
      }
      return letters.find(letter => commonLetter === letter) || null;
    }, null);

    if (commonLetter && commonLetter !== null)
      // add value of common letter to total sum
      return totalSum + letterValue(commonLetter);
    return totalSum;
  }, 0);

  // log total sum to console
  console.log(totalSum);
});
