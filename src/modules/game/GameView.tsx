import DesktopSidebar from '@/organisms/DesktopSidebar';
import MobileHeader from '@/organisms/MobileHeader';
import { useMedia } from 'react-use';

const GameView = () => {
	const isFromLg = useMedia('(min-width: 1024px)', true);

	return (
		<>
			{/* <BackgroundCanvas /> */}

			<main className="relative grid grid-rows-auto-fr lg:grid-cols-auto-fr lg:grid-rows-1">
				{isFromLg && <DesktopSidebar />}
				{!isFromLg && <MobileHeader />}
				<section className="relative flex items-center justify-center h-full w-full">
					{/* <BoardScene /> */}
				</section>
			</main>
		</>
	);
};

export default GameView;
