import { InformationIcon } from '@/atoms/icons/I_icons';
import RotationIndicatorStyles from '@/styles/modules/board/rotation-indicator.module.css';
import classNames from 'classnames';
import RotationIndicatorCube from './RotationIndicatorCube';

const RotationIndicator = () => {
	return (
		<div
			className={classNames(
				RotationIndicatorStyles.root,
				'button w-14 hover:w-52 h-14 absolute bottom-2 left-2 !px-4 !py-4 overflow-hidden'
			)}
		>
			<div className="relative">
				<RotationIndicatorCube />
				<InformationIcon
					height="20"
					width="20"
					className={classNames(
						RotationIndicatorStyles.icon,
						'absolute -bottom-2.5 left-2.5'
					)}
				/>
				<p className="text-xs absolute left-10 -top-1.5 inline-block w-36">
					<span>
						<span className="font-bold">Pro tip:</span> ¡You can rotate the
						board!
					</span>
				</p>
			</div>
		</div>
	);
};

export default RotationIndicator;
