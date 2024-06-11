import classNames from 'classnames';
import LoaderStyles from '@/styles/modules/loader.module.css';

const LoaderItem = ({ text, index }: LoaderItemProps) => {
	return (
		<div
			className={classNames(
				LoaderStyles[`item${index}`],
				'w-6 h-6 bg-white transition-all flex items-center justify-center'
			)}
		>
			<span className="text-xs text-black -mt-0.5 font-bold leading-none">
				{text}
			</span>
		</div>
	);
};

type LoaderItemProps = {
	text: string;
	index: number;
};

export default LoaderItem;
