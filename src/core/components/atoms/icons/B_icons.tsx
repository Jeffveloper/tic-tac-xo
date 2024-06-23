import { IconProps } from 'core/interfaces/icons';

export const BarsIcon = ({ width, height, className, ...rest }: IconProps) => {
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
				d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
			/>
		</svg>
	);
};
