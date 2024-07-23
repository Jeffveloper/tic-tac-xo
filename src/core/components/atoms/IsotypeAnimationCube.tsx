import UseMediaQuery from '@/modules/board/hooks/UseMediaQuery';
import IsotypeAnimationStyles from '@/styles/components/isotype-animation.module.css';
import classNames from 'classnames';
import {
	ISOTYPE_CUBE_CIRCLE_FACES,
	ISOTYPE_CUBE_CROSS_FACES,
} from 'core/constants/cubes';
import { MEDIA_QUERIES } from 'core/constants/media-queries';
import { CSSProperties } from 'react';
import { color } from 'three/examples/jsm/nodes/Nodes.js';

const IsotypeAnimationCube = ({
	className,
	isCross,
}: IsotypeAnimationCubeProps) => {
	const isFromLg = UseMediaQuery(MEDIA_QUERIES.MEDIA_FROM_LG);

	const faces = isCross ? ISOTYPE_CUBE_CROSS_FACES : ISOTYPE_CUBE_CIRCLE_FACES;
	const size = isFromLg ? '48px' : '40px';

	return (
		<div className={classNames(className, IsotypeAnimationStyles.root)}>
			<div
				style={{ '--size': size } as CSSProperties}
				className={classNames(
					{
						[IsotypeAnimationStyles.cross]: isCross,
						[IsotypeAnimationStyles.circle]: !isCross,
					},
					IsotypeAnimationStyles.cube
				)}
			>
				{faces.map((face) => {
					return (
						<div
							key={face.name}
							style={
								{
									'--background-color': `var(--${face.color})`,
									transform: face.transform,
									backgroundImage: `url('/images/isotype/${face.image}.webp')`,
								} as CSSProperties
							}
							className={classNames(IsotypeAnimationStyles.face)}
						/>
					);
				})}
			</div>
		</div>
	);
};

type IsotypeAnimationCubeProps = {
	className?: string;
	isCross?: boolean;
};

export default IsotypeAnimationCube;
