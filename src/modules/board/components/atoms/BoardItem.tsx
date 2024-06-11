import { areEqualStrings, isEmptyString } from 'core/helpers/string';
import { useEffect, useState } from 'react';
import ObjectCross from './objects/ObjectCross';
import ObjectCircle from './objects/ObjectCircle';
import ObjectToken from './objects/ObjectToken';
import { useGameStatesContext } from '@/modules/game/providers/game-states';
import { useGameHistoryContext } from '@/modules/game/providers/game-history';
import UseHandleMove from '@/modules/game/hooks/UseHandleMove';
import { GAME_VALUES } from '@/modules/game/constants/game';
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

	const isCross = areEqualStrings(GAME_VALUES.CROSS, value);

	const handleSelection = () => {
		if (!isAvailable) return;

		handleNextMove(order);
		setisAvailable(false);
	};

	return (
		<>
			{!isVoidValue && isCross && <ObjectCross position={position} />}
			{!isVoidValue && !isCross && <ObjectCircle position={position} />}

			<ObjectToken
				position={position}
				isAvailable={isAvailable}
				handleClick={handleSelection}
			/>
		</>
	);
};

type BoardItemProps = {
	item: BoardItemData;
	order: number;
};

export default BoardItem;
