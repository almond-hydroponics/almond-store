import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';
import { Image } from 'components/atoms';
import Logo from '../../../../components/atoms/Logo';

const useStyles = makeStyles((theme) => ({
	toolbar: {
		maxWidth: theme.layout.contentWidth,
		width: '100%',
		margin: '0 auto',
		padding: theme.spacing(0, 2),
		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(0, 8),
		},
	},
	logoContainer: {
		width: 100,
		height: 28,
		[theme.breakpoints.up('md')]: {
			width: 120,
			height: 32,
		},
	},
	logoImage: {
		width: '100%',
		height: '100%',
	},
}));

interface Props {
	className?: string;
}

const Topbar = ({ className, ...rest }: Props): JSX.Element => {
	const classes = useStyles();

	return (
		<Toolbar className={clsx(classes.toolbar, className)} {...rest}>
				<Logo displayText />
		</Toolbar>
	);
};

export default Topbar;
