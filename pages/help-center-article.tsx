/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import HelpCenterArticle from 'views/HelpCenterArticle';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const HelpCenterArticlePage = (): JSX.Element => {
	return <WithLayout component={HelpCenterArticle} layout={Main} />;
};

export default HelpCenterArticlePage;
