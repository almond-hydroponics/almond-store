import * as React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Topbar } from './components';

const useStyles = makeStyles(() => ({
	root: {},
	content: {
		height: '100%',
	},
}));

interface Props {
	children: React.ReactNode;
	className?: string;
}

const Minimal = ({  children, className }: Props): JSX.Element => {
	const classes = useStyles();

	return (
		<div className={clsx(classes.root, className)}>
			<Topbar />
			<Divider />
			<main className={classes.content}>{children}</main>
		</div>
	);
};

export default Minimal;
