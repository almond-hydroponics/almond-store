/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import ContactPageSidebarMap from 'views/ContactPageSidebarMap';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const ContactWithSidebarMapPage = (): JSX.Element => {
	return <WithLayout component={ContactPageSidebarMap} layout={Main} />;
};

export default ContactWithSidebarMapPage;
