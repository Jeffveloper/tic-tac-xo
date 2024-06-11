import ButtonAnchor from '@/atoms/buttons/ButtonAnchor';
import { GithubIcon } from '@/atoms/icons/G_icons';

const RepositoryButton = () => {
	return (
		<ButtonAnchor
			className="group self-end items-center h-10 lg:h-11"
			href="https://github.com/Jeffveloper/tic-tac-xo"
		>
			<GithubIcon
				className="fill-white stroke-white group-hover:fill-black group-hover:stroke-black z-10"
				width="20"
				height="20"
			/>
		</ButtonAnchor>
	);
};

export default RepositoryButton;
