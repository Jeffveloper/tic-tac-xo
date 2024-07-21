import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react';

const BoardHoverContext = createContext({} as BoardHoverContextProps);

const BoardHoverProvider = ({ children }: BoardHoverProviderProps) => {
	const [isHover, setIsHover] = useState(false);

	return (
		<BoardHoverContext.Provider
			value={{
				isHover,
				setIsHover,
			}}
		>
			{children}
		</BoardHoverContext.Provider>
	);
};

type BoardHoverProviderProps = {
	children: ReactNode;
};

type BoardHoverContextProps = {
	isHover: boolean;
	setIsHover: Dispatch<SetStateAction<boolean>>;
};

export const useBoardHoverContext = () => useContext(BoardHoverContext);

export default BoardHoverProvider;
