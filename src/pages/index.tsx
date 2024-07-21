import Metatags from '@/atoms/Metatags';
import ResetScoreboardModal from '@/modules/game/components/molecules/modal/ResetScoreboardModal';
import GameView from '@/modules/game/GameView';
import GameHistoryProvider from '@/modules/game/providers/game-history';
import GameStatusProvider from '@/modules/game/providers/game-status';
import ResetModalProvider from '@/modules/game/providers/reset-modal';

const HomePage = () => {
	return (
		<>
			<Metatags />
			<GameHistoryProvider>
				<GameStatusProvider>
					<ResetModalProvider>
						<GameView />
						<ResetScoreboardModal />
					</ResetModalProvider>
				</GameStatusProvider>
			</GameHistoryProvider>
		</>
	);
};

export default HomePage;
