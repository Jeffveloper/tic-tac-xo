import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import {
	EffectComposer,
	Outline,
	Select,
	Selection,
} from '@react-three/postprocessing';
import LoadRenderProvider from '../../providers/load-render';
import BoardObject from '../atoms/objects/BoardObject';
import BoardGrid from '../molecules/BoardGrid';
import { APP_COLORS } from 'core/constants/colors';
import LigthScene from '../atoms/LigthScene';
import { useMedia } from 'react-use';

const BoardScene = () => {
	const isFromLg = useMedia('(min-width: 1024px)', true);

	return (
		<div className="absolute w-full h-full">
			<Canvas camera={{ position: [0, 0, isFromLg ? 4 : 6.5] }}>
				<LoadRenderProvider>
					<ambientLight intensity={1} />
					<LigthScene />
					{/* <fog attach="fog" args={[APP_COLORS.BLACK, 5, 50]} /> */}

					{/* <Selection> */}
					<OrbitControls
						enableZoom={false}
						enableDamping={false}
						enablePan={false}
					/>

					{/* <Select> */}
					<BoardGrid />
					{/* </Select> */}
					{/* <Select enabled> */}
					<BoardObject />
					{/* </Select> */}
					{/* <EffectComposer autoClear={false}> */}
					{/* <Outline edgeStrength={1} /> */}
					{/* </EffectComposer> */}
					{/* </Selection> */}
				</LoadRenderProvider>
			</Canvas>
		</div>
	);
};

export default BoardScene;
