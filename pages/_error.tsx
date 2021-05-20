import ServerError from 'views/ServerError';
import Minimal from 'layouts/Minimal';
import WithLayout from 'WithLayout';

const ErrorPage = (): JSX.Element => {
	return <WithLayout component={ServerError} layout={Minimal} />;
};

export default ErrorPage;
