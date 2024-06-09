import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { MEDIA_QUERIES } from 'core/constants/media-queries';
import { useMedia } from 'react-use';
import LoadRenderProvider from '../../providers/load-render';
import BoardGrid from '../molecules/BoardGrid';
import { APP_COLORS } from 'core/constants/colors';

const BoardScene = () => {
	const isFromLg = useMedia(MEDIA_QUERIES.MEDIA_FROM_LG, true);

	return (
		<div className="absolute w-full h-full">
			<Canvas camera={{ position: [0, 0, isFromLg ? 4 : 6.5] }}>
				<LoadRenderProvider>
					<pointLight position={[0, 0, 2]} intensity={7.5} distance={2.5} />
					<hemisphereLight
						intensity={5}
						color={APP_COLORS.SMOKE_WHITE}
						groundColor={APP_COLORS.GRAY}
					/>
					<BoardGrid />
					<OrbitControls
						enableZoom={false}
						enableDamping={false}
						enablePan={false}
					/>
				</LoadRenderProvider>
			</Canvas>
		</div>
	);
};

export default BoardScene;
