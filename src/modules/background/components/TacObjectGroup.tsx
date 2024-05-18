import TacObject from './TacObject';

const TacObjectGroup = () => {
	return (
		<>
			{Array(20)
				.fill(0)
				.map((_, index) => {
					return <TacObject key={index} />;
				})}
		</>
	);
};
export default TacObjectGroup;
