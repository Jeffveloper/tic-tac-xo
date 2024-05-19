import ScoreboardItem from '../atoms/ScoreboardItem';

const Scoreboard = () => {
	return (
		<section className="flex flex-col gap-2">
			<h2 className="border-b w-fit mb-2">Scoreboard</h2>

			<div className="grid grid-cols-2 gap-4">
				<ScoreboardItem />
				<ScoreboardItem isAlternative />
			</div>
		</section>
	);
};

export default Scoreboard;
