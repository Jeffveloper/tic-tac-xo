import Logo from '@/molecules/Logo';
import MobileSidebar from './MobileSidebar';

const MobileHeader = () => {
	return (
		<aside className="bg-black w-full h-fit p-4 flex justify-between">
			<Logo />
			<MobileSidebar />
		</aside>
	);
};

export default MobileHeader;
