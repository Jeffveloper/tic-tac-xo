import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react';

const ResetModalContext = createContext({} as ResetModalContextProps);

const ResetModalProvider = ({ children }: ResetModalProviderProps) => {
	const [isResetModalOpen, setisResetModalOpen] = useState(false);

	return (
		<ResetModalContext.Provider
			value={{
				isResetModalOpen,
				setisResetModalOpen,
			}}
		>
			{children}
		</ResetModalContext.Provider>
	);
};

type ResetModalProviderProps = {
	children: ReactNode;
};

type ResetModalContextProps = {
	isResetModalOpen: boolean;
	setisResetModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const useResetModalContext = () => useContext(ResetModalContext);

export default ResetModalProvider;
