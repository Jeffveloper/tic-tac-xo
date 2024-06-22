import UseShowObject from '@/modules/board/hooks/UseShowObject';
import { BoardItemPosition } from '@/modules/board/interfaces/board';
import { useFrame } from '@react-three/fiber';
import { APP_COLORS } from 'core/constants/colors';
import { useLoadRenderContext } from 'core/providers/load-render';
import { useRef } from 'react';
import { Mesh, Vector3 } from 'three';

const ObjectCircle = ({ position }: ObjectCircleProps) => {
	const { circle_object } = useLoadRenderContext();
	const meshRef = useRef<Mesh>(null!);

	UseShowObject({ meshRef });

	return (
		<mesh
			ref={meshRef}
			position={[position.x, position.y, 0.3]}
			geometry={circle_object.geometry}
			rotation={[Math.PI / 2, Math.PI / 4, 0]}
			scale={0}
		>
			<meshLambertMaterial color={APP_COLORS.WHITE} />
		</mesh>
	);
};

type ObjectCircleProps = {
	position: BoardItemPosition;
};

export default ObjectCircle;
