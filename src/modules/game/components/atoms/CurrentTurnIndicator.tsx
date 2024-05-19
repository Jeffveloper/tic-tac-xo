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
		crossMeshhRef.current.rotation.x -= delta;
		crossMeshhRef.current.rotation.y += delta;
		crossMeshhRef.current.rotation.z -= delta;

		circleMeshhRef.current.rotation.x += delta;
		circleMeshhRef.current.rotation.y -= delta;
		circleMeshhRef.current.rotation.z += delta;

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
				<meshStandardMaterial color={APP_COLORS.BLACK} />
			</mesh>
			<mesh
				ref={circleMeshhRef}
				position={[-10, 0, 0]}
				geometry={circle_object.geometry}
				rotation={[Math.PI / 2, Math.PI / 4, 0]}
				scale={0.5}
			>
				<meshStandardMaterial color={APP_COLORS.WHITE} />
			</mesh>
		</>
	);
};

export default CurrentTurnIndicator;
