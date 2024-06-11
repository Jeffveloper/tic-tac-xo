import { BOARD_ITEMS_POSITIONS } from '../constants/position';
import { BoardItemData } from '../interfaces/board';
import { GAME_VALUES } from '@/modules/game/constants/game';

export const getBoardItems = (squares: GAME_VALUES[]) => {
	const boardItems: BoardItemData[] = BOARD_ITEMS_POSITIONS.map(
		(position, index) => {
			return {
				position,
				value: squares[index],
			};
		}
	);
	return boardItems;
};
