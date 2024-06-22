import Logo from '@/molecules/Logo';
import MobileSidebar from './MobileSidebar';
import ButtonBase from '@/atoms/buttons/ButtonBase';
import { useState } from 'react';
import { BarsIcon } from '@/atoms/icons/B_icons';

const MobileHeader = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<div className="flex h-mobile-header bg-black w-full p-4  justify-between items-center border-b border-white">
			<Logo />
			<ButtonBase
				type="button"
				text=""
				className="outline-none group"
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
			>
				<BarsIcon
					width="24"
					height="24"
					className="fill-white stroke-white group-hover:fill-black group-hover:stroke-black transition-colors relative"
				/>
			</ButtonBase>
			<MobileSidebar
				isSidebarOpen={isSidebarOpen}
				setIsSidebarOpen={setIsSidebarOpen}
			/>
		</div>
	);
};

export default MobileHeader;
