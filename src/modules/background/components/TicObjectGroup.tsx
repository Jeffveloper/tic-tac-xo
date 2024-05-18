import TicObject from './TicObject';

const TicObjectGroup = () => {
	return (
		<>
			{Array(20)
				.fill(0)
				.map((_, index) => {
					return <TicObject key={index} />;
				})}
		</>
	);
};

export default TicObjectGroup;
