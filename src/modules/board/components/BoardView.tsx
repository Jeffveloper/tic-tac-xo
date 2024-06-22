import BoardSceneStyles from '@/styles/modules/game/board-scene.module.css';
import classNames from 'classnames';
import { useState } from 'react';
import BoardLoader from './molecules/BoardLoader';
import dynamic from 'next/dynamic';

const BoardScene = dynamic(() => import('./organisms/BoardScene'), {
	ssr: false,
});

const BoardView = () => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<div
			className={classNames(BoardSceneStyles.root, 'absolute w-full h-full')}
		>
			<BoardScene />
			<BoardLoader isLoading={isLoading} setIsLoading={setIsLoading} />
		</div>
	);
};

export default BoardView;
