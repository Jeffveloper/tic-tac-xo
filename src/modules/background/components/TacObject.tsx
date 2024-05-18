import { useRef } from 'react';
import { Mesh } from 'three';
import { getRotationSpeedOwnAxis } from '../helpers/animation';
import useCrossAnimation from '../hooks/useCrossAnimation';

const TacObject = () => {
	const meshRef = useRef<Mesh>(null);

	const rotationSpeeds = getRotationSpeedOwnAxis();

	const { radius, tube } = useCrossAnimation({ meshRef, rotationSpeeds });

	return (
		<mesh
			ref={meshRef}
			rotation={[rotationSpeeds.x, rotationSpeeds.y, rotationSpeeds.z]}
		>
			<torusGeometry args={[radius, tube]} />
			<meshToonMaterial />
		</mesh>
	);
};

export default TacObject;
