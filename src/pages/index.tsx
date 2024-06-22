import Metatags from '@/atoms/Metatags';
import GameHistoryProvider from '@/modules/game/providers/game-history';
import GameStatusProvider from '@/modules/game/providers/game-status';
import dynamic from 'next/dynamic';

const GameView = dynamic(() => import('@/modules/game/GameView'), {
	ssr: false,
});

const HomePage = () => {
	return (
		<>
			<Metatags />
			<GameHistoryProvider>
				<GameStatusProvider>
					<GameView />
				</GameStatusProvider>
			</GameHistoryProvider>
		</>
	);
};

export default HomePage;
