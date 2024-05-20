import { useRef } from 'react';
import { Mesh } from 'three';
import { getRotationSpeedOwnAxis } from '../helpers/animation';
import useCrossAnimation from '../hooks/useCrossAnimation';
import { useLoadRenderContext } from '@/modules/game/providers/load-render';
import { APP_COLORS } from 'core/constants/colors';

const BGCrossObject = () => {
	const meshRef = useRef<Mesh>(null);
	const { cross_object } = useLoadRenderContext();

	const rotationSpeeds = getRotationSpeedOwnAxis();

	const { scale } = useCrossAnimation({ meshRef, rotationSpeeds });

	return (
		<mesh
			ref={meshRef}
			rotation={[rotationSpeeds.x, rotationSpeeds.y, rotationSpeeds.z]}
			geometry={cross_object.geometry}
			scale={scale}
		>
			<meshBasicMaterial color={APP_COLORS.BLACK} />
		</mesh>
	);
};

export default BGCrossObject;
