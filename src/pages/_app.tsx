import '@/styles/globals.css';
import { useGLTF } from '@react-three/drei';
import FontWrapper from 'core/components/layouts/FontWrapper';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<FontWrapper>
			<Component {...pageProps} />;
		</FontWrapper>
	);
}

useGLTF.preload('/models/icons.glb');
