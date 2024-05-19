import { useLoadRenderContext } from '@/modules/game/providers/load-render';
import { BoardItemPosition } from '@/modules/interfaces/board';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
const ObjectCircle = ({ position }: ObjectCircleProps) => {
	const { circle_object } = useLoadRenderContext();
	const meshRef = useRef<Mesh>(null!);

	useFrame((_, delta) => {
		const moveZ = () => {
			if (meshRef.current.position.z >= 0.55) return;

			meshRef.current.position.z += delta;
		};

		const increaseScale = () => {
			if (meshRef.current.scale.z >= 0.1) return;

			meshRef.current.scale.x += delta;
			meshRef.current.scale.y += delta;
			meshRef.current.scale.z += delta;
		};

		moveZ();
		increaseScale();
	});

	return (
		<mesh
			ref={meshRef}
			position={[position.x, position.y, 0.3]}
			geometry={circle_object.geometry}
			rotation={[Math.PI / 2, Math.PI / 4, 0]}
			scale={0}
		>
			<meshStandardMaterial color={0x000000} />
		</mesh>
	);
};

type ObjectCircleProps = {
	position: BoardItemPosition;
};

export default ObjectCircle;
