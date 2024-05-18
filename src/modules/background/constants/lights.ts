import { ColorRepresentation, Vector3 } from 'three';

export const DIRECTIONAL_LIGHTS_ITEMS: DirectionalLightItem[] = [
	{
		color: 0xffffff,
		position: new Vector3(-100, 100, -100),
	},
];

type DirectionalLightItem = {
	color: ColorRepresentation;
	position: Vector3;
};
