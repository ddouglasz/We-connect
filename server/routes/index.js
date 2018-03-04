import Businesses from '../controller/business';
import Users from '../controller/user';
import Reviews from '../controller/reviews'; // eslint-disable-line no-unused-vars

 import businesses from '../model/business'; // eslint-disable-line no-unused-vars
 
import businesses from '../model/business'; // eslint-disable-line no-unused-vars



export default (app) => {
  app.post('/api/v1/businesses', Businesses.createBusinesses);
 };

