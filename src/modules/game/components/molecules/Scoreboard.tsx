import TableHeadTemplate from '@/atoms/TableHeadTemplate';
import ScoreboardItem from '../atoms/ScoreboardItem';
import { GAME_WINNER } from 'core/constants/players';
import ResetButton from '../atoms/ResetButton';

const Scoreboard = () => {
	return (
		<section className="flex flex-col">
			<TableHeadTemplate text="Scoreboard" />

			<div className="grid grid-cols-3 gap-4">
				<ScoreboardItem winner={GAME_WINNER.CROSS} />
				<ScoreboardItem winner={GAME_WINNER.DRAW} />
				<ScoreboardItem winner={GAME_WINNER.CIRCLE} />
			</div>
			<ResetButton />
		</section>
	);
};

export default Scoreboard;
