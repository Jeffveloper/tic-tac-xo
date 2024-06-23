import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { APP_COLORS } from 'core/constants/colors';
import { MEDIA_QUERIES } from 'core/constants/media-queries';
import { Suspense } from 'react';
import LoadRenderProvider from '../../../../core/providers/load-render';
import BoardGrid from './BoardGrid';
import UseMediaQuery from '../../hooks/UseMediaQuery';

const BoardScene = () => {
	const isFromLg = UseMediaQuery(MEDIA_QUERIES.MEDIA_FROM_LG);

	return (
		<Suspense fallback={null}>
			<Canvas camera={{ position: [0, 0, isFromLg ? 4 : 6.5] }}>
				<LoadRenderProvider>
					<pointLight position={[0, 0, 2]} intensity={25} distance={2.5} />
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
		</Suspense>
	);
};

export default BoardScene;
