import classNames from 'classnames';
import React from 'react';
import LogoStyles from '@/styles/modules/logo.module.css';

const LogoAnimation = ({ items, isAlternative }: LogoAnimationProps) => {
	return (
		<span className="relative">
			<span className="opacity-0">{isAlternative ? 'o' : 'x'}</span>
			<span
				className={classNames(
					{
						'top-0': isAlternative,
						'bottom-0': !isAlternative,
						[LogoStyles.cross]: isAlternative,
						[LogoStyles.circle]: !isAlternative,
					},
					' text-white absolute left-0 flex flex-col transition-transform duration-1000 group-hover:text-black'
				)}
			>
				{items.map((char, index) => (
					<span key={index}>{char}</span>
				))}
			</span>
		</span>
	);
};

type LogoAnimationProps = {
	items: string[];
	isAlternative?: boolean;
};

export default LogoAnimation;
