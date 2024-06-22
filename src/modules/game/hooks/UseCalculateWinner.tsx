import { useEffect } from 'react';
import {
	DEFAULT_GAME_STATE,
	GAME_STATUS,
	GAME_VALUES,
} from '../constants/game';
import { areEqualStrings } from 'core/helpers/string';
import { useGameStatusContext } from '../providers/game-status';
import { useGameHistoryContext } from '../providers/game-history';
import { calculateWinner } from '../helpers/winner';

const UseCalculateWinner = ({
	setIsFinished,
	squares,
}: UseCalculateWinnerProps) => {
	const { setCurrentTurn, isCurrentCross } = useGameStatusContext();
	const {
		setSquares,
		setRoundsCircle,
		setRoundsCross,
		roundsCircle,
		roundsCross,
		setRoundsDraw,
		roundsDraw,
	} = useGameHistoryContext();

	useEffect(() => {
		const status = calculateWinner(squares);

		if (areEqualStrings(status, GAME_STATUS.PLAYING)) return;

		setIsFinished(true);

		setTimeout(() => {
			if (status !== GAME_STATUS.DRAW) {
				isCurrentCross
					? setRoundsCircle(roundsCircle + 1)
					: setRoundsCross(roundsCross + 1);
			} else {
				setRoundsDraw(roundsDraw + 1);
			}

			setSquares(DEFAULT_GAME_STATE);
			setCurrentTurn(GAME_VALUES.CROSS);
			setIsFinished(false);
		}, 300);
	}, [
		squares,
		setIsFinished,
		isCurrentCross,
		setRoundsCircle,
		roundsCircle,
		setRoundsCross,
		roundsCross,
		setSquares,
		setCurrentTurn,
		setRoundsDraw,
		roundsDraw,
	]);
};

type UseCalculateWinnerProps = {
	setIsFinished: (value: boolean) => void;
	squares: string[];
};

export default UseCalculateWinner;
