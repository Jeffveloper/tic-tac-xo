import ButtonBase from '@/atoms/buttons/ButtonBase';
import { GithubIcon } from '@/atoms/icons/G_icon';

const RepositoryButton = () => {
	return (
		<ButtonBase className="group self-end items-center h-10 lg:h-11">
			<GithubIcon
				className="fill-white stroke-white group-hover:fill-black group-hover:stroke-black z-10"
				width="20"
				height="20"
			/>
		</ButtonBase>
	);
};

export default RepositoryButton;
