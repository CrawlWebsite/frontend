import { withPrivateRoute } from '@frontend/react-routes/privateRoute.hoc';
import { Crawler } from '@frontend/templates/crawler';

const CrawlerPage = () => {
  return <Crawler />;
};

export default withPrivateRoute(CrawlerPage);
