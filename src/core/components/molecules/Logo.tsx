import ButtonLink from '@/atoms/buttons/ButtonLink';

const Logo = () => {
	return (
		<ButtonLink href="/">
			<p className="h1 relative w-fit overflow-">
				Tic Tac <span className="">xo</span>
			</p>
		</ButtonLink>
	);
};

export default Logo;
