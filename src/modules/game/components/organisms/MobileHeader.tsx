import Logo from '@/molecules/Logo';
import MobileSidebar from './MobileSidebar';
import ButtonBase from '@/atoms/buttons/ButtonBase';
import { useState } from 'react';

const MobileHeader = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<div className="flex h-mobile-header bg-black w-full p-4  justify-between items-center border-b border-white">
			<Logo />
			<ButtonBase
				type="button"
				text="LL"
				className="rotate-180 outline-none"
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
			/>
			<MobileSidebar
				isSidebarOpen={isSidebarOpen}
				setIsSidebarOpen={setIsSidebarOpen}
			/>
		</div>
	);
};

export default MobileHeader;
