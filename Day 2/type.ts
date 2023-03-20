import { Letter as Letter1 } from './Side1';
import { Letter as Letter2 } from './Side2';

const enum Hand {
	Rock = 1,
	Paper = 2,
	Scissor = 4,
}

export default Hand;

export enum Result {
	Win,
	Tie,
	Lose,
}

export function evaluate(one: Letter1, two: Letter2): Result {
	const difference = two - one; // each subtraction is unique except if they have the same value, this has an advantage of having to write less check

	if ([-3, 1, 2].includes(difference)) return Result.Win;
	if ([-1, -2, 3].includes(difference)) return Result.Lose;

	return Result.Tie;
}
