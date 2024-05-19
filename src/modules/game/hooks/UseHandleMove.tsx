import { Dispatch, SetStateAction } from 'react'
import { GAME_VALUES } from '../constants/board'

const UseHandleMove = ({
  isFinished,
  squares,
  setSquares,
  isNextCross,
  setIsNextCross,
}: UseHandleMoveProps) => {
  const handleNextMove = (index: number) => {
    if (isFinished) return

    const nextSquares = squares.slice()
    nextSquares[index] = isNextCross
      ? GAME_VALUES.BASE
      : GAME_VALUES.ALTERNATIVE
    setSquares(nextSquares)
    setIsNextCross(!isNextCross)
  }

  return handleNextMove
}

type UseHandleMoveProps = {
  isFinished: boolean
  squares: string[]
  setSquares: Dispatch<SetStateAction<string[]>>
  isNextCross: boolean
  setIsNextCross: Dispatch<SetStateAction<boolean>>
}

export default UseHandleMove
