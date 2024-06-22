import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react';
import { areEqualStrings } from 'core/helpers/string';
import { GAME_VALUES } from '../constants/game';

const GameStatusContext = createContext({} as GameStatusContextProps);

const GameStatusProvider = ({ children }: GameStatusProviderProps) => {
	const [isFinished, setIsFinished] = useState(false);
	const [currentTurn, setCurrentTurn] = useState(GAME_VALUES.CROSS);
	const isCurrentCross = areEqualStrings(GAME_VALUES.CROSS, currentTurn);

	return (
		<GameStatusContext.Provider
			value={{
				isFinished,
				setIsFinished,
				currentTurn,
				setCurrentTurn,
				isCurrentCross,
			}}
		>
			{children}
		</GameStatusContext.Provider>
	);
};

type GameStatusProviderProps = {
	children: ReactNode;
};

type GameStatusContextProps = {
	isFinished: boolean;
	setIsFinished: Dispatch<SetStateAction<boolean>>;
	currentTurn: GAME_VALUES;
	setCurrentTurn: Dispatch<SetStateAction<GAME_VALUES>>;
	isCurrentCross: boolean;
};

export const useGameStatusContext = () => useContext(GameStatusContext);

export default GameStatusProvider;
