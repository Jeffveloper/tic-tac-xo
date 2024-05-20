import { useEffect, useRef } from 'react';
import { useMedia } from 'react-use';
import { PointLight } from 'three';

const LigthScene = () => {
	const lightRef = useRef<PointLight>(null!);
	const isFromLg = useMedia('(min-width: 1024px)', true);

	useEffect(() => {
		const updateLightPosition = (event: MouseEvent) => {
			const { clientX, clientY } = event;

			const positionX = isFromLg
				? ((clientX - 400) / (window.innerWidth - 400)) * 2 - 1
				: (clientX / window.innerWidth) * 2 - 1;

			const mouse3D = {
				x: positionX,
				y: -(clientY / window.innerHeight) * 2 + 1,
				z: 1,
			};

			if (lightRef.current) {
				lightRef.current.position.set(mouse3D.x, mouse3D.y, mouse3D.z);
			}
		};

		window.addEventListener('mousemove', updateLightPosition);

		return () => {
			window.removeEventListener('mousemove', updateLightPosition);
		};
	}, [isFromLg]);

	return (
		<pointLight
			ref={lightRef}
			position={[2, 3, 1]}
			intensity={1}
			distance={3}
		/>
	);
};

export default LigthScene;
