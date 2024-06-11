import { IconProps } from 'core/interfaces/icons';

export const CrossIcon = ({ width, height, className, ...rest }: IconProps) => {
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
			<path d="M16.934 8 42 33.066 34.066 41 9 15.934 16.934 8Z" />
			<path d="M9 33.066 34.066 8 42 15.934 16.934 41 9 33.066Z" />
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
