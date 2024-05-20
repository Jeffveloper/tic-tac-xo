import { useGameStatesContext } from '../../providers/game-states';
import CurrentTurnScene from './CurrentTurnScene';
import classNames from 'classnames';

const CurrentTurnTable = () => {
	const { isCurrentCross } = useGameStatesContext();

	return (
		<section className="flex flex-col gap-2 w-full">
			<h2 className="border-b w-fit mb-2">Current Turn</h2>

			<div
				className={classNames(
					{ 'before:-translate-x-full': !isCurrentCross },
					'border-2 flex border-white aspect-square relative before:absolute before:w-full before:h-full before:top-0 before:bg-white overflow-hidden before:transition-all'
				)}
			>
				<CurrentTurnScene />
			</div>
		</section>
	);
};

export default CurrentTurnTable;
