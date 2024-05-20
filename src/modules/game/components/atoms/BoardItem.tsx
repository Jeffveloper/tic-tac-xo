import { areEqualStrings, isEmptyString } from 'core/helpers/string';
import { useEffect, useState } from 'react';
import { GAME_VALUES } from '../../constants/board';
import UseHandleMove from '../../hooks/UseHandleMove';
import { BoardItemData } from '../../interfaces/board';
import { useGameHistoryContext } from '../../providers/game-history';
import { useGameStatesContext } from '../../providers/game-states';
import ObjectCircle from './objects/ObjectCircle';
import ObjectCross from './objects/ObjectCross';
import ObjectToken from './objects/ObjectToken';

const BoardItem = ({ item, order }: BoardItemProps) => {
	const { isFinished, currentTurn, setCurrentTurn } = useGameStatesContext();
	const { squares, setSquares } = useGameHistoryContext();

	const { position, value } = item;
	const isVoidValue = isEmptyString(value);
	const [isAvailable, setisAvailable] = useState<boolean>(isVoidValue);

	useEffect(() => {
		setisAvailable(isVoidValue);
	}, [isFinished, isVoidValue]);

	const handleNextMove = UseHandleMove({
		isFinished,
		squares,
		setSquares,
		currentTurn,
		setCurrentTurn,
	});

	const isCurrentCross = areEqualStrings(GAME_VALUES.BASE, value);

	const handleSelection = () => {
		if (!isAvailable) return;

		handleNextMove(order);
		setisAvailable(false);
	};

	return (
		<>
			{!isVoidValue && isCurrentCross && <ObjectCross position={position} />}
			{!isVoidValue && !isCurrentCross && <ObjectCircle position={position} />}

			<ObjectToken
				position={position}
				isAvailable={isAvailable}
				onClick={handleSelection}
			/>
		</>
	);
};

type BoardItemProps = {
	item: BoardItemData;
	order: number;
};

export default BoardItem;
