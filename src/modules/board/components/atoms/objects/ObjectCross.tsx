import UseShowObject from '@/modules/board/hooks/UseShowObject';
import { BoardItemPosition } from '@/modules/board/interfaces/board';
import { APP_COLORS } from 'core/constants/colors';
import { useLoadRenderContext } from 'core/providers/load-render';
import { useRef } from 'react';
import { Mesh } from 'three';

const ObjectCross = ({ position }: ObjectCrossProps) => {
	const { cross_object } = useLoadRenderContext();
	const meshRef = useRef<Mesh>(null!);

	UseShowObject({ meshRef });

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
