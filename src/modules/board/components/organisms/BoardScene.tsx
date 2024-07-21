import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { APP_COLORS } from 'core/constants/colors';
import { MEDIA_QUERIES } from 'core/constants/media-queries';
import { Suspense } from 'react';
import LoadRenderProvider from '../../../../core/providers/load-render';
import BoardGrid from './BoardGrid';
import UseMediaQuery from '../../hooks/UseMediaQuery';
import classNames from 'classnames';
import BoardSceneStyles from '@/styles/modules/game/board-scene.module.css';
import { useBoardHoverContext } from '../../providers/board-hover';

const BoardScene = () => {
	const isFromLg = UseMediaQuery(MEDIA_QUERIES.MEDIA_FROM_LG);
	const { isHover } = useBoardHoverContext();

	return (
		<div
			className={classNames(
				BoardSceneStyles.root,
				{ 'cursor-pointer': isHover, 'cursor-grab': !isHover },
				'absolute w-full h-full'
			)}
		>
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
		</div>
	);
};

export default BoardScene;
