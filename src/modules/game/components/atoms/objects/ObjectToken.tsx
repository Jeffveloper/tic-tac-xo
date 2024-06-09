import { BoardItemPosition } from '@/modules/game/interfaces/board';
import { useFrame } from '@react-three/fiber';
import { APP_COLORS } from 'core/constants/colors';
import { useRef, useState } from 'react';
import { Mesh } from 'three';

const ObjectToken = ({
	position,
	isAvailable,
	handleClick,
}: ObjectTokenProps) => {
	const meshRef = useRef<Mesh>(null!);

	const [isHover, setIsHover] = useState(false);

	useFrame((_, delta) => {
		const handleHover = () => {
			if (meshRef.current.position.z <= 0) return;

			meshRef.current.position.z -= delta;
		};

		const handleUnhover = () => {
			if (meshRef.current.position.z >= 0.1) return;

			meshRef.current.position.z += delta;
		};

		if (!isAvailable) {
			if (isHover) handleUnhover();
			return;
		}

		if (isHover) handleHover();
		if (!isHover) handleUnhover();
	});

	const getMaterialColor = () => {
		if (isAvailable && isHover) return APP_COLORS.WHITE;

		return APP_COLORS.SMOKE_BLACK;
	};

	return (
		<mesh
			ref={meshRef}
			position={[position.x, position.y, position.z]}
			onClick={(e) => {
				e.stopPropagation();
				handleClick();
			}}
			onPointerOver={(e) => {
				e.stopPropagation();
				setIsHover(true);
			}}
			onPointerOut={(e) => {
				e.stopPropagation();
				setIsHover(false);
			}}
		>
			<boxGeometry args={[1, 1, 0.6]} />
			<meshLambertMaterial color={getMaterialColor()} />
		</mesh>
	);
};

type ObjectTokenProps = {
	position: BoardItemPosition;
	isAvailable: boolean;
	handleClick: () => void;
};

export default ObjectToken;
