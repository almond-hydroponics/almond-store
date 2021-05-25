import { Theme, ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createTheme' {
	interface Theme {
		layout: {
			contentWidth: number | string;
		};
	}
	// allow configuration using `createMuiTheme`
	interface ThemeOptions {
		layout?: {
			contentWidth: number | string;
		};
	}
}
