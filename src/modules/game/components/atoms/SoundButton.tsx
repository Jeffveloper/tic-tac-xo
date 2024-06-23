import ButtonAnchor from '@/atoms/buttons/ButtonAnchor';
import { FigmaIcon } from '@/atoms/icons/F_icons';

import { useState } from 'react';

const SoundButton = () => {
	const [isMuted, setIsMuted] = useState(false);

	return (
		<ButtonAnchor
			href="https://www.figma.com/design/XnxzJ3BqZhDiFvHNeg45Zz/Tic-Tac-XO?node-id=0-1&t=CbnvJ5ItBzBsmJuB-1"
			className="group self-end items-center h-10 lg:h-11"
			onClick={() => setIsMuted(!isMuted)}
		>
			<FigmaIcon width="20" height="20" />
		</ButtonAnchor>
	);
};

export default SoundButton;
