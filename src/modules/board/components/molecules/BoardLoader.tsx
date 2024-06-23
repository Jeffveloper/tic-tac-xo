import Loader from '@/molecules/loader/Loader';
import { Transition } from '@headlessui/react';
import { useProgress } from '@react-three/drei';
import { useEffect } from 'react';

const BoardLoader = ({ isLoading, setIsLoading }: BoardLoaderProps) => {
	const { progress } = useProgress();

	useEffect(() => {
		if (progress === 100) {
			setIsLoading(false);
		}
	}, [progress, setIsLoading]);

	return (
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
			<Loader speed={1} />
		</Transition>
	);
};

type BoardLoaderProps = {
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export default BoardLoader;
