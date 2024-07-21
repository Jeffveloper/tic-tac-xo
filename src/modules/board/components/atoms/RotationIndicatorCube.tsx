import classNames from 'classnames';
import { ROTATION_INDICATOR_FACES } from '../../constants/rotation-indicator';
import IndicatorCubeStyles from '@/styles/modules/board/indicator-cube.module.css';
const RotationIndicatorCube = () => {
	return (
		<div className={classNames(IndicatorCubeStyles.cube, 'relative')}>
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
