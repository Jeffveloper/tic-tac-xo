import UseMediaQuery from '@/modules/board/hooks/UseMediaQuery';
import { MEDIA_QUERIES } from 'core/constants/media-queries';
import MobileHeaderContent from '../molecules/sidebar/MobileHeaderContent';

const MobileHeader = () => {
	const isFromLg = UseMediaQuery(MEDIA_QUERIES.MEDIA_FROM_LG);

	return <div className="header">{!isFromLg && <MobileHeaderContent />}</div>;
};

export default MobileHeader;
