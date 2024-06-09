import { BOARD_ITEMS_POSITIONS, GAME_VALUES } from '../constants/board';
import { BoardItemData } from '../interfaces/board';

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
