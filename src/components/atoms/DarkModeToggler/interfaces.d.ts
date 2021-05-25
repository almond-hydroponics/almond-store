import { CSSProperties, HTMLAttributes } from 'react';
import { defaultProperties } from 'components/atoms/DarkModeToggler/DarkModeToggler';
import { PaletteMode } from '@material-ui/core';

type SVGProps = Omit<HTMLAttributes<HTMLOrSVGElement>, 'onChange'>;
export interface DarkModeTogglerProps extends SVGProps {
	/**
	 * External classes
	 */
	className?: string;
	/**
	 * The theme mode
	 */
	// themeMode: PaletteMode;
	/**
	 * Theme toggler function
	 */
	// onChange: (event: any) => void;
	/**
	 * Color of the icon
	 */
	fontIconColor?: string;

	style?: CSSProperties;
	size?: number;
	animationProperties?: typeof defaultProperties;
	moonColor?: string;
	sunColor?: string;

	// All other props
	[x: string]: any;
}
