// A map that maps opponent's moves to the outcome we want to achieve
const STRATEGY_GUIDE = {
  A: 'Y',
  B: 'X',
  C: 'Z',
};

// Maps hand shapes to their corresponding scores
const SCORES = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
};

/**
 * Returns the winner of a round of Rock Paper Scissors
 * @param p1 The shape played by player 1
 * @param p2 The shape played by player 2
 * @returns 'p1' if player 1 wins, 'p2' if player 2 wins, and 'draw' if it's a draw
 */
function getWinner(p1: string, p2: string): string {
  if (p1 === p2) {
    return 'draw';
  }

  if (
    (p1 === 'Rock' && p2 === 'Scissors') ||
    (p1 === 'Paper' && p2 === 'Rock') ||
    (p1 === 'Scissors' && p2 === 'Paper')
  ) {
    return 'p1';
  }

  return 'p2';
}

// Read the input file
const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

// Parse the input and extract the strategy guide
const lines = input.trim().split('\n');
const rounds = lines.map((line: string) => line.split(' '));

// Play each round and calculate the total score
let totalScore = 0;
for (const [opponentMove, outcome] of rounds) {
  const opponentShape =
    opponentMove === 'A' ? 'Rock' : opponentMove === 'B' ? 'Paper' : 'Scissors';
  const ourShape =
    outcome === 'Z'
      ? opponentShape === 'Rock'
        ? 'Paper'
        : opponentShape === 'Paper'
        ? 'Scissors'
        : 'Rock'
      : outcome === 'Y'
      ? opponentShape
      : opponentShape === 'Rock'
      ? 'Scissors'
      : opponentShape === 'Paper'
      ? 'Rock'
      : 'Paper';
  const winner = getWinner(ourShape, opponentShape);

  let roundScore = 0;
  if (winner === 'p1') {
    // We win the round
    roundScore = SCORES[ourShape] + 6;
  } else if (winner === 'p2') {
    // We lose the round
    roundScore = SCORES[ourShape] + 0;
  } else {
    // It's a draw
    roundScore = SCORES[ourShape] + 3;
  }

  totalScore += roundScore;
}

console.log(totalScore); // 12
