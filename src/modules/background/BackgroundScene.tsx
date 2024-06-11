import { Canvas } from '@react-three/fiber';

import LoadRenderProvider from '../../core/providers/load-render';
import BGCircleObjectGroup from './components/BGCircleObjectGroup';
import BGCrossObjectGroup from './components/BGCrossObjectGroup';
import BackgroundLights from './components/BackgroundLights';

const BackgroundScene = () => {
	return (
		<div className="absolute top-0 left-0 h-screen w-screen">
			<Canvas
				camera={{
					position: [2, 0.1, 7],
					rotation: [0, 0, 0],
					fov: 50,
					near: 0.01,
					far: 100,
				}}
			>
				<LoadRenderProvider>
					<BackgroundLights />
					<BGCircleObjectGroup />
					<BGCrossObjectGroup />
				</LoadRenderProvider>
			</Canvas>
		</div>
	);
};

export default BackgroundScene;
