import { useEffect, useState } from 'react';

const UseMediaQuery = (mediaQueryString: string) => {
	const [matches, setMatches] = useState<boolean | null>(null);

	useEffect(() => {
		const mediaQueryList = window.matchMedia(mediaQueryString);

		const listener = () => setMatches(!!mediaQueryList.matches);
		listener();

		mediaQueryList.addEventListener('change', listener);

		return () => mediaQueryList.removeEventListener('change', listener);
	}, [mediaQueryString]);

	return matches;
};

export default UseMediaQuery;
