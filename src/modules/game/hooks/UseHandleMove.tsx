import { Dispatch, SetStateAction } from 'react';
import { GAME_VALUES } from '../constants/board';

const UseHandleMove = ({
	isFinished,
	squares,
	setSquares,
	currentTurn,
	setCurrentTurn,
}: UseHandleMoveProps) => {
	const handleNextMove = (index: number) => {
		if (isFinished) return;

		const nextSquares = squares.slice();
		nextSquares[index] = currentTurn;
		setSquares(nextSquares);
		setCurrentTurn(
			currentTurn === GAME_VALUES.BASE
				? GAME_VALUES.ALTERNATIVE
				: GAME_VALUES.BASE
		);
	};

	return handleNextMove;
};

type UseHandleMoveProps = {
	isFinished: boolean;
	squares: GAME_VALUES[];
	setSquares: Dispatch<SetStateAction<GAME_VALUES[]>>;
	currentTurn: GAME_VALUES;
	setCurrentTurn: Dispatch<SetStateAction<GAME_VALUES>>;
};

export default UseHandleMove;
