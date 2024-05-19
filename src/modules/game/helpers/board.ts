import { BoardItemData } from '@/modules/interfaces/board';
import { BOARD_ITEMS_POSITIONS } from '../constants/board';

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
