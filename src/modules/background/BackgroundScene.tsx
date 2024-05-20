import { Canvas } from '@react-three/fiber';
import {
	DepthOfField,
	EffectComposer,
	Noise,
	Pixelation,
} from '@react-three/postprocessing';
import LoadRenderProvider from '../game/providers/load-render';
import BGCrossObjectGroup from './components/BGCrossObjectGroup';
import BackgroundLights from './components/BackgroundLights';
import BGCircleObjectGroup from './components/BGCircleObjectGroup';

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

					<EffectComposer>
						<DepthOfField
							focusDistance={0}
							focalLength={0.02}
							bokehScale={5}
							height={480}
						/>
						<Noise opacity={0.01} />
						<Pixelation granularity={10} />
					</EffectComposer>
				</LoadRenderProvider>
			</Canvas>
		</div>
	);
};

export default BackgroundScene;
