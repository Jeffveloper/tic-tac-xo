import { useEffect } from 'react';
import { GAME_STATUS } from '../constants/game';
import { calculateWinner } from 'core/helpers/game';
import { areEqualStrings } from 'core/helpers/string';
import { useGameStatesContext } from '../providers/game-states';
import { useGameHistoryContext } from '../providers/game-history';
import { GAME_VALUES } from '../constants/board';

const UseCalculateWinner = ({
	setIsFinished,
	squares,
}: UseCalculateWinnerProps) => {
	const { isFinished, setCurrentTurn, isCurrentCross } = useGameStatesContext();
	const {
		setSquares,
		setRoundsCircle,
		setRoundsCross,
		roundsCircle,
		roundsCross,
	} = useGameHistoryContext();

	useEffect(() => {
		const status = calculateWinner(squares);

		console.log(status);

		if (areEqualStrings(status, GAME_STATUS.PLAYING)) return;

		setIsFinished(true);

		setTimeout(() => {
			if (status !== GAME_STATUS.DRAW) {
				isCurrentCross
					? setRoundsCircle(roundsCircle + 1)
					: setRoundsCross(roundsCross + 1);
			}

			setSquares(Array(9).fill(''));
			setIsFinished(false);
			setCurrentTurn(GAME_VALUES.BASE);
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
	]);
};

type UseCalculateWinnerProps = {
	setIsFinished: (value: boolean) => void;
	squares: string[];
};

export default UseCalculateWinner;
