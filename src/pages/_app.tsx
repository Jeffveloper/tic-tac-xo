import '@/styles/globals.css';
import { useGLTF } from '@react-three/drei';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

useGLTF.preload('/models/icons.glb');
