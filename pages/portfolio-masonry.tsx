/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import PortfolioMasonry from 'views/PortfolioMasonry';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const PortfolioMasonryPage = (): JSX.Element => {
	return <WithLayout component={PortfolioMasonry} layout={Main} />;
};

export default PortfolioMasonryPage;
