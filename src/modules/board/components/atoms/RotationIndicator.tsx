import { InformationIcon } from '@/atoms/icons/I_icons';
import RotationIndicatorStyles from '@/styles/modules/board/rotation-indicator.module.css';
import classNames from 'classnames';
import { useState } from 'react';
import RotationIndicatorCube from './RotationIndicatorCube';
import { Transition } from '@headlessui/react';
import { CrossIcon } from '@/atoms/icons/C_icons';
import RotationIndicatorDescription from './RotationIndicatorDescription';

const RotationIndicator = () => {
	const [isIndicatorOpen, setIsIndicatorOpen] = useState(true);

	return (
		<Transition show={isIndicatorOpen}>
			<button
				type="button"
				onClick={() => setIsIndicatorOpen(false)}
				className={classNames(
					RotationIndicatorStyles.root,
					'button w-14 hover:w-52 h-14 absolute bottom-2 left-2 overflow-hidden !px-0 !py-0 transition-all duration-300 data-[closed]:h-0 group'
				)}
			>
				<div className="!px-4 !py-4">
					<div className="relative">
						<RotationIndicatorCube />
						<InformationIcon
							height="20"
							width="20"
							className={classNames(
								RotationIndicatorStyles.icon,
								'absolute -bottom-2.5 left-2.5 group-hover:translate-y-12 transition-transform'
							)}
						/>
						<CrossIcon
							height="30"
							width="30"
							className={classNames(
								RotationIndicatorStyles.icon,
								'absolute -bottom-1.5 -left-1 p-1 bg-black border border-white translate-y-12 group-hover:translate-y-0 transition-transform group-hover:bg-white'
							)}
						/>
						<RotationIndicatorDescription />
					</div>
				</div>
			</button>
		</Transition>
	);
};

export default RotationIndicator;
