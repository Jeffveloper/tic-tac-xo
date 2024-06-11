import BoardSceneStyles from '@/styles/modules/game/board-scene.module.css';
import classNames from 'classnames';
import { useState } from 'react';
import BoardScene from './organisms/BoardScene';
import BoardLoader from './molecules/BoardLoader';

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
