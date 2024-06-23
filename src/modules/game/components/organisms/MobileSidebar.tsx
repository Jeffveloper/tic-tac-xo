import { Transition } from '@headlessui/react';
import CurrentTurnTable from '../molecules/CurrentTurnTable';
import Scoreboard from '../molecules/Scoreboard';
import SidebarButtonsGroup from '../molecules/SidebarButtonsGroup';

const MobileSidebar = ({
	isSidebarOpen,
	setIsSidebarOpen,
}: MobileSidebarProps) => {
	return (
		<>
			<Transition
				show={isSidebarOpen}
				enter="transition-opacity duration-300"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-opacity duration-150"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<div
					onClick={() => setIsSidebarOpen(false)}
					className="absolute bottom-0 left-0 w-screen h-mobile-body bg-black/70 z-10"
				/>
			</Transition>
			<Transition
				show={isSidebarOpen}
				enter="transition ease-in-out duration-300"
				enterFrom="translate-x-full"
				enterTo="translate-x-0"
				leave="transition ease-in-out duration-300"
				leaveFrom="translate-x-0"
				leaveTo="translate-x-full"
			>
				<div className="z-10 absolute bottom-0 right-0 w-[20rem] h-mobile-body p-6 bg-black flex flex-col justify-between gap-14 overflow-y-auto border-l border-">
					<div className="flex flex-col gap-14">
						<CurrentTurnTable />
						<Scoreboard />
					</div>
					<SidebarButtonsGroup />
				</div>
			</Transition>
		</>
	);
};

type MobileSidebarProps = {
	isSidebarOpen: boolean;
	setIsSidebarOpen: (value: boolean) => void;
};

export default MobileSidebar;
