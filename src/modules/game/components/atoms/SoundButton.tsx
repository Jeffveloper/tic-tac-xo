import ButtonBase from '@/atoms/buttons/ButtonBase';

import { SoundIcon, SoundMuteIcon } from '@/atoms/icons/S_icon';
import { useState } from 'react';

const SoundButton = () => {
	const [isMuted, setIsMuted] = useState(false);

	return (
		<ButtonBase
			className="group self-end items-center h-10 lg:h-11"
			onClick={() => setIsMuted(!isMuted)}
		>
			{isMuted && (
				<SoundMuteIcon
					className="fill-white stroke-white group-hover:fill-black group-hover:stroke-black z-10"
					width="20"
					height="20"
				/>
			)}
			{!isMuted && (
				<SoundIcon
					className="fill-white stroke-white group-hover:fill-black group-hover:stroke-black z-10"
					width="20"
					height="20"
				/>
			)}
		</ButtonBase>
	);
};

export default SoundButton;
