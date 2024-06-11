import { ReactNode } from 'react';
import { JetBrains_Mono } from 'next/font/google';
import classNames from 'classnames';

const jetBrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-jetbrains-mono',
	display: 'swap',
});

const FontWrapper = ({ children }: FontWrapperProps) => {
	return (
		<div className={classNames(jetBrainsMono.variable, 'font-sans')}>
			{children}
		</div>
	);
};

type FontWrapperProps = {
	children: ReactNode;
};

export default FontWrapper;
