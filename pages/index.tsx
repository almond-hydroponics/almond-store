import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import { Ecommerce } from '../src/views';

const IndexPage = (): JSX.Element => {
	return <WithLayout component={Ecommerce} layout={Main} />;
};

export default IndexPage;
