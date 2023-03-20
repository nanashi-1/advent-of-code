import Hand from './type';

export const enum Letter {
	A = Hand.Rock,
	B = Hand.Paper,
	C = Hand.Scissor,
}
export function getEnumFromString(letter: 'A' | 'B' | 'C') {
	switch (letter) {
	case 'A':
		return Letter.A;
	case 'B':
		return Letter.B;
	case 'C':
		return Letter.C;
	}
}
