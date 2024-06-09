import Logo from '@/molecules/Logo';
import ButtonsGroup from '../molecules/ButtonsGroup';
import CurrentTurnTable from '../molecules/CurrentTurnTable';
import Scoreboard from '../molecules/Scoreboard';

const DesktopSidebar = () => {
	return (
		<div className="bg-black border-l border-white w-[25rem] h-screen p-6 bg-dark-gray flex flex-col gap-12 xl:gap-20 overflow-y-auto">
			<Logo />
			<CurrentTurnTable />
			<Scoreboard />
			<ButtonsGroup />
		</div>
	);
};

export default DesktopSidebar;
