import { BoardItemPosition } from '@/modules/board/interfaces/board';
import { useFrame } from '@react-three/fiber';
import { APP_COLORS } from 'core/constants/colors';
import { useLoadRenderContext } from 'core/providers/load-render';
import { useRef } from 'react';
import { Mesh } from 'three';

const ObjectCross = ({ position }: ObjectCrossProps) => {
	const { cross_object } = useLoadRenderContext();
	const meshRef = useRef<Mesh>(null!);

	useFrame((_, delta) => {
		const moveZ = () => {
			if (meshRef.current.position.z >= 0.5) return;

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
			geometry={cross_object.geometry}
			rotation={[Math.PI / 2, Math.PI / 4, 0]}
			scale={0}
		>
			<meshLambertMaterial color={APP_COLORS.WHITE} />
		</mesh>
	);
};

type ObjectCrossProps = {
	position: BoardItemPosition;
};

export default ObjectCross;