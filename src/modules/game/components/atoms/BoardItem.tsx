import { areEqualStrings, isEmptyString } from 'core/helpers/string';
import { useEffect, useState } from 'react';
import UseHandleMove from '../../hooks/UseHandleMove';
import { GAME_VALUES } from '../../constants/board';
import ObjectCross from './objects/ObjectCross';
import ObjectCircle from './objects/ObjectCircle';
import ObjectToken from './objects/ObjectToken';
import { useGameStatesContext } from '../../providers/game-states';
import { useGameHistoryContext } from '../../providers/game-history';
import { BoardItemData } from '../../interfaces/board';

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
