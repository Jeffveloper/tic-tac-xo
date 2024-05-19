import { useGameHistoryContext } from '@/modules/providers/game-history';
import { useGameStatesContext } from '@/modules/providers/game-states';
import { areEqualStrings, isEmptyString } from 'core/helpers/string';
import { useEffect, useState } from 'react';
import UseHandleMove from '../../hooks/UseHandleMove';
import { GAME_VALUES } from '../../constants/board';
import ObjectCross from './objects/ObjectCross';
import ObjectCircle from './objects/ObjectCircle';
import ObjectToken from './objects/ObjectToken';
import { BoardItemData } from '@/modules/interfaces/board';

const BoardItem = ({ item, order }: BoardItemProps) => {
	const { isFinished, isNextCross, setIsNextCross } = useGameStatesContext();
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
		isNextCross,
		setIsNextCross,
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
	isNextCross: boolean;
	order: number;
};

export default BoardItem;
