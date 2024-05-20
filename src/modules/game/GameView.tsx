import { useMedia } from 'react-use';
import DesktopSidebar from './components/organisms/DesktopSidebar';
import MobileHeader from './components/organisms/MobileHeader';
import BackgroundScene from '../background/BackgroundScene';
import BoardScene from './components/organisms/BoardScene';

const GameView = () => {
	const isFromLg = useMedia('(min-width: 1024px)', true);

	return (
		<>
			<BackgroundScene />
			<main className="relative grid grid-rows-auto-fr lg:grid-cols-auto-fr lg:grid-rows-1">
				{isFromLg && <DesktopSidebar />}
				{!isFromLg && <MobileHeader />}
				<section className="relative flex items-center justify-center h-full w-full">
					<BoardScene />
				</section>
			</main>
		</>
	);
};

export default GameView;
