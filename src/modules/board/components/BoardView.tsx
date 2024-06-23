import BoardSceneStyles from '@/styles/modules/game/board-scene.module.css';
import classNames from 'classnames';
import { useState } from 'react';
import BoardLoader from './molecules/BoardLoader';
import BoardScene from './organisms/BoardScene';

const BoardView = () => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<section
			className={classNames(
				{ 'transition-all': isLoading },
				'relative flex items-center justify-center h-mobile-body lg:h-screen w-full'
			)}
		>
			<div
				className={classNames(BoardSceneStyles.root, 'absolute w-full h-full')}
			>
				<BoardScene />
				<BoardLoader isLoading={isLoading} setIsLoading={setIsLoading} />
			</div>
		</section>
	);
};

export default BoardView;
