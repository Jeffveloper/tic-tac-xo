import classNames from 'classnames';
import { useState } from 'react';
import BoardLoader from './molecules/BoardLoader';
import BoardScene from './organisms/BoardScene';

const BoardView = () => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<section className="relative flex items-center justify-center h-mobile-body lg:h-screen w-full transition-all">
			<BoardScene />
			<BoardLoader isLoading={isLoading} setIsLoading={setIsLoading} />
		</section>
	);
};

export default BoardView;
