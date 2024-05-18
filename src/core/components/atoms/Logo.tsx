import LogoStyles from '@/styles/modules/logo.module.css';
import classNames from 'classnames';

const Logo = () => {
	const LOGO_CHARACTERS_BASE = ['x', 'o', 'x', 'o', 'x', 'o', 'x'];
	const LOGO_CHARACTERS_ALTERNATIVE = ['o', 'x', 'o', 'x', 'o', 'x', 'o'];

	return (
		<p
			className={classNames(
				LogoStyles.root,
				'h1 relative w-fit px-2 py-1 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 overflow-hidden group'
			)}
		>
			<span>
				Tic Tac <span className="opacity-0">xo</span>
				<span
					className={classNames(
						LogoStyles.cross,
						'absolute  flex gap-2 flex-col leading-none group-hover:-translate-y-full transition-transform duration-1000'
					)}
				>
					{LOGO_CHARACTERS_BASE.map((char, index) => (
						<span key={index}>{char}</span>
					))}
				</span>
				<span
					className={classNames(
						LogoStyles.circle,
						'absolute flex gap-2 flex-col leading-none group-hover:translate-y-full transition-transform duration-1000'
					)}
				>
					{LOGO_CHARACTERS_ALTERNATIVE.map((char, index) => (
						<span key={index}>{char}</span>
					))}
				</span>
			</span>
		</p>
	);
};

export default Logo;
