import { GAME_STATUS } from '@/modules/game/constants/game';
import { areEqualStrings, isEmptyString } from './string';

export const calculateWinner = (squares: string[]): GAME_STATUS => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];

		if (
			!isEmptyString(squares[a]) &&
			areEqualStrings(squares[a], squares[b]) &&
			areEqualStrings(squares[a], squares[c])
		) {
			return GAME_STATUS.WIN;
		}
	}

	if (squares.join('').length === 9) return GAME_STATUS.DRAW;

	return GAME_STATUS.PLAYING;
};
