import { MEDIA_QUERIES } from 'core/constants/media-queries';
import { useMedia } from 'react-use';
import BoardScene from './components/organisms/BoardScene';
import DesktopSidebar from './components/organisms/DesktopSidebar';
import MobileHeader from './components/organisms/MobileHeader';

const GameView = () => {
	const isFromLg = useMedia(MEDIA_QUERIES.MEDIA_FROM_LG, true);

	return (
		<main className="relative grid grid-rows-fr-auto lg:grid-cols-fr-auto lg:grid-rows-1 overflow-hidden h-screen">
			<section className="relative flex items-center justify-center h-mobile-body lg:h-full w-full">
				<BoardScene />
			</section>
			{isFromLg && <DesktopSidebar />}
			{!isFromLg && <MobileHeader />}
		</main>
	);
};

export default GameView;
