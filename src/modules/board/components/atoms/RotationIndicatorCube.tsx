import classNames from 'classnames';
import IndicatorCubeStyles from '@/styles/modules/board/indicator-cube.module.css';
import { ROTATION_INDICATOR_FACES } from '../../constants/rotation-indicator';
const RotationIndicatorCube = () => {
	return (
		<div
			className={classNames(
				IndicatorCubeStyles.cube,
				'relative group-hover:opacity-0'
			)}
		>
			{ROTATION_INDICATOR_FACES.map((face) => {
				return (
					<div
						key={face}
						className={classNames(
							IndicatorCubeStyles.face,
							IndicatorCubeStyles[face]
						)}
					/>
				);
			})}
		</div>
	);
};

export default RotationIndicatorCube;
