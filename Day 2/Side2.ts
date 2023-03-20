import Hand from './type';

export const enum Letter {
	X = Hand.Rock,
	Y = Hand.Paper,
	Z = Hand.Scissor,
}
export function getEnumFromString(letter: 'X' | 'Y' | 'Z') {
	switch (letter) {
	case 'X':
		return Letter.X;
	case 'Y':
		return Letter.Y;
	case 'Z':
		return Letter.Z;
	}
}
