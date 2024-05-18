import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

const Box = () => {
	const meshRef = useRef<THREE.Mesh>(null!);
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);
	// useFrame((state, delta) => (meshRef.current.rotation.z += delta + 0.1));
	return (
		<mesh
			ref={meshRef}
			scale={active ? 1.5 : 1}
			onClick={() => setActive(!active)}
			onPointerOver={() => setHover(true)}
			onPointerOut={() => setHover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? '#fff' : '#000'} />
		</mesh>
	);
};

export default Box;
