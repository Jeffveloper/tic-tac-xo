import UseCalculateWinner from '../../hooks/UseCalculateWinner';
import { getBoardItems } from '../../helpers/board';
import BoardItem from '../atoms/BoardItem';
import { GAME_VALUES } from '../../constants/board';
import { useGameStatesContext } from '../../providers/game-states';
import { useGameHistoryContext } from '../../providers/game-history';

const BoardGrid = () => {
	const { isFinished, setIsFinished, setCurrentTurn } = useGameStatesContext();
	const { squares, setSquares } = useGameHistoryContext();

	UseCalculateWinner({ setIsFinished, squares });

	const BoardItems = getBoardItems(squares);

	if (isFinished) {
		console.log('Game Over');

		setTimeout(() => {
			setSquares(Array(9).fill(''));
			setIsFinished(false);
			setCurrentTurn(GAME_VALUES.BASE);
		}, 300);
	}

	return (
		<>
			{BoardItems.map((item, index) => {
				return <BoardItem key={index} item={item} order={index} />;
			})}
		</>
	);
};

export default BoardGrid;
