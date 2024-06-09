import BoardSceneStyles from '@/styles/modules/game/board-scene.module.css';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { MEDIA_QUERIES } from 'core/constants/media-queries';
import { useMedia } from 'react-use';
import LoadRenderProvider from '../../providers/load-render';
import BoardGrid from '../molecules/BoardGrid';
import { APP_COLORS } from 'core/constants/colors';
import { Suspense, useState } from 'react';
import Loader from '@/molecules/Loader';
import { Transition } from '@headlessui/react';
import classNames from 'classnames';

const BoardScene = () => {
	const [isLoading, setIsLoading] = useState(true);
	const isFromLg = useMedia(MEDIA_QUERIES.MEDIA_FROM_LG, true);

	return (
		<div
			className={classNames(BoardSceneStyles.root, 'absolute w-full h-full')}
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
			<Transition
				as="div"
				show={isLoading}
				enter="transition-opacity duration-200"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-opacity duration-200"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
				className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center"
			>
				<Loader isLoading={isLoading} setIsLoading={setIsLoading} />
			</Transition>
		</div>
	);
};

export default BoardScene;
