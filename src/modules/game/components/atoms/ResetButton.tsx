import ButtonBase from '@/atoms/buttons/ButtonBase';
import { RestartIcon } from '@/atoms/icons/R_icon';

const ResetButton = () => {
	return (
		<ButtonBase
			className="group self-end flex-col-reverse items-center"
			text="Reset"
		>
			<RestartIcon
				className="relative fill-white group-hover:fill-black"
				width={24}
				height={24}
			/>
		</ButtonBase>
	);
};

export default ResetButton;
