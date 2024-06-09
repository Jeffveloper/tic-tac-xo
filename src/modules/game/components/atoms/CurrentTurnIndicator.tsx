import { useFrame } from '@react-three/fiber';
import { APP_COLORS } from 'core/constants/colors';
import { useRef } from 'react';
import { Mesh } from 'three';
import { useGameStatesContext } from '../../providers/game-states';
import { useLoadRenderContext } from '../../providers/load-render';

const CurrentTurnIndicator = () => {
	const { isCurrentCross } = useGameStatesContext();
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

		const showCross = () => {
			if (crossMeshhRef.current.position.x <= 0) return;

			crossMeshhRef.current.position.x -= 1;
		};

		const hideCross = () => {
			if (crossMeshhRef.current.position.x >= 10) return;

			crossMeshhRef.current.position.x += 1;
		};

		const showCircle = () => {
			if (circleMeshhRef.current.position.x >= 0) return;

			circleMeshhRef.current.position.x += 1;
		};

		const hideCircle = () => {
			if (circleMeshhRef.current.position.x <= -10) return;

			circleMeshhRef.current.position.x -= 1;
		};

		if (isCurrentCross) {
			showCross();
			hideCircle();

			return;
		}

		hideCross();
		showCircle();
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
