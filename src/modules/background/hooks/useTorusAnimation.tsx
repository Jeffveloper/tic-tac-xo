import {
	getAnimationStats,
	getPositionsToRotateAround,
} from '../helpers/animation';
import { useFrame } from '@react-three/fiber';
import { getRandomNumber } from 'core/helpers/numbers';
import { RefObject } from 'react';
import {
	BufferGeometry,
	Material,
	Mesh,
	NormalBufferAttributes,
	Object3DEventMap,
} from 'three';

const useTorusAnimation = ({
	meshRef,
	rotationSpeeds,
}: useTorusAnimationProps) => {
	const { orbitRadius, orbitSpeed, radius, tube } = getAnimationStats();

	const positionX = getRandomNumber(-3, 3);
	let angle = getRandomNumber(0, 360);

	useFrame(() => {
		if (!meshRef.current) {
			return;
		}

		meshRef.current.rotation.x += rotationSpeeds.x;
		meshRef.current.rotation.y += rotationSpeeds.y;
		meshRef.current.rotation.z += rotationSpeeds.z;

		const positions = getPositionsToRotateAround(orbitRadius, angle);

		meshRef.current.position.set(positionX, positions.y + 18, positions.z);

		angle += orbitSpeed;
	});

	return {
		radius,
		tube,
	};
};

type useTorusAnimationProps = {
	meshRef: RefObject<
		Mesh<
			BufferGeometry<NormalBufferAttributes>,
			Material | Material[],
			Object3DEventMap
		>
	>;
	rotationSpeeds: {
		x: number;
		y: number;
		z: number;
	};
};

export default useTorusAnimation;
