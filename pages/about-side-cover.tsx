/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import AboutSideCover from 'views/AboutSideCover';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const AboutSideCoverPage = (): JSX.Element => {
	return <WithLayout component={AboutSideCover} layout={Main} />;
};

export default AboutSideCoverPage;
