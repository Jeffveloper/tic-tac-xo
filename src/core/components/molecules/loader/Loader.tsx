import LoaderItem from '@/atoms/loader/LoaderItem';
import LoaderStyles from '@/styles/modules/loader.module.css';
import classNames from 'classnames';
import { LOADER_ITEMS } from 'core/constants/loader';
import { CSSProperties } from 'react';

const Loader = ({ speed = 2.5 }: LoaderProps) => {
	return (
		<div
			style={{ '--animation-speed': `${speed}s` } as CSSProperties}
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
	speed?: number;
};

export default Loader;
