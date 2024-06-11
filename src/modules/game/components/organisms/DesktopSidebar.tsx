import Logo from '@/molecules/Logo';
import SidebarButtonsGroup from '../molecules/SidebarButtonsGroup';
import CurrentTurnTable from '../molecules/CurrentTurnTable';
import Scoreboard from '../molecules/Scoreboard';

const DesktopSidebar = () => {
	return (
		<div className="bg-black border-l border-white w-[25rem] h-screen p-6 bg-dark-gray flex flex-col gap-12 xl:gap-20 justify-between overflow-y-auto">
			<div className="flex flex-col gap-12 xl:gap-20">
				<Logo />
				<CurrentTurnTable />
				<Scoreboard />
			</div>
			<SidebarButtonsGroup />
		</div>
	);
};

export default DesktopSidebar;
