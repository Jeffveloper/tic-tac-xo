import { BoardItemPosition } from '@/modules/game/interfaces/board';
import { useFrame, useLoader } from '@react-three/fiber';
import { APP_COLORS } from 'core/constants/colors';
import { getRandomNumber } from 'core/helpers/numbers';
import { useMemo, useRef, useState } from 'react';
import { Mesh, TextureLoader } from 'three';

const ObjectToken = ({ position, isAvailable, onClick }: ObjectTokenProps) => {
	const RANDOM_TEXTURE = useMemo(
		() => `/images/cube_texture_${getRandomNumber(1, 4).toFixed(0)}.png`,
		[]
	);

	const meshRef = useRef<Mesh>(null!);
	const [isHover, setIsHover] = useState(false);

	const colorMap = useLoader(TextureLoader, RANDOM_TEXTURE);

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

	return (
		<mesh
			ref={meshRef}
			position={[position.x, position.y, position.z]}
			onClick={onClick}
			onPointerOver={() => setIsHover(true)}
			onPointerOut={() => setIsHover(false)}
		>
			<boxGeometry args={[1, 1, 0.6]} />
			<meshLambertMaterial map={colorMap} color={APP_COLORS.GRAY} />
		</mesh>
	);
};

type ObjectTokenProps = {
	position: BoardItemPosition;
	isAvailable: boolean;
	onClick: () => void;
};

export default ObjectToken;
