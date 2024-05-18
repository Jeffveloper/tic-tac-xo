import LogoAnimation from '@/atoms/LogoAnimation';
import ButtonLink from '@/atoms/buttons/ButtonLink';
import LogoStyles from '@/styles/modules/logo.module.css';
import classNames from 'classnames';

const Logo = () => {
	const LOGO_CHARACTERS_BASE = ['x', 'o', 'x', 'o', 'x', 'o', 'x'];
	const LOGO_CHARACTERS_ALTERNATIVE = ['o', 'x', 'o', 'x', 'o', 'x', 'o'];

	return (
		// <ButtonLink
		// 	href="/"
		// 	className={classNames(LogoStyles.root, 'overflow-hidden grou')}
		// 	text="Tic Tac"
		// >
		// 	<p className="relative flex">
		// 		<LogoAnimation items={LOGO_CHARACTERS_BASE} />
		// 		<LogoAnimation items={LOGO_CHARACTERS_ALTERNATIVE} isAlternative />
		// 	</p>
		// </ButtonLink>

		<h1 className="h1 ">Tic Tac xo</h1>
	);
};

export default Logo;
