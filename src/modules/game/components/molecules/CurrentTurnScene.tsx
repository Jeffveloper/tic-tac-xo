import { Canvas } from '@react-three/fiber';
import LoadRenderProvider from '../../providers/load-render';
import CurrentTurnIndicator from '../atoms/CurrentTurnIndicator';

const CurrentTurnScene = () => {
	return (
		<div className="absolute w-full h-full top-0">
			<Canvas>
				<LoadRenderProvider>
					<ambientLight />
					<pointLight position={[10, 10, 10]} />
					<CurrentTurnIndicator />
				</LoadRenderProvider>
			</Canvas>
		</div>
	);
};

export default CurrentTurnScene;
