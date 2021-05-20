import { useState } from 'react';
import * as React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
// import { NavLink } from 'react-router-dom';
import Link from 'next/link';
import {
	Toolbar,
	Hidden,
	List,
	ListItem,
	ListItemIcon,
	Popover,
	Typography,
	IconButton,
	Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import { Image, DarkModeToggler } from 'components/atoms';

const useStyles = makeStyles((theme) => ({
	flexGrow: {
		flexGrow: 1,
	},
	navigationContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	toolbar: {
		zIndex: 999,
		maxWidth: theme.layout.contentWidth,
		width: '100%',
		margin: '0 auto',
		padding: theme.spacing(0, 2),
		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(0, 8),
		},
	},
	navLink: {
		'&:hover': {
			color: theme.palette.primary.dark,
		},
	},
	listItem: {
		cursor: 'pointer',
		'&:hover > .menu-item, &:hover svg': {
			color: theme.palette.primary.dark,
		},
		'&.menu-item--no-dropdown': {
			paddingRight: 0,
		},
	},
	listItemActive: {
		'&> .menu-item': {
			color: theme.palette.primary.dark,
		},
	},
	listItemText: {
		flex: '0 0 auto',
		marginRight: theme.spacing(2),
		whiteSpace: 'nowrap',
	},
	listItemButton: {
		whiteSpace: 'nowrap',
	},
	listItemIcon: {
		minWidth: 'auto',
	},
	popover: {
		padding: theme.spacing(4),
		border: theme.spacing(2),
		boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
		minWidth: 350,
		marginTop: theme.spacing(2),
	},
	iconButton: {
		marginLeft: theme.spacing(2),
		padding: 0,
		'&:hover': {
			background: 'transparent',
		},
	},
	expandOpen: {
		transform: 'rotate(180deg)',
		color: theme.palette.primary.dark,
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
	menu: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	menuItem: {
		marginRight: theme.spacing(5),
		'&:last-child': {
			marginRight: 0,
		},
	},
	menuGroupItem: {
		paddingTop: 0,
	},
	menuGroupTitle: {
		textTransform: 'uppercase',
	},
}));

interface Props {
	className?: string;
	onSidebarOpen: Function;
	pages: PagesProps;
	themeMode: string;
	themeToggler: Function;
}

const Topbar = ({
	themeMode,
	themeToggler,
	onSidebarOpen,
	pages,
	className,
	...rest
}: Props): JSX.Element => {
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = useState<any>(null);
	const [openedPopoverId, setOpenedPopoverId] = useState<string | null>(null);

	const handleClick = (
		event: React.MouseEvent<HTMLElement>,
		popoverId: string | null,
	): void => {
		setAnchorEl(event.target);
		setOpenedPopoverId(popoverId);
	};

	const handleClose = (): void => {
		setAnchorEl(null);
		setOpenedPopoverId(null);
	};

	return (
		<Toolbar disableGutters className={classes.toolbar} {...rest}>
			<div className={classes.logoContainer}>
				<a href="/" title="thefront">
					<Image
						className={classes.logoImage}
						src={
							themeMode === 'light'
								? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
								: 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
						}
						alt="greenstar"
						lazy={false}
					/>
				</a>
			</div>
			<div className={classes.flexGrow} />
			<Hidden smDown>
				<List disablePadding className={classes.navigationContainer}>
					<Link href="/home/" as="/home/">
						<ListItem
							aria-describedby="resources"
							className={clsx(classes.listItem)}
						>
							<Typography
								variant="body1"
								color="textPrimary"
								className={clsx(classes.listItemText, 'menu-item')}
							>
								Resources
							</Typography>
						</ListItem>
					</Link>

					<Link href="/home/" as="/home/">
						<ListItem
							aria-describedby="shop"
							className={clsx(classes.listItem)}
						>
							<Typography
								variant="body1"
								color="textPrimary"
								className={clsx(classes.listItemText, 'menu-item')}
							>
								Shop
							</Typography>
						</ListItem>
					</Link>
				</List>
			</Hidden>
			<Hidden mdUp>
				<DarkModeToggler
					themeMode={themeMode}
					onClick={() => themeToggler()}
				/>
				<IconButton
					className={classes.iconButton}
					onClick={() => onSidebarOpen()}
					aria-label="Menu"
				>
					<MenuIcon />
				</IconButton>
			</Hidden>
		</Toolbar>
	);
};

export default Topbar;
