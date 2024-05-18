import Logo from '@/molecules/Logo';
import ResetButton from '../atoms/ResetButton';
import CurrentTurnTable from '../molecules/CurrentTurnTable';
import Scoreboard from '../molecules/Scoreboard';

const DesktopSidebar = () => {
	return (
		<div className="w-[25rem] h-screen p-6 bg-black flex flex-col justify-between">
			<Logo />
			<CurrentTurnTable />
			<Scoreboard />
			<ResetButton />
		</div>
	);
};

export default DesktopSidebar;
