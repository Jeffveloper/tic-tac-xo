import ButtonStyles from '@/styles/modules/button.module.css';
import classNames from 'classnames';
import { AnchorHTMLAttributes, ReactNode } from 'react';

const ButtonAnchor = ({
	href,
	text,
	className,
	children,
	...rest
}: ButtonAnchorProps) => {
	return (
		<a
			href={href}
			rel="noopener noreferrer"
			target="_blank"
			className={classNames(className, ButtonStyles.root, 'button')}
			{...rest}
		>
			{text && <span className="relative ">{text}</span>}
			{children}
		</a>
	);
};

type ButtonAnchorType = {
	href: string;
	text?: string;
	className?: string;
	children?: ReactNode;
};

type ButtonAnchorProps = ButtonAnchorType &
	AnchorHTMLAttributes<HTMLAnchorElement>;

export default ButtonAnchor;
