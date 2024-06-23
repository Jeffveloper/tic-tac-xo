import TableHeadTemplate from '@/atoms/TableHeadTemplate';
import CurrentTurnScene from './CurrentTurnScene';

const CurrentTurnTable = () => {
	return (
		<section className="flex flex-col w-full mb-12 xl:mb-20">
			<TableHeadTemplate text="Current Turn" />
			<div className="flex border-b-2 border-r-2 border-white aspect-video relative">
				<CurrentTurnScene />
			</div>
		</section>
	);
};

export default CurrentTurnTable;
