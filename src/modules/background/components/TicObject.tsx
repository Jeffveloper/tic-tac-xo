import { useRef } from 'react';
import { Mesh } from 'three';
import { getRotationSpeedOwnAxis } from '../helpers/animation';
import useTorusAnimation from '../hooks/useTorusAnimation';

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
			<meshToonMaterial color={0xffffff} />
		</mesh>
	);
};

export default TicObject;
