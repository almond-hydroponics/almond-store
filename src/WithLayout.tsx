import React, { useEffect, createContext, useMemo, useState } from 'react';
import { PaletteMode, Paper, StyledEngineProvider, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import getTheme from 'theme';
import AOS from 'aos';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

interface Props {
	layout: any;
	component: any;
	// All other props
	[x: string]: any;
}

export default function WithLayout({
	component: Component,
	layout: Layout,
	...rest
}: Props): JSX.Element {
	const [mode, setMode] = useState<'light' | 'dark'>('light');

	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}

		AOS.init({
			once: true,
			delay: 50,
			duration: 500,
			easing: 'ease-in-out',
		});
	}, []);

	useEffect(() => {
		AOS.refresh();
	}, []);

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[],
	);

	const theme = useMemo(
		() =>
			getTheme(mode),
		[mode]
	);

	return (
		<StyledEngineProvider injectFirst>
			<ColorModeContext.Provider value={colorMode}>
		<ThemeProvider theme={theme}>
			{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
			<CssBaseline />
			<Paper elevation={0}>
				<Layout>
					<Component {...rest} />
				</Layout>
			</Paper>
		</ThemeProvider>
			</ColorModeContext.Provider>
		</StyledEngineProvider>
	);
}
