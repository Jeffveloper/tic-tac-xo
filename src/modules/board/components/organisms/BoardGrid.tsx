import { getBoardItems } from '../../helpers/board';
import UseCalculateWinner from '../../../game/hooks/UseCalculateWinner';
import { useGameHistoryContext } from '../../../game/providers/game-history';
import { useGameStatusContext } from '../../../game/providers/game-status';
import BoardItem from '../atoms/BoardItem';

const BoardGrid = () => {
	const { setIsFinished } = useGameStatusContext();
	const { squares } = useGameHistoryContext();

	UseCalculateWinner({ setIsFinished, squares });

	const BoardItems = getBoardItems(squares);

	return (
		<>
			{BoardItems.map((item, index) => {
				return <BoardItem key={index} item={item} order={index} />;
			})}
		</>
	);
};

export default BoardGrid;
