import { useRef } from 'react';
import { Mesh } from 'three';
import { getRotationSpeedOwnAxis } from '../helpers/animation';
import useTorusAnimation from '../hooks/useTorusAnimation';
import { APP_COLORS } from 'core/constants/colors';

const TicObject = () => {
	const meshRef = useRef<Mesh>(null);

	const rotationSpeeds = getRotationSpeedOwnAxis();

	const { radius, tube } = useTorusAnimation({ meshRef, rotationSpeeds });

	return (
		<mesh
			ref={meshRef}
			rotation={[rotationSpeeds.x, rotationSpeeds.y, rotationSpeeds.z]}
		>
			<torusGeometry args={[radius, tube]} />
			<meshToonMaterial color={APP_COLORS.WHITE} />
		</mesh>
	);
};

export default TicObject;
