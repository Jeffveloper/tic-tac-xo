import ButtonBase from '@/atoms/buttons/ButtonBase';
import { BarsIcon } from '@/atoms/icons/B_icons';
import Logo from '@/molecules/Logo';
import MobileSidebar from '../../organisms/MobileSidebar';
import { useState } from 'react';

const MobileHeaderContent = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<div className="flex lg:hidden h-mobile-header bg-black w-full p-4 justify-between items-center border-b border-white">
			<Logo />
			<ButtonBase
				type="button"
				text=""
				className="outline-none group"
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
			>
				<BarsIcon width="24" height="24" />
			</ButtonBase>
			<MobileSidebar
				isSidebarOpen={isSidebarOpen}
				setIsSidebarOpen={setIsSidebarOpen}
			/>
		</div>
	);
};

export default MobileHeaderContent;
