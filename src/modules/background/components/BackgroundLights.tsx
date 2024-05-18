import { DIRECTIONAL_LIGHTS_ITEMS } from '../constants/lights';

const BackgroundLights = () => {
	return (
		<>
			{DIRECTIONAL_LIGHTS_ITEMS.map((light, index) => {
				return (
					<directionalLight
						key={index}
						color={light.color}
						position={light.position}
					/>
				);
			})}
		</>
	);
};

export default BackgroundLights;
