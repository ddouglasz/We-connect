import Businesses from '../controller/business';
import Users from '../controller/user';// eslint-disable-line no-unused-vars
import Reviews from '../controller/reviews'; // eslint-disable-line no-unused-vars
import businesses from '../model/business'; // eslint-disable-line no-unused-vars

export default (app) => {
  app.post('/api/v1/businesses', Businesses.createBusinesses);
  app.get('/api/v1/businesses', Businesses.getBusinesses);
  app.delete('/api/v1/businesses/:businessId', Businesses.removeBusiness);
  app.get('/api/v1/businesses/:businessId', Businesses.retrieveBusiness);
  app.put('/api/v1/businesses/:businessId', Businesses.updateBusinesses);
};
