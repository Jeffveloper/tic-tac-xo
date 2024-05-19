import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import BoardGrid from '../molecules/BoardGrid';
import LoadRenderProvider from '../../providers/load-render';

const BoardScene = () => {
	return (
		<div className="absolute w-full h-full">
			<Canvas>
				<LoadRenderProvider>
					<ambientLight />
					<pointLight position={[5, 5, 5]} intensity={1} />
					<pointLight position={[-3, -3, 2]} />
					<OrbitControls />

					<fog attach="fog" args={['#fff', 2, 10]} />
					<BoardGrid />
				</LoadRenderProvider>
			</Canvas>
		</div>
	);
};

export default BoardScene;
