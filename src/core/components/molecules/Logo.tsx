import ButtonLink from '@/atoms/buttons/ButtonLink';
import IsotypeAnimationCube from '@/atoms/IsotypeAnimationCube';
import IsotypeAnimationStyles from '@/styles/components/isotype-animation.module.css';
import classNames from 'classnames';

const Logo = ({ className }: LogoProps) => {
	return (
		<ButtonLink
			href="/"
			className={classNames(
				className,
				IsotypeAnimationStyles.wrapper,
				'items-center justify-center  lg:gap-1 p-0 overflow-hidden'
			)}
		>
			<h1 className="h1 relative w-fit pr-0 pl-2 lg:pl-3 p-1.5 lg:p-2">
				Tic Tac
				<span className="opacity-0 absolute left-0 z-0">XO</span>
			</h1>
			<div className="flex ">
				<IsotypeAnimationCube isCross />
				<IsotypeAnimationCube />
			</div>
		</ButtonLink>
	);
};

type LogoProps = {
	className?: string;
};

export default Logo;
