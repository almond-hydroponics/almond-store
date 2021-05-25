import { createTheme, responsiveFontSizes } from '@material-ui/core';
import { light, dark } from './palette';

const getTheme = (mode: 'light' | 'dark') =>
	responsiveFontSizes(
		createTheme({
			palette: mode === 'light' ? light : dark,
			layout: {
				contentWidth: 1236,
			},
			shape: {
				borderRadius: 8,
			},
			typography: {
				fontFamily: 'Google Sans, Roboto, Helvetica Neue, sans-serif',
				button: {
					textTransform: 'none',
				},
			},
			zIndex: {
				appBar: 1200,
				drawer: 1100,
			},
		}),
	);

export default getTheme;
