import ButtonLink from '@/atoms/buttons/ButtonLink';
import classNames from 'classnames';

const Logo = ({ className }: LogoProps) => {
	return (
		<ButtonLink href="/" className={classNames(className)}>
			<p className="h1 relative w-fit overflow-">
				Tic Tac <span className="">xo</span>
			</p>
		</ButtonLink>
	);
};

type LogoProps = {
	className?: string;
};

export default Logo;
