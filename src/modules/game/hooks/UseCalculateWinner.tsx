import { useEffect } from 'react';
import { GAME_STATUS } from '../constants/game';
import { calculateWinner } from 'core/helpers/game';
import { areEqualStrings } from 'core/helpers/string';

const UseCalculateWinner = ({
	setIsFinished,
	squares,
}: UseCalculateWinnerProps) => {
	useEffect(() => {
		const winner = calculateWinner(squares);

		if (areEqualStrings(winner, GAME_STATUS.PLAYING)) return;

		setIsFinished(true);
	}, [squares, setIsFinished]);
};

type UseCalculateWinnerProps = {
	setIsFinished: (value: boolean) => void;
	squares: string[];
};

export default UseCalculateWinner;
