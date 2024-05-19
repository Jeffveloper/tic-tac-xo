import { useGameHistoryContext } from '@/modules/providers/game-history';
import { useGameStatesContext } from '@/modules/providers/game-states';
import UseCalculateWinner from '../../hooks/UseCalculateWinner';
import { getBoardItems } from '../../helpers/board';
import BoardItem from '../atoms/BoardItem';

const BoardGrid = () => {
	const { isFinished, setIsFinished, isNextCross } = useGameStatesContext();
	const { squares, setSquares } = useGameHistoryContext();

	UseCalculateWinner({ setIsFinished, squares });

	const BoardItems = getBoardItems(squares);

	if (isFinished) {
		console.log('Game Over');

		setTimeout(() => {
			setSquares(Array(9).fill(''));
			setIsFinished(false);
		}, 1000);
	}

	return (
		<>
			{BoardItems.map((item, index) => {
				return (
					<BoardItem
						key={index}
						item={item}
						isNextCross={isNextCross}
						order={index}
					/>
				);
			})}
		</>
	);
};

export default BoardGrid;
