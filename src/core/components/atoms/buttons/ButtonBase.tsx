import classNames from 'classnames';
import { ButtonHTMLAttributes, ReactNode } from 'react';

const ButtonBase = ({
	text,
	className,
	children,
	...rest
}: ButtonBaseProps) => {
	return (
		<button className={classNames(className, 'button')} {...rest}>
			{text && <span className="relative ">{text}</span>}
			{children}
		</button>
	);
};

type ButtonBaseType = {
	text?: string;
	className?: string;
	children?: ReactNode;
};

type ButtonBaseProps = ButtonBaseType & ButtonHTMLAttributes<HTMLButtonElement>;

export default ButtonBase;
