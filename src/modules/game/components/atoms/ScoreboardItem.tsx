import { GAME_WINNER } from 'core/constants/players';
import { areEqualStrings } from 'core/helpers/string';
import { useGameHistoryContext } from '../../providers/game-history';

const ScoreboardItem = ({ winner }: ScoreboardItemProps) => {
	const { roundsCircle, roundsCross, roundsDraw } = useGameHistoryContext();

	return (
		<div className="grid grid-rows-auto-fr w-full">
			<div className="p-4 flex items-center justify-center bg-white text-black text-center">
				<p className="font-bold">{winner}</p>
			</div>
			<div className="p-4 border-b-2 border-r-2 border-white w-full flex items-center justify-center">
				<p className="text-2xl">
					{areEqualStrings(winner, GAME_WINNER.CIRCLE) && roundsCircle}
					{areEqualStrings(winner, GAME_WINNER.CROSS) && roundsCross}
					{areEqualStrings(winner, GAME_WINNER.DRAW) && roundsDraw}
				</p>
			</div>
		</div>
	);
};

type ScoreboardItemProps = {
	winner: string;
};

export default ScoreboardItem;
