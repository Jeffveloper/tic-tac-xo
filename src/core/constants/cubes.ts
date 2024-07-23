import { IsotypeCubeFace } from 'core/interfaces/cubes';
import { color } from 'three/examples/jsm/nodes/Nodes.js';

export const ISOTYPE_CUBE_CROSS_FACES: IsotypeCubeFace[] = [
	{
		name: 'front',
		image: 'cross-white',
		color: 'black',
		transform: 'translateZ(10px)',
	},
	{
		name: 'bottom',
		image: 'circle-black',
		color: 'gray',
		transform: 'rotateX(-90deg) translateZ(calc(var(--size) / 2))',
	},
	{
		name: 'back',
		image: 'cross-black',
		color: 'white',
		transform: 'rotateY(180deg) translateZ(calc(var(--size) / 2))',
	},
];

export const ISOTYPE_CUBE_CIRCLE_FACES: IsotypeCubeFace[] = [
	{
		name: 'front',
		image: 'circle-white',
		color: 'black',
		transform: 'translateZ(10px)',
	},
	{
		name: 'bottom',
		image: 'cross-white',
		color: 'gray',
		transform: 'rotateX(-90deg) translateZ(calc(var(--size) / 2))',
	},
	{
		name: 'back',
		image: 'circle-black',
		color: 'white',
		transform: 'rotateY(180deg) translateZ(calc(var(--size) / 2))',
	},
];
