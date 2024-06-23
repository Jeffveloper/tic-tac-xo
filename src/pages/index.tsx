import Metatags from '@/atoms/Metatags';
import GameView from '@/modules/game/GameView';
import GameHistoryProvider from '@/modules/game/providers/game-history';
import GameStatusProvider from '@/modules/game/providers/game-status';

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
