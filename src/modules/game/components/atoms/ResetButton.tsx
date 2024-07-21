import ButtonBase from '@/atoms/buttons/ButtonBase';

import { RestartIcon } from '@/atoms/icons/R_icons';
import { useResetModalContext } from '../../providers/reset-modal';

const ResetButton = () => {
	const { setisResetModalOpen } = useResetModalContext();

	return (
		<ButtonBase
			onClick={() => setisResetModalOpen(true)}
			className="group self-end items-center mt-4 w-full justify-center"
			text="Reset"
		>
			<RestartIcon className="rotate-180" width="20" height="20" />
		</ButtonBase>
	);
};

export default ResetButton;
