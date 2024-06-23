import BoardView from '../board/components/BoardView';
import DesktopSidebar from './components/organisms/DesktopSidebar';
import MobileHeader from './components/organisms/MobileHeader';

const GameView = () => {
	return (
		<main className="relative lg:flex flex-col lg:flex-row overflow-hidden h-screen">
			<MobileHeader />
			<BoardView />
			<DesktopSidebar />
		</main>
	);
};

export default GameView;
