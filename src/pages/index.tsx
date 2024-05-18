import GameView from '@/modules/game/GameView';
import GameHistoryProvider from '@/modules/providers/game-history';
import GameStatesProvider from '@/modules/providers/game-states';

const HomePage = () => {
	return (
		<>
			<GameStatesProvider>
				<GameHistoryProvider>
					<GameView />
				</GameHistoryProvider>
			</GameStatesProvider>
		</>
	);
};

export default HomePage;
