import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { APP_COLORS } from 'core/constants/colors';
import { MEDIA_QUERIES } from 'core/constants/media-queries';
import { Suspense } from 'react';
import LoadRenderProvider from '../../../../core/providers/load-render';
import BoardGrid from './BoardGrid';
import UseMediaQuery from '../../hooks/UseMediaQuery';
import classNames from 'classnames';
import BoardSceneStyles from '@/styles/modules/board/board-scene.module.css';
import RotationIndicator from '../atoms/RotationIndicator';
import { Vector3 } from 'three';

const BoardScene = () => {
	const isFromLg = UseMediaQuery(MEDIA_QUERIES.MEDIA_FROM_LG);
	const cameraPosition = isFromLg
		? new Vector3(0, 0, 4)
		: new Vector3(0, 0, 6.5);

	return (
		<div
			className={classNames(BoardSceneStyles.root, 'absolute w-full h-full')}
		>
			<Suspense fallback={null}>
				<Canvas camera={{ position: cameraPosition }}>
					<LoadRenderProvider>
						<pointLight position={[0, 0, 2]} intensity={25} distance={2.5} />
						<hemisphereLight
							intensity={5}
							color={APP_COLORS.SMOKE_WHITE}
							groundColor={APP_COLORS.GRAY}
						/>
						<BoardGrid />
						<OrbitControls
							rotateSpeed={0.5}
							enableZoom={false}
							enableDamping={false}
							enablePan={false}
						/>
					</LoadRenderProvider>
				</Canvas>
			</Suspense>
			<RotationIndicator />
		</div>
	);
};

export default BoardScene;
