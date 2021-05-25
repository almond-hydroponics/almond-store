/**
 * Caution: Consider this file when using NextJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or react-scripts version
 */
import React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import createEmotionServer from '@emotion/server/create-instance';
import { uuid } from 'uuidv4';

const nonce = new Buffer(uuid()).toString('base64');

const getCache = () => {
	const cache = createCache({ key: 'css', prepend: true });
	cache.compat = true;

	return cache;
};

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<link rel="shortcut icon" href="/assets/favicon.ico" />
					<meta name="theme-color" content="#000000" />
					<meta name="author" content="Francis Masha" />
					<meta
						name="description"
						content="Almond Hydroponics - Growing your plants smart."
					/>
					<meta
						name="robots"
						content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
					/>
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="website" />
					{/*<meta*/}
					{/*	property="og:image"*/}
					{/*	content="https://thefront.maccarianagency.com/assets/social.png"*/}
					{/*/>*/}
					<meta
						property="og:title"
						content="almond store | Store for almond hydroponics."
					/>
					<meta
						property="og:description"
						content="A modern design system for your new landing and web pages."
					/>
					<meta
						property="og:url"
						content="https://store.almondhydroponics.com/"
					/>
					<script
						src="https://kit.fontawesome.com/4c273e6d43.js"
						crossOrigin="anonymous"
					/>

					<link rel="shortcut icon" href="https://static.almondhydroponics.com/static/icons/favicon-96x96.png" type="image/x-icon" />
					<link rel="icon" href="https://static.almondhydroponics.com/static/icons/favicon-96x96.png" type="image/x-icon" />
					<link
						rel="apple-touch-icon"
						sizes="57x57"
						href="https://static.almondhydroponics.com/static/icons/apple-icon-57x57.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="60x60"
						href="https://static.almondhydroponics.com/static/icons/apple-icon-60x60.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="72x72"
						href="https://static.almondhydroponics.com/static/icons/apple-icon-72x72.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="76x76"
						href="https://static.almondhydroponics.com/static/icons/apple-icon-76x76.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="114x114"
						href="https://static.almondhydroponics.com/static/icons/apple-icon-114x114.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="120x120"
						href="https://static.almondhydroponics.com/static/icons/apple-icon-120x120.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="144x144"
						href="https://static.almondhydroponics.com/static/icons/apple-icon-144x144.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="152x152"
						href="https://static.almondhydroponics.com/static/icons/apple-icon-152x152.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="https://static.almondhydroponics.com/static/icons/apple-icon-180x180.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="192x192"
						href="https://static.almondhydroponics.com/static/icons/android-icon-192x192.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="https://static.almondhydroponics.com/static/icons/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="96x96"
						href="https://static.almondhydroponics.com/static/icons/favicon-96x96.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="https://static.almondhydroponics.com/static/icons/favicon-16x16.png"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
	// Resolution order
	//
	// On the server:
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. document.getInitialProps
	// 4. app.render
	// 5. page.render
	// 6. document.render
	//
	// On the server with error:
	// 1. document.getInitialProps
	// 2. app.render
	// 3. page.render
	// 4. document.render
	//
	// On the client
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. app.render
	// 4. page.render

	// Render app and page and get the context of the page with collected side effects.
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	const cache = getCache();
	const { extractCriticalToChunks } = createEmotionServer(cache);

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
			// Take precedence over the CacheProvider in our custom _app.js
			enhanceComponent: (Component) => (props) =>
				(
					<CacheProvider value={cache}>
						<Component {...props} />
					</CacheProvider>
				),
		});

	const initialProps = await Document.getInitialProps(ctx);
	const emotionStyles = extractCriticalToChunks(initialProps.html);
	const emotionStyleTags = emotionStyles.styles.map((style) => (
		<style
			data-emotion={`${style.key} ${style.ids.join(' ')}`}
			key={style.key}
			nonce={nonce}
			// eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={{ __html: style.css }}
		/>
	));

	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: [
			...React.Children.toArray(initialProps.styles),
			sheets.getStyleElement(),
			...emotionStyleTags,
		],
	};
};
