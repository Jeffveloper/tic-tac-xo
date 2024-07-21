import {
	Description,
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from '@headlessui/react';
import { ReactNode } from 'react';
import FontWrapper from './FontWrapper';
import ButtonBase from '@/atoms/buttons/ButtonBase';
import { CrossIcon } from '@/atoms/icons/C_icons';

const ModalTemplate = ({ isOpen, setIsOpen, children }: ModalTemplateProps) => {
	return (
		<Dialog
			open={isOpen}
			onClose={() => setIsOpen(false)}
			className="relative z-50"
		>
			<DialogBackdrop
				transition
				className="fixed inset-0 bg-black/90 duration-300 ease-out data-[closed]:opacity-0"
			/>
			<div className="fixed inset-0 flex w-screen items-center justify-center">
				<DialogPanel
					transition
					className="w-full h-fit bg-black border-y-2 border-white duration-300 ease-out max-h-96 data-[closed]:max-h-0 overflow-hidden"
				>
					<FontWrapper>
						<div className="p-12 max-w-lg mx-auto  relative">
							{children}
							<ButtonBase
								className="absolute top-2 right-2 aspect-square items-center justify-center lg:!px-2 lg:!py-1.5"
								text=""
								onClick={() => setIsOpen(false)}
							>
								<CrossIcon width="16" height="16" />
							</ButtonBase>
						</div>
					</FontWrapper>
				</DialogPanel>
			</div>
		</Dialog>
	);
};

type ModalTemplateProps = {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	children: ReactNode;
};

export default ModalTemplate;
