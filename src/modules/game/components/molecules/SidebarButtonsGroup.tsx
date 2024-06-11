import RepositoryButton from '../atoms/RepositoryButton';
import SoundButton from '../atoms/SoundButton';

const SidebarButtonsGroup = () => {
	return (
		<div className="flex flex-wrap gap-4">
			<SoundButton />
			<RepositoryButton />
		</div>
	);
};

export default SidebarButtonsGroup;
