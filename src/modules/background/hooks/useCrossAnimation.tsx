import { useFrame } from '@react-three/fiber';
import { RefObject } from 'react';
import {
	BufferGeometry,
	Material,
	Mesh,
	NormalBufferAttributes,
	Object3DEventMap,
} from 'three';
import {
	getAnimationStats,
	getPositionsToRotateAround,
} from '../helpers/animation';
import { getRandomNumber } from 'core/helpers/numbers';

const useCrossAnimation = ({
	meshRef,
	rotationSpeeds,
}: useCrossAnimationProps) => {
	const { orbitRadius, orbitSpeed, radius, tube } = getAnimationStats();

	const positionY = getRandomNumber(-5, 5) + 2;
	let angle = getRandomNumber(0, 360);

	useFrame(() => {
		if (!meshRef.current) {
			return;
		}

		meshRef.current.rotation.x += rotationSpeeds.x;
		meshRef.current.rotation.y += rotationSpeeds.y;
		meshRef.current.rotation.z += rotationSpeeds.z;

		const positions = getPositionsToRotateAround(orbitRadius, angle, true);

		meshRef.current.position.set(positions.x, positionY, positions.z);

		angle += orbitSpeed;
	});

	return {
		radius,
		tube,
	};
};

type useCrossAnimationProps = {
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

export default useCrossAnimation;
