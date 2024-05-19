import { APP_COLORS } from 'core/constants/colors';
import { ColorRepresentation, Vector3 } from 'three';

export const DIRECTIONAL_LIGHTS_ITEMS: DirectionalLightItem[] = [
	{
		color: APP_COLORS.WHITE,
		position: new Vector3(-100, 100, -100),
	},
];

type DirectionalLightItem = {
	color: ColorRepresentation;
	position: Vector3;
};
