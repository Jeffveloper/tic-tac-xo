import { useFrame } from '@react-three/fiber';
import { MutableRefObject } from 'react';
import {
	BufferGeometry,
	Material,
	Mesh,
	NormalBufferAttributes,
	Object3DEventMap,
	Vector3,
} from 'three';

const UseShowObject = ({ meshRef }: UseShowObjectProps) => {
	useFrame(() => {
		const { x, y } = meshRef.current.position;

		const moveZ = () => {
			meshRef.current.position.lerp(new Vector3(x, y, 0.4), 0.3);
		};

		const increaseScale = () => {
			meshRef.current.scale.lerp(new Vector3(0.1, 0.1, 0.1), 0.3);
		};

		moveZ();
		increaseScale();
	});
};

type UseShowObjectProps = {
	meshRef: MutableRefObject<
		Mesh<
			BufferGeometry<NormalBufferAttributes>,
			Material | Material[],
			Object3DEventMap
		>
	>;
};

export default UseShowObject;
