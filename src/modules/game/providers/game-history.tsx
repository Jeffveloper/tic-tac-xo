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
	const [roundsCross, setRoundsCross] = useState(0);
	const [roundsCircle, setRoundsCircle] = useState(0);

	return (
		<GameHistoryContext.Provider
			value={{
				squares,
				setSquares,
				roundsCross,
				setRoundsCross,
				roundsCircle,
				setRoundsCircle,
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
	roundsCross: number;
	setRoundsCross: Dispatch<SetStateAction<number>>;
	roundsCircle: number;
	setRoundsCircle: Dispatch<SetStateAction<number>>;
};

export const useGameHistoryContext = () => useContext(GameHistoryContext);

export default GameHistoryProvider;