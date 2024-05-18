import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

const GameStatesContext = createContext({} as GameStatesContextProps)

const GameStatesProvider = ({ children }: GameStatesProviderProps) => {
  const [isFinished, setIsFinished] = useState(false)
  const [isNextCross, setIsNextCross] = useState(false)

  return (
    <GameStatesContext.Provider
      value={{
        isFinished,
        setIsFinished,
        isNextCross,
        setIsNextCross,
      }}
    >
      {children}
    </GameStatesContext.Provider>
  )
}

type GameStatesProviderProps = {
  children: ReactNode
}

type GameStatesContextProps = {
  isFinished: boolean
  setIsFinished: Dispatch<SetStateAction<boolean>>
  isNextCross: boolean
  setIsNextCross: Dispatch<SetStateAction<boolean>>
}

export const useGameStatesContext = () => useContext(GameStatesContext)

export default GameStatesProvider
