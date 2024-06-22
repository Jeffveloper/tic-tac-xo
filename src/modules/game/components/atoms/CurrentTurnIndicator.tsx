import { useFrame } from '@react-three/fiber';
import { APP_COLORS } from 'core/constants/colors';
import { useRef } from 'react';
import { Mesh, Vector3 } from 'three';
import { useGameStatusContext } from '../../providers/game-status';
import { useLoadRenderContext } from '../../../../core/providers/load-render';

const CurrentTurnIndicator = () => {
	const { isCurrentCross } = useGameStatusContext();
	const crossMeshhRef = useRef<Mesh>(null!);
	const circleMeshhRef = useRef<Mesh>(null!);
	const { cross_object, circle_object } = useLoadRenderContext();

	useFrame((_, delta) => {
		const movementVariant = (Math.sin(delta) * Math.cos(delta)) / 2;

		if (isCurrentCross) {
			crossMeshhRef.current.rotation.x -= movementVariant;
			crossMeshhRef.current.rotation.y += movementVariant;
			crossMeshhRef.current.rotation.z -= movementVariant;
		}
		if (!isCurrentCross) {
			circleMeshhRef.current.rotation.x += movementVariant;
			circleMeshhRef.current.rotation.y -= movementVariant;
			circleMeshhRef.current.rotation.z += movementVariant;
		}

		if (isCurrentCross) {
			crossMeshhRef.current.position.lerp(new Vector3(0, 0, 0), 0.3);
			circleMeshhRef.current.position.lerp(new Vector3(-10, 0, 0), 0.3);

			return;
		}

		crossMeshhRef.current.position.lerp(new Vector3(10, 0, 0), 0.3);
		circleMeshhRef.current.position.lerp(new Vector3(0, 0, 0), 0.3);
	});

	return (
		<>
			<mesh
				ref={crossMeshhRef}
				geometry={cross_object.geometry}
				rotation={[Math.PI / 2, Math.PI / 4, 0]}
				scale={0.5}
			>
				<meshBasicMaterial color={APP_COLORS.WHITE} />
			</mesh>
			<mesh
				ref={circleMeshhRef}
				position={[-10, 0, 0]}
				geometry={circle_object.geometry}
				rotation={[Math.PI / 2, Math.PI / 4, 0]}
				scale={0.5}
			>
				<meshBasicMaterial color={APP_COLORS.WHITE} />
			</mesh>
		</>
	);
};

export default CurrentTurnIndicator;
