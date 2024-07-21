import ButtonBase from '@/atoms/buttons/ButtonBase';
import { RestartIcon } from '@/atoms/icons/R_icons';
import { DEFAULT_GAME_STATE, GAME_VALUES } from '@/modules/game/constants/game';
import { useGameHistoryContext } from '@/modules/game/providers/game-history';
import { useGameStatusContext } from '@/modules/game/providers/game-status';
import { useResetModalContext } from '@/modules/game/providers/reset-modal';
import classNames from 'classnames';
import { useState } from 'react';

const ResetScoreboardModalButton = () => {
	const [isDisabled, setIsDisabled] = useState(false);
	const { setIsFinished, setCurrentTurn } = useGameStatusContext();
	const { setisResetModalOpen } = useResetModalContext();
	const { setSquares, setRoundsCircle, setRoundsCross, setRoundsDraw } =
		useGameHistoryContext();

	const handleReset = () => {
		if (isDisabled) return;

		setIsDisabled(true);
		setRoundsCircle(0);
		setRoundsCross(0);
		setRoundsDraw(0);
		setSquares(DEFAULT_GAME_STATE);
		setIsFinished(false);
		setCurrentTurn(GAME_VALUES.CROSS);
		setisResetModalOpen(false);
		setIsDisabled(false);
	};

	return (
		<ButtonBase
			onClick={handleReset}
			text="Reset"
			className={classNames(
				{ 'opacity-30': isDisabled },
				'items-center text-xs lg:text-sm'
			)}
			disabled={isDisabled}
		>
			<RestartIcon className="rotate-180" width="16" height="16" />
		</ButtonBase>
	);
};

export default ResetScoreboardModalButton;
