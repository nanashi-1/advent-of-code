import { readFileSync } from 'fs';
import { getEnumFromString as getEnumFromString1 } from './Side1';
import {
	Letter as Letter2,
	getEnumFromString as getEnumFromString2,
} from './Side2';
import { Result, evaluate } from './type';
import limitNumberTo123 from './limitedNumber';

const input = readFileSync('Day 2/input.txt', 'utf-8');
const games = input.split('\n'); // split by line

function part1() {
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
	return totalScore;
}

function part2() {
	let totalScore = 0; // total score

	for (const game of games) {
		const hand = getEnumFromString1(game.charAt(0) as 'A' | 'B' | 'C');

		switch (game.charAt(2)) {
		case 'X':
			totalScore += limitNumberTo123(hand !== 4 ? hand - 1 : 2); // subtracting one from the hand gives us the losing score of the reaction
			break;
		case 'Y':
			totalScore += hand !== 4 ? hand : 3;
			totalScore += 3;
			break;
		case 'Z':
			totalScore += limitNumberTo123(hand !== 4 ? hand + 1 : 4); // adding one from the hand gives us the winning score of the reaction
			totalScore += 6;
			break;
		}
	}

	return totalScore;
}

console.log('Part 1');
console.log('Total Score is: %d', part1());

console.log('Part 2');
console.log('Total Score is: %d', part2());
