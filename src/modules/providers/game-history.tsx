import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

const GameHistoryContext = createContext({} as GameHistoryContextProps)

const GameHistoryProvider = ({ children }: GameHistoryProviderProps) => {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(''))

  return (
    <GameHistoryContext.Provider
      value={{
        squares,
        setSquares,
      }}
    >
      {children}
    </GameHistoryContext.Provider>
  )
}

type GameHistoryProviderProps = {
  children: ReactNode
}

type GameHistoryContextProps = {
  squares: string[]
  setSquares: Dispatch<SetStateAction<string[]>>
}

export const useGameHistoryContext = () => useContext(GameHistoryContext)

export default GameHistoryProvider
