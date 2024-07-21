import { IconProps } from 'core/interfaces/icons';

export const CrossIcon = ({ width, height, className, ...rest }: IconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlSpace="preserve"
			width={width}
			height={height}
			className={className}
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth="3"
			{...rest}
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M6 18 18 6M6 6l12 12"
			/>
		</svg>
	);
};

export const CircleIcon = ({
	width,
	height,
	className,
	...rest
}: IconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlSpace="preserve"
			width={width}
			height={height}
			className={className}
			viewBox="0 0 50 50"
			stroke="currentColor"
			{...rest}
		>
			<circle cx={25} cy={25} r={15} transform="rotate(90 25 25)" />
			<circle cx={25} cy={25} r={7.5} transform="rotate(90 25 25)" />
		</svg>
	);
};
