import { BoardItemPosition } from '@/modules/board/interfaces/board';
import { useBoardHoverContext } from '@/modules/board/providers/board-hover';
import { useFrame } from '@react-three/fiber';
import { APP_COLORS } from 'core/constants/colors';
import { useEffect, useRef, useState } from 'react';
import { Mesh, Vector3 } from 'three';

const ObjectToken = ({
	position,
	isAvailable,
	handleClick,
}: ObjectTokenProps) => {
	const meshRef = useRef<Mesh>(null!);
	const { setIsHover: setIsBoardHover } = useBoardHoverContext();
	const [isHover, setIsHover] = useState(false);

	useEffect(() => {
		if (!isAvailable) return;

		setIsBoardHover(isHover);
	}, [isHover, setIsBoardHover, isAvailable]);

	useFrame(() => {
		const { x, y } = meshRef.current.position;

		const handleHover = () => {
			meshRef.current.position.lerp(new Vector3(x, y, 0.2), 0.3);
		};

		const handleUnhover = () => {
			meshRef.current.position.lerp(new Vector3(x, y, 0), 0.3);
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
