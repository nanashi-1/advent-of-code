import { readFileSync } from 'fs';
import { getEnumFromString as getEnumFromString1 } from './Side1';
import {
	Letter as Letter2,
	getEnumFromString as getEnumFromString2,
} from './Side2';
import { Result, evaluate } from './type';

const input = readFileSync('Day 2/input.txt', 'utf-8');
const games = input.split('\n'); // split by line
let totalScore = 0; // total score

// loop through all the games
for (const game of games) {
	const handOf1 = getEnumFromString1(game.charAt(0) as 'A' | 'B' | 'C');
	const handOf2 = getEnumFromString2(game.charAt(2) as 'X' | 'Y' | 'Z');

	switch (evaluate(handOf1, handOf2)) {
	case Result.Win:
		totalScore += 6;
		break;
		// skip Result.Lose
	case Result.Tie:
		totalScore += 3;
	}

	// the enum numbers are fine as it is except for Letter2.Z
	if (handOf2 === Letter2.Z) totalScore += 3;
	else totalScore += handOf2;
}

console.log('Total Score is: %d', totalScore);
