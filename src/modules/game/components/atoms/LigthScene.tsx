import { useEffect, useRef } from 'react';
import { PointLight } from 'three';

const LigthScene = () => {
	const lightRef = useRef<PointLight>(null!);

	const updateLightPosition = (event: MouseEvent) => {
		const { clientX, clientY } = event;

		const mouse3D = {
			x: ((clientX - 400) / (window.innerWidth - 400)) * 2 - 1,
			y: -(clientY / window.innerHeight) * 2 + 1,
			z: 1,
		};

		if (lightRef.current) {
			lightRef.current.position.set(mouse3D.x, mouse3D.y, mouse3D.z);
		}
	};

	useEffect(() => {
		window.addEventListener('mousemove', updateLightPosition);

		return () => {
			window.removeEventListener('mousemove', updateLightPosition);
		};
	}, []);

	return (
		<pointLight
			ref={lightRef}
			position={[2, 3, 1]}
			intensity={5}
			distance={2}
		/>
	);
};

export default LigthScene;
