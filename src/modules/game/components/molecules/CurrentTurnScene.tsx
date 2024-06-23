import { Canvas } from '@react-three/fiber';
import LoadRenderProvider from '../../../../core/providers/load-render';
import CurrentTurnIndicator from '../atoms/CurrentTurnIndicator';
import { Suspense, useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';
import { Transition } from '@headlessui/react';

const CurrentTurnScene = () => {
	const { progress } = useProgress();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (progress === 100) {
			setIsLoading(false);
		}
	}, [progress, setIsLoading]);

	return (
		<div className="absolute w-full h-full top-0">
			<Suspense fallback={null}>
				<Canvas>
					<LoadRenderProvider>
						<CurrentTurnIndicator />
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
				<div />
			</Transition>
		</div>
	);
};

export default CurrentTurnScene;
