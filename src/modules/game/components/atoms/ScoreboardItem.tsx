import { GAME_VALUES } from '../../constants/board';
import { useGameHistoryContext } from '../../providers/game-history';

const ScoreboardItem = ({ isAlternative }: ScoreboardItemProps) => {
	const { roundsCircle, roundsCross } = useGameHistoryContext();

	return (
		<div className="flex flex-col w-full">
			<div className="bg-white text-black text-center py-2">
				<p className="font-bold">
					{isAlternative ? GAME_VALUES.ALTERNATIVE : GAME_VALUES.BASE}
				</p>
			</div>
			<div className="border-2 border-white w-full aspect-square flex items-center justify-center">
				<p className="text-6xl">{isAlternative ? roundsCircle : roundsCross}</p>
			</div>
		</div>
	);
};

type ScoreboardItemProps = {
	isAlternative?: boolean;
};

export default ScoreboardItem;
