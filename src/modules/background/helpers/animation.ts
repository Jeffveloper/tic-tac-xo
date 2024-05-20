import { getRandomNumber } from 'core/helpers/numbers';

export const getRandomSpeeds = () => {
	return {
		x: getRandomNumber(0, 1) * 0.02,
		y: getRandomNumber(0, 1) * 0.02,
		z: getRandomNumber(0, 1) * 0.02,
	};
};

export const getRandomDirections = () => {
	return {
		x: getRandomNumber(-1, 1) < 0 ? -1 : 1,
		y: getRandomNumber(-1, 1) < 0 ? -1 : 1,
		z: getRandomNumber(-1, 1) < 0 ? -1 : 1,
	};
};

export const getRotationSpeedOwnAxis = () => {
	const directions = getRandomDirections();
	const speeds = getRandomSpeeds();

	const rotationSpeedX = speeds.x * directions.x;
	const rotationSpeedY = speeds.y * directions.y;
	const rotationSpeedZ = speeds.z * directions.z;

	return {
		x: rotationSpeedX,
		y: rotationSpeedY,
		z: rotationSpeedZ,
	};
};

export const getPositionsToRotateAround = (
	orbitRadius: number,
	angle: number,
	isAlternative?: boolean
) => {
	const newPositionX = orbitRadius * Math.sin(angle);
	const newPositionY = orbitRadius * Math.cos(angle);

	if (isAlternative)
		return {
			x: newPositionX,
			y: 0,
			z: newPositionY,
		};

	return {
		x: 0,
		y: newPositionX,
		z: newPositionY,
	};
};

export const getAnimationStats = () => {
	const scale = Number(getRandomNumber(0.2, 0.7).toFixed(1));
	const orbitRadius = getRandomNumber(16, 22);
	const orbitSpeed = getRandomNumber(0.001, 0.002);

	return {
		scale,
		orbitRadius,
		orbitSpeed,
	};
};
