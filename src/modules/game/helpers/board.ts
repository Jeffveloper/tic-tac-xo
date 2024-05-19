import { BOARD_ITEMS_POSITIONS } from '../constants/board';
import { BoardItemData } from '../interfaces/board';

export const getBoardItems = (squares: string[]) => {
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
