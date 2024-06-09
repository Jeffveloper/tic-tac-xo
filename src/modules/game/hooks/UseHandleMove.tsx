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
			currentTurn === GAME_VALUES.CROSS ? GAME_VALUES.CIRCLE : GAME_VALUES.CROSS
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
