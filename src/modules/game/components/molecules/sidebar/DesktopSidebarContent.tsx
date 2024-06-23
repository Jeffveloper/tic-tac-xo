import Logo from '@/molecules/Logo';
import CurrentTurnTable from '../CurrentTurnTable';
import Scoreboard from '../Scoreboard';
import SidebarButtonsGroup from '../SidebarButtonsGroup';

const DesktopSidebarContent = () => {
	return (
		<div className="w-[25rem] h-full flex flex-col gap-12 xl:gap-20 justify-between overflow-y-auto p-6">
			<div className="flex flex-col">
				<Logo className="lg:mb-12 xl:mb-20" />
				<CurrentTurnTable />
				<Scoreboard />
			</div>
			<SidebarButtonsGroup />
		</div>
	);
};

export default DesktopSidebarContent;
