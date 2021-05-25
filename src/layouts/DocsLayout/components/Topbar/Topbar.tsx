import clsx from 'clsx';
import {
	AppBar,
	Box,
	IconButton,
	Toolbar,
	List,
	ListItem,
	Button,
	makeStyles,
} from '@material-ui/core';
import { DarkModeToggler } from 'components/atoms';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../../../components/atoms/Logo';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		borderBottom: `1px solid ${theme.palette.divider}`,
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
	navigationContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	listItem: {
		paddingRight: 0,
	},
	listItemText: {
		flex: '0 0 auto',
		whiteSpace: 'nowrap',
	},
	listItemButton: {
		whiteSpace: 'nowrap',
	},
	iconButton: {
		paddingRight: 0,
		'&:hover': {
			background: 'transparent',
		},
	},
}));

interface Props {
	className?: string;
	onMobileNavOpen: Function;
}

const TopBar = ({
	className,
	onMobileNavOpen,
	...rest
}: Props): JSX.Element => {
	const classes = useStyles();
	const theme = useTheme();
	return (
		<AppBar
			className={clsx(classes.root, className)}
			elevation={0}
			color="inherit"
			{...rest}
		>
			<Toolbar>
				<div className={classes.logoContainer}>
					<Logo displayText />
				</div>
				<Box flexGrow={1} />
				<DarkModeToggler />
					<List disablePadding className={classes.navigationContainer} sx={{ display: { xl: 'none', xs: 'block' } }}>
						<ListItem
							className={clsx(classes.listItem, 'menu-item--no-dropdown')}
						>
							<Button
								className={classes.listItemText}
								component="a"
								href="/"
								variant="outlined"
							>
								SEE ALL PAGES
							</Button>
						</ListItem>
						<ListItem
							className={clsx(classes.listItem, 'menu-item--no-dropdown')}
						>
							<Button
								variant="contained"
								color="primary"
								component="a"
								target="blank"
								href="https://material-ui.com/store/items/the-front-landing-page/"
								className={classes.listItemButton}
							>
								Buy Now
							</Button>
						</ListItem>
					</List>
					<IconButton
						onClick={() => onMobileNavOpen()}
						className={classes.iconButton}
						aria-label="Menu"
						disableRipple
						sx={{ display: { xl: 'none', xs: 'block' } }}
					>
						<MenuIcon />
					</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default TopBar;
