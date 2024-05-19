import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react';
import { GAME_VALUES } from '../constants/board';

const GameHistoryContext = createContext({} as GameHistoryContextProps);

const GameHistoryProvider = ({ children }: GameHistoryProviderProps) => {
	const [squares, setSquares] = useState<GAME_VALUES[]>(Array(9).fill(''));

	return (
		<GameHistoryContext.Provider
			value={{
				squares,
				setSquares,
			}}
		>
			{children}
		</GameHistoryContext.Provider>
	);
};

type GameHistoryProviderProps = {
	children: ReactNode;
};

type GameHistoryContextProps = {
	squares: GAME_VALUES[];
	setSquares: Dispatch<SetStateAction<GAME_VALUES[]>>;
};

export const useGameHistoryContext = () => useContext(GameHistoryContext);

export default GameHistoryProvider;
