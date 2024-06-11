import { Canvas } from '@react-three/fiber';
import LoadRenderProvider from '../../../../core/providers/load-render';
import CurrentTurnIndicator from '../atoms/CurrentTurnIndicator';
import { Suspense } from 'react';

const CurrentTurnScene = () => {
	return (
		<div className="absolute w-full h-full top-0">
			<Suspense fallback={<div className="w-full h-full bg-black" />}>
				<Canvas>
					<LoadRenderProvider>
						<CurrentTurnIndicator />
					</LoadRenderProvider>
				</Canvas>
			</Suspense>
		</div>
	);
};

export default CurrentTurnScene;
