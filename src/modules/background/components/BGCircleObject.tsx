import { useRef } from 'react';
import { Mesh } from 'three';
import { getRotationSpeedOwnAxis } from '../helpers/animation';
import useCircleAnimation from '../hooks/useCircleAnimation';
import { APP_COLORS } from 'core/constants/colors';
import { useLoadRenderContext } from '@/modules/game/providers/load-render';

const BGCircleObject = () => {
	const meshRef = useRef<Mesh>(null);
	const { circle_object } = useLoadRenderContext();

	const rotationSpeeds = getRotationSpeedOwnAxis();

	const { scale } = useCircleAnimation({ meshRef, rotationSpeeds });

	return (
		<mesh
			ref={meshRef}
			rotation={[rotationSpeeds.x, rotationSpeeds.y, rotationSpeeds.z]}
			geometry={circle_object.geometry}
			scale={scale}
		>
			<meshBasicMaterial color={APP_COLORS.GRAY} />
		</mesh>
	);
};

export default BGCircleObject;
