import BGCrossObject from './BGCrossObject';

const BGCrossObjectGroup = () => {
	return (
		<>
			{Array(20)
				.fill(0)
				.map((_, index) => {
					return <BGCrossObject key={index} />;
				})}
		</>
	);
};
export default BGCrossObjectGroup;
