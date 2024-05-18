import BackgroundCanvas from '@/modules/background/BackgroundAnimation';
import GameView from '@/modules/game/GameView';
import GameHistoryProvider from '@/modules/providers/game-history';
import GameStatesProvider from '@/modules/providers/game-states';
import { Suspense } from 'react';

const HomePage = () => {
	return (
		<>
			<GameStatesProvider>
				<GameHistoryProvider>
					<BackgroundCanvas />
					<GameView />
				</GameHistoryProvider>
			</GameStatesProvider>
		</>
	);
};

export default HomePage;
