import LoaderItem from '@/atoms/LoaderItem';
import LoaderStyles from '@/styles/modules/loader.module.css';
import { useProgress } from '@react-three/drei';
import classNames from 'classnames';
import { LOADER_ITEMS } from 'core/constants/loader';
import { useEffect } from 'react';

const Loader = ({ isLoading, setIsLoading }: LoaderProps) => {
	const { progress } = useProgress();

	useEffect(() => {
		if (progress === 100) {
			setTimeout(() => {
				setIsLoading(false);
			}, 300);
		}
	}, [progress, setIsLoading]);

	return (
		<div
			className={classNames(
				LoaderStyles.root,
				'relative grid grid-cols-3 gap-1 w-fit'
			)}
		>
			{LOADER_ITEMS.map((item, index) => (
				<LoaderItem key={index} text={item.content} index={item.order} />
			))}
		</div>
	);
};

type LoaderProps = {
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export default Loader;
