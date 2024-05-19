import { useGLTF } from '@react-three/drei';
import { ReactNode, createContext, useContext } from 'react';
import { Mesh } from 'three';
import { GLTF } from 'three-stdlib';

const LoadRenderContext = createContext({} as LoadRenderContextProps);

const LoadRenderProvider = ({ children }: LoadRenderProviderProps) => {
	const {
		nodes: { circle_object, cross_object },
	} = useGLTF('/models/icons.glb') as GLTFResult;

	return (
		<LoadRenderContext.Provider
			value={{
				circle_object,
				cross_object,
			}}
		>
			{children}
		</LoadRenderContext.Provider>
	);
};

type LoadRenderProviderProps = {
	children: ReactNode;
};

type LoadRenderContextProps = {
	circle_object: Mesh;
	cross_object: Mesh;
};

export const useLoadRenderContext = () => useContext(LoadRenderContext);

type GLTFResult = GLTF & {
	nodes: {
		circle_object: Mesh;
		cross_object: Mesh;
	};
	materials: {};
};

export default LoadRenderProvider;
