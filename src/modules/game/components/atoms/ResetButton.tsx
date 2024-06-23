import ButtonBase from '@/atoms/buttons/ButtonBase';

import { RestartIcon } from '@/atoms/icons/R_icons';
import { useGameHistoryContext } from '../../providers/game-history';
import { useGameStatusContext } from '../../providers/game-status';
import { DEFAULT_GAME_STATE, GAME_VALUES } from '../../constants/game';

const ResetButton = () => {
	const { setIsFinished, setCurrentTurn } = useGameStatusContext();
	const {
		squares,
		setSquares,
		setRoundsCircle,
		setRoundsCross,
		setRoundsDraw,
	} = useGameHistoryContext();

	const handleReset = () => {
		if (squares === DEFAULT_GAME_STATE) return;

		setRoundsCircle(0);
		setRoundsCross(0);
		setRoundsDraw(0);
		setSquares(DEFAULT_GAME_STATE);
		setIsFinished(false);
		setCurrentTurn(GAME_VALUES.CROSS);
	};

	return (
		<ButtonBase
			onClick={handleReset}
			className="group self-end items-center mt-4 w-full justify-center"
			text="Reset"
		>
			<RestartIcon className="rotate-180" width="20" height="20" />
		</ButtonBase>
	);
};

export default ResetButton;
