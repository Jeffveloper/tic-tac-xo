import { Canvas } from '@react-three/fiber';
import BackgroundLights from './components/BackgroundLights';
import TicObjectGroup from './components/TicObjectGroup';
import TacObjectGroup from './components/TacObjectGroup';

const BackgroundCanvas = () => {
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
				<BackgroundLights />
				<TicObjectGroup />
				<TacObjectGroup />
				{/* {IS_DEBUGGER_MODE && (
          <>
            <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
              <GizmoViewport labelColor="white" axisHeadScale={1} />
            </GizmoHelper>
            <Grid args={[100, 100]} />
            <OrbitControls enableDamping enablePan enableRotate enableZoom />
          </>
        )} */}
			</Canvas>
		</div>
	);
};

export default BackgroundCanvas;
