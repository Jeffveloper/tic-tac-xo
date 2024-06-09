import Logo from '@/molecules/Logo';
import MobileSidebar from './MobileSidebar';

const MobileHeader = () => {
	return (
		<div className="bg-black w-full p-4 flex justify-between items-center border-t border-white h-mobile-header">
			<Logo />
			<MobileSidebar />
		</div>
	);
};

export default MobileHeader;
