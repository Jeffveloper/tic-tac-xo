import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react';
import { GAME_VALUES } from '../constants/board';
import { areEqualStrings } from 'core/helpers/string';

const GameStatesContext = createContext({} as GameStatesContextProps);

const GameStatesProvider = ({ children }: GameStatesProviderProps) => {
	const [isFinished, setIsFinished] = useState(false);
	const [currentTurn, setCurrentTurn] = useState(GAME_VALUES.CROSS);
	const isCurrentCross = areEqualStrings(GAME_VALUES.CROSS, currentTurn);

	return (
		<GameStatesContext.Provider
			value={{
				isFinished,
				setIsFinished,
				currentTurn,
				setCurrentTurn,
				isCurrentCross,
			}}
		>
			{children}
		</GameStatesContext.Provider>
	);
};

type GameStatesProviderProps = {
	children: ReactNode;
};

type GameStatesContextProps = {
	isFinished: boolean;
	setIsFinished: Dispatch<SetStateAction<boolean>>;
	currentTurn: GAME_VALUES;
	setCurrentTurn: Dispatch<SetStateAction<GAME_VALUES>>;
	isCurrentCross: boolean;
};

export const useGameStatesContext = () => useContext(GameStatesContext);

export default GameStatesProvider;
