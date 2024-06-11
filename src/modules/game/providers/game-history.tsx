import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react';
import { DEFAULT_GAME_STATE, GAME_VALUES } from '../constants/game';

const GameHistoryContext = createContext({} as GameHistoryContextProps);

const GameHistoryProvider = ({ children }: GameHistoryProviderProps) => {
	const [squares, setSquares] = useState<GAME_VALUES[]>(DEFAULT_GAME_STATE);
	const [roundsCross, setRoundsCross] = useState(0);
	const [roundsCircle, setRoundsCircle] = useState(0);
	const [roundsDraw, setRoundsDraw] = useState(0);

	return (
		<GameHistoryContext.Provider
			value={{
				squares,
				setSquares,
				roundsCross,
				setRoundsCross,
				roundsCircle,
				setRoundsCircle,
				roundsDraw,
				setRoundsDraw,
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
	roundsDraw: number;
	setRoundsDraw: Dispatch<SetStateAction<number>>;
};

export const useGameHistoryContext = () => useContext(GameHistoryContext);

export default GameHistoryProvider;
