import Metatags from '@/atoms/Metatags';
import GameView from '@/modules/game/GameView';
import GameHistoryProvider from '@/modules/game/providers/game-history';
import GameStatesProvider from '@/modules/game/providers/game-states';

const HomePage = () => {
	return (
		<>
			<Metatags />
			<GameStatesProvider>
				<GameHistoryProvider>
					<GameView />
				</GameHistoryProvider>
			</GameStatesProvider>
		</>
	);
};

export default HomePage;
