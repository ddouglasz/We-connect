import Businesses from '../controller/business';
import Users from '../controller/user';
import Reviews from '../controller/reviews'; // eslint-disable-line no-unused-vars
// import businesses from '../model/business'; // eslint-disable-line no-unused-vars


export default (app) => {
  app.post('/api/v1/Businesses', Businesses.createBusinesses);
  app.put('/api/v1/Businesses/:businessId', Businesses.updateBusinesses);
  app.get('/api/v1/Businesses', Businesses.getBusinesses);
  app.delete('/api/v1/Businesses/:businessId', Businesses.removeBusinesses);
  app.get('/api/v1/Businesses/:businessId', Businesses.retrieveBusiness);
  app.post('api/v1/businesses/:businessId/reviews', Businesses.postReview);
  app.get('businesses/v1/:businessId/reviews', Businesses.getReviews);
  app.post('/api/v1/auth/users/signup', Users.signUp);
  app.post('/api/v1/auth/users/signin', Users.signIn);
};

