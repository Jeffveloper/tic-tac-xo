import ButtonBase from '@/atoms/buttons/ButtonBase';

import { useGameStatesContext } from '../../providers/game-states';
import { useGameHistoryContext } from '../../providers/game-history';
import { GAME_VALUES } from '../../constants/board';
import { RestartIcon } from '@/atoms/icons/R_icon';
import classNames from 'classnames';

const ResetButton = () => {
	const { setIsFinished, setCurrentTurn } = useGameStatesContext();
	const { setSquares, setRoundsCircle, setRoundsCross } =
		useGameHistoryContext();

	const handleReset = () => {
		setRoundsCircle(0);
		setRoundsCross(0);
		setSquares(Array(9).fill(''));
		setIsFinished(false);
		setCurrentTurn(GAME_VALUES.BASE);
	};

	return (
		<ButtonBase
			onClick={handleReset}
			className="group self-end items-center"
			text="Reset"
		>
			<RestartIcon
				className="fill-white rotate-180 group-hover:fill-black transition-colors"
				width="16"
				height="16"
			/>
		</ButtonBase>
	);
};

export default ResetButton;
