import UseMediaQuery from '@/modules/board/hooks/UseMediaQuery';
import { MEDIA_QUERIES } from 'core/constants/media-queries';
import DesktopSidebarContent from '../molecules/sidebar/DesktopSidebarContent';

const DesktopSidebar = () => {
	const isFromLg = UseMediaQuery(MEDIA_QUERIES.MEDIA_FROM_LG);

	return (
		<aside className="w-0 lg:w-[25rem] h-full transition-width bg-black border-l border-white opacity-0 lg:opacity-100">
			{isFromLg && <DesktopSidebarContent />}
		</aside>
	);
};

export default DesktopSidebar;
