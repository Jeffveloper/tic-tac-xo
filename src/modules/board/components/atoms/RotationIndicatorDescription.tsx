import { InformationIcon } from '@/atoms/icons/I_icons';
import RotationIndicatorStyles from '@/styles/modules/board/rotation-indicator.module.css';
import classNames from 'classnames';

const RotationIndicatorDescription = () => {
	return (
		<p className="text-xs absolute left-6 -top-1.5 inline-block w-40">
			<span>
				<InformationIcon
					height="14"
					width="14"
					className={classNames(
						RotationIndicatorStyles.icon,
						'inline-block -mt-0.5 mr-1 ml-2'
					)}
				/>
				<span className="font-bold">Pro tip:</span> ¡You can rotate the board!
			</span>
		</p>
	);
};

export default RotationIndicatorDescription;
