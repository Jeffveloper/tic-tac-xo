import ButtonBase from '@/atoms/buttons/ButtonBase';
import { CrossIcon } from '@/atoms/icons/C_icons';
import { useResetModalContext } from '@/modules/game/providers/reset-modal';
import { Description, DialogTitle } from '@headlessui/react';
import ModalTemplate from 'core/components/layouts/ModalTemplate';
import ResetScoreboardModalButton from './ResetScoreboardModalButton';

const ResetScoreboardModal = () => {
	const { isResetModalOpen, setisResetModalOpen } = useResetModalContext();

	return (
		<ModalTemplate isOpen={isResetModalOpen} setIsOpen={setisResetModalOpen}>
			<div className="flex flex-col gap-2 lg:gap-4 items-center text-center">
				<DialogTitle className="h1">Reset Scoreboard</DialogTitle>
				<Description className="mb-2">
					Are you sure you want to reset the scoreboard?
				</Description>
				<div className="flex justify-end gap-4">
					<ButtonBase
						onClick={() => setisResetModalOpen(false)}
						className="button-alternative items-center text-xs lg:text-sm"
						text="Cancel"
					>
						<CrossIcon width="16" height="16" />
					</ButtonBase>
					<ResetScoreboardModalButton />
				</div>
			</div>
		</ModalTemplate>
	);
};

export default ResetScoreboardModal;
