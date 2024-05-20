import BGCircleObject from './BGCircleObject';

const BGCircleObjectGroup = () => {
	return (
		<>
			{Array(20)
				.fill(0)
				.map((_, index) => {
					return <BGCircleObject key={index} />;
				})}
		</>
	);
};

export default BGCircleObjectGroup;
