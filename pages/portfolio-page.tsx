/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import PortfolioPage from 'views/PortfolioPage';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const PortfolioViewPage = (): JSX.Element => {
	return <WithLayout component={PortfolioPage} layout={Main} />;
};

export default PortfolioViewPage;
