import { GAME_VALUES } from '../../constants/board';

const ScoreboardItem = ({ isAlternative }: ScoreboardItemProps) => {
	return (
		<div className="flex flex-col w-full">
			<div className="bg-white text-black text-center py-2">
				<p>{isAlternative ? GAME_VALUES.ALTERNATIVE : GAME_VALUES.BASE}</p>
			</div>
			<div className="button w-full aspect-square items-center justify-center">
				<p className="text-[52px]">01</p>
			</div>
		</div>
	);
};

type ScoreboardItemProps = {
	isAlternative?: boolean;
};

export default ScoreboardItem;
