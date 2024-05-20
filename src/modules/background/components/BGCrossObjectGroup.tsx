import BGCrossObject from './BGCrossObject';

const BGCrossObjectGroup = () => {
	return (
		<>
			{Array(10)
				.fill(0)
				.map((_, index) => {
					return <BGCrossObject key={index} />;
				})}
		</>
	);
};
export default BGCrossObjectGroup;
