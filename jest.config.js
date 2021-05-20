module.exports = {
	verbose: true,
	testURL: 'http://localhost/',
	roots: ['<rootDir>/src'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	testRegex: '(roots/.*|(\\.|/)(test))\\.(ts|tsx)?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	coverageReporters: ['html', 'json', 'lcov', 'text', 'clover'],
	modulePathIgnorePatterns: ['<rootDir>/node_modules'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'identity-obj-proxy',
		'\\.(css|less|scss)$': 'identity-obj-proxy',
	},
	moduleDirectories: ['node_modules'],
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.ts',
		'src/**/*.tsx',
		'!src/**/interface.d.ts',
		'!src/**/*interfaces.d.ts',
		'!src/**/fixtures.ts',
		'!src/testHelpers.tsx',
		'!src/serviceWorker.ts',
	],
	coverageThreshold: {
		global: {
			branches: 40,
			functions: 45,
			lines: 65,
			statements: 60,
		},
	},
	coveragePathIgnorePatterns: ['/node_modules', '<rootDir>/src/index.tsx'],
	setupFilesAfterEnv: [
		'@testing-library/jest-dom/extend-expect',
		'@testing-library/jest-dom',
		'@testing-library/react',
		'<rootDir>/src/setupTests.ts',
	],
	testEnvironment: 'jest-environment-jsdom-sixteen',
	transformIgnorePatterns: [
		'[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
		'^.+\\.module\\.(css|sass|scss)$',
		'node_modules/(?!(@material-ui)/)',
		'/.pnp.js$',
	],
};
