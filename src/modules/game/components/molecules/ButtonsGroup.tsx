import RepositoryButton from '../atoms/RepositoryButton';
import ResetButton from '../atoms/ResetButton';
import SoundButton from '../atoms/SoundButton';

const ButtonsGroup = () => {
	return (
		<div className="flex flex-wrap gap-4">
			<ResetButton />
			<SoundButton />
			<RepositoryButton />
		</div>
	);
};

export default ButtonsGroup;
