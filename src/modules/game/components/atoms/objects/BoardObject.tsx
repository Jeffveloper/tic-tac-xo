import { useGLTF } from '@react-three/drei';
import { APP_COLORS } from 'core/constants/colors';
import { Mesh } from 'three';
import { GLTF } from 'three-stdlib';

const BoardObject = () => {
	const {
		nodes: { board_table },
	} = useGLTF('/models/board.glb') as GLTFBoardResult;

	return (
		<mesh
			geometry={board_table.geometry}
			scale={[2, 0.5, 2]}
			position={[0, 0, 0.1]}
			rotation={[0, Math.PI / 2, Math.PI / 2]}
		>
			<meshLambertMaterial color={APP_COLORS.BLACK} />
		</mesh>
	);
};

type GLTFBoardResult = GLTF & {
	nodes: {
		board_table: Mesh;
	};
	materials: {};
};

export default BoardObject;
