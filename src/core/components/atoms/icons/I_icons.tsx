import { IconProps } from 'core/interfaces/icons';

export const InformationIcon = ({
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
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth="1.5"
			{...rest}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
			/>
		</svg>
	);
};
