import classNames from 'classnames';
import Link from 'next/link';
import ButtonStyles from '@/styles/components/button.module.css';
import { AnchorHTMLAttributes, ReactNode } from 'react';

const ButtonLink = ({
	href,
	text,
	className,
	children,
	...rest
}: ButtonLinkProps) => {
	return (
		<Link
			href={href}
			className={classNames(className, ButtonStyles.root, 'button')}
			{...rest}
		>
			{text && <span className="relative ">{text}</span>}
			{children}
		</Link>
	);
};

type ButtonLinkType = {
	href: string;
	text?: string;
	className?: string;
	children?: ReactNode;
};

type ButtonLinkProps = ButtonLinkType & AnchorHTMLAttributes<HTMLAnchorElement>;

export default ButtonLink;
