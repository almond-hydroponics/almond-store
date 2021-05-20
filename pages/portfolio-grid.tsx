/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import PortfolioGrid from 'views/PortfolioGrid';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const PortfolioGridPage = (): JSX.Element => {
	return <WithLayout component={PortfolioGrid} layout={Main} />;
};

export default PortfolioGridPage;
