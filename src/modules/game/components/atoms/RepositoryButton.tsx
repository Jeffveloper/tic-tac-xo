import ButtonAnchor from '@/atoms/buttons/ButtonAnchor';
import { GithubIcon } from '@/atoms/icons/G_icons';

const RepositoryButton = () => {
	return (
		<ButtonAnchor
			className="group self-end items-center h-10 lg:h-11"
			href="https://github.com/Jeffveloper/tic-tac-xo"
		>
			<GithubIcon width="20" height="20" />
		</ButtonAnchor>
	);
};

export default RepositoryButton;
